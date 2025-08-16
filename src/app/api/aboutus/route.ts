import pool from "@/app/lib/db";
export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM about_us");
    client.release();
    console.log("Database query successful:", result.rows);
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
