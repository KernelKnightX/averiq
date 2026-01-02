export default function Consulting() {
  return (
    <div className="w-full bg-white">
      <section className="bg-[#1f2d3d] text-white py-10">
        <h1 className="text-center text-3xl font-semibold">
          Consulting
        </h1>
        <p className="text-center mt-4 text-lg">
          Data & AI Readiness Assessment & Roadmap
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Moving Beyond Generic Strategies to Enterprise-Grade AI Alignment
        </h2>

        <p className="mb-8">
          <strong>Generic AI strategies often fail because they lack the necessary nuance for your specific business needs.
          Our boutique assessment performs a deep-dive into the six critical pillars required to transform your
          enterprise into a fully AI-aligned organization.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src="/Service1.png"
            alt="AI Readiness Assessment"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />

          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Data Readiness & Contextual Depth:</strong> Transition from data silos to intelligence by
              structuring your data into a "brain" that AI can reason with.
            </li>
            <li>
              <strong>Strategic Alignment & Use-Case ROI:</strong> Avoid the "experimentation trap" by ensuring every
              AI initiative is tied to clear KPIs and immediate value.
            </li>
            <li>
              <strong>Technical Orchestration & Infrastructure:</strong> Build a secure, cost-effective foundation
              that connects LLMs to your private data for enterprise-grade scale.
            </li>
            <li>
              <strong>Culture & Growth Mindset:</strong> Shift the mindset from fear of replacement to empowerment
              through AI augmentation.
            </li>
            <li>
              <strong>Talent Architecture & Literacy:</strong> Identify and bridge skill gaps to design the right team
              structure for long-term AI evolution.
            </li>
            <li>
              <strong>Ethics, Governance & Trust:</strong> Implement the necessary guardrails and verifiable logic to
              ensure transparent, unbiased, and compliant outcomes.
            </li>
          </ol>
        </div>

        <p className="mt-6 font-semibold text-[#0A6190]">
          Assessment Duration: 2 – 4 Weeks
        </p>
      </section>
    </div>
  );
}