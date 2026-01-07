import Link from "next/link";
import Accordion from "@/components/Accordion";
import CTA from "@/components/CTA";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Flagship Case Study Preview */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="max-w-[680px]">
          <h1 className="text-4xl mb-12">Case Studies</h1>

          <div className="mb-16">
            <h2 className="text-3xl mb-4">
              Fleet Compliance System — Removing Manual Failure Points
            </h2>
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
              className="inline-block px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
            >
              Read full case study
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting Case Studies (Accordions) */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[680px]">
          <Accordion
            title="Multi-Company Revenue Tracking"
            problemSummary="Revenue reporting across 3 entities required manual consolidation, creating 2-week delays."
            outcomeSummary="Built unified dashboard that provides real-time revenue visibility across all entities."
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xl mb-2">Context</h4>
                <p className="text-accent">
                  Small business group with 3 separate legal entities. Revenue data
                  lived in different systems. Monthly reporting required manual
                  spreadsheet consolidation, taking 2 weeks and introducing errors.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Breakdown</h4>
                <p className="text-accent">
                  The problem wasn't technical complexity — it was structural. No single
                  source of truth. Each entity used different payment processors and
                  accounting software. Manual reconciliation was the default.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Core Decision</h4>
                <p className="text-accent">
                  Build a centralized data pipeline that pulls from all systems into one
                  unified view. Automate reconciliation logic. Make real-time visibility
                  the default.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Outcome</h4>
                <ul className="space-y-2 text-accent">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Real-time revenue visibility across all entities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>2-week reporting cycle reduced to on-demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
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
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xl mb-2">Context</h4>
                <p className="text-accent">
                  Service business with high-touch onboarding. Every new client required
                  contract signing, system setup, team introductions, and account
                  configuration. Process involved 15 manual steps across 3 departments.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Breakdown</h4>
                <p className="text-accent">
                  Onboarding was a bottleneck. Sales closed deals but ops couldn't keep
                  up. Steps were undocumented. Quality varied by who handled it. New team
                  members took weeks to learn the process.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Core Decision</h4>
                <p className="text-accent">
                  Map the ideal onboarding flow. Automate what doesn't require judgment.
                  Create a system that triggers the right action at the right time.
                  Remove human dependency for routine steps.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Outcome</h4>
                <ul className="space-y-2 text-accent">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Onboarding time reduced from 5 days to 2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Zero manual handoffs between departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Consistent experience for every client</span>
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[680px] mx-auto px-6 py-24 text-center">
        <p className="text-lg mb-8">
          If this work resonates, we can do a short fit check.
        </p>
        <CTA />
      </section>
    </div>
  );
}
