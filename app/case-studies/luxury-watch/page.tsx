import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata = {
    title: "The Luxury Watch Accounting Architecture | Ismail Chaudhry",
    description: "How a custom-engineered Notion ecosystem replaced manual financial tracking for a US-based luxury watch brand, achieving 100% data parity and real-time P&L visibility.",
    keywords: "Notion Accounting System, Luxury Inventory Automation, No-Code Financial Engineering, Business Logic Automation",
};

export default function LuxuryWatchCaseStudy() {
    return (
        <div className="min-h-screen">
            <article className="max-w-[680px] mx-auto px-6 pt-[120px] pb-24">
                {/* Header */}
                <div className="mb-16">
                    <Link
                        href="/case-studies"
                        className="text-sm text-accent-cyan hover:text-accent-purple transition-colors mb-8 inline-block font-mono"
                    >
                        ← Back to Case Studies
                    </Link>
                    <h1 className="text-4xl md:text-5xl mb-6">
                        The Luxury Watch Accounting Architecture
                    </h1>
                    <p className="text-xl text-foreground-muted leading-relaxed">
                        How a custom-engineered Notion ecosystem replaced manual financial tracking for a US-based luxury watch brand, achieving <span className="text-accent-cyan">100% data parity</span> and <span className="text-accent-purple">real-time P&L visibility</span>.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="mb-16 terminal-border rounded-lg overflow-hidden">
                    <img
                        src="/luxury-watch-dashboard.jpg"
                        alt="3D visualization of a Luxury Watch Accounting System built on Notion by Ismail Chaudhry."
                        className="w-full h-auto"
                    />
                </div>

                {/* Problem Section */}
                <section className="mb-16">
                    <h2 className="text-2xl mb-8">"Operational Drift" in High-Ticket Sales</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
                        <p>
                            A US-based luxury watch retailer was managing <strong className="text-foreground">six-figure inventory</strong> using fragmented tools, leading to significant "intent drift" between sales and accounting.
                        </p>
                        <p>
                            Manual entry errors in margin calculations and tax compliance were creating <strong className="text-foreground">financial blind spots</strong>.
                        </p>
                        <p>
                            The brand lacked a "single source of truth" for real-time inventory valuation and net worth tracking.
                        </p>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="mb-16">
                    <h2 className="text-2xl mb-8">The Engineered Solution: A Relational Logic Ecosystem</h2>

                    <div className="space-y-8">
                        <div className="terminal-border rounded-lg p-6 bg-black/20">
                            <h3 className="text-xl mb-3 font-mono text-accent-cyan">Centralized Inventory Core</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Built a relational database that tracks every asset from acquisition to final sale, ensuring identical data journeys.
                            </p>
                        </div>

                        <div className="terminal-border rounded-lg p-6 bg-black/20">
                            <h3 className="text-xl mb-3 font-mono text-accent-cyan">Automated Financial Logic</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Implemented advanced Notion formulas to automate margin calculations, sales tax, and shipping overhead—removing human dependency where it causes failure.
                            </p>
                        </div>

                        <div className="terminal-border rounded-lg p-6 bg-black/20">
                            <h3 className="text-xl mb-3 font-mono text-accent-cyan">Executive Dashboard</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Created a high-fidelity dashboard for real-time visualization of monthly budgets, expenses, and annual overviews.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Outcome Section */}
                <section className="mb-16">
                    <h2 className="text-2xl mb-8">The "Zero Drift" Outcome</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="terminal-border rounded-lg p-6 text-center bg-black/30">
                            <p className="text-3xl font-bold text-accent-cyan mb-2 font-mono">100%</p>
                            <p className="text-sm text-foreground-muted">Pricing Parity</p>
                        </div>
                        <div className="terminal-border rounded-lg p-6 text-center bg-black/30">
                            <p className="text-3xl font-bold text-accent-purple mb-2 font-mono">Hours → Seconds</p>
                            <p className="text-sm text-foreground-muted">Reporting Time</p>
                        </div>
                        <div className="terminal-border rounded-lg p-6 text-center bg-black/30">
                            <p className="text-3xl font-bold text-accent-cyan mb-2 font-mono">90-Day</p>
                            <p className="text-sm text-foreground-muted">Execution Plan</p>
                        </div>
                    </div>

                    <div className="text-lg leading-relaxed text-foreground-muted space-y-4">
                        <p>
                            <span className="text-accent-cyan font-mono">Precision:</span> Achieved 100% pricing parity across all sales channels.
                        </p>
                        <p>
                            <span className="text-accent-cyan font-mono">Efficiency:</span> Reduced lead-to-quote and financial reporting time from hours to seconds.
                        </p>
                        <p>
                            <span className="text-accent-cyan font-mono">Scalability:</span> Created a "90-Day Execution Plan" framework that allows the brand to scale operations without increasing administrative headcount.
                        </p>
                    </div>
                </section>

                {/* Quote */}
                <section className="mb-16 border-l-2 border-accent-purple pl-8 py-4">
                    <blockquote className="text-2xl italic text-foreground-muted leading-relaxed">
                        "Systems aren't just about code; they are about <span className="text-accent-cyan">preserving the financial intent</span> of the business."
                    </blockquote>
                </section>

                {/* CTA */}
                <div className="text-center pt-12 border-t border-border">
                    <p className="text-lg mb-8 text-foreground-muted">
                        Need a similar solution for your business?
                    </p>
                    <CTA />
                </div>
            </article>
        </div>
    );
}
