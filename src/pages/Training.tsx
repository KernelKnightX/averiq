import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Training() {
  return (
    <div className="bg-white min-h-screen flex flex-col text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — STORY */}
          <div>
            <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
              Training & Literacy
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Build AI capability, <br />
              <span className="text-[#0A6190]">not just AI systems</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-xl">
              Technology is only half the battle; the other half is people.
              Our training programs close the AI literacy gap by giving leaders
              and teams the mental models and hands-on skills required to move
              from hype to real-world impact.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-6 py-3 rounded-md text-sm font-medium transition"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT — TRAINING FOCUS */}
          <div className="border-l border-slate-200 pl-10 space-y-6">

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Executive AI Strategy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Helping business and IT leaders understand AI trends, risks,
                governance, and ROI prioritization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Technical Upskilling
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hands-on training for engineers and data teams across modern AI,
                Knowledge Graphs, and LLM orchestration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                AI Productivity & Literacy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Practical guidance for non-technical teams to use generative AI
                safely and effectively in daily workflows.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Governance & Ethics
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Responsible AI training covering data privacy, bias mitigation,
                and internal AI governance frameworks.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= WHY TRAIN WITH US ================= */}
 <section className="max-w-7xl mx-auto px-4 py-8">
  <div className="max-w-6xl">

    <h2 className="text-xl font-semibold mb-6">
      Why Train with Us?
    </h2>

    <ul className="space-y-4 text-slate-700 leading-relaxed text-justify">
      <li>
        <span className="font-semibold text-[#0A6190]">
          Practical Over Theoretical:
        </span>{' '}
        We don’t just lecture; we build. Our sessions are grounded in
        real-world scenarios and the specific frameworks (like Context
        Engineering) we use in our consulting practice.
      </li>

      <li>
        <span className="font-semibold text-[#0A6190]">
          Tailored Curriculum:
        </span>{' '}
        We don’t believe in “one size fits all.” We customize our training
        modules to align with your industry, your tech stack, and your
        specific AI maturity level.
      </li>

      <li>
        <span className="font-semibold text-[#0A6190]">
          Bridge the Business–IT Divide:
        </span>{' '}
        Our training creates a common language between business stakeholders
        and technical builders, ensuring smoother project delivery.
      </li>

      <li>
        <span className="font-semibold text-[#0A6190]">
          Future-Proofing Your Talent:
        </span>{' '}
        By helping teams build hands-on skills, we ensure your organization
        isn’t just buying AI solutions — it’s growing the internal muscle
        to maintain and evolve them.
      </li>
    </ul>

  </div>
</section>



      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-slate-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8">
            Engagement Models
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Executive Workshop</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Intensive sessions on AI trends, governance, risk management,
                and ROI prioritization.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: Executive Leaders
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                AI Productivity & Literacy
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Practical training on using generative AI tools responsibly
                across everyday workflows.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: All Employees
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Technical Bootcamps
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Multi-day deep dives into Knowledge Graphs, LLMs, and modern
                AI architectures.
              </p>
              <p className="mt-3 text-sm font-medium">
                For: Technical Teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-6">
            Equip your teams to turn AI potential into enterprise performance.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-7 py-3 rounded-md text-sm font-medium transition"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
