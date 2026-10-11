import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

function isContactRequest(data: unknown): data is ContactRequest {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const request = data as Record<string, unknown>;

  return (
    typeof request.name === "string" &&
    typeof request.email === "string" &&
    typeof request.subject === "string" &&
    typeof request.message === "string"
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(
  request: Request
): Promise<NextResponse<ContactResponse>> {
  try {
    const body: unknown = await request.json().catch(() => null);

    if (!isContactRequest(body)) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: "Invalid request data.",
        },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const subject = body.subject.trim();
    const message = body.message.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json<ContactResponse>(
        {
          success: false,
          message:
            "Email delivery is not configured yet. Add the env values to enable contact emails.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const emailText = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 16px;">New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
          ${escapeHtml(message).replace(/\n/g, "<br />")}
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New contact message: ${subject}`,
      reply_to: email,
      text: emailText,
      html: emailHtml,
    });

    if (error) {
      throw new Error(error.message || "Email delivery failed.");
    }

    return NextResponse.json<ContactResponse>({
      success: true,
      message: "Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: "Unable to process your message.",
      },
      { status: 500 }
    );
  }
}
