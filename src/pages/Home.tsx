import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, CheckCircle2, Zap, Shield, TrendingUp, Lock, Code, Users, Briefcase, Headphones, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-white">
<section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

      {/* Left Content */}
      <div className="space-y-10 font-syne">
        <div className="space-y-4">

       <p className="text-sm sm:text-sm lg:text-1xs font-semibold tracking-wide leading-snug text-[#0A6190] uppercase">
      Smartest AI will fail until you feed it good context
       </p>

          <h2 className="text-2xl sm:text-6xl lg:text-4xl font-medium leading-snug text-black-1000 font-neo">
            Build Intelligent Apps and AI For Enterprise with your business context
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-xl  bold-text-black-1000 font-Public Sans">
            AI-ready - <span className="text-[#0A6190]"> GraphRAG for Enterprise AI</span>
          </p>

          <p className="text-lg text-gray-500">
            AverIQ experts bring domain expertise with advanced technology
          </p>
        </div>

        <div className="flex flex-row gap-4 pt-4">
<Link
  to="/contact"
  className="px-8 py-4 bg-[#0A6190] hover:bg-[#084d73] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
  Talk to Expert
</Link>


          <Link
            to="/graphrag"
            className="px-8 py-4 border-2 border-[#0A6190] text-[#0A6190] hover:bg-[#0A6190] hover:text-white font-semibold rounded-lg transition-colors text-lg"
          >
            GraphRAG
          </Link>
        </div>
      </div>


            {/* Right Visual - Dashboard Image */}
            <div className="relative">
              <img
                src="/Home-hero.png"
                alt="Knowledge Graph Visualization"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>



      {/* From Data to Context Section */}
      <section className="bg-white py-10 lg:py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-6xl lg:text-4xl font-medium leading-snug text-black-1000 font-neo">
               Data to Context - Context to Decisions - Decisions to Actions.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left - Knowledge Graph Visualization */}
            <div className="relative">
              <img
                src="/DATA.png"
                alt="Knowledge Graph Visualization"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <p className="text-2xl text-gray-700 leading-relaxed font-light font-Public Sans">
                Build a knowledge graph that structures and connects enterprise knowledge so AI understands your business and delivers accurate, trustworthy outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
<Link
  to="/contact"
  className="px-8 py-4 bg-[#0A6190] hover:bg-[#084d73] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
  Talk to Expert
</Link>
                
                <button className="px-8 py-4 border-2 border-[#0A6190] text-[#0A6190] hover:bg-[#0A6190] hover:text-white font-medium rounded-lg transition-all duration-300 text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-24">
            <h3 className="text-4xl font-light text-center text-gray-900 mb-16">Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Target, text: 'Business Aligned' },
                { icon: Brain, text: 'AI and Agentic Ready' },
                { icon: CheckCircle2, text: 'Accurate' },
                { icon: Zap, text: 'Re-usable' },
                { icon: Shield, text: 'No Silos' },
                { icon: TrendingUp, text: 'Quick build' },
                { icon: Lock, text: 'Enterprise Grade' },
                { icon: Code, text: 'Infrastructure Agnostic' }
              ].map((benefit, i) => (
                <div key={i} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <benefit.icon className="w-8 h-8 text-[#0A6190] mb-2" />
                    <p className="text-base font-normal text-gray-800">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-white-100 py-10 lg:py-28">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-7">
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">Why Now?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h3 className="text-3xl font-normal text-[#0A6190] leading-tight">
                Fragmented, vendor-led AI, drives up cost, increases risk, and fails to scale.
              </h3>

              <div className="flex items-center gap-6">
                <div className="bg-white border-2 border-gray-300 rounded-xl px-6 py-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-700">Fragmented AI<br />Initiatives</p>
                </div>
                <ArrowRight className="text-[#0A6190] w-8 h-8" />
                <div className="bg-gray-900 text-white rounded-xl px-6 py-4 shadow-lg">
                  <p className="text-sm font-medium">Enterprise<br />Framework</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  There is a need for a unified, ROI-driven, and governed AI approach grounded in business context and core processes.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  Accurate, secure, scalable, and efficient AI that <span className="font-medium text-gray-900 underline decoration-2 underline-offset-2">actually drives</span> business outcomes.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Logo-words.jpg"
                alt="Knowledge Graph Visualization"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-20 bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                AverIQ Brings Use Cases & Industry Expertise
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Bridging the gap between raw technology and measurable ROI through deep domain knowledge
              </p>
<Link
  to="/contact"
  className="px-8 py-4 bg-[#0A6190] hover:bg-[#084d73] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
  Talk to Expert
</Link>
            </div>
          </div>
        </div>
      </section>

<section className="bg-slate-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-light mb-16">
      Get Started –{" "}
      <span className="text-blue-400">We meet you where you are</span>
    </h2>

{/* Main Layout – 6 Boxes */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* BOX 1 */}
  <div className="border border-[#0A6190]/50 rounded-2xl p-6">
    <h3 className="text-xl mb-4 border-b border-[#0A6190] pb-3">
      Data & AI Advisory & Consulting
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      We assess your AI readiness, identify high-impact opportunities, and
      deliver a clear roadmap to scale. Our experts help you contextualize
      enterprise data, align it with business processes, and use case,
      support, orchestration knowledge graphs to give AI the context it
      needs to drive trusted, high-value outcomes.
    </p>
  </div>

  {/* BOX 2 */}
  <div className="border border-slate-600 rounded-2xl p-6">
        <h3 className="text-xl mb-4 border-b border-[#0A6190] pb-3">
      Use Case Delivery
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      We discover, build, and deploy high-impact use cases while establishing
      the enterprise foundation for knowledge graphs and context engineering.
    </p>
  </div>

  {/* BOX 3 */}
  <div className="border border-slate-600 rounded-2xl p-6">
            <h3 className="text-xl mb-4 border-b border-[#0A6190] pb-3">
      Talent Augmentation
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      We provide data scientists, data engineers, knowledge graph experts,
      AI specialists, analytics engineers, BI/reporting experts, developers,
      and optimization experts to accelerate your initiatives.
    </p>
  </div>

  {/* BOX 4 – BRAND / CTA BOX */}
  <div className="rounded-2xl p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <img src="/logo.png" alt="AverIQ" className="h-10 w-10" />
        <span className="tracking-wide font-medium">AVERIQ</span>
      </div>

      <p className="text-[#FFFFF] text-sm leading-relaxed mb-4">
        Your boutique AI partner for faster execution and better outcomes —
        without big-firm overhead.
      </p>
    </div>

<Link to="/contact">
  <button className="self-start bg-[#0A6190] hover:bg-[#084d73] px-4 py-2 rounded-md text-sm font-medium text-white transition-colors">
    Talk to Expert
  </button>
</Link>

  </div>

  {/* BOX 5 */}
  <div className="border border-slate-600 rounded-2xl p-6">
                <h3 className="text-xl mb-4 border-b border-[#0A6190] pb-3">
      Production Support
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      We provide L1–L3 production support for your graph and AI platforms,
      working with or on behalf of your Center of Excellence to ensure
      reliability and peace of mind.
    </p>
  </div>

  {/* BOX 6 */}
  <div className="border border-slate-600 rounded-2xl p-6">
                <h3 className="text-xl mb-4 border-b border-[#0A6190] pb-3">
      Training
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">
      We equip business and IT leaders with the latest AI trends and practical
      guidance for better decision-making, while helping teams build hands-on
      skills across modern platforms, methods, and tools.
    </p>
  </div>

    </div>
  </div>
</section>

      {/* Technology Partners Section */}
      <section className="bg-white py-20 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">Technology we Support</h2>
            <p className="text-xl text-gray-600 font-light">We have talent, experience and use cases in several leading providers of data, analytics, ontology and  knowledge
graph technologies​</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { name: 'neo4j', src: '/Neo4j-logo_color.png' },
              { name: 'MS Fabric-IQ', src: 'https://blog.fabric.microsoft.com/images/shared/social/social-image-v2.png' },
              { name: 'Palantir', src: '/Palantir_company_logo.png' },
              { name: 'Stardog', src: 'https://images.icon-icons.com/2699/PNG/512/stardog_logo_icon_168791.png' },
              { name: 'snowflake', src: '/Snowflake_Logo.svg.png' },
              { name: 'databricks', src: '/Databricks_Logo.png' },
              { name: 'Power BI', src: '/Microsoft-Power-BI-Symbol.png' },
              

            ].map((p, i) => (
              <div
                key={i}
                className="w-36 flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#0A6190] hover:shadow-xl transition-all"
              >
                <img src={p.src} alt={`${p.name} logo`} className="h-12 w-auto object-contain" />
                <div className="text-sm font-semibold text-gray-700">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
