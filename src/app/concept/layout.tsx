import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Klara Concept — Nordic Modular Homes Built in Finland",
  description:
    "Discover the Klara concept: Nordic modular homes built in Finland with natural materials, Finnish craftsmanship and thoughtful design for modern living across Europe.",
};

export default function ConceptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}