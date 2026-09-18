import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Ordering a Modular Home from Finland",
  description:
    "Learn how to order a Klara modular home, from choosing your model and factory construction in Finland to delivery and installation anywhere in Europe.",
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}