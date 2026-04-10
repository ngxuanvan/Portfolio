import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getHtml = ({ name, email, message }: Required<ContactPayload>) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
    <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <div style="padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
  </div>
`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is missing on the server.' },
        { status: 500 }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
    const to = process.env.CONTACT_TO_EMAIL || 'nguyenxuanvan.work@gmail.com';

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      html: getHtml({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 }
    );
  }
}
