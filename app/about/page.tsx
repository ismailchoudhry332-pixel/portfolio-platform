import CTA from "@/components/CTA";

export const metadata = {
  title: "About | Ismail Chaudhry",
  description: "Operations, Systems & Automation Engineer focused on preserving intent from idea to implementation.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <article className="max-w-[680px] mx-auto px-6 py-24">
        {/* Opening Context */}
        <section className="mb-16">
          <h1 className="text-4xl mb-8">About</h1>
          <p className="text-lg leading-relaxed text-accent">
            I build systems that preserve intent from idea to execution — so what
            founders envision actually gets delivered. Most execution failures aren't
            technical. They're structural. I fix the structure.
          </p>
        </section>

        {/* The Pattern I Kept Seeing */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">The Pattern I Kept Seeing</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            Early in my career, I worked across operations, product, and technical
            implementation. The same breakdown happened everywhere:
          </p>
          <p className="text-lg leading-relaxed text-accent mb-4">
            A founder or leader would have clear intent. They'd communicate it to their
            team. The team would execute. And somewhere between intent and delivery,
            the original vision would drift.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            Not because anyone was incompetent. Not because of bad communication. But
            because the structure didn't exist to preserve intent through execution.
          </p>
        </section>

        {/* The Shift */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">The Shift</h2>
          <p className="text-lg leading-relaxed text-accent mb-4">
            I realized that the most valuable skill I could develop wasn't mastering
            tools or frameworks. It was understanding where execution breaks down — and
            building systems that prevent that breakdown.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            That's what I do now. I identify the structural gaps between intent and
            delivery. I design systems that close those gaps. I remove human dependency
            where it causes failure.
          </p>
        </section>

        {/* Context I've Applied This In */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">Context I've Applied This In</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl mb-3">
                Operations broke when scaling from 5 to 18 vehicles
              </h3>
              <p className="text-lg leading-relaxed text-accent">
                Transportation company couldn't keep compliance tracking manual anymore.
                Built automated system that removed human dependency from deadline
                monitoring. Violations dropped 87%. Operations manager stopped working
                weekends.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">
                Cross-functional coordination had no single source of truth
              </h3>
              <p className="text-lg leading-relaxed text-accent">
                Multi-entity business group couldn't see revenue in real-time. Each
                company used different systems. Reporting took 2 weeks. Built unified
                data pipeline that made visibility instant and eliminated manual
                reconciliation.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">
                Client onboarding created bottlenecks in sales
              </h3>
              <p className="text-lg leading-relaxed text-accent">
                Service business closed deals but couldn't onboard fast enough. 15
                manual steps across 3 departments. Designed automated workflow that
                reduced onboarding from 5 days to 2 hours. Sales could scale without
                ops breaking.
              </p>
            </div>
          </div>
        </section>

        {/* Standards & Values */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">Standards & Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-2">Ownership</h3>
              <p className="text-lg text-accent">
                If I take on a problem, I own it through to resolution. No handoffs
                into ambiguity. No "that's not my job." Execution doesn't drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Integrity</h3>
              <p className="text-lg text-accent">
                I tell you what I see, not what you want to hear. If something won't
                work, I'll say so. If I don't know, I'll say that too.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Respect</h3>
              <p className="text-lg text-accent">
                I work with people who value clarity and accountability. I don't work
                in environments where disrespect is tolerated. Life's too short.
              </p>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">How I Work</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-2">1. Clarify intent</h3>
              <p className="text-lg text-accent">
                What outcome are you actually trying to create? Not features — outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">2. Make constraints explicit</h3>
              <p className="text-lg text-accent">
                Time, resources, dependencies, non-negotiables. Clarity prevents drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">3. Design the system</h3>
              <p className="text-lg text-accent">
                Build the structure that preserves intent through execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">4. Remove human dependency where it causes failure</h3>
              <p className="text-lg text-accent">
                Automate what breaks when left to memory or manual process.
              </p>
            </div>
          </div>
        </section>

        {/* Forward-looking Close */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed text-accent mb-4">
            If you're a founder or product leader who's tired of execution drift — who
            wants systems that actually preserve intent — let's talk.
          </p>
          <p className="text-lg leading-relaxed text-accent">
            I work with teams who value clarity over comfort and accountability over
            excuses.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-border">
          <CTA />
        </div>
      </article>
    </div>
  );
}
