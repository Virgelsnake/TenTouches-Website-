import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

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
    const { name, email } = body as { name: string; email: string };

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const store = getStore({ name: STORE_NAME, consistency: "strong" });

    // Get current counter value (default to 1 if not set)
    const currentRaw = await store.get(COUNTER_KEY, { type: "text" });
    const currentCount = currentRaw ? parseInt(currentRaw, 10) : 1;

    // Multiply by 10
    const newCount = currentCount * 10;
    await store.set(COUNTER_KEY, newCount.toString());

    // Store the signup entry with timestamp
    const signupKey = `signup-${Date.now()}-${email.replace(/[^a-zA-Z0-9]/g, "_")}`;
    await store.setJSON(signupKey, {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

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
