// File: /app/api/contactus/route.ts
import pool from "@/app/lib/db";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      agree = true,
    } = body;

    // Log the incoming data
    console.log("Received contact data:", body);

    // Insert into DB and return the inserted row
    const result = await pool.query(
      `INSERT INTO contactus 
        (first_name, last_name, phone, email, address1, address2, city, state, zip, agree)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING *`,
      [
        firstName,
        lastName,
        phone,
        email,
        address1,
        address2,
        city,
        state,
        zip,
        agree,
      ],
    );

    if (!result.rows.length) {
      console.error("No row inserted");
      return NextResponse.json(
        { message: "Failed to insert contact" },
        { status: 500 },
      );
    }

    console.log("Inserted row:", result.rows[0]);

    // 2️⃣ Send email
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: { email },
        to: process.env.SMTP_USER,
        subject: "New Contact Form Submission",
        text: `New inquiry from ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address1}, ${address2}, ${city}, ${state}, ${zip}\nAgreed: ${agree ? "Yes" : "No"}`,
      });
    } catch (mailError) {
      console.error("Email Error:", mailError);
      return NextResponse.json(
        { message: "Email sending failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Contact saved successfully",
      contact: result.rows[0],
    });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, image, isCommon } = body;

//     const client = await pool.connect();
//     const result = await client.query(
//       'INSERT INTO brands (name, image,"isCommon") VALUES ($1, $2,$3) RETURNING *',
//       [name, image, isCommon],
//     );
//     client.release();

//     return new Response(JSON.stringify(result.rows[0]), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("POST Error:", error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// export async function GET() {
//   try {
//     const client = await pool.connect();

//     const res = await client.query("SELECT * FROM brands ORDER BY name asc");
//     client.release();

//     return new Response(JSON.stringify(res.rows), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("DB Error:", error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
