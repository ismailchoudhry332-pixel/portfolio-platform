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
            {/* Back Link */}
            <div className="max-w-[1200px] mx-auto px-6 pt-[100px]">
                <Link
                    href="/case-studies"
                    className="text-sm text-accent-cyan hover:text-accent-purple transition-colors font-mono"
                >
                    ← Back to Case Studies
                </Link>
            </div>

            {/* Hero Section - Full Width Visual Anchor */}
            <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-16">
                <div className="bento-box overflow-hidden">
                    <img
                        src="/luxury-watch-hero.jpg"
                        alt="Luxury Watch Accounting Engine - Watch face to data grid transition visualization"
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl mt-8 mb-4">
                    Luxury Watch Accounting Engine
                </h1>
                <p className="text-xl text-foreground-muted max-w-[800px]">
                    A custom-engineered Notion ecosystem that replaced manual financial tracking for a US-based luxury watch brand.
                </p>
            </section>

            {/* Problem + System Specs - 7/5 Split Grid */}
            <section className="max-w-[1200px] mx-auto px-6 py-16">
                <div className="grid grid-cols-12 gap-6">
                    {/* Problem - Cols 1-7 */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className="bento-box p-8 h-full">
                            <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">The Problem</p>
                            <h2 className="text-3xl mb-8">"Operational Drift" in High-Ticket Sales</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
                                <p>
                                    A US-based luxury watch retailer was managing <strong className="text-accent-cyan">six-figure inventory</strong> using fragmented tools, leading to significant "intent drift" between sales and accounting.
                                </p>
                                <p>
                                    Manual entry errors in margin calculations and tax compliance were creating <strong className="text-foreground">financial blind spots</strong>.
                                </p>
                                <p>
                                    The brand lacked a "single source of truth" for real-time inventory valuation and net worth tracking.
                                </p>
                                <p className="text-accent-light italic">
                                    → 0% visibility into real-time P&L
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* System Specs Sidebar - Cols 8-12 */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="bento-box p-8 h-full border-accent-cyan">
                            <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">System Dependencies</p>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between py-3 border-b border-border">
                                    <span className="font-mono text-foreground">Notion</span>
                                    <span className="text-xs text-accent-light">Core Database</span>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-border">
                                    <span className="font-mono text-foreground">Relational Logic</span>
                                    <span className="text-xs text-accent-light">Data Architecture</span>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-border">
                                    <span className="font-mono text-foreground">Advanced Formulas</span>
                                    <span className="text-xs text-accent-light">Automation Layer</span>
                                </li>
                                <li className="flex items-center justify-between py-3 border-b border-border">
                                    <span className="font-mono text-foreground">Tax Compliance</span>
                                    <span className="text-xs text-accent-light">Financial Logic</span>
                                </li>
                                <li className="flex items-center justify-between py-3">
                                    <span className="font-mono text-foreground">Executive Dashboard</span>
                                    <span className="text-xs text-accent-light">Visualization</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution - Full 12-Column Grid with 3-Column Cards */}
            <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
                <p className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">The Engineered Solution</p>
                <h2 className="text-3xl mb-12">A Relational Logic Ecosystem</h2>

                <div className="grid grid-cols-12 gap-6">
                    {/* Inventory Core */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="bento-box p-6 h-full">
                            <h3 className="text-xl mb-4 font-mono text-accent-cyan">Centralized Inventory Core</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Built a relational database that tracks every asset from acquisition to final sale, ensuring identical data journeys.
                            </p>
                        </div>
                    </div>

                    {/* Automated Financials */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="bento-box p-6 h-full">
                            <h3 className="text-xl mb-4 font-mono text-accent-cyan">Automated Financial Logic</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Advanced Notion formulas automate margin calculations, sales tax, and shipping overhead—removing human dependency.
                            </p>
                        </div>
                    </div>

                    {/* Executive Dashboard */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="bento-box p-6 h-full">
                            <h3 className="text-xl mb-4 font-mono text-accent-cyan">Executive Dashboard</h3>
                            <p className="text-foreground-muted leading-relaxed">
                                High-fidelity dashboard for real-time visualization of monthly budgets, expenses, and annual overviews.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcome Stats - Grid */}
            <section className="max-w-[1200px] mx-auto px-6 py-16 border-t border-border">
                <div className="grid grid-cols-12 gap-6">
                    {/* Outcome Text - Cols 1-7 */}
                    <div className="col-span-12 lg:col-span-7">
                        <p className="text-sm uppercase tracking-wide text-accent-purple mb-6 font-mono">The Outcome</p>
                        <h2 className="text-3xl mb-8">"Zero Drift" Financial OS</h2>
                        <div className="space-y-6 text-lg leading-relaxed text-foreground-muted">
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
                        <blockquote className="mt-8 border-l-2 border-accent-purple pl-6 italic text-xl text-foreground-muted">
                            "Systems aren't just about code; they are about <span className="text-accent-cyan">preserving the financial intent</span> of the business."
                        </blockquote>
                    </div>

                    {/* Stats Sidebar - Cols 8-12 */}
                    <div className="col-span-12 lg:col-span-5 space-y-6">
                        <div className="bento-box p-6 text-center">
                            <p className="text-4xl font-bold text-accent-cyan mb-2 font-mono">100%</p>
                            <p className="text-sm text-foreground-muted">Pricing Parity Across Channels</p>
                        </div>
                        <div className="bento-box p-6 text-center">
                            <p className="text-4xl font-bold text-accent-purple mb-2 font-mono">Hours → Sec</p>
                            <p className="text-sm text-foreground-muted">Reporting Time Reduction</p>
                        </div>
                        <div className="bento-box p-6 text-center">
                            <p className="text-4xl font-bold text-accent-cyan mb-2 font-mono">90 Days</p>
                            <p className="text-sm text-foreground-muted">Execution Plan Framework</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
                <div className="bento-box p-12 text-center">
                    <p className="text-xl mb-8 text-foreground-muted">
                        Need a similar solution for your business?
                    </p>
                    <CTA text="Audit My System — Book a Fit Check" className="bg-accent-cyan text-background border-accent-cyan hover:bg-accent-purple hover:border-accent-purple font-mono font-bold" />
                </div>
            </section>
        </div>
    );
}
