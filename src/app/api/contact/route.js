import { Resend } from "resend";

// Simple helper to escape HTML (very small protection against basic injection)
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
    // Kontrollera att API-nyckeln finns i runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return new Response(
        JSON.stringify({ error: "Server misconfiguration: missing API key" }),
        { status: 500 }
      );
    }

    // Skapa Resend-instans inuti request-handler så den inte exekveras vid import/build
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, message } = body;

    // Grundläggande validering
    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Escapa användarinmatning innan vi sätter den i HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Skicka email via Resend
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

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
