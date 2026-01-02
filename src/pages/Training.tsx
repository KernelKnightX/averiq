export default function Training() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ================= HEADER ================= */}
      <section className="bg-slate-900 py-4">
        <h1 className="text-center text-white text-xl font-semibold tracking-wide">
          Training & Literacy
        </h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-slate-700">
          <span className="font-semibold text-slate-900">
            Empowering Your People to Lead the AI Revolution
          </span>{' '}
          Technology is only half the battle; the other half is human capability.
          Our training programs are designed to close the "AI Literacy Gap" by
          providing both executive leaders and technical teams with the mental
          models and hands-on skills required to succeed. We move your
          organization beyond the hype and into practical, high-impact
          application.
        </p>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/training.png"
            alt="AI Training Pillars"
            className="max-w-md w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Our Core Training Pillars
          </h2>

          <ul className="space-y-5 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">
                Executive AI Strategy & Literacy:
              </span>{' '}
              Designed for business and IT leaders to understand the latest AI
              trends. We provide practical guidance for better decision-making,
              risk management, and ROI prioritization.
            </li>

            <li>
              <span className="font-semibold text-slate-900">
                Technical Upskilling & Mastery:
              </span>{' '}
              Hands-on training for engineers and data teams. We cover modern
              platforms, methods, and specialized tools, including Knowledge
              Graph construction and LLM orchestration.
            </li>

            <li>
              <span className="font-semibold text-slate-900">
                Prompt Engineering & AI Productivity:
              </span>{' '}
              Teaching non-technical staff how to use generative AI tools
              effectively to automate routine tasks and enhance creative
              workflows safely.
            </li>

            <li>
              <span className="font-semibold text-slate-900">
                Governance & Ethical Frameworks:
              </span>{' '}
              Training on the responsible use of AI, focusing on data privacy,
              bias mitigation, and establishing an internal AI “Code of
              Conduct.”
            </li>
          </ul>
        </div>
      </section>

      {/* ================= WHY TRAIN WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">
          Why Train with Us?
        </h2>

        <ul className="space-y-4 text-slate-700">
          <li>
            <span className="font-semibold text-blue-700">
              Practical Over Theoretical:
            </span>{' '}
            We don’t just lecture; we build. Our sessions are grounded in
            real-world scenarios and the specific frameworks (like Context
            Engineering) we use in our consulting practice.
          </li>

          <li>
            <span className="font-semibold text-blue-700">
              Tailored Curriculum:
            </span>{' '}
            We don’t believe in “one size fits all.” We customize our training
            modules to align with your industry, your tech stack, and your
            specific AI maturity level.
          </li>

          <li>
            <span className="font-semibold text-blue-700">
              Bridge the Business–IT Divide:
            </span>{' '}
            Our training creates a common language between business stakeholders
            and technical builders, ensuring smoother project delivery.
          </li>

          <li>
            <span className="font-semibold text-blue-700">
              Future-Proofing Your Talent:
            </span>{' '}
            By helping teams build hands-on skills, we ensure your organization
            isn’t just buying AI solutions — it’s growing the internal muscle
            to maintain and evolve them.
          </li>
        </ul>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="border rounded-3xl p-8">
          <h2 className="text-xl font-semibold mb-8">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Executive Workshop</h3>
              <p className="text-slate-700 text-sm">
                High-level, intensive sessions focused on AI trends, strategic
                decision-making, risk management, and ROI prioritization.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: Executive Leaders
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                AI Productivity & Literacy
              </h3>
              <p className="text-slate-700 text-sm">
                Practical training on using Generative AI tools to automate
                routine tasks, enhance creative workflows, and understand
                ethical guardrails.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: All Employees (technical / non-technical)
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Technical Bootcamps & Deep-Dives
              </h3>
              <p className="text-slate-700 text-sm">
                Multi-day, hands-on engineering sessions covering Knowledge
                Graph construction, LLM orchestration, and modern data stacks.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: Technical Teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white text-lg mb-6">
            Equip your team with the skills to turn AI potential into enterprise performance.
          </p>

<a href="/contact">
  <button className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084d73] text-white px-10 py-4 rounded-lg font-medium transition-colors">
    Contact
  </button>
</a>

        </div>
      </section>
    </div>
  );
}
