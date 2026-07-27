import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = cleanText(body.name, 80).replace(/\s+/g, " ");
  const email = cleanText(body.email, 254).toLowerCase();
  const message = cleanText(body.message, 4000);
  const website = cleanText(body.website, 200);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !emailPattern.test(email) || message.length < 20) {
    return NextResponse.json(
      { error: "Please complete all required fields" },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Unable to send inquiry" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
