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
    backgroundColor: "rgba(47, 62, 47, 0.6)",
    color: beige,
    border: `1px solid ${beige}`,
    backdropFilter: "blur(4px)",
  };

  return (
    <>
      <section
        className="relative text-center w-full min-h-screen bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bakgrund2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 pt-32 px-4">
          <Header />

          {/* Hero */}
          <div className="mb-10 text-center">
            <h1
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{
                color: beige,
                letterSpacing: "0.5px",
                fontFamily: "'Outfit', 'Inter', sans-serif",
                lineHeight: "1.3",
              }}
            >
              Modular Homes. Nordic Quality.
              <br />
              Finnish Precision.
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
            Each home is built by experienced Finnish housebuilders, completed in
            the factory, and transported by truck to your site — where it’s lifted
            into place and connected to power and water.
          </p>
          <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-100">
            No construction hassle, no hidden steps. Just timeless Nordic quality.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
              style={{ ...buttonStyle, width: "220px" }}
            >
              Get an Offer
            </Link>
          </div>

          {/* How It Works */}
          <section className="py-12 px-6 md:px-0 bg-transparent">
            <div className="max-w-5xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-semibold mb-8"
                style={{ color: beige }}
              >
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
                  >
                    {index === 0 ? (
                      <Link href="/contact" className="group">
                        <div
                          className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md transition-transform group-hover:scale-105"
                          style={{ backgroundColor: beige }}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:underline">
                          {step.title}
                        </h3>
                      </Link>
                    ) : (
                      <>
                        <div
                          className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md"
                          style={{ backgroundColor: beige }}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">
                          {step.title}
                        </h3>
                      </>
                    )}

                    <p className="text-gray-200 text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Secondary CTAs */}
          <div className="flex flex-col items-center mt-2 mb-8">
            <div className="flex justify-center gap-6 flex-wrap">
              <Link
                href="/concept"
                className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
                style={{ ...buttonStyle, width: "220px" }}
              >
                Our Concept
              </Link>

              <Link
                href="/howitworks"
                className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
                style={{ ...buttonStyle, width: "220px" }}
              >
                How It Works
              </Link>

              <Link
                href="/modelrange"
                className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
                style={{ ...buttonStyle, width: "220px" }}
              >
                Model Range
              </Link>

              <Link
                href="/about"
                className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
                style={{ ...buttonStyle, width: "220px" }}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-gray-200 text-sm py-6">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </footer>
        </div>
      </section>

      {/* Mobile background fix */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-size: auto 100%;
            background-position: center top;
          }
        }
      `}</style>
    </>
  );
}
