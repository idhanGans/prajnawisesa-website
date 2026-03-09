import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "info@prajnawisesa.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "no-reply@prajnawisesa.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || "-";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "SMTP belum dikonfigurasi di environment variables." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Website Prajnawisesa <${FROM_EMAIL}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `Kontak Baru Website - ${name}`,
      text: [
        `Nama: ${name}`,
        `Email: ${email}`,
        `Perusahaan: ${company}`,
        "",
        "Pesan:",
        message,
      ].join("\n"),
      html: `
        <h2>Pesan Baru dari Website Prajnawisesa</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Perusahaan:</strong> ${company}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Silakan coba lagi." },
      { status: 500 },
    );
  }
}
