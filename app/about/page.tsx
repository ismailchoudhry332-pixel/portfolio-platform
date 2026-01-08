import CTA from "@/components/CTA";

export const metadata = {
  title: "About | Ismail Chaudhry — The Execution Engine",
  description: "Building deterministic operational infrastructure for high-growth firms. Closing the gap between vision and execution.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-24">

        {/* Hero Section - 7/5 Grid */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          {/* Hero Content - Cols 1-7 */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-5xl md:text-6xl mb-6">
              Ismail Chaudhry: The Execution Engine
            </h1>
            <p className="text-xl text-foreground-muted mb-8">
              Building deterministic operational infrastructure for high-growth firms.
            </p>

            {/* The Manifesto */}
            <div className="bento-box p-8">
              <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">The Manifesto</p>
              <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
                <p>
                  In business, there is a gap between what a leader wants and what actually happens. I call this <strong className="text-accent-cyan">Operational Drift</strong>. I close that gap.
                </p>
                <p>
                  My job is to take a complex vision—whether it's a fleet of 50 coaches, a luxury accounting system, or an e-commerce scale-up—and turn it into a repeatable, automated reality.
                </p>
                <p className="text-foreground italic">
                  I don't just build tools; I build the Operating System for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Portrait - Cols 8-12 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bento-box overflow-hidden">
              <img
                src="/about-portrait.jpg"
                alt="Ismail Chaudhry - Systems Engineer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Experience Ecosystem - 3 Bento Boxes */}
        <section className="mb-20 pt-12 border-t border-border">
          <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">The Experience Ecosystem</p>
          <h2 className="text-3xl mb-12">Where I've Applied This</h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Box 1: Transport & Fleet Ops */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bento-box p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#D31E40]"></div>
                  <h3 className="text-xl font-mono text-accent-cyan">Transport & Fleet Ops</h3>
                </div>
                <div className="space-y-4 text-foreground-muted">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Scale</p>
                    <p className="text-sm">Managing a multi-million pound transport group (Carolean / Sovereign).</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Build</p>
                    <p className="text-sm">Engineered a DDD Pricing Engine with 100% data parity, integrating Google Maps physics and UK safety compliance.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-cyan mb-1 font-mono">The Result</p>
                    <p className="text-sm font-mono text-accent-cyan">24h → &lt;60s quote turnaround</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Tech & BPO */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bento-box p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#2C3E6E]"></div>
                  <h3 className="text-xl font-mono text-accent-cyan">Tech & BPO</h3>
                </div>
                <div className="space-y-4 text-foreground-muted">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Scale</p>
                    <p className="text-sm">Group Operations & Implementation Executive at C2O.net. Leading an IT team of 8+.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Build</p>
                    <p className="text-sm">Architecting SyntraFlow.io, a unified operations platform designed to eliminate fragmented SaaS costs.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-cyan mb-1 font-mono">The Result</p>
                    <p className="text-sm font-mono text-accent-cyan">Centralized cross-border governance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: E-commerce & Digital */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bento-box p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
                  <h3 className="text-xl font-mono text-accent-cyan">E-commerce & Digital</h3>
                </div>
                <div className="space-y-4 text-foreground-muted">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Scale</p>
                    <p className="text-sm">Orchestrating digital growth engines for high-ticket retail.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Build</p>
                    <p className="text-sm">Automated marketing pipelines bridging "Ad Spend" to "Operational Fulfillment."</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-cyan mb-1 font-mono">The Result</p>
                    <p className="text-sm font-mono text-accent-cyan">Zero manual overhead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Dependencies Sidebar + Values */}
        <section className="mb-20 pt-12 border-t border-border">
          <div className="grid grid-cols-12 gap-6">
            {/* Values - Cols 1-8 */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <div className="bento-box p-8">
                <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">Standards & Values</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg mb-3 font-mono text-accent-cyan">Ownership</h3>
                    <p className="text-sm text-foreground-muted">If I take on a problem, I own it through to resolution. No handoffs into ambiguity.</p>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 font-mono text-accent-cyan">Integrity</h3>
                    <p className="text-sm text-foreground-muted">I tell you what I see, not what you want to hear. If something won't work, I'll say so.</p>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 font-mono text-accent-cyan">Respect</h3>
                    <p className="text-sm text-foreground-muted">I work with people who value clarity and accountability. Life's too short otherwise.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Dependencies - Cols 9-12 */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bento-box p-8 h-full border-accent-cyan">
                <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">System Dependencies</p>

                <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Core Stack</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">Logic:</span>
                    <span className="text-xs font-mono text-foreground">Node.js, TypeScript, Python</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">Cache:</span>
                    <span className="text-xs font-mono text-foreground">Redis</span>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Orchestration</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">Workflow:</span>
                    <span className="text-xs font-mono text-foreground">n8n, Make.com</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">CRM:</span>
                    <span className="text-xs font-mono text-foreground">Monday.com</span>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-wide text-accent-light mb-3 font-mono">Frameworks</p>
                <div className="space-y-2">
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">Design:</span>
                    <span className="text-xs font-mono text-foreground">DDD</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-accent-light">Ops:</span>
                    <span className="text-xs font-mono text-foreground">Six Sigma, EOS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-12 border-t border-border">
          <div className="bento-box p-12 text-center">
            <p className="text-xl mb-8 text-foreground-muted">
              If you're tired of execution drift and want systems that preserve intent — let's talk.
            </p>
            <CTA text="Book a Fit Check" className="bg-accent-cyan text-background border-accent-cyan hover:bg-accent-purple hover:border-accent-purple font-mono font-bold" />
          </div>
        </section>
      </div>
    </div>
  );
}
