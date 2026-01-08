import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pricing System — Case Study | Ismail Chaudhry",
  description: "Turning pricing from a bottleneck into an operational system. Pricing logic moved from developer-managed code to operational control.",
};

export default function FlagshipCaseStudy() {
  return (
    <div className="min-h-screen">
      <article className="max-w-[680px] mx-auto px-6 py-24">
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="text-accent hover:text-foreground transition-colors duration-150 mb-12 inline-block"
        >
          ← Back to Case Studies
        </Link>

        {/* Title */}
        <h1 className="text-4xl mb-6">
          Turning Pricing From a Bottleneck Into an Operational System
        </h1>

        {/* Delivered Block */}
        <div className="mb-12 pb-8 border-b border-[#E0E0E0]">
          <h3 className="text-lg font-bold mb-4">Delivered</h3>
          <ul className="space-y-2 text-base ml-6">
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Pricing engine with explicit operational rules</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Admin panel for non-technical control</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Automated quotation generation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Email-based customer communication</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Full pricing audit trail</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-accent">-</span>
              <span>Monday.com integration for operational visibility</span>
            </li>
          </ul>
        </div>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Context</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            The business used a custom WordPress pricing widget that had taken months to build.
            In production, it failed at the one thing it was meant to do: support operations at scale.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            Pricing logic was locked in developer-managed code, operational changes required technical intervention, and the system could not model real transport behaviour such as empty legs, multi-day journeys, or variable cost structures.
          </p>
          <p className="text-lg leading-relaxed text-accent mt-4">
            The widget existed, but pricing decisions still depended on people compensating for its limitations.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">The Problem</h2>
          <p className="text-lg leading-relaxed text-accent mb-6">
            Three failure points became unavoidable:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Pricing logic was not owned by operations</h3>
              <p className="text-lg leading-relaxed text-accent">
                Rates, margins, and vehicle rules could not be adjusted without a developer. Operational teams were accountable for outcomes but had no control over the logic producing them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">2. Pricing outcomes were inconsistent and non-deterministic</h3>
              <p className="text-lg leading-relaxed text-accent">
                Identical journeys produced different prices depending on who handled the quote. This created negotiation friction, internal distrust, and brand inconsistency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">3. Hidden cost leakage was normalised</h3>
              <p className="text-lg leading-relaxed text-accent">
                Empty-leg costs, fuel surcharges, and long-distance inefficiencies were frequently ignored or estimated manually. Margins were eroding quietly, without visibility.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-accent mt-6">
            Sales teams acted as information couriers.<br/>
            Operations teams acted as validation layers.
          </p>
          <p className="text-lg leading-relaxed text-accent mt-4">
            The system only worked because people worked around it.
          </p>
        </section>

        {/* Constraints */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Constraints That Mattered</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            This was not a clean rebuild.
          </p>
          <p className="text-lg leading-relaxed text-accent mb-4">
            The solution had to:
          </p>
          <ul className="space-y-3 text-lg text-accent ml-6 mb-4">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>remain live during changes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>integrate with existing booking workflows</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>be usable by non-technical staff</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>expose pricing decisions clearly enough for operational sign-off</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent">
            Most importantly: Accountability for pricing needed to sit with operational owners, not developers.
          </p>
        </section>

        {/* The Decision */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">The Decision</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            The existing widget was not extended.
          </p>
          <p className="text-lg leading-relaxed text-accent mb-4">
            Pricing was treated as a core operational system, not a front-end feature.
          </p>
          <p className="text-lg leading-relaxed text-accent mb-4">
            That meant separating concerns deliberately:
          </p>
          <ul className="space-y-3 text-lg text-accent ml-6 mb-4">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>A deterministic pricing engine responsible only for logic</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>An operational admin layer responsible for control and accountability</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent">
            UI was secondary. Control and traceability were not.
          </p>
        </section>

        {/* Pricing System Diagram */}
        <div className="my-20 w-full max-w-full overflow-x-auto">
          <div className="min-w-[600px] flex justify-center">
            <Image
              src="/pricing-system-diagram.svg"
              alt="Pricing system architecture diagram showing flow from customer request through pricing engine to operations"
              width={800}
              height={180}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Implementation Approach */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Implementation Approach</h2>

          <h3 className="text-xl font-bold mb-3 mt-8">Pricing Engine</h3>
          <ul className="space-y-3 text-lg text-accent ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Rule-based logic modelling real variables: vehicle type, journey duration, empty legs, multi-day usage</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Deterministic outputs for identical journey profiles</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Mandatory audit trail explaining exactly which rules were applied and why</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-8">Operations & Admin Interface</h3>
          <ul className="space-y-3 text-lg text-accent ml-6 mb-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Business users could update rates, margins, and vehicle rules directly</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>No code changes required for operational adjustments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Changes propagated instantly to live quotations</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-accent mt-6">
            Automation replaced interpretation.<br/>
            Rules replaced memory.
          </p>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Results</h2>
          <p className="text-lg leading-relaxed text-accent mb-6">
            The operational impact was immediate:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Lead-to-quote time dropped from hours to seconds</h3>
              <p className="text-lg leading-relaxed text-accent">
                Sales stopped relaying information and focused exclusively on closing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Margin leakage was exposed and corrected</h3>
              <p className="text-lg leading-relaxed text-accent">
                Underpriced journeys caused by ignored empty-leg costs became visible and actionable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Pricing parity was enforced</h3>
              <p className="text-lg leading-relaxed text-accent">
                Identical journeys could no longer receive different prices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Operational capacity increased ~40% with the same headcount</h3>
              <p className="text-lg leading-relaxed text-accent">
                Teams shifted from manual pricing to fleet optimisation.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-accent mt-6">
            The system stopped relying on heroics to function.
          </p>
        </section>

        {/* Why This Worked */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Why This Worked</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            The improvement did not come from better UI or more features.
          </p>
          <p className="text-lg leading-relaxed text-accent mb-4">
            It came from:
          </p>
          <ul className="space-y-3 text-lg text-accent ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>making assumptions explicit</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>removing ambiguity from decisions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>aligning control with accountability</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent mt-4">
            Once pricing reflected operational reality, the organisation scaled without additional strain.
          </p>
        </section>

        {/* What This Case Demonstrates */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">What This Case Demonstrates</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            This project reflects how I approach systems:
          </p>
          <ul className="space-y-3 text-lg text-accent ml-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Identify where meaning is being lost between intent and execution</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Remove hidden dependencies on people</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Design systems that hold under pressure, not just at delivery</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent mt-6">
            The goal is not automation for its own sake.<br/>
            The goal is operational clarity that survives growth.
          </p>
        </section>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-border text-center">
          <Link
            href="/case-studies"
            className="text-accent hover:text-foreground transition-colors duration-150 border-b border-accent hover:border-foreground"
          >
            ← Back to all case studies
          </Link>
        </div>
      </article>
    </div>
  );
}
