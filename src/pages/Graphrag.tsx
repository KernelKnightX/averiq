export default function GraphRAG() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="py-14 border-b">
        <h1 className="text-center text-4xl font-semibold">
          GRAPH-RAG: The Evolution of Retrieval-Augmented Generation
        </h1>
      </section>

      {/* ================================================= */}
      {/* INTRO */}
      {/* ================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p className="text-lg leading-relaxed">
          Moving Beyond Search to True Data Understanding While traditional Retrieval-Augmented
          Generation (RAG) has opened new doors for AI, it often hits a "reasoning wall."
          <strong> GraphRAG</strong> is a structured, hierarchical approach designed to overcome
          the limitations of traditional, vector-based systems by turning disconnected data
          into a coherent knowledge ecosystem.
        </p>

        {/* ===== GraphRAG Image ===== */}
        <img
          src="/graph-rag.png"
          alt="GraphRAG vs Traditional RAG"
          className="w-full rounded-2xl shadow-xl"
        />
      </section>

      {/* ================================================= */}
      {/* LIMITATION OF BASELINE RAG */}
      {/* ================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold">
          The Limitation of "Baseline" RAG
        </h2>

        <p>
          Most conventional RAG implementations rely on <strong>vector similarity search</strong>
          over text chunks. While effective for straightforward lookups, this "baseline" approach
          often breaks down when deeper reasoning is required. It specifically struggles to:
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Connect related information</strong> spread across multiple, separate documents.
          </li>
          <li>
            <strong>Synthesize insights</strong> that require traversing shared attributes across a dataset.
          </li>
          <li>
            <strong>Develop a holistic understanding</strong> of large or highly complex data collections.
          </li>
        </ul>
      </section>

      {/* ================================================= */}
      {/* GRAPHRAG ADVANTAGE */}
      {/* ================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-bold">
          The GraphRAG Advantage
        </h2>

        <p>
          GraphRAG addresses these challenges by organizing your source data—such as enterprise
          documents, research, and internal communications—into a <strong>Knowledge Graph</strong>.
          This explicitly models the entities, relationships, and hierarchies within your private datasets.
        </p>

        <h3 className="font-semibold">How it works at query time:</h3>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Contextual Augmentation:</strong> The graph structure, along with summarized
            "communities" of data and learned relationships, is used to augment the AI prompt.
          </li>
          <li>
            <strong>Superior Reasoning:</strong> This enables the LLM to perform more accurate reasoning
            and synthesis.
          </li>
          <li>
            <strong>Actionable Intelligence:</strong> The result is materially stronger performance
            on complex, multi-hop, and conceptual queries that baseline systems consistently miss.
          </li>
        </ul>
      </section>

      {/* ================================================= */}
      {/* COMPARISON TABLE */}
      {/* ================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <table className="w-full border border-slate-200 text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 font-semibold">Baseline RAG</th>
              <th className="p-4 font-semibold">GraphRAG</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">Data Organization</td>
              <td className="p-4">Isolated text chunks</td>
              <td className="p-4">Structured Knowledge Graph</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Search Method</td>
              <td className="p-4">Vector similarity (Keywords/Concepts)</td>
              <td className="p-4">Hierarchical Relationship Traversal</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Query Complexity</td>
              <td className="p-4">Best for simple fact-retrieval</td>
              <td className="p-4">Excels at complex, multi-hop reasoning</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Data Synthesis</td>
              <td className="p-4">Limited to found snippets</td>
              <td className="p-4">Holistic understanding of large collections</td>
            </tr>
          </tbody>
        </table>
      </section>
{/* ================================================= */}
{/* INSIGHT STRIP + CTA (DECK MATCHED) */}
{/* ================================================= */}
<section className="w-full bg-slate-900 py-12">
  <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
    <p className="text-white text-lg font-medium leading-relaxed">
      GraphRAG enables LLMs to demonstrate true understanding of proprietary data—turning
      disconnected information into coherent, actionable intelligence
    </p>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold">
      Talk to Expert
    </button>
  </div>
</section>



      {/* ================================================= */}
      {/* REAL WORLD CASE STUDY */}
      {/* ================================================= */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-6">
        <h2 className="text-2xl font-bold">
          Real-World Case Study:
        </h2>

        <p className="font-semibold text-lg">
          The "Expert Finder" (Workforce Intelligence)
        </p>

        <p>
          To understand the difference GraphRAG makes, let’s look at a common problem for
          large organizations: <strong>Finding the right internal expert for a critical project.</strong>
        </p>
      </section>

{/* ================================================= */}
{/* THE SCENARIO */}
{/* ================================================= */}
<section className="max-w-6xl mx-auto px-6 py-1 space-y-6">
  <h2 className="text-2xl font-bold">
    The Scenario
  </h2>

  <p>
    Your company has 5,000 employees. You are bidding on a new project involving
    <strong> "Autonomous Space Robotics."</strong> You need to find a team lead who
    has experience in both <em>Robotics</em> and <em>Aerospace</em>, but also someone
    who has successfully managed <em>Government Contracts</em>.
  </p>

  <h3 className="text-xl font-semibold">
    The "Traditional AI" (Baseline RAG) Approach
  </h3>

  <p>
    The standard AI searches through thousands of PDFs (resumes, project reports,
    and LinkedIn profiles) looking for those specific keywords.
  </p>

  <ul className="list-disc ml-6 space-y-3">
    <li>
      <strong>The Result:</strong> It gives you a list of 50 people. Some mentioned
      "Robotics" in a hobby section, others worked in "Aerospace" ten years ago, and
      some are junior staff who just attended a "Government Contract" webinar.
    </li>

    <li>
      <strong>The Problem:</strong> The AI finds the words, but it doesn't understand
      the <strong>career context</strong>. It can't tell who actually <em>led</em> a
      project vs. who just <em>read</em> about it.
    </li>
  </ul>

  <h3 className="text-xl font-semibold">
    The GraphRAG Approach
  </h3>

  <p>
    GraphRAG doesn't just look for words; it looks at the
    <strong> connections</strong> in your company’s "Knowledge Map."
  </p>

  <ul className="list-disc ml-6 space-y-3">
    <li>
      <strong>The Result:</strong> It identifies <strong>Sarah Miller</strong>.
    </li>

    <li>
      <strong>The Reasoning:</strong> The system sees that Sarah was the
      <em> Primary Investigator</em> (Relationship) on "Project X" (Entity), which
      was funded by the <em>Department of Defense</em> (Government Context). It also
      sees that "Project X" involved <em>Satellite Repair</em> (linked to Aerospace)
      and <em>Mechanical Arms</em> (linked to Robotics).
    </li>

    <li>
      <strong>The Advantage:</strong> GraphRAG "connects the dots" across three
      different documents to prove Sarah is the perfect fit. It understands that
      even though her resume doesn't use the exact phrase
      "Autonomous Space Robotics," her <strong>entire history of relationships</strong>
      proves she has the expertise.
    </li>
  </ul>
</section>

      {/* ================================================= */}
      {/* WHY THIS MATTERS */}
      {/* ================================================= */}
      <section className="bg-slate-900 text-white py-14 text-center space-y-6">
        <p className="max-w-4xl mx-auto text-lg">
          In the real world, information is never just a single sentence in a single document.
          GraphRAG mirrors how your best employees think—by connecting facts, history, and
          relationships to find the right answer.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
          Talk to Expert
        </button>
      </section>

    </div>
  );
}
