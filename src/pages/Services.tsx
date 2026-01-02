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
    <div className="bg-white overflow-hidden font-sans">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
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

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A6190]/20 via-white to-[#00D4FF]/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative border border-gray-200 rounded-3xl p-10 bg-white shadow-xl">
              <p className="text-sm text-gray-500 mb-2">What we do best</p>
              <p className="text-lg font-medium text-gray-900">
                Strategy → Context → Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className="
                group relative rounded-3xl border border-gray-200
                p-8 overflow-hidden
                hover:shadow-2xl hover:-translate-y-1
                transition-all duration-300 bg-white
              "
            >
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.accent}`}
              />

              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center text-gray-900 font-medium">
                Explore service
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
            Ready to build AI that actually works?
          </h2>

          <p className="text-lg text-gray-600 mb-10">
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
