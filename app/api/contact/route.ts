import { NextResponse } from 'next/server';
import { getResendClient } from '@/lib/resend';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  attachmentName?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getHtml = ({
  name,
  email,
  message,
  attachmentName,
}: Required<Pick<ContactPayload, 'name' | 'email' | 'message'>> & Pick<ContactPayload, 'attachmentName'>) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
    <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${attachmentName ? `<p><strong>Attachment:</strong> ${escapeHtml(attachmentName)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <div style="padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
  </div>
`;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const attachment = formData.get('attachment');
    const attachmentNameField = formData.get('attachmentName')?.toString().trim();

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
    let attachmentName: string | undefined = attachmentNameField;
    let attachments:
      | {
          filename: string;
          content: Buffer;
        }[]
      | undefined;

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > 25 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Please upload a file smaller than 25MB for direct attachment.' },
          { status: 400 }
        );
      }

      attachmentName = attachment.name;
      attachments = [
        {
          filename: attachment.name,
          content: Buffer.from(await attachment.arrayBuffer()),
        },
      ];
    }

    const resend = getResendClient();

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      html: getHtml({ name, email, message, attachmentName }),
      text: `Name: ${name}\nEmail: ${email}${attachmentName ? `\nAttachment: ${attachmentName}` : ''}\n\nMessage:\n${message}`,
      attachments,
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
