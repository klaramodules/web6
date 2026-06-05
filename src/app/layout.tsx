import "./globals.css";
import type { Metadata } from "next";
import { Roboto as RobotoFont } from "next/font/google";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/next";
import { Instagram, Facebook } from "lucide-react";

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
      <body className={`${roboto.className} overflow-x-hidden`}>

        {/* GLOBAL HEADER (FIXED) */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="min-h-screen w-full pt-[52px]">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer
          className="py-3 text-sm text-center"
          style={{
            backgroundColor: "var(--forest-green)",
            color: "var(--beige)",
          }}
        >
          <div className="flex flex-col items-center gap-2">

            {/* COPYRIGHT */}
            <p>
  © {new Date().getFullYear()} Klara Modules Ab • FO: 3574062-3
</p>

            {/* FOLLOW TEXT + SOCIAL */}
            <div className="flex items-center gap-2">

              <span>Follow us on</span>

              <a
                href="https://www.instagram.com/klaramodules/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61579803400183"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}