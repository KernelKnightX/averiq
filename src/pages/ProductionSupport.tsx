export default function ProductionSupport() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ================================================= */}
      {/* HEADER — LEFT CONTENT + RIGHT OTHER SERVICES */}
      {/* ================================================= */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[3fr_1fr] gap-12">

          {/* LEFT — SERVICE HEADER */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
              Service
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Production Support
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              Reliability, governance, and peace of mind for mission-critical AI and
              Knowledge Graph systems operating in production.
            </p>
          </div>

          {/* RIGHT — OTHER SERVICES */}
          <aside className="hidden md:block border-l border-slate-200 pl-4 -ml-32">
            <p className="text-sm font-semibold text-slate-500 uppercase mb-4">
              Other Services
            </p>

            <ul className="grid grid-cols-[max-content_max-content] gap-x-10 gap-y-3 text-slate-700">
              <li>
                <a
                  href="/data-readiness-assessment"
                  className="hover:text-[#0A6190] transition whitespace-nowrap"
                >
                  Data & AI Advisory →
                </a>
              </li>

              <li>
                <a
                  href="/use-case-delivery"
                  className="hover:text-[#0A6190] transition whitespace-nowrap"
                >
                  Use Case Delivery →
                </a>
              </li>

              <li>
                <a
                  href="/talent-augmentation"
                  className="hover:text-[#0A6190] transition whitespace-nowrap"
                >
                  Talent Augmentation →
                </a>
              </li>

              <li className="font-medium text-[#0A6190] whitespace-nowrap">
                Production Support
              </li>
            </ul>
          </aside>

        </div>
      </section>

      {/* ================================================= */}
      {/* INTRO + IMAGE */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">

          {/* TEXT */}
          <div>
            <p className="text-slate-700 leading-7 text-justify">
              <strong>Reliability, Governance, and Peace of Mind for Your AI Ecosystem </strong>{" "}
              Deploying an AI or Graph platform is only the beginning. The true
              challenge lies in maintaining high availability, managing "model drift,"
              and ensuring your Knowledge Graph remains accurate as your data
              evolves. We provide comprehensive L1–L3 Production Support to ensure
              your mission-critical AI systems are always performing at their
              peak. Whether we are acting as your primary support layer or
              augmenting your internal AI Center of Excellence (CoE), we provide
              the technical vigilance required to turn experimental pilots into
              stable enterprise assets.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/productionsupport.png"
              alt="Production Support Visual"
              className="w-full max-w-md border rounded-md"
            />
          </div>

        </div>

        {/* SEPARATOR */}
        <div className="my-8 h-px w-24 bg-slate-200" />

        {/* SUPPORT TIERS */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            AverIQ Support Tiers
          </h3>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
            <li>
              <strong>L1: Monitoring & Basic Troubleshooting:</strong>{" "}
              24/7 monitoring of system health, API uptime, and basic user-access
              issues. We catch the small problems before they impact your business.
            </li>

            <li>
              <strong>L2: Technical Support & Optimization:</strong>{" "}
              In-depth troubleshooting of data pipeline failures, query performance
              issues within your Knowledge Graph, and prompt-tuning adjustments.
            </li>

            <li>
              <strong>L3: Specialized Engineering Support:</strong>{" "}
              Deep-tier intervention for complex architectural failures, model
              retraining, and schema evolutions in your Graph environment.
            </li>
          </ul>
        </div>

      </section>

      {/* ================================================= */}
      {/* WHY WITH AVERIQ */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-4">
          Why with AverIQ?
        </h3>

        <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
          <li>
            <strong className="text-[#0A6190]">CoE Partnership:</strong>{" "}
            We don't work in a silo. We work with or on behalf of your Center of
            Excellence, providing the documentation and feedback loops your
            leadership needs to govern AI effectively.
          </li>

          <li>
            <strong className="text-[#0A6190]">Graph-Specific Expertise:</strong>{" "}
            Standard IT support often lacks the nuance required for Graph databases.
            We understand the specific complexities of triple-stores, vector
            databases, and semantic relationships.
          </li>

          <li>
            <strong className="text-[#0A6190]">Proactive Reliability:</strong>{" "}
            We proactively monitor for hallucination spikes, data drift, and
            latency issues to ensure the user experience remains consistent.
          </li>

          <li>
            <strong className="text-[#0A6190]">Risk Mitigation:</strong>{" "}
            Our team ensures that security protocols, access controls, and data
            privacy standards are strictly maintained in the production environment.
          </li>
        </ul>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
          <p className="text-lg text-slate-700">
            Shift your focus back to innovation while we ensure your AI foundation
            remains rock-solid and reliable.
          </p>
          <a href="/contact">
            <button className="bg-[#0A6190] hover:bg-[#084C6B] text-white px-8 py-3 rounded-md font-medium transition">
              Contact Us
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
