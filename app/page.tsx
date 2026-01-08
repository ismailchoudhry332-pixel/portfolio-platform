import Link from "next/link";
import CTA from "@/components/CTA";
import EmphasisBlock from "@/components/EmphasisBlock";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 120px spacing */}
      <section className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-[120px]">
        <div className="max-w-[680px]">
          <h1 className="text-6xl md:text-7xl mb-8">
            Most projects don't fail in code. They fail in translation.
          </h1>
          <p className="text-xl mb-12" style={{ color: 'rgba(26, 26, 26, 0.80)' }}>
            Operations, Systems & Automation Engineer focused on preserving intent
            from idea to implementation — so execution doesn't drift.
          </p>
          <CTA />
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
              Fleet Compliance System — Removing Manual Failure Points
            </h2>
            <p className="text-lg mb-10 leading-relaxed">
              Manual compliance logs were creating safety risk across 18 vehicles.
              Built automated tracking system that reduced violations by 87%.
            </p>
            <ul className="space-y-4 mb-12 ml-6">
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">87% reduction in compliance violations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">12 hours/week saved on manual logging</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-accent">•</span>
                <span className="text-lg">Zero safety incidents in 6 months post-launch</span>
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
        <div className="max-w-[680px]">
          <h2 className="text-3xl mb-8 font-bold">Systems I've Shipped</h2>
          <p className="text-lg mb-12 text-accent">
            Not concepts. Not experiments. Systems used in live operations.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-lg mb-2">
                • Pricing & quotation engine for a UK transport operation
              </p>
              <p className="text-base text-accent-light ml-4 leading-relaxed">
                → Removed manual quoting, enforced pricing parity, exposed margin leakage
              </p>
            </div>

            <div>
              <p className="text-lg mb-2">
                • Operations admin panel for non-technical teams
              </p>
              <p className="text-base text-accent-light ml-4 leading-relaxed">
                → Business users controlled logic without developer dependency
              </p>
            </div>

            <div>
              <p className="text-lg mb-2">
                • Workflow automation integrated with Monday.com
              </p>
              <p className="text-base text-accent-light ml-4 leading-relaxed">
                → Eliminated manual handoffs between sales and operations
              </p>
            </div>

            <div>
              <p className="text-lg mb-2">
                • Data dashboards for operational decision-making
              </p>
              <p className="text-base text-accent-light ml-4 leading-relaxed">
                → Replaced spreadsheet-driven guesswork with live visibility
              </p>
            </div>

            <div>
              <p className="text-lg mb-2">
                • Internal tools for call-centre & service operations
              </p>
              <p className="text-base text-accent-light ml-4 leading-relaxed">
                → Reduced reliance on human memory at handoff points
              </p>
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
