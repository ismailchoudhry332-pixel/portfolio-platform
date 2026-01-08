"use client";

import { InlineWidget } from "react-calendly";
import { Mail, Linkedin } from "lucide-react";

export default function WorkWithMe() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-24">
        <h1 className="text-5xl mb-8">Work With Me</h1>
        <p className="text-xl text-foreground-muted mb-16 max-w-[680px]">
          A 15-minute fit check to determine if your operational challenges align with my systems engineering approach.
        </p>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Red Flags & Qualifications (cols 1-7) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">

            {/* Red Flags - Business Leaks */}
            <div className="bento-box p-8">
              <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">Red Flags Detected</p>
              <h2 className="text-2xl mb-6">Signs Your System is Leaking</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-mono">→</span>
                  <span className="text-foreground-muted">Pricing decisions depend on who handles the quote</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-mono">→</span>
                  <span className="text-foreground-muted">Operational changes require developer intervention</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-mono">→</span>
                  <span className="text-foreground-muted">Hidden cost leakage is normalised as "the way it is"</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-mono">→</span>
                  <span className="text-foreground-muted">Teams act as information couriers instead of decision-makers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-mono">→</span>
                  <span className="text-foreground-muted">The system only works because people work around it</span>
                </li>
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="bento-box p-8">
              <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">Ideal Clients</p>
              <h2 className="text-2xl mb-6">Who This Is For</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-accent-cyan font-mono">✓</span>
                  <span className="text-foreground-muted">Problem space is defined</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-cyan font-mono">✓</span>
                  <span className="text-foreground-muted">You have real constraints (time, budget, dependencies)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-cyan font-mono">✓</span>
                  <span className="text-foreground-muted">You value clarity and accountability over feature-chasing</span>
                </li>
              </ul>
            </div>

            {/* Who This Is NOT For */}
            <div className="bento-box p-8">
              <p className="text-sm uppercase tracking-wide text-accent-light mb-6 font-mono">Exclusions</p>
              <h2 className="text-2xl mb-6">Who This Is NOT For</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-accent-light font-mono">✗</span>
                  <span className="text-foreground-muted">Vague problems without defined scope</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-light font-mono">✗</span>
                  <span className="text-foreground-muted">Quick jobs or one-off fixes</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-light font-mono">✗</span>
                  <span className="text-foreground-muted">Budget-only asks without operational context</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Terminal UI Booking (cols 8-12) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bento-box p-6 border-accent-cyan sticky top-24">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm font-mono text-accent-light">system_audit.sh</span>
              </div>

              {/* Terminal Log */}
              <div className="font-mono text-sm space-y-2 mb-6">
                <p className="text-accent-light">$ running system_audit...</p>
                <p className="text-accent-cyan">→ Checking operational clarity...</p>
                <p className="text-accent-cyan">→ Scanning for hidden dependencies...</p>
                <p className="text-accent-cyan">→ Detecting margin leakage...</p>
                <p className="text-green-400 mt-4">[✓] System Status: READY FOR AUDIT</p>
              </div>

              {/* What This Call Is */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wide text-accent-cyan mb-4 font-mono">What This Call Is</p>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cyan">•</span>
                    <span>15-minute diagnostic fit check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cyan">•</span>
                    <span>Not sales, not consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-cyan">•</span>
                    <span>Mutual decision on alignment</span>
                  </li>
                </ul>
              </div>

              {/* Calendly Widget */}
              <div className="bento-box overflow-hidden">
                <InlineWidget
                  url="https://calendly.com/ismailchoudhry332?hide_landing_page_details=1&hide_gdpr_banner=1"
                  styles={{ height: '500px', minWidth: '280px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Employment Opportunities */}
        <section className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7">
              <div className="bento-box p-8">
                <p className="text-sm uppercase tracking-wide text-accent-light mb-6 font-mono">Open to Opportunities</p>
                <h2 className="text-2xl mb-6">Exploring Full-Time or Contract Roles?</h2>
                <p className="text-lg mb-8 leading-relaxed text-foreground-muted">
                  I'm open to the right role — operational systems engineering, internal tooling,
                  or workflow automation in teams where clarity and ownership matter.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:ismailchoudhry332@gmail.com"
                    className="group flex items-center gap-3 text-lg hover:text-accent-cyan transition-colors duration-200"
                  >
                    <div className="p-2 rounded-md terminal-border group-hover:border-accent-cyan transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-mono">ismailchoudhry332@gmail.com</span>
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
                    <span className="font-mono">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
