import type { Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "beta-signups";
const COUNTER_KEY = "signup-counter";

const handler = async (_req: Request, _context: Context) => {
  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const currentRaw = await store.get(COUNTER_KEY, { type: "text" });
    const count = currentRaw ? parseInt(currentRaw, 10) : 1;

    return new Response(
      JSON.stringify({ count }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("get-counter error:", err);
    return new Response(
      JSON.stringify({ count: 1 }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
};

export default handler;
