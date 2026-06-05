"use client";

import { useState, useEffect } from "react";
import Header from "../Header";
import Link from "next/link";

export default function DownloadCatalogue() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const [offsetY, setOffsetY] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!consent) {
      setError("Please accept the terms to continue.");
      return;
    }

    setLoading(true);

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

      setLoading(false);

      if (response.ok) {
        setSuccess(true);
        form.reset();
        setConsent(false);

        setTimeout(() => {
          window.open(
            "/catalogue/Klara_Modules_Catalogue.pdf",
            "_blank",
            "noopener,noreferrer"
          );
        }, 300);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
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
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45 -z-10" />

      <Header />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20 text-center">

        <h1
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{
            color: beige,
            fontFamily: "'Outfit', 'Inter', sans-serif",
          }}
        >
          Download Catalogue
        </h1>

        <div
          className="mx-auto mb-8"
          style={{
            width: "120px",
            height: "2px",
            backgroundColor: beige,
            opacity: 0.8,
          }}
        />

        <p className="max-w-xl mx-auto mb-10 text-lg leading-relaxed text-gray-100">
          Explore our modular homes, floor plans, specifications and design options.
          Enter your details below to access the catalogue.
        </p>

        {/* SUCCESS */}
        {success && (
          <div
            className="max-w-md mx-auto mb-6 rounded-2xl p-5"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: beige,
            }}
          >
            <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
            <p>Your catalogue is opening in a new tab.</p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="text-red-300 mb-4 text-sm">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto text-left rounded-2xl p-6 md:p-8 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="p-3 rounded-md bg-white/90"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="p-3 rounded-md bg-white/90"
          />

          <input
            type="text"
            name="Country"
            placeholder="Country"
            required
            className="p-3 rounded-md bg-white/90"
          />

          {/* GDPR CHECKBOX + PRIVACY LINK */}
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

          {/* CTA BUTTON */}
          <button
            type="submit"
            disabled={loading || !consent}
            className={`py-3 px-6 rounded-lg font-semibold transition mx-auto ${
              loading || !consent
                ? "opacity-40 cursor-not-allowed"
                : "hover:scale-105"
            }`}
            style={{
              backgroundColor: consent ? beige : "#d6d1c6",
              color: forestGreen,
            }}
          >
            {loading ? "Loading..." : "Get Catalogue"}
          </button>
        </form>

        <footer className="text-gray-200 text-sm py-10 mt-10">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>

      </div>
    </section>
  );
}