import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Data & AI Advisory',
      description:
        'Enterprise AI readiness, strategy, and semantic foundations that move you from experimentation to execution.',
      link: '/data-readiness-assessment',
      accent: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Use Case Delivery',
      description:
        'We design, build, and deploy high-impact AI use cases that survive production — not just pilots.',
      link: '/use-case-delivery',
      accent: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Talent Augmentation',
      description:
        'Elite AI, data, and knowledge graph engineers embedded into your teams to accelerate outcomes.',
      link: '/talent-augmentation',
      accent: 'from-emerald-500 to-teal-400',
    },
    {
      title: 'Production Support',
      description:
        'L1–L3 support for mission-critical AI and graph platforms with governance and reliability built in.',
      link: '/production-support',
      accent: 'from-orange-500 to-red-400',
    },
  ];

  return (
    <div className="bg-white overflow-hidden font-sans min-h-screen flex flex-col">

      {/* ================= HERO ================= */}
      <section className="relative flex-1 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center h-full">

          {/* LEFT */}
          <div>

                        <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
              OUR SERVICES
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Services built for <br />
              <span className="text-[#0A6190]">Real AI adoption</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We help enterprises move from AI hype to production-grade systems :
              grounded in data, context, and execution. <br/>
            </p>
            <br/>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT VISUAL - SERVICES GRID */}
          <div className="border-l-2 border-gray-200 pl-8 grid grid-cols-2 gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="
                  group relative rounded-2xl border border-gray-200
                  p-4 overflow-hidden
                  hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 bg-white
                "
              >
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.accent}`}
                />

                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center text-gray-900 font-medium text-sm">
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
            Ready to build AI that actually works?
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Let’s discuss your data, your constraints, and where AI can create
            real leverage — not demos.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0A6190] hover:bg-[#084C6B] text-white px-7 py-3 rounded-md text-sm font-medium transition"
          >
            Start the conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
