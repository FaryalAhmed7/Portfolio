import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse JSON directly from the request
    const body = await req.json();

    // Destructure with fallback to avoid undefined errors
    const { email, subject, message } = body || {};

    if (!email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: ['faryal.ahmedfa7@gmail.com'],
      subject: subject || 'New Contact Form Submission',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
