import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E0E0E0] bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Contact Block */}
        <div className="max-w-[680px]">
          <h3 className="text-2xl font-bold mb-8">Get in touch</h3>

          <div className="space-y-6 mb-12">
            {/* Email */}
            <div>
              <p className="text-sm text-accent mb-2">Email</p>
              <a
                href="mailto:ismailchoudhry332@gmail.com"
                className="text-lg hover:text-accent transition-colors duration-150 inline-flex items-center gap-2"
              >
                ismailchoudhry332@gmail.com
                <span className="text-sm">↗</span>
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm text-accent mb-2">Phone</p>
              <a
                href="tel:+923109169087"
                className="text-lg hover:text-accent transition-colors duration-150 inline-flex items-center gap-2"
              >
                +92 310 9169087
                <span className="text-sm">↗</span>
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="text-sm text-accent mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ismail-chaudhry-022842142/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-accent transition-colors duration-150 inline-flex items-center gap-2"
              >
                linkedin.com/in/ismail-chaudhry-022842142
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-accent">
            <p>© 2026 Ismail Chaudhry</p>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-foreground transition-colors duration-150">
                Home
              </Link>
              <Link href="/case-studies" className="hover:text-foreground transition-colors duration-150">
                Case Studies
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors duration-150">
                About
              </Link>
              <Link href="/work-with-me" className="hover:text-foreground transition-colors duration-150">
                Work With Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
