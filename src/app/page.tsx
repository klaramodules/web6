"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header"; // ligger i samma mapp
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Choose your preferred Klara model and place your order directly online. Pre-designed and ready to go.",
    },
    {
      icon: <Factory size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Built in Finland",
      text: "Built by skilled Finnish craftsmen in our partner factories with the highest Nordic standards.",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Delivered",
      text: "Transported on a standard trailer across Europe — efficiently and safely.",
    },
    {
      icon: <Plug size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Connected & Ready",
      text: "Lifted into place and connected to electricity and water — ready to live in within hours.",
    },
  ];

  const buttonStyle = {
    backgroundColor: "rgba(47, 62, 47, 0.6)",
    color: beige,
    border: `1px solid ${beige}`,
    backdropFilter: "blur(4px)",
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

      <div className="relative z-10 mt-32 px-4">
        <Header />

        {/* Rubrik */}
        <div className="mb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: beige, // ändrad till beige
              letterSpacing: "0.5px",
              fontFamily: "'Outfit', 'Inter', sans-serif", // ORIGINALFONT
              lineHeight: "1.3",
            }}
          >
            Finnish Quality. Delivered Ready-to-Use.
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

        <p className="max-w-xl mx-auto mb-4 text-lg leading-relaxed text-gray-100">
          Klara makes Finnish craftsmanship accessible across Europe.
        </p>
        <p className="max-w-xl mx-auto mb-4 text-lg leading-relaxed text-gray-100">
          Each home is built by experienced Finnish housebuilders, completed in the factory, and transported by truck to your site — where it’s lifted into place and connected to power and water.
        </p>
        <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-100">
          No construction hassle, no hidden steps. Just timeless Nordic quality, sustainable materials, and homes built to last — ready for modern living.
        </p>

        {/* Get an Offer knapp */}
        <div className="flex justify-center mb-6">
          <Link
            href="/contact"
            className="inline-block font-semibold py-3 px-10 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
            style={buttonStyle}
          >
            Get an Offer
          </Link>
        </div>

        {/* How It Works */}
        <section className="py-16 px-6 md:px-0 bg-transparent">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-12"
              style={{ color: beige }}
            >
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md"
                    style={{ backgroundColor: beige, color: forestGreen }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tre knappar under How It Works */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/concept"
                className="inline-block font-semibold py-3 px-8 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
                style={buttonStyle}
              >
                Our Concept
              </Link>
              <Link
                href="/howitworks"
                className="inline-block font-semibold py-3 px-8 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
                style={buttonStyle}
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="inline-block font-semibold py-3 px-8 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
                style={buttonStyle}
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        <footer className="text-gray-200 text-sm py-6">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
