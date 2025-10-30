"use client";

import Header from "../Header";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";

export default function HowItWorksPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Select your preferred Klara model and place your order online. Limited configuration options available (color, layout). Pre-designed and ready-to-go.",
    },
    {
      icon: <Factory size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Built in Finland",
      text: "Your home is built by experienced Finnish craftsmen in our partner factories. We ensure high Nordic quality and precision.",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Delivered",
      text: "Once completed, your home is transported across Europe on a standard trailer. Delivery times vary depending on your location.",
    },
    {
      icon: <Plug size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Connected & Ready",
      text: "Your house is lifted into place with a crane and connected to electricity and water. Just move in and enjoy!",
    },
  ];

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-[#f5f0e6]">
      <div className="absolute inset-0 -z-10 bg-[#f5f0e6]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Rubrik */}
        <section className="max-w-5xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              letterSpacing: "0.5px",
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            How It Works
          </h1>
          <div
            className="mx-auto"
            style={{
              width: "220px",
              height: "2px",
              backgroundColor: forestGreen,
            }}
          />
        </section>

        {/* Introtext */}
        <p
          className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-800"
          style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
          }}
        >
          Ordering a Klara home is simple, fast, and transparent. From placing your order online
          to moving into your new home, we handle all steps efficiently. Here’s what you can expect:
        </p>

        {/* Steg */}
        <section className="max-w-5xl mx-auto py-12 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md"
                  style={{
                    backgroundColor: beige,
                    color: forestGreen,
                  }}
                >
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-gray-900"
                  style={{
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-700 text-base leading-relaxed"
                  style={{
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
