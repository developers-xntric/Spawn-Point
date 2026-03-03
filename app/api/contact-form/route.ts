import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxKR4w5KRWmh_uI0N0ABaWvvqypkZ-jPHFUswdPJDST9SOlD4E69EkZ7hCs1vXqQVJ5vQ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, message, services } = body;

    // Validate required fields
    if (!fullName || !email || !message || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build recipients list from CONTACT_EMAIL and ADMIN_EMAIL
    const recipients = [
      process.env.CONTACT_EMAIL,
      process.env.ADMIN_EMAIL,
      "yasir@xntric.ae",
      "ahmed@xntric.ae",
      "farrukh@xntric.ca"
    ].filter(Boolean).join(', ');

    // Prepare email content
    const mailOptions = {
      from: "SpawnPoint Contact Form",
      to: recipients,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${services.join(', ')}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email and save to Google Sheets in parallel
    await Promise.all([
      transporter.sendMail(mailOptions),
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
          services: services.join(', '),
          timestamp: new Date().toISOString(),
        }),
      }),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully and data saved to Google Sheets' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email or saving to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}