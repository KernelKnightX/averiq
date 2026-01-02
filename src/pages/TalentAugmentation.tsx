export default function TalentAugmentation() {
  return (
    <div className="w-full bg-white">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <section className="bg-[#1f2d3d] text-white py-6">
        <h2 className="text-center text-3xl font-semibold">
          Talent Augmentation
        </h2>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-6">
        {/* Intro text */}
        <p className="mb-10">
          <strong>Precision Expertise to Accelerate Your AI Roadmap</strong>{" "}
          The biggest bottleneck in AI transformation isn't technology—it's the global shortage of specialized talent. We provide the elite technical
          muscle you need to move from "backlog" to "benchmark." Whether you need
          a single specialist to bridge a gap or a full-stack squad to lead a
          project, we provide vetted experts who integrate seamlessly into your
          existing workflows.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Visual */}
          <div>
            <img
              src="/TA.png"
              alt="Talent Augmentation Visual"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <p className="mt-4 text-sm text-center font-semibold text-gray-600">
              
            </p>
          </div>

          {/* RIGHT: Content */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Our Specialized Talent Pool
            </h3>

            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong>Data Scientists & AI Specialists:</strong> Experts in model
                selection, fine-tuning, and prompt engineering to build
                high-performance intelligence.
              </li>

              <li>
                <strong>Knowledge Graph & Ontology Experts:</strong> Rare specialists
                who can design and build the semantic relationships that power
                context-aware AI.
              </li>

              <li>
                <strong>Data & Analytics Engineers:</strong> The architects who build
                the robust pipelines, cleaning and prepping your data for
                "AI-ready" status.
              </li>

              <li>
                <strong>BI & Reporting Experts:</strong> Specialists who turn complex
                data into actionable executive insights through high-fidelity
                visualization.
              </li>

              <li>
                <strong>Full-Stack Developers:</strong> Engineers experienced in
                integrating LLMs and AI workflows into your existing product
                ecosystem.
              </li>

              <li>
                <strong>Optimization Experts:</strong> Specialists focused on model
                latency, cost-efficiency, and system performance to ensure your AI
                is sustainable.
              </li>
            </ul>
          </div>
        </div>
      </section>
{/* ================================================= */}
{/* WHY AUGMENT WITH US */}
{/* ================================================= */}
<section className="max-w-7xl mx-auto px-6 py-6">
  <h3 className="text-2xl font-bold mb-6">
    Why Augment with Us?
  </h3>

  <ul className="list-disc ml-6 space-y-4">
    <li>
      <strong className="text-[#0A6190]">Immediate Speed-to-Value:</strong>{" "}
      Skip the 6-month hiring cycle. Our experts hit the ground running,
      often onboarding in a matter of days.
    </li>

    <li>
      <strong className="text-[#0A6190]">"Boutique" Quality:</strong>{" "}
      We don't just provide "bodies"; we provide specialists who understand
      the Context Engineering and AI Assessment frameworks we advocate for.
    </li>

    <li>
      <strong className="text-[#0A6190]">Flexible Scaling:</strong>{" "}
      Scale your team up for a high-intensity build or down once a project
      reaches maintenance mode.
    </li>

    <li>
      <strong className="text-[#0A6190]">Cross-Pollination:</strong>{" "}
      Our talent brings "best-in-class" experience from across multiple
      industries, helping your internal team upskill and learn modern best
      practices.
    </li>
  </ul>
</section>

{/* ================================================= */}
{/* ENGAGEMENT MODELS */}
{/* ================================================= */}
<section className="max-w-7xl mx-auto px-6 py-6">
  <div className="border-2 border-gray-800 rounded-3xl p-10">
    <h3 className="text-2xl font-bold mb-8">
      Engagement Models
    </h3>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-[#0A6190]/10 rounded-xl p-6">
        <h4 className="font-semibold text-lg mb-2">
          Individual Contributor
        </h4>
        <p>
          Single experts to fill specific gaps in your data analyst /
          scientists or Knowledge Graph engineer.
        </p>
      </div>

      <div className="bg-[#0A6190]/10 rounded-xl p-6">
        <h4 className="font-semibold text-lg mb-2">
          Strategic Squads
        </h4>
        <p>
          A dedicated, multi-disciplinary team to own a specific use case
          from end-to-end.
        </p>
      </div>

      <div className="bg-[#0A6190]/10 rounded-xl p-6">
        <h4 className="font-semibold text-lg mb-2">
          Fractional Leadership
        </h4>
        <p>
          Part-time Data/AI Leads to guide your strategy without the cost of
          a full-time executive.
        </p>
      </div>
    </div>
  </div>
</section>

{/* ================================================= */}
{/* TALENT AUGMENTATION CTA STRIP */}
{/* ================================================= */}
<section className="bg-[#1f2d3d] text-white py-6">
  <p className="text-center text-lg font-medium">
    Don't let talent scarcity slow your innovation. We provide the expertise
    you need to stay ahead.
  </p>
</section>

<section className="text-center py-10">
<a href="/contact">
  <button className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-10 py-4 rounded-lg font-medium transition">
    Contact Us
  </button>
</a>
</section>
    </div>
  );
}