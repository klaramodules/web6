"use client";

import { useState, useEffect } from "react";
import Header from "../Header";

export default function Contact() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";
  const [offsetY, setOffsetY] = useState(0);

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

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full">
      {/* Parallax bakgrund */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bakgrund2.png')",
          transform: `translateY(${offsetY * 0.4}px)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Rubrik */}
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

        {/* Introtext */}
        <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-100">
          Reach out to us for inquiries, pricing, or to find your perfect modular home.
          Our team is happy to guide you through options and answer any questions.
        </p>

        {/* Kontaktformulär */}
        <form
          className="flex flex-col gap-4 max-w-md mx-auto text-left bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          action="mailto:klaramodules@gmail.com"
          method="POST"
          encType="text/plain"
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
            className="py-3 px-6 rounded-lg font-semibold shadow-sm transition hover:scale-105 hover:shadow-lg mx-auto"
            style={buttonStyle}
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <footer className="text-gray-100 text-sm py-6 mt-12">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
