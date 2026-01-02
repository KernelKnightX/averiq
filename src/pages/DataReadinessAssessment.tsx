export default function DataReadinessAssessment() {
  return (
    <div className="w-full bg-white">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <section className="bg-[#1f2d3d] text-white py-10">
        <h1 className="text-center text-3xl font-semibold">
        Data & AI Advisory & Consulting
        </h1>
      </section>

      {/* ================================================= */}
      {/* SECTION 1 */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          DATA & AI Readiness Assessment & Roadmap
        </h2>

        <p className="mb-8">
          <strong>Moving Beyond Generic Strategies to Enterprise-Grade AI Alignment</strong>{" "}
          Generic AI strategies often fail because they lack the necessary nuance for your specific business needs.
          Our boutique assessment performs a deep-dive into the six critical pillars required to transform your
          enterprise into a fully AI-aligned organization.
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

        <p className="ml-6 font-semibold text-center text-blue-700"><br/>
          Assessment Duration: 2 – 4 Weeks
        </p>
      </section>

      <section className="text-center py-1">
<a href="/contact">
  <button className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084d73] text-white px-10 py-4 rounded-lg font-medium transition-colors">
    Talk to Experts
  </button>
</a>

</section>

            {/* ================================================= */}
      {/* SECTION 2 */}
      {/* ================================================= */}
            <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Context Engineering: Building the AI Semantic Layer​
        </h2>

        <p className="mb-8">
          <strong>Transforming raw enterprise data into a structured, searchable brain for hallucination-free AI..</strong>{" "}
        
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src="/service2.png"
            alt="AI Readiness Assessment"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />

          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Knowledge Graph Data Modeling:</strong> We design semantic layers that
              map relationships between your data points, moving from flat "rows
              and columns" to a web of interconnected enterprise knowledge that
              AI can actually understand.
            </li>
            <li>
              <strong>Unified Data Frameworks:</strong> We implement frameworks designed to
              ingest and harmonize unstructured (PDFs, emails, transcripts), semi-
              structured (JSON, logs), and structured (SQL, ERP) data into a single
              source of truth.​
            </li>
            <li>
              <strong>GraphRAG Implementation:</strong>  Staying ahead of market trends, we
              integrate Knowledge Graphs with Large Language Models (LLMs) to
              provide "grounded" context, significantly reducing hallucinations and
              improving the accuracy of complex queries.​
            </li>
            <li>
              <strong>Ontology & Taxonomy Design::</strong> We build the "vocabulary" of your
              business, ensuring the AI understands your specific industry jargon,
              internal acronyms, and unique operational nuances.​
            </li>
            <li>
              <strong>Metadata Enrichment & Lineage:</strong> We automate the process of
              tagging and tracking data, ensuring that every piece of information
              used by your AI is traceable, verifiable, and governed.​
            </li>
          </ol>
        </div>
      </section>

      <section className="text-center py-1">
<a href="/contact">
  <button className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084d73] text-white px-10 py-4 rounded-lg font-medium transition-colors">
    Talk to Experts
  </button>
</a>
</section>
      
    </div>
  );
}
