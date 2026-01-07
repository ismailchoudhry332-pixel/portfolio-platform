export const metadata = {
  title: "Work With Me | Ismail Chaudhry",
  description: "Book a 15-minute fit check to discuss execution challenges and see if we're a good match.",
};

export default function WorkWithMe() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[680px] mx-auto px-6 py-24">
        <h1 className="text-4xl mb-16">Work With Me</h1>

        {/* What This Call Is */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">What This Call Is</h2>
          <ul className="space-y-3 text-lg text-accent">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>A 15-minute fit check</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Diagnostic, not sales</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>A mutual decision about whether we should work together</span>
            </li>
          </ul>
        </section>

        {/* What This Is NOT */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">What This Is NOT</h2>
          <ul className="space-y-3 text-lg text-accent">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Not free consulting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Not instant estimates or proposals</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Not a pitch deck review or ideation session</span>
            </li>
          </ul>
        </section>

        {/* Who This Is For */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Who This Is For</h2>
          <ul className="space-y-3 text-lg text-accent">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Teams with real execution problems (not hypothetical future needs)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Owners who value clarity and accountability over comfortable ambiguity
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                People who want systems that work, not impressive-sounding solutions
              </span>
            </li>
          </ul>
        </section>

        {/* Who This Is Not For */}
        <section className="mb-16">
          <h2 className="text-2xl mb-4">Who This Is Not For</h2>
          <ul className="space-y-3 text-lg text-accent">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Environments where disrespect is tolerated</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Vague problem statements or "we'll figure it out later" mindset</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Tool-shopping or looking for the latest tech trends</span>
            </li>
          </ul>
        </section>

        {/* Calendly Embed Placeholder */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">Book a Fit Check</h2>
          <div className="bg-[#F5F5F5] border-2 border-border p-12 text-center">
            <p className="text-lg text-accent mb-4">
              Calendly embed will be placed here
            </p>
            <p className="text-sm text-accent">
              (Embed code to be added with your Calendly account details)
            </p>
            <div className="mt-8 text-left space-y-4">
              <p className="text-base text-accent">
                <strong className="text-foreground">Implementation note:</strong>
              </p>
              <p className="text-sm text-accent">
                Replace this placeholder with your Calendly embed code. Example:
              </p>
              <pre className="text-xs bg-white p-4 rounded overflow-x-auto">
{`<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/your-link?hide_event_type_details=1&hide_gdpr_banner=1"
  style={{ minWidth: "320px", height: "700px" }}
/>`}
              </pre>
              <p className="text-sm text-accent">
                Don't forget to add the Calendly script to your layout or this page.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
