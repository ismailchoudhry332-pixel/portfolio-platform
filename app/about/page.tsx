import CTA from "@/components/CTA";

export const metadata = {
  title: "About | Ismail Chaudhry",
  description: "Operations, Systems & Automation Engineer focused on preserving intent from idea to implementation.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <article className="max-w-[680px] mx-auto px-6 pt-[120px] pb-24">
        {/* Opening Context */}
        <section className="mb-20">
          <h1 className="text-6xl mb-12">About</h1>
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#E5E5E5]">
            <img src="/about-portrait.jpg" alt="Ismail Chaudhry working" className="w-full h-auto object-cover" />
          </div>
          <p className="text-lg leading-relaxed">
            I build systems that preserve intent from idea to execution — so what
            founders envision actually gets delivered. Most execution failures aren't
            technical. They're structural. I fix the structure.
          </p>
        </section>

        {/* The Pattern I Kept Seeing */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl mb-8 font-bold">The Pattern I Kept Seeing</h2>
          <p className="text-lg leading-relaxed mb-6">
            Early in my career, I worked across operations, product, and technical
            implementation. The same breakdown happened everywhere:
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A founder or leader would have clear intent. They'd communicate it to their
            team. The team would execute. And somewhere between intent and delivery,
            the original vision would drift.
          </p>
          <p className="text-lg leading-relaxed">
            Not because anyone was incompetent. Not because of bad communication. But
            because the structure didn't exist to preserve intent through execution.
          </p>
        </section>

        {/* The Shift */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl mb-8 font-bold">The Shift</h2>
          <p className="text-lg leading-relaxed mb-6">
            I realized that the most valuable skill I could develop wasn't mastering
            tools or frameworks. It was understanding where execution breaks down — and
            building systems that prevent that breakdown.
          </p>
          <p className="text-lg leading-relaxed">
            That's what I do now. I identify the structural gaps between intent and
            delivery. I design systems that close those gaps. I remove human dependency
            where it causes failure.
          </p>
        </section>

        {/* Context I've Applied This In */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl mb-12 font-bold">Context I've Applied This In</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl mb-4 font-bold">
                Operations broke when scaling from 5 to 18 vehicles
              </h3>
              <p className="text-lg leading-relaxed">
                Transportation company couldn't keep compliance tracking manual anymore.
                Built automated system that removed human dependency from deadline
                monitoring. Violations dropped 87%. Operations manager stopped working
                weekends.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4 font-bold">
                Cross-functional coordination had no single source of truth
              </h3>
              <p className="text-lg leading-relaxed">
                Multi-entity business group couldn't see revenue in real-time. Each
                company used different systems. Reporting took 2 weeks. Built unified
                data pipeline that made visibility instant and eliminated manual
                reconciliation.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4 font-bold">
                Client onboarding created bottlenecks in sales
              </h3>
              <p className="text-lg leading-relaxed">
                Service business closed deals but couldn't onboard fast enough. 15
                manual steps across 3 departments. Designed automated workflow that
                reduced onboarding from 5 days to 2 hours. Sales could scale without
                ops breaking.
              </p>
            </div>
          </div>
        </section>

        {/* Standards & Values */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl mb-12 font-bold">Standards & Values</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl mb-4 font-bold">Ownership</h3>
              <p className="text-lg leading-relaxed">
                If I take on a problem, I own it through to resolution. No handoffs
                into ambiguity. No "that's not my job." Execution doesn't drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-bold">Integrity</h3>
              <p className="text-lg leading-relaxed">
                I tell you what I see, not what you want to hear. If something won't
                work, I'll say so. If I don't know, I'll say that too.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-bold">Respect</h3>
              <p className="text-lg leading-relaxed">
                I work with people who value clarity and accountability. I don't work
                in environments where disrespect is tolerated. Life's too short.
              </p>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl mb-12 font-bold">How I Work</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl mb-4 font-bold">1. Clarify intent</h3>
              <p className="text-lg leading-relaxed">
                What outcome are you actually trying to create? Not features — outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-bold">2. Make constraints explicit</h3>
              <p className="text-lg leading-relaxed">
                Time, resources, dependencies, non-negotiables. Clarity prevents drift.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-bold">3. Design the system</h3>
              <p className="text-lg leading-relaxed">
                Build the structure that preserves intent through execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-bold">4. Remove human dependency where it causes failure</h3>
              <p className="text-lg leading-relaxed">
                Automate what breaks when left to memory or manual process.
              </p>
            </div>
          </div>
        </section>

        {/* Forward-looking Close */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed mb-6">
            If you're a founder or product leader who's tired of execution drift — who
            wants systems that actually preserve intent — let's talk.
          </p>
          <p className="text-lg leading-relaxed">
            I work with teams who value clarity over comfort and accountability over
            excuses.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-[#E0E0E0]">
          <CTA />
        </div>
      </article>
    </div>
  );
}
