"use client";

import Link from "next/link";
import Header from "./Header";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";

export default function Home() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Choose your preferred Klara model and contact us directly online. Pre-designed and ready to go.",
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
    backgroundColor: "rgba(47, 62, 47, 0.55)",
    color: beige,
    border: `1px solid rgba(245,240,230,0.65)`,
    backdropFilter: "blur(8px)",
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[60%_center] md:bg-center"
        style={{
          backgroundImage: "url('/2001.jpg')",
        }}
      >
        {/* Desktop gradient */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(15,15,15,0.58) 0%,
                rgba(15,15,15,0.38) 30%,
                rgba(15,15,15,0.18) 58%,
                rgba(15,15,15,0.42) 100%
              )
            `,
          }}
        />

        {/* Mobile gradient */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        {/* Soft darkening */}
        <div className="absolute inset-0 bg-black/10" />

        {/* MAIN WRAPPER */}
        <div className="relative z-10 min-h-screen flex flex-col pt-[96px] md:pt-[120px]">
          
          {/* HEADER */}
          <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
            <Header />
          </div>

          {/* HERO CONTENT */}
          <div className="flex-1 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">
              <div className="w-full md:max-w-xl max-w-sm">

                {/* HEADLINE */}
                <div className="mb-6 md:mb-8">
                  <h1
                    className="text-3xl md:text-5xl font-semibold mb-4 md:mb-5 leading-tight"
                    style={{
                      color: beige,
                      letterSpacing: "-0.02em",
                      fontFamily: "'Outfit', 'Inter', sans-serif",
                    }}
                  >
                    Modular Homes.
                    <br />
                    Nordic Quality.
                    <br />
                    Finnish Precision.
                  </h1>

                  <div
                    style={{
                      width: "100px",
                      height: "2px",
                      backgroundColor: beige,
                      opacity: 0.8,
                    }}
                  />
                </div>

                {/* CONTENT BOX */}
                <div
                  className="rounded-2xl p-5 md:p-7 shadow-2xl"
                  style={{
                    background: "rgba(20,20,20,0.14)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-4">
                    Klara makes Finnish craftsmanship accessible across Europe.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-6">
                    Each home is built by experienced Finnish housebuilders,
                    completed in the factory, and transported by truck to your
                    site — where it’s lifted into place and connected to power
                    and water.
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-semibold py-3 md:py-4 rounded-xl shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl text-sm md:text-base"
                    style={{
                      ...buttonStyle,
                      width: "220px",
                    }}
                  >
                    Get an Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundColor: beige,
          color: forestGreen,
        }}
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-5">
              How It Works
            </h2>

            <div
              className="mx-auto"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: forestGreen,
                opacity: 0.7,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(47,62,47,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto shadow-md"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(47,62,47,0.85)" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-20">
            
            <Link
              href="/concept"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              Our Concept
            </Link>

            <Link
              href="/howitworks"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              How It Works
            </Link>

            <Link
              href="/modelrange"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              Model Range
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section
        className="relative h-[70vh] bg-cover overflow-hidden bg-[62%_center] md:bg-center"
        style={{
          backgroundImage: "url('/2004.jpg')",
        }}
      >
        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden md:block bg-black/25" />

        {/* Mobile overlay */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">
            <div className="w-full md:max-w-2xl max-w-sm">

              <div
                className="rounded-2xl p-5 md:p-7 shadow-2xl"
                style={{
                  background: "rgba(20,20,20,0.14)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h2
                  className="text-3xl md:text-5xl font-semibold mb-5 leading-tight"
                  style={{
                    color: beige,
                    letterSpacing: "-0.02em",
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                  }}
                >
                  No construction hassle,
                  <br />
                  no hidden steps.
                </h2>

                <p className="text-base md:text-xl text-gray-100 leading-relaxed">
                  Just timeless Nordic quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 text-center text-sm"
        style={{
          backgroundColor: forestGreen,
          color: beige,
        }}
      >
        © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
      </footer>
    </>
  );
}