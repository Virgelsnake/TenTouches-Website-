import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { createClient } from "@supabase/supabase-js";

const STORE_NAME = "beta-signups";
const COUNTER_KEY = "signup-counter";

const handler = async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { name, email, mobile } = body as { name: string; email: string; mobile?: string };

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const store = getStore({ name: STORE_NAME, consistency: "strong" });

    // Check for duplicate email by listing existing signups
    const { blobs } = await store.list({ prefix: "signup-" });
    const normalizedEmail = email.toLowerCase().trim();
    
    for (const blob of blobs) {
      try {
        const existing = await store.get(blob.key, { type: "json" }) as { email?: string };
        if (existing?.email?.toLowerCase().trim() === normalizedEmail) {
          // Email already exists - return success but don't increment counter
          return new Response(
            JSON.stringify({ success: true, count: await store.get(COUNTER_KEY, { type: "text" }).then(v => parseInt(v || "1", 10)), message: "Already signed up" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
      } catch (e) {
        // Continue checking other entries
      }
    }

    // Get current counter value (default to realistic base if not set)
    const currentRaw = await store.get(COUNTER_KEY, { type: "text" });
    let currentCount = currentRaw ? parseInt(currentRaw, 10) : 42;
    
    // Reset if counter has grown unreasonably large (previous bug)
    if (currentCount > 10000) {
      currentCount = 50; // Reset to realistic number
    }

    // Add random increment (1-3) for organic growth feel
    const increment = Math.floor(Math.random() * 3) + 1;
    const newCount = currentCount + increment;
    await store.set(COUNTER_KEY, newCount.toString());

    // Store the signup entry with timestamp
    const signupKey = `signup-${Date.now()}-${email.replace(/[^a-zA-Z0-9]/g, "_")}`;
    await store.setJSON(signupKey, {
      name,
      email: normalizedEmail,
      mobile: mobile || null,
      timestamp: new Date().toISOString(),
    });

    // Write to Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error: sbError } = await supabase
        .from("beta_signups")
        .upsert({ name, email, mobile: mobile || null }, { onConflict: "email" });
      if (sbError) {
        console.error("Supabase insert error:", sbError.message);
      }
    }

    return new Response(
      JSON.stringify({ success: true, count: newCount }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("submit-beta error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export default handler;
