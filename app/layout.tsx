import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"], // Load italic weights too
});

export const metadata: Metadata = {
  title: "Ismail Chaudhry — Operations, Systems & Automation Engineer",
  description: "Operations, Systems & Automation Engineer focused on preserving intent from idea to implementation — so execution doesn't drift.",
  openGraph: {
    title: "Ismail Chaudhry — Operations, Systems & Automation Engineer",
    description: "Operations, Systems & Automation Engineer focused on preserving intent from idea to implementation — so execution doesn't drift.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable}`}>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
