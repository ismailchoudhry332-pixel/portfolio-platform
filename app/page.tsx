import Link from "next/link";
import CTA from "@/components/CTA";
import EmphasisBlock from "@/components/EmphasisBlock";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[680px]">
          <h1 className="text-5xl md:text-6xl mb-8">
            Most projects don't fail in code. They fail in translation.
          </h1>
          <p className="text-xl text-accent mb-12">
            Operations, Systems & Automation Engineer focused on preserving intent
            from idea to implementation — so execution doesn't drift.
          </p>
          <CTA />
        </div>
      </section>

      {/* Framing Section */}
      <section className="max-w-[680px] mx-auto px-6 py-24">
        <EmphasisBlock>
          The gap between what founders envision and what teams deliver isn't a
          people problem — it's a systems problem.
        </EmphasisBlock>
        <p className="text-lg leading-relaxed mt-8">
          I build the structural clarity that keeps intent intact as it moves through execution.
        </p>
      </section>

      {/* Featured Case Study Preview */}
      <section className="max-w-[1200px] mx-auto px-6 py-32 mt-24 border-t border-border">
        <div className="max-w-[680px]">
          <p className="text-sm uppercase tracking-wide text-accent-light mb-6">Featured Case Study</p>
          <h2 className="text-3xl mb-6">
            Fleet Compliance System — Removing Manual Failure Points
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Manual compliance logs were creating safety risk across 18 vehicles.
            Built automated tracking system that reduced violations by 87%.
          </p>
          <ul className="space-y-4 mb-12">
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
      </section>

      {/* How I Work */}
      <section className="max-w-[1200px] mx-auto px-6 py-32 mt-24 border-t border-border">
        <div className="max-w-[680px]">
          <h2 className="text-3xl mb-16">How I Work</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-3">1. Clarify intent</h3>
              <p className="text-accent text-lg leading-relaxed">
                What outcome are you actually trying to create? Not features — outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">2. Make constraints explicit</h3>
              <p className="text-accent text-lg leading-relaxed">
                Time, resources, dependencies, non-negotiables. Clarity prevents drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">3. Design the system</h3>
              <p className="text-accent text-lg leading-relaxed">
                Build the structure that preserves intent through execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">4. Remove human dependency where it causes failure</h3>
              <p className="text-accent text-lg leading-relaxed">
                Automate what breaks when left to memory or manual process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <p className="text-lg mb-12 text-accent">
          If this approach resonates, let's have a conversation.
        </p>
        <CTA />
      </section>
    </div>
  );
}
