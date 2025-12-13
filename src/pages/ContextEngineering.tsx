import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Shield,
  Zap,
  Users,
  BookOpen,
  BarChart2,
  Laptop,
  ChevronDown,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

/* Data */
const JOURNEY = [
  {
    id: 1,
    title: "Raw Data Problem",
    summary: "Fragmented data across DBs, docs, and systems. Lack of consistent business semantics.",
    bullets: ["SQL databases", "Documents & PDFs", "Spreadsheets", "APIs & logs"],
    icon: BookOpen,
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
  },
  {
    id: 2,
    title: "Build Semantic Foundation",
    summary: "Ontologies, taxonomies and knowledge graphs that model your domain.",
    bullets: ["Ontology design", "Knowledge graphs", "Term normalization"],
    icon: Brain,
    gradient: "from-indigo-500 via-indigo-600 to-purple-600",
  },
  {
    id: 3,
    title: "Add Governance Layer",
    summary: "Lineage, policy enforcement and role-based access control built-in.",
    bullets: ["Lineage tracking", "Policy rules", "Auditing & provenance"],
    icon: Shield,
    gradient: "from-violet-500 via-violet-600 to-fuchsia-600",
  },
  {
    id: 4,
    title: "Enable Explainable AI",
    summary: "AI can now reason in business terms and provide evidence-backed explanations.",
    bullets: ["Traceable reasoning", "Policy-aware recommendations", "Human-readable proofs"],
    icon: Zap,
    gradient: "from-emerald-500 via-emerald-600 to-teal-600",
  },
];

const STATS = [
  {
    value: "50%",
    label: "Faster Time to Insights",
    detail: "Reduce data prep and discovery time.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    value: "80%",
    label: "Better Decision Quality",
    detail: "Decisions anchored in governed context.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    value: "100%",
    label: "Compliance Ready",
    detail: "Lineage, audit and policy baked in.",
    gradient: "from-violet-500 to-purple-600",
  },
];

const APPROACH_STEPS = [
  { 
    title: "Assess", 
    desc: "Map data landscape & identify risks",
    icon: Target,
  },
  { 
    title: "Design", 
    desc: "Model ontologies & define policies",
    icon: Brain,
  },
  { 
    title: "Build", 
    desc: "Implement graphs & governance layer",
    icon: Sparkles,
  },
  { 
    title: "Deploy", 
    desc: "Ship explainable AI applications",
    icon: TrendingUp,
  },
];

export default function ContextEngineering() {
  const [openStep, setOpenStep] = useState<number | null>(1);
  const [showCaseSolution, setShowCaseSolution] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2A75] via-[#0B1F5C] to-[#001540] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#00D4FF] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0067FF] rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/30 rounded-full px-3 py-1.5 mb-5">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-xs font-semibold text-[#00D4FF]">Context Engineering</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The Missing Link Between
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0067FF] mt-2">
              Data & Trustworthy AI
            </span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Move beyond RAG to governed, explainable AI. Build semantic foundations that enable AI to understand your business and deliver results you can trust.
          </p>
        </div>
      </section>

      {/* Key Features Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Laptop,
              title: "What we do",
              desc: "Turn fragmented enterprise data into a governed semantic layer AI can trust.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Users,
              title: "Who benefits",
              desc: "ML teams, data engineers, compliance teams, and business stakeholders.",
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              icon: BarChart2,
              title: "Business impact",
              desc: "Faster insights, measurable trust, and built-in compliance.",
              gradient: "from-violet-500 to-fuchsia-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} mb-3 shadow-lg`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Journey — from data to explainable AI
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            We follow a pragmatic sequence: unify, model, govern, and enable explainable AI.
          </p>
        </div>

        <div className="space-y-3">
          {JOURNEY.map((step, idx) => {
            const Icon = step.icon;
            const isOpen = openStep === step.id;
            
            return (
              <div
                key={step.id}
                className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenStep(isOpen ? null : step.id)}
                  className="w-full flex items-center gap-5 p-5 text-left transition-colors hover:bg-slate-50"
                >
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-700">{idx + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.summary}</p>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.bullets.map((bullet, bidx) => (
                          <div key={bidx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Why this matters
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Real impact, measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className={`text-4xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{stat.label}</h3>
                <p className="text-sm text-slate-300">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            See it in action — Healthcare
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-6 lg:p-8 border-2 border-blue-200 shadow-xl">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">The challenge</h3>
              <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                Patient data spread across EMRs, labs, billing and imaging — clinicians lack a complete view.
              </p>

              <div className="space-y-2 mb-5">
                {[
                  "Disparate systems and formats",
                  "Compliance and provenance requirements",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowCaseSolution(!showCaseSolution)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {showCaseSolution ? "Hide Solution" : "View Solution"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center justify-center">
              <Users className="w-20 h-20 text-slate-400" />
            </div>
          </div>

          {showCaseSolution && (
            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Solution",
                  items: [
                    "Unified patient ontology",
                    "Data-level HIPAA policy enforcement",
                    "Explainable AI recommendations with provenance",
                  ],
                },
                {
                  title: "Result",
                  content: "Clinicians receive complete, auditable patient views and AI recommends with traceable evidence.",
                },
                {
                  title: "Impact",
                  items: ["Faster diagnosis", "Policy-aware recommendations", "Improved clinician trust"],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 shadow-md border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900 mb-3">{section.title}</h4>
                  {section.items ? (
                    <ul className="space-y-1.5">
                      {section.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-slate-700 leading-relaxed">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Our approach
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            A systematic path to intelligent context
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <Icon className="w-7 h-7 text-blue-600 mb-2" />
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-600">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to build intelligent context?
          </h2>
          <p className="text-base text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how context engineering can turn your enterprise data into governed,
            explainable AI systems you can trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-xl">
              View Offerings
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 p-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg">
              <Users className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-500 font-medium">Talk with our team</div>
              <div className="text-sm font-bold text-slate-900">Schedule a demo</div>
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 shadow-lg">
            Book <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}