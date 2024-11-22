import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // user: process.env.SMTP_USER, // Your Gmail email address
    // pass: process.env.SMTP_PASSWORD,
    user: "shamon@solutionminds.in",
    pass: "znkd zdtn jkxp sxsp",
  },
});
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "kingdomleadsmanager@gmail.com",
      subject: "New Apartment Inquiry",
      text: `New Inquiry Details:
          Name: ${body.name}
          Phone: ${body.phone}
          Email: ${body.email}`,
      html: `<h1>New Inquiry</h1>
               <p><strong>Name:</strong> ${body.name}</p>
               <p><strong>Phone:</strong> ${body.phone}</p>
               <p><strong>Email:</strong> ${body.email}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Form data received:", body);

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error in form submission:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting the form." },
      { status: 500 }
    );
  }
}
