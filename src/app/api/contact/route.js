import { Resend } from "resend";

// Simple helper to escape HTML
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return new Response(
        JSON.stringify({ error: "Server misconfiguration: missing API key" }),
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      name,
      email,
      message,
      country,
      type,
    } = body;

    // ---------------------------
    // CATALOGUE REQUEST
    // ---------------------------
    if (type === "catalogue") {
      if (!email) {
        return new Response(
          JSON.stringify({ error: "Missing email" }),
          { status: 400 }
        );
      }

      await resend.emails.send({
        from: "Klara Nordic Modules <noreply@klaramodules.com>",
        to: "klaramodules@gmail.com",
        subject: "New Catalogue Request",
        html: `
          <h2>New Catalogue Request</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>

          <p><strong>Email:</strong> ${escapeHtml(email)}</p>

          <p><strong>Country:</strong> ${escapeHtml(country)}</p>
        `,
      });

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
      );
    }

    // ---------------------------
    // CONTACT FORM
    // ---------------------------
    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: "Klara Nordic Modules <noreply@klaramodules.com>",
      to: "klaramodules@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${safeName}</p>

        <p><strong>Email:</strong> ${safeEmail}</p>

        <p><strong>Message:</strong></p>

        <p>${safeMessage}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    );
  }
}