"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Contact() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const [offsetY, setOffsetY] = useState(0);
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingCatalogue, setLoadingCatalogue] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------- CONTACT ----------------
  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingContact(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("Name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("Message") as HTMLTextAreaElement)?.value;

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoadingContact(false);
    alert("Message sent!");
    form.reset();
  }

  // ---------------- CATALOGUE ----------------
  async function handleCatalogueSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!consent) {
      setError("Please accept the terms to continue.");
      return;
    }

    setLoadingCatalogue(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("Name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;
    const country = (form.elements.namedItem("Country") as HTMLInputElement)?.value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          country,
          type: "catalogue",
        }),
      });

      setLoadingCatalogue(false);

      if (response.ok) {
        form.reset();
        setConsent(false);

        window.open(
          "/catalogue/Klara_Modules_Catalogue.pdf",
          "_blank",
          "noopener,noreferrer"
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoadingCatalogue(false);
      setError("Network error. Please try again.");
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bakgrund2.png')",
          transform: `translateY(${offsetY * 0.25}px)`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">

        <h1 className="text-3xl md:text-4xl font-semibold mb-10" style={{ color: beige }}>
          Contact Us
        </h1>

        {/* ---------------- CONTACT FORM ---------------- */}
        <form
          onSubmit={handleContactSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto text-left rounded-2xl p-6 md:p-8 shadow-2xl mb-14"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 className="text-lg font-semibold" style={{ color: beige }}>
            General Inquiry
          </h2>

          <p className="text-gray-100 text-sm leading-relaxed mb-2">
            Reach out to us for inquiries, pricing, or guidance.
          </p>

          <input name="Name" placeholder="Name" className="p-3 rounded-md bg-white/90" />
          <input name="Email" placeholder="Email" className="p-3 rounded-md bg-white/90" />
          <textarea name="Message" placeholder="Message" rows={5} className="p-3 rounded-md bg-white/90" />

          <button
            type="submit"
            disabled={loadingContact}
            className="py-3 px-6 rounded-lg font-semibold mx-auto"
            style={{
              backgroundColor: beige,
              color: forestGreen,
            }}
          >
            {loadingContact ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ---------------- CATALOGUE FORM ---------------- */}
        <form
          onSubmit={handleCatalogueSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto text-left rounded-2xl p-6 md:p-8 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 className="text-lg font-semibold" style={{ color: beige }}>
            Get Catalogue
          </h2>

          <p className="text-gray-100 text-sm leading-relaxed mb-2">
            Explore our modular homes, floor plans, specifications and design options.
            Enter your details below to access the catalogue.
          </p>

          <input name="Name" placeholder="Name" required className="p-3 rounded-md bg-white/90" />
          <input name="Email" placeholder="Email" required className="p-3 rounded-md bg-white/90" />
          <input name="Country" placeholder="Country" required className="p-3 rounded-md bg-white/90" />

          {/* ERROR */}
          {error && (
            <div className="text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* GDPR */}
<label className="flex items-start gap-2 text-sm text-gray-100 mt-2">
  <input
    type="checkbox"
    checked={consent}
    onChange={(e) => setConsent(e.target.checked)}
    className="mt-1"
  />

  <span>
    I agree that Klara Modules stores my data to send the catalogue and to contact me about relevant updates and services.
    <br />
    <Link
      href="/privacy"
      className="underline opacity-80 hover:opacity-100 transition"
    >
      Read our Privacy Policy
    </Link>
  </span>
</label>

          <button
            type="submit"
            disabled={loadingCatalogue || !consent}
            className={`py-3 px-6 rounded-lg font-semibold mx-auto transition ${
              loadingCatalogue || !consent ? "opacity-40 cursor-not-allowed" : "hover:scale-105"
            }`}
            style={{
              backgroundColor: consent ? beige : "#d6d1c6",
              color: forestGreen,
            }}
          >
            {loadingCatalogue ? "Loading..." : "Get Catalogue"}
          </button>
        </form>

      </div>
    </section>
  );
}