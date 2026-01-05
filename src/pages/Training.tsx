import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Training() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-14 grid md:grid-cols-2 gap-16 items-center">
        <div>
<span className="text-[#0A6190] font-medium">Enterprise AI Enablement</span>


          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Training that makes 
            <br />
            <span className="text-[#0A6190]">Enterprise AI actually work</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We enable organizations to build internal capability for AI — not 
            just adopt tools, but develop the thinking required to design, govern, and evolve reliable AI systems.
          </p>
        </div>
    
        <div className="border-l-2 font-bold border-gray-200 pl-10 text-black-1000 space-y-4">
            <h2 className="text-xl font-semibold">
              Why Training Is Necessary
            </h2>
          <p className="text-lg">
            Most AI initiatives fail not because of models — but because teams lack shared
              understanding of context, limitations, and system design.
          </p>
          <p>
            Our training exists to transfer the thinking, mental models, and architectural
              judgment we use in our consulting work to your internal teams.
          </p>
                    <p className="text-lg">
            The result is not dependency on external vendors, but internal capability to
              evolve and govern AI systems responsibly.
          </p>
        </div>
      </section>
 
      {/* ================= WHAT WE ENABLE ================= */}
      <section className="bg-slate-50 border-t border-b py-16 px-6">
        <div className="max-w-7xl mx-auto">

            <h2 className="text-2xl font-semibold mb-6">
              The Thinking We Transfer to Your Teams
            </h2>

          {/* 4 BOXES */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm">
              <p className="font-semibold">AI Literacy & Decision Making</p>
              <p className="mt-2 text-slate-600">
                How teams understand, evaluate, and safely apply AI in real business contexts.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm">
              <p className="font-semibold">Executive AI Strategy</p>
              <p className="mt-2 text-slate-600">
                Frameworks for prioritization, governance, risk, and AI investment decisions.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm">
              <p className="font-semibold">Context & System Architecture</p>
              <p className="mt-2 text-slate-600">
                How context, knowledge graphs, and orchestration enable reliable AI systems.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm">
              <p className="font-semibold">Responsible AI Enablement</p>
              <p className="mt-2 text-slate-600">
                Privacy, bias, and control mechanisms required for enterprise adoption.
              </p>
            </div>
          </div>

          {/* STATEMENT */}
          <p className="mt-10 text-center text-lg text-slate-700 max-w-5xl mx-auto">
            We don’t train people to <span className="font-semibold">“use AI tools.”</span> We train
            organizations to <span className="font-semibold">think correctly about AI</span>, so the
            systems they build and deploy are trustworthy, maintainable, and aligned with business reality.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-7 py-3 rounded-md text-sm font-medium transition"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW WE DELIVER TRAINING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="border border-slate-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8">
            How We Deliver Training
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Executive Enablement</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Strategic sessions for leadership teams to align on AI direction,
                risk posture, and governance.
              </p>
              <p className="mt-3 text-sm font-medium">
                Audience: Executives & Senior Leaders
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Organization-wide Literacy</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Practical enablement for business teams to work effectively with AI
                without misuse or over-reliance.
              </p>
              <p className="mt-3 text-sm font-medium">
                Audience: Business & Operations Teams
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Technical Deep Dives</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Architecture-level training for engineers building context-aware
                AI systems.
              </p>
              <p className="mt-3 text-sm font-medium">
                Audience: Engineering & Data Teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY TRAIN WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold mb-6">
          Why Train with Us?
        </h2>

        <ul className="space-y-4 text-slate-700 leading-relaxed">
          <li>
            <span className="font-semibold text-[#0A6190]">Practical Over Theoretical:</span>{' '}
            We don't just lecture; we build. Our sessions are grounded in real-world scenarios
            and the specific frameworks (like Context Engineering) we use in our consulting practice.
          </li>

          <li>
            <span className="font-semibold text-[#0A6190]">Tailored Curriculum:</span>{' '}
            We don't believe in "one size fits all." We customize our training modules to align
            with your industry, your tech stack, and your specific AI maturity level.
          </li>

          <li>
            <span className="font-semibold text-[#0A6190]">Bridge the Business–IT Divide:</span>{' '}
            Our training creates a common language between your business stakeholders and
            your technical builders, ensuring smoother project delivery.
          </li>

          <li>
            <span className="font-semibold text-[#0A6190]">Future-Proofing Your Talent:</span>{' '}
            By helping teams build hands-on skills, we ensure your organization isn't just
            buying AI solutions — it’s growing the internal muscle to maintain and evolve them.
          </li>
        </ul>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-6">
            Build internal capability to design, govern, and scale AI responsibly.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-7 py-3 rounded-md text-sm font-medium transition"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
