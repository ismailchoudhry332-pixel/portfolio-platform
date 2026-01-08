import Link from "next/link";
import Accordion from "@/components/Accordion";
import CTA from "@/components/CTA";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Flagship Case Study Preview */}
      <section className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-20">
        <div className="max-w-[680px]">
          <h1 className="text-6xl mb-20">Case Studies</h1>

          <p className="text-sm uppercase tracking-wide text-accent-light mb-8">Flagship</p>
          
          {/* Featured block with visual distinction */}
          <div className="bg-[#F8F8F8] border-l-2 border-[#DDDDDD] pl-8 pr-8 py-10 -ml-2">
            <h2 className="text-4xl mb-6 font-bold">
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
              className="inline-block px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              Read full case study
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting Case Studies (Accordions) */}
      <section className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 mt-20 border-t border-[#E0E0E0]">
        <div className="max-w-[680px]">
          <p className="text-sm uppercase tracking-wide text-accent-light mb-12">Additional Work</p>

          <Accordion
            title="Multi-Company Revenue Tracking"
            problemSummary="Revenue reporting across 3 entities required manual consolidation, creating 2-week delays."
            outcomeSummary="Built unified dashboard that provides real-time revenue visibility across all entities."
            delivered={[
              "Centralized data pipeline",
              "Automated reconciliation system",
              "Real-time revenue dashboard",
              "Multi-entity reporting interface"
            ]}
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3">Context</h4>
                <p className="text-lg leading-relaxed">
                  Small business group with 3 separate legal entities. Revenue data
                  lived in different systems. Monthly reporting required manual
                  spreadsheet consolidation, taking 2 weeks and introducing errors.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Breakdown</h4>
                <p className="text-lg leading-relaxed">
                  The problem wasn't technical complexity — it was structural. No single
                  source of truth. Each entity used different payment processors and
                  accounting software. Manual reconciliation was the default.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Core Decision</h4>
                <p className="text-lg leading-relaxed">
                  Build a centralized data pipeline that pulls from all systems into one
                  unified view. Automate reconciliation logic. Make real-time visibility
                  the default.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Outcome</h4>
                <ul className="space-y-3 text-lg ml-6">
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>Real-time revenue visibility across all entities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>2-week reporting cycle reduced to on-demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>Eliminated manual reconciliation errors</span>
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>

          <Accordion
            title="Client Onboarding Workflow Automation"
            problemSummary="Onboarding required 15 manual steps across 3 people, creating bottlenecks and inconsistency."
            outcomeSummary="Automated workflow reduced onboarding time from 5 days to 2 hours."
            delivered={[
              "Automated workflow engine",
              "Multi-step onboarding system",
              "Inter-department integration",
              "Automated notification system"
            ]}
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-3">Context</h4>
                <p className="text-lg leading-relaxed">
                  Service business with high-touch onboarding. Every new client required
                  contract signing, system setup, team introductions, and account
                  configuration. Process involved 15 manual steps across 3 departments.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Breakdown</h4>
                <p className="text-lg leading-relaxed">
                  Onboarding was a bottleneck. Sales closed deals but ops couldn't keep
                  up. Steps were undocumented. Quality varied by who handled it. New team
                  members took weeks to learn the process.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Core Decision</h4>
                <p className="text-lg leading-relaxed">
                  Map the ideal onboarding flow. Automate what doesn't require judgment.
                  Create a system that triggers the right action at the right time.
                  Remove human dependency for routine steps.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Outcome</h4>
                <ul className="space-y-3 text-lg ml-6">
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>Onboarding time reduced from 5 days to 2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>Zero manual handoffs between departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4">•</span>
                    <span>Consistent experience for every client</span>
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[680px] mx-auto px-6 py-32 text-center">
        <p className="text-lg mb-12">
          If this work resonates, we can do a short fit check.
        </p>
        <CTA />
      </section>
    </div>
  );
}
