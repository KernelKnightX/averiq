import { useState } from 'react';
import { ArrowRight, Brain, ExternalLink, CheckCircle2, Zap, Shield, TrendingUp, Sparkles, Target, Lock, LineChart } from "lucide-react";
import ModernButton from "../components/ModernButton";
import GradientCard from "../components/GradientCard";
import SectionHeading from "../components/SectionHeading";
import FloatingElement from "../components/FloatingElement";

function trackEvent(name: string, props = {}) {
  console.log("TRACK_EVENT", name, props);
}

export default function Home() {
   const [whiteOpen, setWhiteOpen] = useState(false);
 
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-mesh">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 mb-8">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span className="text-sm font-medium text-cyan-300">CONTEXT ENGINEERING EXPERTS</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
                Connected data.
                <span className="text-cyan-400"> Confident</span>
                <span className="text-cyan-300"> decisions.</span>
                <br />
                In <span className="text-cyan-400">days</span>, not months.
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                Anyone can call a model. AverIQ engineers the context that makes AI meaningfully accurate, auditable, and aligned to business rules.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                  Talk to an expert →
                </button>
                <button className="px-8 py-3 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 font-semibold rounded-lg transition-colors">
                  What is Context engginering?
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Quick PoC: 2–5 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Governance-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Measurable ROI</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md">
                  <img
                    src="/WhatsApp Image 2025-12-10 at 08.11.41 (1).jpeg"
                    alt="AverIQ Hero Image"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                  <div className="font-semibold">AverIQ</div>
                  <div className="text-xs text-gray-200">Context Engineering Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="The Challenge"
            title={
              <>
                Why traditional RAG fails
                <span className="block gradient-text mt-1">enterprise AI</span>
              </>
            }
            subtitle="Retrieval-augmented generation gives you documents, but regulators and auditors demand traceable provenance, governance policies, and a single source of truth."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "No single source of truth",
                description: "Multiple data sources create conflicting answers across departments. Your AI pulls from outdated documents, contradictory policies, and unverified sources—creating compliance nightmares."
              },
              {
                icon: Lock,
                title: "Missing audit lineage",
                description: "When auditors ask \"why did the AI say that?\", you have no clear answer. Traditional RAG systems can't trace decisions back to authoritative sources."
              },
              {
                icon: LineChart,
                title: "Uncontrolled semantic drift",
                description: "Business terminology evolves, but your AI doesn't know which definition is current or who approved the change. Your AI gradually becomes unreliable."
              }
            ].map((problem, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 mb-3 group-hover:scale-110 transition-transform">
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Highlight */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
            <div className="relative glass-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full px-3 py-1.5 mb-4 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-semibold">The AverIQ Solution</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Context engineering solves all three problems simultaneously
                  </h3>
                  <div className="space-y-3 mb-6">
                    {[
                      "Unified semantic layer linking AI to verified sources",
                      "Complete audit lineage for regulatory compliance",
                      "Governed semantic versioning with approval workflows",
                      "Fast proof-of-concepts with measurable improvements"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <ModernButton href="/contact" variant="primary" icon onClick={() => trackEvent('cta_solution_demo')}>
                      See how it works
                    </ModernButton>
                    <ModernButton variant="outline" onClick={() => { setWhiteOpen(true); trackEvent('read_paper_solution'); }}>
                      Read white paper
                    </ModernButton>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <FloatingElement>
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Brain className="w-24 h-24 text-white" />
                    </div>
                  </FloatingElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Proven Results"
            title="Real results from enterprise pilots"
            subtitle="Leading organizations see measurable accuracy improvements in 2-3 weeks, not months"
          />

          <div className="mt-10 space-y-6">
            {[
              {
                icon: Shield,
                gradient: "from-green-400 to-emerald-600",
                industry: "Financial Services",
                type: "Customer support AI assistant",
                metric: "50%",
                metricLabel: "reduction in errors",
                description: "A major bank's support AI was giving conflicting answers about loan products. Our 14-day pilot connected the AI to a verified policy repository with complete audit trails.",
                results: ["50% fewer incorrect answers", "Full regulatory compliance", "Audit-ready lineage"]
              },
              {
                icon: Zap,
                gradient: "from-blue-400 to-blue-600",
                industry: "Energy Sector",
                type: "Compliance monitoring system",
                metric: "40%",
                metricLabel: "time savings",
                description: "An energy company needed to prove AI compliance decisions to regulators. Our 12-day POC implemented semantic mappings between AI outputs and regulatory documents.",
                results: ["40% less manual review", "Complete provenance chains", "Regulator approval"]
              },
              {
                icon: TrendingUp,
                gradient: "from-purple-400 to-purple-600",
                industry: "Manufacturing",
                type: "Quality alert system",
                metric: "30%",
                metricLabel: "fewer false alerts",
                description: "A manufacturer's AI quality system generated too many false alerts. Our 2-week deployment connected the AI to versioned quality standards and historical context.",
                results: ["30% reduction in false positives", "Explainable AI decisions", "Traceable reasoning"]
              }
            ].map((result, index) => (
              <div 
                key={index}
                className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${result.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <result.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{result.industry}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{result.type}</p>
                    </div>
                    <div className="mt-3 sm:mt-0 text-left sm:text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-600 mt-0.5">{result.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {result.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.results.map((item, i) => (
                      <span key={i} className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${result.gradient} bg-opacity-10 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4D FRAMEWORK */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Process"
            title="Our proven 4D framework"
            subtitle="From assessment to production deployment in weeks, not months"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                number: "1",
                title: "Discover",
                gradient: "from-blue-500 to-blue-600",
                description: "We map your entire data landscape—every document repository, database, and policy system. Identify semantic gaps and understand audit requirements.",
                duration: "3-5 days",
                deliverable: "Gap analysis report and audit requirements document"
              },
              {
                number: "2",
                title: "Design",
                gradient: "from-indigo-500 to-indigo-600",
                description: "Model the ontologies and relationships that give your AI true understanding. Define governance workflows and create mappings to authoritative sources.",
                duration: "5-7 days",
                deliverable: "Semantic model, governance framework, and integration architecture"
              },
              {
                number: "3",
                title: "Deploy",
                gradient: "from-purple-500 to-purple-600",
                description: "Implement knowledge graphs that power your semantic layer. Set up audit logging, access controls, and version management for safe evolution.",
                duration: "4-6 days",
                deliverable: "Production semantic layer with full audit capabilities"
              },
              {
                number: "4",
                title: "Drive",
                gradient: "from-pink-500 to-pink-600",
                description: "Monitor performance continuously, measuring accuracy improvements and identifying drift. Ongoing optimization keeps your AI trustworthy as requirements change.",
                duration: "Ongoing",
                deliverable: "Monthly performance reports and continuous optimization"
              }
            ].map((phase, index) => (
              <GradientCard
                key={index}
                title={phase.title}
                description={phase.description}
                gradient={phase.gradient}
                className="hover-lift"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${phase.gradient} text-white font-bold text-lg mb-3 -mt-1`}>
                  {phase.number}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{phase.duration}</span>
                    <span className="text-blue-600 font-semibold">→</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1.5 italic">{phase.deliverable}</p>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 sm:py-20 gradient-mesh text-white overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-10">
          <FloatingElement className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">Ready to transform your AI?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Make your AI auditable
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
            Join leading enterprises building trustworthy, explainable AI with context engineering.
            Start with a 2-week pilot and see measurable accuracy improvements.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="/contact"
              onClick={() => trackEvent("final_cta_book_demo")}
              className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              Book a demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => { setWhiteOpen(true); trackEvent('final_cta_whitepaper'); }}
              className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Read white paper
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-100">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>No lengthy sales cycle</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Results in 14 days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Risk-free pilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="AverIQ" className="w-10 h-10" />
                <span className="text-xl font-bold tracking-tight">AVERIQ</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-md">
                Building semantic layers that make AI trustworthy, auditable, and enterprise-ready.
              </p>
              <p className="text-xs text-gray-500">Conroe, Texas</p>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/context-engineering" className="hover:text-white transition-colors">Context Engineering</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} AverIQ. All rights reserved.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* WHITEPAPER MODAL */}
      {whiteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setWhiteOpen(false)} />
          <div className="relative glass-white rounded-3xl p-6 sm:p-8 z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-3">
                <ExternalLink className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Download White Paper</h3>
              <p className="text-sm text-gray-600">
                "Is RAG Dead? The Rise of Context Engineering" - Get our comprehensive guide with pilot checklists and implementation frameworks.
              </p>
            </div>
            <WhitepaperForm onClose={() => setWhiteOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function WhitepaperForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    trackEvent("whitepaper_requested", { email, company });
    setTimeout(() => setSubmitted(true), 400);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-3">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <p className="text-sm text-gray-700 mb-5">
          Thanks! We've sent the white paper to <strong>{email}</strong>. Check your inbox in the next few minutes.
        </p>
        <button
          onClick={onClose}
          className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company (optional)"
        className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      <div className="flex flex-col sm:flex-row gap-2 pt-1">
        <button
          onClick={handleSubmit}
          className="flex-1 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Get white paper
        </button>
        <button
          onClick={onClose}
          className="flex-1 px-5 py-2.5 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}