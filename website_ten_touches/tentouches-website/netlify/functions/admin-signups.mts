import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "beta-signups";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tentouches-admin";

interface Signup {
  key: string;
  name: string;
  email: string;
  mobile: string | null;
  timestamp: string;
}

const handler = async (req: Request, _context: Context) => {
  // Check password
  const password = req.headers.get("X-Admin-Password");
  
  if (password !== ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  if (req.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    
    // List all signup entries (keys starting with "signup-")
    const { blobs } = await store.list({ prefix: "signup-" });
    
    const signups: Signup[] = [];
    
    for (const blob of blobs) {
      try {
        const data = await store.get(blob.key, { type: "json" }) as {
          name: string;
          email: string;
          mobile: string | null;
          timestamp: string;
        };
        
        if (data && data.email) {
          signups.push({
            key: blob.key,
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            timestamp: data.timestamp,
          });
        }
      } catch (e) {
        console.error(`Error reading blob ${blob.key}:`, e);
      }
    }

    // Sort by timestamp (newest first)
    signups.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return new Response(
      JSON.stringify({ signups, count: signups.length }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("admin-signups error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export default handler;
