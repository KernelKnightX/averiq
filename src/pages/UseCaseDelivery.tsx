export default function UseCaseDelivery() {
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
              Use Case Delivery
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Moving AI initiatives from pilots and proofs-of-concept into
              production-ready systems that deliver measurable business value.
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

              {/* Use Case Delivery — ACTIVE */}
              <div
                className="
                  bg-[#0A6190] text-white
                  rounded-md
                  px-6 py-6 text-center
                  font-semibold
                  shadow-sm
                "
              >
                Use Case Delivery
              </div>

              {/* Talent Augmentation */}
              <a
                href="/talent-augmentation"
                className="
                  border border-slate-300 rounded-md
                  px-6 py-6 text-center
                  text-slate-800 font-medium
                  hover:border-[#0A6190]
                  transition
                "
              >
                Talent Augmentation
              </a>

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
      {/* MAIN CONTENT */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* INTRO */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">

          <div>
            <h2 className="text-2xl font-bold mb-3">
              From Pilot to Production: Realizing Tangible AI Value
            </h2>

            <p className="text-slate-700 leading-7 text-justify mb-3">
              <strong>
                Most AI projects fail because they exist in a vacuum.
              </strong>{" "}
              Our Use Case Delivery service ensures that every solution we build
              is not just a “cool demo,” but a production-ready asset.
            </p>

            <p className="text-slate-700 leading-7 text-justify">
              We bridge the gap between business intent and technical reality by
              deploying high-impact applications that simultaneously strengthen
              your <strong>Knowledge Graph</strong> and{" "}
              <strong>Context Engineering</strong> layers.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/service3.png"
              alt="Use Case Delivery"
              className="w-full max-w-md border rounded-md"
            />
          </div>

        </div>

        {/* SEPARATOR */}
        <div className="my-8 h-px w-24 bg-slate-200" />

        {/* WHAT WE DELIVER */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            What we deliver
          </h3>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">

            <li>
              <strong>Strategic Use Case Discovery:</strong>{" "}
              We identify high-value, low-complexity opportunities aligned with
              your ROI goals, ensuring early wins that build organizational
              momentum.
            </li>

            <li>
              <strong>Context-Aware Development:</strong>{" "}
              Use cases are built directly on top of your semantic data layer,
              grounding outputs in your business logic, reducing hallucinations,
              and increasing user trust.
            </li>

            <li>
              <strong>End-to-End Build & Deployment:</strong>{" "}
              We manage the full lifecycle—from prompt engineering and model
              selection to API integration and UI/UX delivery—moving ideas from
              sandbox to production.
            </li>

            <li>
              <strong>Knowledge Loop Integration:</strong>{" "}
              Every deployed use case feeds back into your Enterprise Knowledge
              Graph, enriching context and making future use cases faster and
              cheaper to build.
            </li>

            <li>
              <strong>Scalable AI Orchestration:</strong>{" "}
              We implement LLMOps, security guardrails, and cost monitoring so
              solutions remain robust, secure, and sustainable at scale.
            </li>

          </ul>
        </div>

      </section>

      {/* ================================================= */}
      {/* DUAL-VALUE APPROACH */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border border-slate-300 rounded-2xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            The “Dual-Value” Approach
          </h3>

          <p className="text-slate-700 leading-7 mb-4">
            When you partner with us for Use Case Delivery, you get two results
            for the price of one:
          </p>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">

            <li>
              <strong>Immediate Impact:</strong>{" "}
              A working AI solution that solves a specific pain point—such as
              automated underwriting, intelligent customer support, or
              predictive supply chain analysis.
            </li>

            <li>
              <strong>Long-Term Asset:</strong>{" "}
              A more mature data foundation. By establishing Context Engineering
              infrastructure during the build, we leave your enterprise more
              AI-ready than we found it.
            </li>

          </ul>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
          <p className="text-lg text-slate-700">
            Ready to move from pilots to production?
          </p>
          <a href="/contact">
            <button className="bg-[#0A6190] hover:bg-[#084C6B] text-white px-8 py-3 rounded-md font-medium transition">
              Talk to Experts
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
