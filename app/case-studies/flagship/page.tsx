import Link from "next/link";

export const metadata = {
  title: "Fleet Compliance System — Case Study | Ismail Chaudhry",
  description: "Manual compliance logs were creating safety risk across 18 vehicles. Built automated tracking system that reduced violations by 87%.",
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
          Fleet Compliance System — Removing Manual Failure Points
        </h1>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Context</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            Transportation company with 18 vehicles. Compliance tracking (inspections,
            maintenance, driver certifications) was manual. Operations manager kept
            records in spreadsheets and paper logs.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            As the fleet grew from 8 to 18 vehicles, manual tracking broke down. Missed
            inspections started appearing. Safety violations increased. The company
            faced regulatory risk.
          </p>
        </section>

        {/* Breakdown */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Breakdown</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            The problem wasn't lack of effort — the operations manager was working
            weekends. The problem was structural. Manual tracking requires perfect
            memory and perfect execution. At scale, that's impossible.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            The failure pattern: someone forgets to log an inspection. The vehicle
            operates out of compliance. No one notices until an audit or incident. By
            then, it's a regulatory problem.
          </p>
        </section>

        {/* Constraints */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Constraints</h2>
          <ul className="space-y-3 text-lg text-accent">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>No budget for expensive fleet management software</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Drivers not tech-savvy — solution had to be simple</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Needed real-time alerts before compliance deadlines</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Had to work on mobile (drivers in field)</span>
            </li>
          </ul>
        </section>

        {/* Core Decision */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Core Decision</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            Build a lightweight system that removes human dependency from tracking.
            Automate deadline monitoring. Make compliance status visible at all times.
            Send alerts before things become violations.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            The system should be so simple that using it is easier than not using it.
          </p>
        </section>

        {/* System */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">System</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            Built a web-based tracking system with automated deadline monitoring:
          </p>
          <ul className="space-y-3 text-lg text-accent mb-4">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Vehicle profiles with all required compliance items and deadlines
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Automated email/SMS alerts 7 days, 3 days, and 1 day before deadlines
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Dashboard showing compliance status across entire fleet</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Mobile-friendly interface for field updates</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Audit trail of all compliance activities</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent">
            The system runs in the background. No one has to remember. If something is
            approaching a deadline, the system alerts the right people.
          </p>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Outcome</h2>
          <ul className="space-y-4 text-lg text-accent mb-6">
            <li className="flex items-start">
              <span className="mr-3 font-bold text-foreground">87%</span>
              <span>reduction in compliance violations (23 violations to 3 in 6 months)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-foreground">12 hours/week</span>
              <span>
                saved on manual tracking and spreadsheet management
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-foreground">Zero</span>
              <span>safety incidents related to compliance in 6 months post-launch</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-foreground">100%</span>
              <span>audit readiness — full compliance history available on demand</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-accent">
            The operations manager went from working weekends to having full visibility
            with minimal effort. The system handles the remembering. People handle the
            decisions.
          </p>
        </section>

        {/* Reflection */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Reflection</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            This wasn't about building impressive technology. It was about identifying
            where human memory fails at scale and removing that dependency.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            The breakthrough wasn't the code — it was recognizing that compliance
            failures were structural, not personal. Fix the structure, eliminate the
            failure mode.
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
