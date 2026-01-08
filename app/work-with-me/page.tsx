"use client";

import { InlineWidget } from "react-calendly";
import { Mail, Linkedin } from "lucide-react";

export default function WorkWithMe() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[680px] mx-auto px-6 pt-[120px] pb-24">
        <h1 className="text-6xl mb-20 font-bold">Work With Me</h1>

        {/* What This Call Is */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 font-bold">What This Call Is</h2>
          <ul className="space-y-4 text-lg ml-6">
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>A 15-minute fit check</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Diagnostic, not sales</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>A mutual decision about whether we should work together</span>
            </li>
          </ul>
        </section>

        {/* What This Is NOT */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 font-bold">What This Is NOT</h2>
          <ul className="space-y-4 text-lg ml-6">
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Not free consulting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Not instant estimates or proposals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Not a pitch deck review or ideation session</span>
            </li>
          </ul>
        </section>

        {/* Who This Is For */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 font-bold">Who this is for</h2>
          <ul className="space-y-4 text-lg ml-6">
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Problem space is defined</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>You have real constraints</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>You value clarity and accountability</span>
            </li>
          </ul>
        </section>

        {/* Who This Is Not For */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 font-bold">Who this is NOT for</h2>
          <ul className="space-y-4 text-lg ml-6">
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Vague problems</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Quick jobs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-accent">•</span>
              <span>Budget-only asks</span>
            </li>
          </ul>
        </section>

        {/* Calendly Inline Widget */}
        <section className="mb-20 pt-12 border-t border-[#E0E0E0]">
          <h2 className="text-3xl mb-10 font-bold">Book a Fit Check</h2>
          <div className="border border-[#E0E0E0] rounded-lg overflow-hidden shadow-sm bg-white">
            <InlineWidget
              url="https://calendly.com/ismailchoudhry332?hide_landing_page_details=1&hide_gdpr_banner=1"
              styles={{ height: '700px', minWidth: '320px' }}
            />
          </div>
        </section>

        {/* Employment Opportunities */}
        <section className="pt-12 border-t border-[#E0E0E0]">
          <h2 className="text-3xl mb-8 font-bold">Exploring full-time or contract opportunities?</h2>
          <p className="text-lg mb-8 leading-relaxed">
            I'm open to the right role — operational systems engineering, internal tooling,
            or workflow automation in teams where clarity and ownership matter.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-accent mb-2">Email</p>
              <a
                href="mailto:ismailchoudhry332@gmail.com"
                className="group text-lg hover:text-accent transition-colors duration-150 inline-flex items-center gap-2"
              >
                <div className="p-1.5 rounded-full bg-[#f0f0f0] group-hover:bg-[#eaeaea] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                ismailchoudhry332@gmail.com
                <span className="text-sm">↗</span>
              </a>
            </div>

            <div>
              <p className="text-sm text-accent mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ismail-chaudhry-022842142/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-lg hover:text-accent transition-colors duration-150 inline-flex items-center gap-2"
              >
                <div className="p-1.5 rounded-full bg-[#f0f0f0] group-hover:bg-[#eaeaea] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                linkedin.com/in/ismail-chaudhry-022842142
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
