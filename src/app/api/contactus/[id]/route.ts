// import pool from "@/app/lib/db";

// export async function PUT(
//   req: Request,
//   context: { params: Promise<{ id: string }> },
// ) {
//   const { id } = await context.params;
//   const body = await req.json();
//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       "UPDATE contactus SET status = $1 WHERE id = $2 RETURNING *",
//       [body.status, id],
//     );
//     client.release();

//     if (result.rows.length === 0) {
//       return new Response("contact not found", { status: 404 });
//     }

//     return new Response(JSON.stringify(result.rows[0]), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Database update error:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }

// export async function DELETE(
//   req: Request,
//   context: { params: Promise<{ id: string }> },
// ) {
//   const { id } = await context.params;

//   try {
//     const client = await pool.connect();
//     const result = await client.query(
//       "DELETE FROM contactus WHERE id = $1 RETURNING *",
//       [id],
//     );
//     client.release();

//     if (result.rows.length === 0) {
//       return new Response("Order not found", { status: 404 });
//     }

//     return new Response(JSON.stringify(result.rows[0]), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Database delete error:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
