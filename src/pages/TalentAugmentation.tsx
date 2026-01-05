export default function TalentAugmentation() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ================================================= */}
      {/* HEADER — LEFT CONTENT + RIGHT SERVICE SWITCHER */}
      {/* ================================================= */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-[1.2fr_0.8fr] gap-1 items-center">

          {/* ================= LEFT — SERVICE INFO ================= */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
              Service
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
              Talent Augmentation
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Precision expertise to accelerate your AI roadmap with vetted
              specialists who integrate seamlessly into your teams.
            </p>
          </div>

          {/* ================= RIGHT — SERVICE SWITCHER ================= */}
          <div className="border-l border-slate-200 pl-12">
            <div className="grid grid-cols-2 gap-5 max-w-md">

              {/* Data & AI Advisory */}
              <a
                href="/data-readiness-assessment"
                className="
                  border border-slate-300 rounded-md
                  px-6 py-6 text-center
                  text-slate-800 font-medium
                  hover:border-[#0A6190]
                  transition
                "
              >
                Data & AI Advisory
              </a>

              {/* Use Case Delivery */}
              <a
                href="/use-case-delivery"
                className="
                  border border-slate-300 rounded-md
                  px-6 py-6 text-center
                  text-slate-800 font-medium
                  hover:border-[#0A6190]
                  transition
                "
              >
                Use Case Delivery
              </a>

              {/* Talent Augmentation — ACTIVE */}
              <div
                className="
                  bg-[#0A6190] text-white
                  rounded-md
                  px-6 py-6 text-center
                  font-semibold
                  shadow-sm
                "
              >
                Talent Augmentation
              </div>

              {/* Production Support */}
              <a
                href="/production-support"
                className="
                  border border-slate-300 rounded-md
                  px-6 py-6 text-center
                  text-slate-800 font-medium
                  hover:border-[#0A6190]
                  transition
                "
              >
                Production Support
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* INTRO + IMAGE */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Precision Expertise to Accelerate Your AI Roadmap
            </h2>

            <p className="text-slate-700 leading-7 text-justify">
              <strong>
                The biggest bottleneck in AI transformation isn’t technology—it’s talent.
              </strong>{" "}
              We provide the elite technical muscle you need to move from backlog
              to benchmark. Whether you need a single specialist or a full-stack
              squad, our experts integrate seamlessly into your workflows.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/TA.png"
              alt="Talent Augmentation"
              className="w-full max-w-md border rounded-md"
            />
          </div>

        </div>

        {/* SEPARATOR */}
        <div className="my-8 h-px w-24 bg-slate-200" />

        {/* TALENT POOL */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            Our Specialized Talent Pool
          </h3>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
            <li>
              <strong>Data Scientists & AI Specialists:</strong>{" "}
              Experts in model selection, fine-tuning, and prompt engineering.
            </li>
            <li>
              <strong>Knowledge Graph & Ontology Experts:</strong>{" "}
              Specialists who design semantic relationships powering context-aware AI.
            </li>
            <li>
              <strong>Data & Analytics Engineers:</strong>{" "}
              Architects of robust pipelines that prepare data for AI-ready status.
            </li>
            <li>
              <strong>BI & Reporting Experts:</strong>{" "}
              Translating complex data into executive-grade insights.
            </li>
            <li>
              <strong>Full-Stack Developers:</strong>{" "}
              Engineers integrating LLMs and AI workflows into existing platforms.
            </li>
            <li>
              <strong>Optimization Experts:</strong>{" "}
              Specialists focused on latency, cost efficiency, and system performance.
            </li>
          </ul>
        </div>
      </section>

      {/* ================================================= */}
      {/* WHY AUGMENT WITH US */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-4">
          Why Augment with Us?
        </h3>

        <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
          <li>
            <strong className="text-[#0A6190]">Immediate Speed-to-Value:</strong>{" "}
            Skip the long hiring cycle—our experts onboard in days, not months.
          </li>
          <li>
            <strong className="text-[#0A6190]">Boutique Quality:</strong>{" "}
            Specialists who understand Context Engineering and AI assessment frameworks.
          </li>
          <li>
            <strong className="text-[#0A6190]">Flexible Scaling:</strong>{" "}
            Scale teams up or down as project intensity changes.
          </li>
          <li>
            <strong className="text-[#0A6190]">Cross-Pollination:</strong>{" "}
            Industry-diverse experience that upskills your internal teams.
          </li>
        </ul>
      </section>

      {/* ================================================= */}
      {/* ENGAGEMENT MODELS */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border border-slate-300 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Engagement Models
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0A6190]/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-2">
                Individual Contributor
              </h4>
              <p>
                Single experts to fill specific gaps in data, AI, or knowledge graph roles.
              </p>
            </div>

            <div className="bg-[#0A6190]/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-2">
                Strategic Squads
              </h4>
              <p>
                Dedicated multi-disciplinary teams owning use cases end-to-end.
              </p>
            </div>

            <div className="bg-[#0A6190]/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-2">
                Fractional Leadership
              </h4>
              <p>
                Part-time AI and data leadership without full-time executive cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
          <p className="text-lg text-slate-700">
            Don’t let talent scarcity slow your innovation.
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
