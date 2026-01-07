import Link from "next/link";

interface CTAProps {
  href?: string;
  className?: string;
}

export default function CTA({ href = "/work-with-me", className = "" }: CTAProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 ${className}`}
    >
      Book a fit check
    </Link>
  );
}
