import { Shield, TrendingUp, Smile, Award, CheckCircle2, Users, Brain, Heart, Coffee, Lightbulb, Target, Eye, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GradientCard from '../components/GradientCard';
import FloatingElement from '../components/FloatingElement';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'We build long-term partnerships through transparency and honest guidance.',
    },
    {
      icon: TrendingUp,
      title: 'Value',
      description: 'Every engagement is designed to deliver measurable business impact.',
    },
    {
      icon: Smile,
      title: 'Fun',
      description: 'Innovation thrives in a culture of curiosity, creativity, and collaboration.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We do what we say and hold ourselves to the highest standards.',
    },
  ];

  const team = [
    {
      icon: Brain,
      role: 'Data & Semantics Experts',
      desc: 'Ontology designers, knowledge graph architects, and semantic specialists who speak both data and business.',
    },
    {
      icon: Lightbulb,
      role: 'AI & ML Leaders',
      desc: 'Building trustworthy, explainable AI systems that enterprises can actually use and trust.',
    },
    {
      icon: Users,
      role: 'Business Strategists',
      desc: 'Industry veterans who understand your challenges because they have lived them.',
    },
    {
      icon: Rocket,
      role: 'Implementation Masters',
      desc: 'Proven ability to deliver complex projects on time, on budget, with lasting impact.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center gradient-mesh text-white overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement delay={0} className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 shimmer">
            <Heart className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">About AverIQ</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight fade-in">
            We're Data People.
            <span className="block mt-3">
              <span className="gradient-text">Building Intelligent Systems.</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto fade-in-delayed">
            Founded on a simple belief: <strong className="text-white">data without meaning has limited value</strong>. 
            We help organizations turn their data chaos into competitive advantage.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <FloatingElement>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-6 shadow-xl">
                <Coffee className="w-8 h-8 text-white" />
              </div>
            </FloatingElement>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              AverIQ was born from a frustration we all shared: watching brilliant organizations drown in data while starving for insights. We've spent decades in the trenches—building data platforms, implementing AI systems, and watching too many projects fail not because of bad technology, but because of <strong className="text-gray-900">bad foundations</strong>.
            </p>

            <p>
              The problem was always the same: data without context. Systems that couldn't talk to each other. AI models that couldn't explain their decisions. Business users who couldn't trust what they were seeing.
            </p>

            <p>
              So we did something about it. We brought together experts in semantic modeling, knowledge graphs, enterprise platforms, and AI strategy. We built a methodology that puts <strong className="text-gray-900">meaning first</strong>—creating the semantic foundations that make data truly intelligent.
            </p>

            <p>
              Today, we work with some of the world's leading enterprises. We help them build connected intelligence—where data, systems, and people work seamlessly together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Approach */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "Unlock data's true potential by building semantic foundations that power AI-driven insights, accelerate decision-making, and deliver measurable business value.",
                gradient: "from-blue-600 to-cyan-500"
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "Be the trusted partner for enterprises worldwide in creating connected intelligence—where data, systems, and people work seamlessly together.",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Rocket,
                title: "Our Approach",
                description: "Semantic by design. Explainable by default. We bridge the gap with ontologies, knowledge graphs, and intelligent frameworks businesses can trust.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <GradientCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                gradient={item.gradient}
                className="hover-lift"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These aren't just words on a wall. They're the principles that guide every decision, every project, every conversation."
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GradientCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                gradient="from-blue-600 to-cyan-500"
                className="hover-lift"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="Meet the Team"
            subtitle="We're a diverse group of semantic specialists, enterprise architects, AI strategists, and implementation experts. What we all share: a passion for making data work better for people."
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <GradientCard
                key={i}
                icon={member.icon}
                title={member.role}
                description={member.desc}
                gradient="from-blue-500 to-cyan-500"
                className="hover-lift"
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              <strong>Decades of collective experience</strong> in digital transformation, semantic modeling, AI strategy, and enterprise implementation. We've been in your shoes. We know what works—and what doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 gradient-mesh text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">
              Impact by the Numbers
            </h3>
            <p className="text-base text-blue-100">Results that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "500%", label: "Average ROI" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all hover-lift">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Promises"
            title="How We Work"
            subtitle="Our promises to every client, every time"
          />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Built for Scale', desc: 'Your semantic foundation supports growth from day one. No rework. No technical debt.' },
              { title: 'Your Success = Our Success', desc: 'We measure ourselves by your business outcomes, not features shipped.' },
              { title: 'Clear Communication', desc: 'No jargon, no surprises. Transparent roadmaps and executive visibility at all times.' },
              { title: 'Data Respect', desc: 'Governance, security, and compliance are non-negotiable. Your data is sacred.' },
              { title: 'Knowledge Transfer', desc: 'We empower your team to own, maintain, and evolve the systems we build together.' },
              { title: 'Vendor-Neutral', desc: 'We work with your existing tools or recommend the best stack—no hidden agendas.' },
            ].map((promise, i) => (
              <div key={i} className="flex items-start gap-3 glass-white rounded-2xl p-6 hover:shadow-2xl transition-all hover-lift">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{promise.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{promise.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partners"
            title="Technology Partners"
            subtitle="We work with the world's leading data and AI platforms"
          />

          {/* use logos placed in public/ (served at /<filename>) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { name: 'Palantir', src: '/Palantir_company_logo.png' },
              { name: 'neo4j', src: '/Neo4j-logo_color.png' },
              { name: 'GRAPHWISE', src: '/graphwise-fallback-image.png' },
              { name: 'databricks', src: '/Databricks_Logo.png' },
              { name: 'snowflake', src: '/Snowflake_Logo.svg.png' },
              { name: 'Power BI', src: '/Microsoft-Power-BI-Symbol.png' },
            ].map((p, i) => (
              <div
                key={i}
                className="w-36 flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <img src={p.src} alt={`${p.name} logo`} className="h-12 w-auto object-contain" />
                <div className="text-sm font-semibold text-gray-700">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 gradient-mesh text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Talk About Your Data
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're just starting your data journey or looking to transform existing systems, we'd love to hear your story.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-gray-900 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}