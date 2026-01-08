import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Operations, Systems & Automation Engineer | Portfolio of Ismail Chaudhry",
  description: "Systems Engineer specializing in Operational Automation and Business Logic. Preserving intent from idea to implementation — Zero Drift.",
  openGraph: {
    title: "Operations, Systems & Automation Engineer | Portfolio of Ismail Chaudhry",
    description: "Systems Engineer specializing in Operational Automation and Business Logic. Preserving intent from idea to implementation — Zero Drift.",
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
      <body className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
