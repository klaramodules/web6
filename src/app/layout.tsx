import "./globals.css";
import type { Metadata } from "next";
import { Roboto as RobotoFont } from "next/font/google";
import Header from "./Header";

const roboto = RobotoFont({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KlaraWeb",
  description: "Modern och stilren webbplats med Next.js och Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={`${roboto.className} text-gray-900 overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
