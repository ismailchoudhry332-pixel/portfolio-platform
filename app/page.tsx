import Link from "next/link";
import CTA from "@/components/CTA";
import EmphasisBlock from "@/components/EmphasisBlock";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 120px spacing */}
      <section className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-[120px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl mb-8">
              Most projects don't fail in code. They fail in translation.
            </h1>
            <p className="text-xl mb-12" style={{ color: 'rgba(26, 26, 26, 0.80)' }}>
              Operations, Systems & Automation Engineer focused on preserving intent
              from idea to implementation — so execution doesn't drift.
            </p>
            <CTA />
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white p-2 shadow-sm">
              <img src="/hero-portrait.png" alt="Ismail Chaudhry" className="w-full h-auto rounded-xl" />
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
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-[#E0E0E0]">
        <div className="max-w-[680px]">
          <p className="text-sm uppercase tracking-wide text-accent-light mb-8">Featured Case Study</p>

          {/* Featured block with left border and background */}
          <div className="bg-[#F8F8F8] border-l-2 border-[#DDDDDD] pl-8 pr-8 py-10 -ml-2">
            <h2 className="text-4xl mb-6">
              Turning Pricing From a Bottleneck Into an Operational System
            </h2>
            <p className="text-lg mb-10 leading-relaxed">
              Pricing logic was locked in developer-managed code. Operational teams were accountable for outcomes but had no control over the logic producing them.
            </p>
            <ul className="space-y-4 mb-12 ml-6">
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">Lead-to-quote time dropped from hours to seconds</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">~40% operational capacity increase with same headcount</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">Pricing parity enforced — identical journeys, identical prices</span>
              </li>
            </ul>
            <Link
              href="/case-studies/flagship"
              className="inline-block text-foreground hover:text-accent transition-colors duration-150 border-b-2 border-foreground hover:border-accent pb-1"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </section>

      {/* Systems I've Shipped - 80px margin */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-[#E0E0E0]">
        <div className="max-w-[1200px]">
          <h2 className="text-3xl mb-8 font-bold font-serif">Systems I've Shipped</h2>
          <p className="text-lg mb-12 text-accent max-w-[680px]">
            Not concepts. Not experiments. Systems used in live operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-8 rounded-xl border border-[#E5E5E5] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-signal transition-colors">Pricing Engine</h3>
              <p className="text-accent mb-6 leading-relaxed">
                Pricing & quotation engine for a UK transport operation.
              </p>
              <div className="pt-4 border-t border-dashed border-[#E5E5E5]">
                <span className="text-sm font-medium text-signal">Outcome →</span>
                <p className="text-sm mt-1 text-accent-light">Removed manual quoting, enforced parity.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-xl border border-[#E5E5E5] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-signal transition-colors">Operations Panel</h3>
              <p className="text-accent mb-6 leading-relaxed">
                Admin panel allowing business users to control logic without devs.
              </p>
              <div className="pt-4 border-t border-dashed border-[#E5E5E5]">
                <span className="text-sm font-medium text-signal">Outcome →</span>
                <p className="text-sm mt-1 text-accent-light">Zero developer dependency for logic changes.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-xl border border-[#E5E5E5] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-signal transition-colors">Workflow Automation</h3>
              <p className="text-accent mb-6 leading-relaxed">
                Deep integration with Monday.com for sales-to-ops handoff.
              </p>
              <div className="pt-4 border-t border-dashed border-[#E5E5E5]">
                <span className="text-sm font-medium text-signal">Outcome →</span>
                <p className="text-sm mt-1 text-accent-light">Eliminated manual entry errors entirely.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group p-8 rounded-xl border border-[#E5E5E5] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 group-hover:text-signal transition-colors">Data Dashboards</h3>
              <p className="text-accent mb-6 leading-relaxed">
                Real-time visualization of operational metrics and KPIs.
              </p>
              <div className="pt-4 border-t border-dashed border-[#E5E5E5]">
                <span className="text-sm font-medium text-signal">Outcome →</span>
                <p className="text-sm mt-1 text-accent-light">Replaced guesswork with live visibility.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group p-8 rounded-xl border border-[#E5E5E5] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-3 group-hover:text-signal transition-colors">Service Tools</h3>
              <p className="text-accent mb-6 leading-relaxed">
                Internal tooling for call-center & service workflows.
              </p>
              <div className="pt-4 border-t border-dashed border-[#E5E5E5]">
                <span className="text-sm font-medium text-signal">Outcome →</span>
                <p className="text-sm mt-1 text-accent-light">Reduced reliance on human memory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work - 80px margin */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 mt-20 border-t border-[#E0E0E0]">
        <div className="max-w-[680px]">
          <h2 className="text-3xl mb-16">How I Work</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-4">1. Clarify intent</h3>
              <p className="text-lg leading-relaxed">
                What outcome are you actually trying to create? Not features — outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">2. Make constraints explicit</h3>
              <p className="text-lg leading-relaxed">
                Time, resources, dependencies, non-negotiables. Clarity prevents drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">3. Design the system</h3>
              <p className="text-lg leading-relaxed">
                Build the structure that preserves intent through execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">4. Remove human dependency where it causes failure</h3>
              <p className="text-lg leading-relaxed">
                Automate what breaks when left to memory or manual process.
              </p>
            </div>
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
