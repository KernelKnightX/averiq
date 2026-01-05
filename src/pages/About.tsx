import {
  Shield, TrendingUp, Smile, Award,
  Users, Brain, Lightbulb, Target, Eye, Rocket
} from 'lucide-react';
import { Link } from "react-router-dom";


export default function About() {

  const values = [
    {
      icon: Shield,
      title: 'Trust by Design',
      desc: 'Radical transparency, explainability, and systems built to earn confidence.'
    },
    {
      icon: TrendingUp,
      title: 'Business Value',
      desc: 'Every initiative ties directly to measurable outcomes and decision impact.'
    },
    {
      icon: Smile,
      title: 'Joy in Craft',
      desc: 'Curiosity, creativity, and intellectual honesty fuel our work.'
    },
    {
      icon: Award,
      title: 'Integrity',
      desc: 'We choose long-term partnerships over short-term wins.'
    },
  ];

  const expertise = [
    {
      icon: Brain,
      title: 'Semantic Architecture',
      desc: 'Ontologies, knowledge graphs, and meaning-first data foundations.'
    },
    {
      icon: Lightbulb,
      title: 'AI & ML Systems',
      desc: 'Explainable, auditable, enterprise-grade intelligence.'
    },
    {
      icon: Users,
      title: 'Business Alignment',
      desc: 'Strategy rooted in real operating models, not theory.'
    },
    {
      icon: Rocket,
      title: 'Execution at Scale',
      desc: 'From pilot to production without chaos.'
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-14 grid md:grid-cols-2 gap-16 items-center">
        <div>
<span className="text-[#0A6190] font-medium">About AverIQ</span>


          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            We're Context People. 
            <br />
            <span className="text-[#0A6190]">Connecting Intelligent Reasoning.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            AverIQ helps organizations move beyond fragmented data and brittle AI —
            toward connected, explainable, decision-ready intelligence.
          </p>
        </div>

        <div className="border-l-2 font-bold border-gray-200 pl-10 text-black-1000 space-y-4">
          <p className="text-lg">
            Most AI fails not because of models —
            but because systems lack shared meaning.
          </p>
          <p>
            We start where others don’t:
            semantics, context, and decision logic.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-14 space-y-6">
          <h2 className="text-3xl font-semibold">
            Our Story
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Enterprises today are rich in data but poor in understanding.
            Tools proliferate, dashboards multiply, yet decision confidence declines.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            AverIQ was founded on a simple belief:
            intelligence emerges when data, systems, and people
            speak the same language.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We design that language — and the systems that carry it.
          </p>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: Target,
            title: 'Mission',
            desc: 'Enable enterprises to build trustworthy, semantic decision systems.'
          },
          {
            icon: Eye,
            title: 'Vision',
            desc: 'A future where data, systems, and humans operate with shared understanding.'
          },
          {
            icon: Rocket,
            title: 'Our Approach',
            desc: 'Meaning-first. Explainable. Built for scale.'
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition"
          >
            <item.icon className="w-8 h-8 text-[#0A6190] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <div key={i} className="flex gap-6">
                <v.icon className="w-7 h-7 text-[#0A6190] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">{v.title}</h4>
                  <p className="text-gray-700">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12">
          Our Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {expertise.map((e, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 transition"
            >
              <e.icon className="w-9 h-9 text-[#0A6190] mb-4" />
              <h4 className="text-lg font-semibold mb-2">{e.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t">
        <div className="max-w-4xl mx-auto px-6 py-5 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Let’s build intelligence that lasts
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Talk to experts who care about foundations — not hype.
          </p>

<Link
  to="/contact"
  className="px-8 py-4 bg-[#0A6190] hover:bg-[#084d73] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
  Contact Our Expert
</Link>

        </div>
      </section>

    </div>
  );
}
