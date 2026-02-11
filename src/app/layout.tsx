import "./globals.css";
import type { Metadata } from "next";
import { Roboto as RobotoFont } from "next/font/google";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/next";

const roboto = RobotoFont({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Klara Nordic Modules",
  description: "Klara modules - Built in Finland",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${roboto.className} text-gray-900 overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
