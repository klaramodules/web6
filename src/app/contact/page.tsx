"use client";

import { useState, useEffect } from "react";
import Header from "../Header";

export default function Contact() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";
  const [offsetY, setOffsetY] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("Name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("Message") as HTMLTextAreaElement)?.value;

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);
    alert("Message sent!");
    form.reset();
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

      {/* SOFT OVERLAY (less harsh than before) */}
      <div className="absolute inset-0 bg-black/45 -z-10" />

      {/* HEADER */}
      <div className="relative z-10">
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
          <Header />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">

          {/* TITLE */}
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: beige,
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            Contact Us
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

          {/* INTRO (UNCHANGED CONTENT) */}
          <p className="max-w-xl mx-auto mb-10 text-lg leading-relaxed text-gray-100">
            Reach out to us free of charge for inquiries, pricing, or to find your perfect modular home.
            Our team is happy to guide you through options and answer any questions.
          </p>

          {/* FORM (BACK TO CLEAN CENTERED GLASS STYLE) */}
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
              className="p-3 rounded-md bg-white/90 focus:outline-none"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="p-3 rounded-md bg-white/90 focus:outline-none"
              required
            />

            <textarea
              name="Message"
              placeholder="Message"
              className="p-3 rounded-md bg-white/90 focus:outline-none"
              rows={5}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-lg font-semibold transition hover:scale-105 mx-auto disabled:opacity-60"
              style={{
                backgroundColor: beige,
                color: forestGreen,
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* FOOTER */}
          <footer className="text-gray-200 text-sm py-10 mt-10">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </footer>
        </div>
      </div>
    </section>
  );
}