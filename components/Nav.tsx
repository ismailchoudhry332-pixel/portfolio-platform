"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/work-with-me", label: "Work With Me" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif">
          Ismail
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-150 ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-accent hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="w-full h-0.5 bg-foreground transition-transform duration-200"
            style={{
              transform: mobileMenuOpen ? "rotate(45deg) translateY(4px)" : "none",
            }}
          />
          <span
            className="w-full h-0.5 bg-foreground transition-opacity duration-200"
            style={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <span
            className="w-full h-0.5 bg-foreground transition-transform duration-200"
            style={{
              transform: mobileMenuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg transition-colors duration-150 ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-accent hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
