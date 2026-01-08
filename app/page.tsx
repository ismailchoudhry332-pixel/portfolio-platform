import Link from "next/link";
import CTA from "@/components/CTA";
import EmphasisBlock from "@/components/EmphasisBlock";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 120px spacing */}
      <section className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-[120px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl mb-8">
              Operations, Systems & Automation Engineer | Portfolio of Ismail Chaudhry
            </h1>
            <p className="text-xl mb-12 text-foreground-muted">
              Preserving intent from idea to implementation — <span className="text-accent-cyan">Zero Drift</span>.
            </p>
            <CTA />
          </div>
          <div className="relative">
            <div className="terminal-border rounded-lg overflow-hidden bg-black/50 p-2">
              <img src="/hero-portrait.png" alt="Ismail Chaudhry, Systems Engineer specializing in Operational Automation and Business Logic." className="w-full h-auto rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Framing Section - 80px margin */}
      <section className="max-w-[680px] mx-auto px-6 py-20 mt-20">
        <EmphasisBlock>
          The gap between what founders envision and what teams deliver isn't a
          people problem — it's a systems problem.
        </EmphasisBlock>
        <p className="text-lg leading-relaxed mt-8">
          I build the structural clarity that keeps intent intact as it moves through execution.
        </p>
      </section>

      {/* Featured Case Study Preview - with visual distinction */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-border">
        <div className="max-w-[680px]">
          <p className="text-sm uppercase tracking-wide text-accent-cyan mb-8 font-mono">Featured Case Study</p>

          {/* Featured block with left border and background */}
          <div className="terminal-border bg-black/30 border-l-2 border-accent-purple pl-8 pr-8 py-10">
            <h2 className="text-4xl mb-6">
              Turning Pricing From a Bottleneck Into an Operational System
            </h2>
            <p className="text-lg mb-10 leading-relaxed text-foreground-muted">
              Pricing logic was locked in developer-managed code. Operational teams were accountable for outcomes but had no control over the logic producing them.
            </p>
            <ul className="space-y-4 mb-12 ml-6">
              <li className="flex items-start">
                <span className="mr-4 text-accent-cyan">→</span>
                <span className="text-lg">Lead-to-quote time dropped from hours to seconds</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent-cyan">→</span>
                <span className="text-lg">~40% operational capacity increase with same headcount</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent-cyan">→</span>
                <span className="text-lg">Pricing parity enforced — identical journeys, identical prices</span>
              </li>
            </ul>
            <Link
              href="/case-studies/flagship"
              className="inline-block text-accent-cyan hover:text-accent-purple transition-colors duration-150 border-b border-accent-cyan hover:border-accent-purple pb-1 font-mono"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </section>

      {/* Systems I've Shipped - 80px margin */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-border">
        <div className="max-w-[1200px]">
          <h2 className="text-3xl mb-8 font-bold">Systems I've Shipped</h2>
          <p className="text-lg mb-12 text-foreground-muted max-w-[680px]">
            Not concepts. Not experiments. <span className="text-accent-cyan">Systems used in live operations</span> across transport, tech, and property sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Pricing Engine */}
            <div className="group p-8 bento-box hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors font-mono">Pricing Engine</h3>
              <p className="text-foreground-muted mb-4 leading-relaxed">
                Pricing & quotation engine for a UK transport operation managing <span className="text-accent-cyan">50+ vehicle fleet</span>.
              </p>
              <p className="text-sm text-accent-light mb-6 font-mono">Stack: n8n • Zoho • Custom Logic</p>
              <div className="pt-4 border-t border-dashed border-border">
                <span className="text-sm font-medium text-accent-purple font-mono">Outcome →</span>
                <p className="text-sm mt-1 text-foreground-muted">Removed manual quoting, enforced pricing parity, <span className="text-accent-cyan">$15k+ savings</span> from margin visibility.</p>
              </div>
            </div>

            {/* Card 2 - Operations Panel */}
            <div className="group p-8 bento-box hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors font-mono">Operations Panel</h3>
              <p className="text-foreground-muted mb-4 leading-relaxed">
                Admin panel allowing business users to control logic without devs.
              </p>
              <p className="text-sm text-accent-light mb-6 font-mono">Stack: React • Node.js • Zoho</p>
              <div className="pt-4 border-t border-dashed border-border">
                <span className="text-sm font-medium text-accent-purple font-mono">Outcome →</span>
                <p className="text-sm mt-1 text-foreground-muted">Zero developer dependency for logic changes.</p>
              </div>
            </div>

            {/* Card 3 - Workflow Automation */}
            <div className="group p-8 bento-box hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors font-mono">Workflow Automation</h3>
              <p className="text-foreground-muted mb-4 leading-relaxed">
                Deep integration with Monday.com for sales-to-ops handoff.
              </p>
              <p className="text-sm text-accent-light mb-6 font-mono">Stack: Make.com • Monday.com • Webhooks</p>
              <div className="pt-4 border-t border-dashed border-border">
                <span className="text-sm font-medium text-accent-purple font-mono">Outcome →</span>
                <p className="text-sm mt-1 text-foreground-muted">Eliminated manual entry errors entirely.</p>
              </div>
            </div>

            {/* Card 4 - Data Dashboards */}
            <div className="group p-8 bento-box hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors font-mono">Data Dashboards</h3>
              <p className="text-foreground-muted mb-4 leading-relaxed">
                Real-time visualization of operational metrics and KPIs.
              </p>
              <p className="text-sm text-accent-light mb-6 font-mono">Stack: Power BI • SQL • Custom APIs</p>
              <div className="pt-4 border-t border-dashed border-border">
                <span className="text-sm font-medium text-accent-purple font-mono">Outcome →</span>
                <p className="text-sm mt-1 text-foreground-muted">Replaced guesswork with live visibility.</p>
              </div>
            </div>

            {/* Card 5 - Service Tools */}
            <div className="group p-8 bento-box hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors font-mono">Service Tools</h3>
              <p className="text-foreground-muted mb-4 leading-relaxed">
                Internal tooling for call-center & service workflows.
              </p>
              <p className="text-sm text-accent-light mb-6 font-mono">Stack: Hubstaff • Zoho • n8n</p>
              <div className="pt-4 border-t border-dashed border-border">
                <span className="text-sm font-medium text-accent-purple font-mono">Outcome →</span>
                <p className="text-sm mt-1 text-foreground-muted">Reduced reliance on human memory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work - with Tech Stack Sidebar */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl mb-16">How I Work</h2>
            <div className="space-y-12">
              <div className="bento-box p-6">
                <h3 className="text-xl mb-4 font-mono text-accent-cyan">1. Clarify intent</h3>
                <p className="text-lg leading-relaxed text-foreground-muted">
                  What outcome are you actually trying to create? Not features — outcomes.
                </p>
              </div>
              <div className="bento-box p-6">
                <h3 className="text-xl mb-4 font-mono text-accent-cyan">2. Make constraints explicit</h3>
                <p className="text-lg leading-relaxed text-foreground-muted">
                  Time, resources, dependencies, non-negotiables. Clarity prevents drift.
                </p>
              </div>
              <div className="bento-box p-6">
                <h3 className="text-xl mb-4 font-mono text-accent-cyan">3. Design the system</h3>
                <p className="text-lg leading-relaxed text-foreground-muted">
                  Build the structure that preserves intent through execution.
                </p>
              </div>
              <div className="bento-box p-6">
                <h3 className="text-xl mb-4 font-mono text-accent-cyan">4. Remove human dependency</h3>
                <p className="text-lg leading-relaxed text-foreground-muted">
                  Automate what breaks when left to memory or manual process.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <p className="text-lg mb-12">
          If this approach resonates, let's have a conversation.
        </p>
        <CTA />
      </section>
    </div>
  );
}
