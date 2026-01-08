import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata = {
  title: "The Carolean Pricing & Revenue Engine | Ismail Chaudhry",
  description: "How a custom-engineered DDD pricing engine replaced manual guesswork with deterministic logic, achieving 100% pricing parity and automating the lead-to-CRM pipeline for a UK transport leader.",
  keywords: "Domain-Driven Design, Pricing Engine, Transport Automation, UK Coach Hire, n8n, Make.com",
};

export default function FlagshipCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Back Link */}
      <div className="max-w-[1200px] mx-auto px-6 pt-[100px]">
        <Link
          href="/case-studies"
          className="text-sm text-accent-cyan hover:text-accent-purple transition-colors font-mono"
        >
          ← Back to Case Studies
        </Link>
      </div>

      {/* Hero Section - Full Width Visual Anchor */}
      <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-16">
        <div className="bento-box overflow-hidden">
          <img
            src="/carolean-widget.png"
            alt="Carolean Pricing Engine - Lead capture widget for UK transport booking"
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl mt-8 mb-4">
          The Carolean Pricing & Revenue Engine
        </h1>
        <p className="text-xl text-foreground-muted max-w-[800px]">
          A DDD pricing engine that replaced manual guesswork with deterministic logic for a UK transport leader.
        </p>
      </section>

      {/* Problem + System Specs - 7/5 Split Grid */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Problem - Cols 1-7 */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bento-box p-8 h-full">
              <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">The Problem</p>
              <h2 className="text-3xl mb-8">"Operational Drift" in Sales</h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
                <p>
                  In high-volume UK coach hire, manual quoting creates massive "drift" between what is quoted and what the job actually costs.
                </p>
                <div className="bento-box p-4 border-accent-cyan">
                  <p className="text-accent-cyan font-mono text-sm mb-2">Blind Spots</p>
                  <p className="text-sm">Sales staff couldn't see "dead mileage" (empty leg) costs or driver legal hour limits during the quote phase.</p>
                </div>
                <div className="bento-box p-4 border-accent-purple">
                  <p className="text-accent-purple font-mono text-sm mb-2">Inconsistent Margins</p>
                  <p className="text-sm">Prices based on intuition led to invisible losses on complex school or multi-day contracts.</p>
                </div>
                <div className="bento-box p-4">
                  <p className="text-accent-light font-mono text-sm mb-2">The Barrier</p>
                  <p className="text-sm">Customers waited 24 hours for a quote, leading to high drop-off rate.</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Manifest Sidebar - Cols 8-12 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bento-box p-8 h-full border-accent-cyan">
              <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">System Manifest</p>

              <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Architecture & Core Logic</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Paradigm:</span>
                  <span className="text-sm font-mono text-foreground">Domain-Driven Design (DDD)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Runtime:</span>
                  <span className="text-sm font-mono text-foreground">Node.js (TypeScript 5.x)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Compliance:</span>
                  <span className="text-sm font-mono text-foreground">UK Driver Hours Guard</span>
                </div>
              </div>

              <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Orchestration</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Workflow:</span>
                  <span className="text-sm font-mono text-foreground">n8n & Make.com</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">GIS Engine:</span>
                  <span className="text-sm font-mono text-foreground">Google Maps API</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">LLM:</span>
                  <span className="text-sm font-mono text-foreground">Claude Code</span>
                </div>
              </div>

              <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Infrastructure</p>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Caching:</span>
                  <span className="text-sm font-mono text-foreground">Redis v7.x</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-sm text-accent-light">Monitoring:</span>
                  <span className="text-sm font-mono text-foreground">Sentry.io</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-accent-light">CRM:</span>
                  <span className="text-sm font-mono text-foreground">Monday.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Full 12-Column Grid with 3-Column Cards */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">The Engineered Solution</p>
        <h2 className="text-3xl mb-12">A Deterministic Logic Layer</h2>

        <div className="grid grid-cols-12 gap-6">
          {/* Smart Empty-Leg Logic */}
          <div className="col-span-12 md:col-span-4">
            <div className="bento-box p-6 h-full">
              <h3 className="text-xl mb-4 font-mono text-accent-cyan">Smart Empty-Leg Logic</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">
                Integrated Google Maps API to calculate precise yard-to-pickup mileage. Includes a 20km Smart-Radius that automatically waives empty-leg charges for local pickups.
              </p>
            </div>
          </div>

          {/* Legal Compliance Guard */}
          <div className="col-span-12 md:col-span-4">
            <div className="bento-box p-6 h-full">
              <h3 className="text-xl mb-4 font-mono text-accent-cyan">Legal Compliance Guard</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">
                Automatically detects journeys over 13 hours and mandates a two-driver requirement, ensuring UK transport safety compliance is priced in from second one.
              </p>
            </div>
          </div>

          {/* Dynamic Margin Protection */}
          <div className="col-span-12 md:col-span-4">
            <div className="bento-box p-6 h-full">
              <h3 className="text-xl mb-4 font-mono text-accent-cyan">Dynamic Margin Protection</h3>
              <p className="text-foreground-muted leading-relaxed text-sm">
                Proprietary algorithm calculates a "Floor Price" and a "+12% Range," ensuring every quote protects the company's 20-30% margin targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Screenshots */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">Implementation</p>
        <h2 className="text-3xl mb-12">From Lead to CRM</h2>

        <div className="grid grid-cols-12 gap-6">
          {/* Dashboard Screenshot */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bento-box overflow-hidden">
              <img
                src="/carolean-dashboard.png"
                alt="Carolean Admin Dashboard - Fleet management and quotation overview"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-accent-light mt-4 font-mono">Admin Control Panel</p>
          </div>

          {/* Quote Screenshot */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bento-box overflow-hidden">
              <img
                src="/carolean-quote.png"
                alt="Automated quote generation with price range display"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-accent-light mt-4 font-mono">Automated Quote Output</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-4 text-lg leading-relaxed text-foreground-muted">
              <p><span className="text-accent-cyan font-mono">1. Lead Capture:</span> Customer enters details in a branded web widget.</p>
              <p><span className="text-accent-cyan font-mono">2. Engine Processing:</span> The DDD core runs 15+ policy checks (distance, driver hours, luxury rates).</p>
              <p><span className="text-accent-cyan font-mono">3. CRM Integration:</span> A new lead is instantly created in Monday.com with a full internal cost breakdown.</p>
              <p><span className="text-accent-cyan font-mono">4. Customer Close:</span> An automated, branded PDF quote is sent via SendGrid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Stats - Grid */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
        <div className="grid grid-cols-12 gap-6">
          {/* Outcome Text - Cols 1-7 */}
          <div className="col-span-12 lg:col-span-7">
            <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">The Outcome</p>
            <h2 className="text-3xl mb-8">Sigma-Level Results</h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
              <p>
                <span className="text-accent-cyan font-mono">100% Data Parity:</span> Zero difference between the "Engineered Price" and the actual invoiced total.
              </p>
              <p>
                <span className="text-accent-cyan font-mono">60-Second Quotes:</span> Turnaround time dropped from 24 hours to instant, capturing high-intent leads before they look elsewhere.
              </p>
              <p>
                <span className="text-accent-cyan font-mono">200+ Hours Saved:</span> Annual administrative burden eliminated through automated lead routing and document generation.
              </p>
              <p>
                <span className="text-accent-cyan font-mono">~40% Capacity Increase:</span> Operational teams shifted from manual pricing to fleet optimisation.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-accent-purple pl-6 italic text-xl text-foreground-muted">
              "The system stopped relying on heroics to function. Automation replaced interpretation. Rules replaced memory."
            </blockquote>
          </div>

          {/* Stats Sidebar - Cols 8-12 */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="bento-box p-6 text-center">
              <p className="text-4xl font-bold text-accent-cyan mb-2 font-mono">100%</p>
              <p className="text-sm text-foreground-muted">Pricing Parity</p>
            </div>
            <div className="bento-box p-6 text-center">
              <p className="text-4xl font-bold text-accent-purple mb-2 font-mono">60 Seconds</p>
              <p className="text-sm text-foreground-muted">Quote Turnaround</p>
            </div>
            <div className="bento-box p-6 text-center">
              <p className="text-4xl font-bold text-accent-cyan mb-2 font-mono">200+ Hours</p>
              <p className="text-sm text-foreground-muted">Annual Time Saved</p>
            </div>
            <div className="bento-box p-6 text-center">
              <p className="text-4xl font-bold text-accent-purple mb-2 font-mono">50+ Vehicles</p>
              <p className="text-sm text-foreground-muted">Fleet Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
        <div className="bento-box p-12 text-center">
          <p className="text-xl mb-8 text-foreground-muted">
            Need a similar solution for your business?
          </p>
          <CTA text="Audit My System — Book a Fit Check" className="bg-accent-cyan text-background border-accent-cyan hover:bg-accent-purple hover:border-accent-purple font-mono font-bold" />
        </div>
      </section>
    </div>
  );
}
