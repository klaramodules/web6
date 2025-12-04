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

  const buttonStyle = {
    backgroundColor: beige,
    color: forestGreen,
    border: `1px solid ${forestGreen}`,
  };

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
    <>
      <section className="relative text-center overflow-hidden min-h-screen w-full">
        {/* Parallax background */}
        <div
          className="absolute inset-0 -z-10 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bakgrund2.png')",
            transform: `translateY(${offsetY * 0.4}px)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // desktop
          }}
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="relative z-10 mt-32 px-4 md:px-0">
          <Header />

          {/* Heading */}
          <div className="mb-8 mt-8">
            <h1
              className="text-3xl md:text-4xl font-semibold mb-3"
              style={{
                color: beige,
                letterSpacing: "0.5px",
                fontFamily: "'Outfit', 'Inter', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Contact Us
            </h1>
            <div
              className="mx-auto"
              style={{
                width: "220px",
                height: "2px",
                backgroundColor: beige,
              }}
            />
          </div>

          {/* Intro text */}
          <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-100">
            Reach out to us free of charge for inquiries, pricing, or to find your perfect modular home.
            Our team is happy to guide you through options and answer any questions.
          </p>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto text-left bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A6B4E]/40 bg-white"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A6B4E]/40 bg-white"
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A6B4E]/40 bg-white"
              rows={5}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-lg font-semibold shadow-sm transition hover:scale-105 hover:shadow-lg mx-auto disabled:opacity-60"
              style={buttonStyle}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Footer */}
          <footer className="text-gray-100 text-sm py-6 mt-12">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </footer>
        </div>
      </section>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section div.absolute.inset-0.-z-10.bg-center {
            background-size: auto 100% !important; /* full height */
            background-position: center top !important;
          }

          /* Make form text dark for better readability on mobile */
          form input,
          form textarea,
          form button {
            color: #2f3e2f;
          }
        }
      `}</style>
    </>
  );
}
