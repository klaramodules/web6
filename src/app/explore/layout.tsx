import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore — Small Homes, Guest Houses & Extra Income",
  description:
    "Explore practical guides and insights on modular homes, guest houses, small living, home ownership, rental income and flexible living across Europe.",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}