export default function ProductionSupport() {
  return (
    <div className="w-full bg-white">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}
      <section className="bg-[#1f2d3d] text-white py-6">
        <h2 className="text-center text-3xl font-semibold">
          Production Support
        </h2>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Intro text */}
        <p className="mb-10">
<strong>Reliability, Governance, and Peace of Mind for Your AI Ecosystem </strong> {" "}
Deploying an AI or Graph platform is only the beginning. The true
challenge lies in maintaining high availability, managing "model drift," and ensuring your Knowledge Graph remains accurate as your data
evolves. We provide comprehensive L1–L3 Production Support to ensure your mission-critical AI systems are always performing at their
peak.​
Whether we are acting as your primary support layer or augmenting your internal AI Center of Excellence (CoE), we provide the technical
vigilance required to turn experimental pilots into stable enterprise assets.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Visual */}
          <div>
            <img
              src="/productionsupport.png"
              alt="Talent Augmentation Visual"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <p className="mt-4 text-sm text-center font-semibold text-gray-600">
              YOUR EXPERT PARTNERS: FROM STRATEGY TO SCALE
            </p>
          </div>

          {/* RIGHT: Content */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              AverIQ Support Tiers
            </h3>


            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong>L1: Monitoring & Basic Troubleshooting:</strong> 24/7 monitoring of
                system health, API uptime, and basic user-access issues. We catch
                the small problems before they impact your business.​
              </li>

              <li>
                <strong>L2: Technical Support & Optimization:</strong> In-depth troubleshooting
                of data pipeline failures, query performance issues within your
                Knowledge Graph, and prompt-tuning adjustments.​
              </li>

              <li>
                <strong>L3: Specialized Engineering Support:</strong> Deep-tier intervention for
                complex architectural failures, model retraining, and schema
                evolutions in your Graph environment.
              </li>
            </ul>
          </div>
        </div>
      </section>
{/* ================================================= */}
{/* Why with AverIQ?*/}
{/* ================================================= */}
<section className="max-w-7xl mx-auto px-6 py-6">
  <h3 className="text-2xl font-bold mb-6">
    Why with AverIQ?
  </h3>

  <ul className="list-disc ml-6 space-y-4">
    <li>
      <strong className="text-[#0A6190]">CoE Partnership:</strong>{" "}
      We don't work in a silo. We work with or on behalf of your Center of Excellence, providing the documentation and
      feedback loops your leadership needs to govern AI effectively.​
    </li>

    <li>
      <strong className="text-[#0A6190]">Graph-Specific Expertise:</strong>{" "}
      Standard IT support often lacks the nuance required for Graph databases. We understand the specific
      complexities of triple-stores, vector databases, and semantic relationships.
    </li>

    <li>
      <strong className="text-[#0A6190]">Proactive Reliability:</strong>{" "}
      We don't just wait for things to break. We proactively monitor for "hallucination spikes," data drift, and latency
      issues to ensure the user experience remains consistent.
    </li>

    <li>
      <strong className="text-[#0A6190]">Risk Mitigation:</strong>{" "}
     Our team ensures that security protocols, access controls, and data privacy standards are strictly maintained in the
     production environment.
    </li>
  </ul>
</section>

{/* ================================================= */}
{/* TALENT AUGMENTATION CTA STRIP */}
{/* ================================================= */}
<section className="bg-[#1f2d3d] text-white py-6">
  <p className="text-center text-lg font-medium">
   Shift your focus back to innovation while we ensure your AI foundation remains rock-solid and reliable.​
  </p>
</section>

<section className="text-center py-6">
<a href="/contact">
  <button className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-10 py-4 rounded-lg font-medium transition">
    Contact Us
  </button>
</a>
</section>
    </div>
  );
}