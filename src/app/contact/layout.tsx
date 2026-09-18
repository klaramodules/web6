import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Klara Modules — Modular Homes from Finland",
  description:
    "Contact Klara Modules for pricing, questions or guidance about our Nordic modular homes, built in Finland and delivered across Europe.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}