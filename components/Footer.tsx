import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Contact Block */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-mono">Get in touch</h3>

            <div className="flex flex-col space-y-4">
              <a
                href="mailto:ismailchoudhry332@gmail.com"
                className="group flex items-center gap-3 text-lg hover:text-accent-cyan transition-colors duration-200"
              >
                <div className="p-2 rounded-md terminal-border group-hover:border-accent-cyan transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>ismailchoudhry332@gmail.com</span>
              </a>

              <a
                href="tel:+923109269087"
                className="group flex items-center gap-3 text-lg hover:text-accent-cyan transition-colors duration-200"
              >
                <div className="p-2 rounded-md terminal-border group-hover:border-accent-cyan transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+92 310 9169087</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ismail-chaudhry-022842142/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg hover:text-accent-cyan transition-colors duration-200"
              >
                <div className="p-2 rounded-md terminal-border group-hover:border-accent-cyan transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end">
            <nav className="flex flex-wrap gap-6 md:gap-8 mb-6">
              <Link href="/" className="hover:text-accent-cyan text-accent transition-colors duration-200">
                Home
              </Link>
              <Link href="/case-studies" className="hover:text-accent-cyan text-accent transition-colors duration-200">
                Case Studies
              </Link>
              <Link href="/about" className="hover:text-accent-cyan text-accent transition-colors duration-200">
                About
              </Link>
              <Link href="/work-with-me" className="hover:text-accent-cyan text-accent transition-colors duration-200">
                Work With Me
              </Link>
            </nav>
            <p className="text-sm text-accent font-mono">© 2026 Ismail Chaudhry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
