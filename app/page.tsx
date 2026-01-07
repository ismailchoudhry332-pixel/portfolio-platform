import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="max-w-[680px]">
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            Most projects don't fail in code. They fail in translation.
          </h1>
          <p className="text-xl text-accent mb-8">
            Operations, Systems & Automation Engineer focused on preserving intent
            from idea to implementation — so execution doesn't drift.
          </p>
          <CTA />
        </div>
      </section>

      {/* Framing Section */}
      <section className="max-w-[680px] mx-auto px-6 py-16">
        <p className="text-lg leading-relaxed">
          The gap between what founders envision and what teams deliver isn't a
          people problem — it's a systems problem. I build the structural clarity
          that keeps intent intact as it moves through execution.
        </p>
      </section>

      {/* Featured Case Study Preview */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-[680px]">
          <h2 className="text-3xl mb-6">Featured Case Study</h2>
          <h3 className="text-2xl mb-4">
            Fleet Compliance System — Removing Manual Failure Points
          </h3>
          <p className="text-lg mb-6 text-accent">
            Manual compliance logs were creating safety risk across 18 vehicles.
            Built automated tracking system that reduced violations by 87%.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mr-3 text-accent">•</span>
              <span>87% reduction in compliance violations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">•</span>
              <span>12 hours/week saved on manual logging</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">•</span>
              <span>Zero safety incidents in 6 months post-launch</span>
            </li>
          </ul>
          <Link
            href="/case-studies/flagship"
            className="text-foreground hover:text-accent transition-colors duration-150 border-b border-foreground hover:border-accent"
          >
            Read case study →
          </Link>
        </div>
      </section>

      {/* How I Work */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-[680px]">
          <h2 className="text-3xl mb-12">How I Work</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-2">1. Clarify intent</h3>
              <p className="text-accent">
                What outcome are you actually trying to create? Not features — outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">2. Make constraints explicit</h3>
              <p className="text-accent">
                Time, resources, dependencies, non-negotiables. Clarity prevents drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">3. Design the system</h3>
              <p className="text-accent">
                Build the structure that preserves intent through execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">4. Remove human dependency where it causes failure</h3>
              <p className="text-accent">
                Automate what breaks when left to memory or manual process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="max-w-[680px] mx-auto px-6 py-24 text-center">
        <p className="text-lg mb-8">
          If this approach resonates, let's have a conversation.
        </p>
        <CTA />
      </section>
    </div>
  );
}
