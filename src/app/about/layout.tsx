import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Klara Modules — Finnish Modular Homes",
  description:
    "Meet Klara Modules, a family company from Ostrobothnia, Finland, making Finnish building quality and Nordic modular homes accessible across Europe.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}