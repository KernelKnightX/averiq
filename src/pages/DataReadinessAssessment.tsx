export default function DataReadinessAssessment() {
  return (
    <div className="w-full bg-white text-slate-900">

<section className="border-b">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[3fr_1fr] gap-12">

    {/* LEFT — HEADER */}
    <div className="max-w-xl">
      <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
        Service
      </p>

      <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        Data & AI Advisory & Consulting
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Helping enterprises move from fragmented data and experimental AI
        to trusted, explainable, production-ready systems.
      </p>
    </div>

    {/* RIGHT — OTHER SERVICES */}
<aside className="hidden md:block border-l border-slate-200 pl-4 -ml-32">


  <p className="text-sm font-semibold text-slate-500 uppercase mb-2">
    Other Services
  </p>

<ul className="grid grid-cols-[max-content_max-content] gap-x-10 gap-y-3 text-slate-700">

  {/* Active service */}
  <li className="font-medium text-[#0A6190] whitespace-nowrap">
    Data & AI Advisory
  </li>

  <li className="whitespace-nowrap">
    <a
      href="/use-case-delivery"
      className="hover:text-[#0A6190] transition"
    >
      Use Case Delivery →
    </a>
  </li>

  <li className="whitespace-nowrap">
    <a
      href="/talent-augmentation"
      className="hover:text-[#0A6190] transition"
    >
      Talent Augmentation →
    </a>
  </li>

  <li className="whitespace-nowrap">
    <a
      href="/production-support"
      className="hover:text-[#0A6190] transition"
    >
      Production Support →
    </a>
  </li>

</ul>

</aside>


  </div>
</section>



      {/* ================================================= */}
      {/* CONTEXT ENGINEERING */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-center">

          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Context Engineering: Building the AI Semantic Layer
            </h2>

            <p className="text-slate-700 leading-7 text-justify mb-3">
              <strong>
                Transforming raw enterprise data into a structured, searchable brain
                for hallucination-free AI.
              </strong>{" "}
              We connect meaning across your systems so AI understands relationships,
              intent, and business logic — not just retrieve text — delivering more
              accurate, explainable, and trustworthy outcomes.
            </p>

            <p className="text-slate-700 leading-7 text-justify">
              This semantic foundation enables accurate reasoning, significantly
              reduces hallucinations, and ensures AI outputs are explainable,
              traceable, governed, and aligned with how your organization actually
              operates.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center">
            <img
              src="/service2.png"
              alt="Context Engineering Semantic Layer"
              className="w-full max-w-md border rounded-md"
            />
          </div>
        </div>

        {/* SMALL SEPARATOR */}
        <div className="my-8 h-px w-24 bg-slate-200" />

        {/* WHAT WE DELIVER */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            What we deliver
          </h3>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
            <li>
              <strong>Knowledge Graph Data Modeling:</strong>{" "}
              We design semantic layers that map relationships between data points,
              entities, processes, and systems — moving from flat “rows and columns”
              to a web of interconnected enterprise knowledge that AI can actually
              understand and reason over.
            </li>

            <li>
              <strong>Unified Data Frameworks:</strong>{" "}
              We implement frameworks designed to ingest and harmonize unstructured
              data (documents, PDFs, emails, transcripts), semi-structured data
              (logs, JSON), and structured data (SQL databases, ERPs) into a single,
              coherent source of contextual truth.
            </li>

            <li>
              <strong>GraphRAG Implementation:</strong>{" "}
              We integrate knowledge graphs with Large Language Models (LLMs) to
              provide grounded context, significantly reducing hallucinations while
              improving accuracy, consistency, and trust in complex enterprise queries.
            </li>

            <li>
              <strong>Ontology & Taxonomy Design:</strong>{" "}
              We build the vocabulary of your business — ensuring AI understands
              industry terminology, internal acronyms, domain-specific language,
              and the nuanced semantics unique to your organization.
            </li>

            <li>
              <strong>Metadata, Lineage & Governance:</strong>{" "}
              We automate metadata enrichment and lineage tracking so every piece
              of information used by AI is traceable, verifiable, auditable, and
              governed — supporting compliance, transparency, and enterprise trust.
            </li>
          </ul>
        </div>

      </section>

      {/* ================================================= */}
      {/* DATA & AI READINESS ASSESSMENT */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Service1.png"
              alt="AI Readiness Assessment"
              className="w-full max-w-md border rounded-md bg-white p-1"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Data & AI Readiness Assessment & Roadmap
            </h2>

            <p className="text-slate-700 leading-7 text-justify mb-3">
              <strong>
                Moving beyond generic strategies to enterprise-grade AI alignment.
              </strong>{" "}
              Many AI initiatives fail not because of model limitations, but because
              foundational elements — such as data readiness, ownership, governance,
              operating models, and business prioritization — are misaligned,
              incomplete, or unclear.
            </p>

            <p className="text-slate-700 leading-7 text-justify">
              Our readiness assessment provides a structured, end-to-end evaluation
              of your current state and delivers a clear, prioritized roadmap that
              enables faster execution, reduced risk, and measurable business impact.
            </p>
          </div>
        </div>

        {/* SMALL SEPARATOR */}
        <div className="my-8 h-px w-24 bg-slate-200" />

        {/* ASSESSMENT PILLARS */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            Assessment pillars
          </h3>

          <ul className="list-disc pl-5 space-y-4 text-slate-700 leading-7 text-justify">
            <li>
              <strong>Data Readiness & Contextual Depth:</strong>{" "}
              Assessing data quality, accessibility, structure, semantic maturity,
              and readiness to support AI reasoning rather than simple retrieval.
            </li>

            <li>
              <strong>Strategic Alignment & Use-Case ROI:</strong>{" "}
              Identifying high-impact AI use cases and ensuring every initiative
              aligns with clear business objectives, KPIs, and return on investment.
            </li>

            <li>
              <strong>Architecture & Infrastructure:</strong>{" "}
              Evaluating scalability, security, orchestration, integration patterns,
              and cost efficiency across your AI and data stack.
            </li>

            <li>
              <strong>Operating Model & Culture:</strong>{" "}
              Understanding organizational readiness, adoption barriers, change
              management requirements, and the shift from experimentation to
              production-grade AI.
            </li>

            <li>
              <strong>Talent Architecture & Capability Design:</strong>{" "}
              Mapping skill gaps, role definitions, and team structures required
              to support sustainable AI evolution.
            </li>

            <li>
              <strong>Ethics, Governance & Trust:</strong>{" "}
              Implementing guardrails for transparency, bias mitigation, regulatory
              compliance, and responsible AI deployment.
            </li>
          </ul>

          <p className="mt-6 font-medium text-slate-900">
            Typical engagement duration: 2–4 weeks
          </p>
        </div>

      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg text-slate-700">
            Start with clarity. Build with confidence.
          </p>
          <a href="/contact">
            <button className="bg-[#0A6190] hover:bg-[#084d73] text-white px-8 py-3 rounded-md font-medium transition">
              Talk to Experts
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
