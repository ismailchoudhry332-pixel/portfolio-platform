import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      <body>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
