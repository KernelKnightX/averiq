import { Link } from 'react-router-dom';
import { Brain, Database, Network, ArrowRight } from 'lucide-react';

export default function ContextEngineering() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="border-b bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Context <span className="text-purple-600">Engineering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your data into intelligent systems with our context engineering expertise.
              We build the foundational intelligence that powers modern AI applications.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Context Engineering Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for building intelligent systems that understand and leverage contextual information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Graphs</h3>
              <p className="text-gray-600 mb-6">
                Design and implement sophisticated knowledge graphs that connect disparate data sources and enable intelligent reasoning.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ontology development</li>
                <li>• Graph database design</li>
                <li>• Semantic reasoning</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Contextualization</h3>
              <p className="text-gray-600 mb-6">
                Transform raw data into contextually rich information that AI systems can understand and act upon effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data enrichment</li>
                <li>• Entity recognition</li>
                <li>• Relationship mapping</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Context-Aware Systems</h3>
              <p className="text-gray-600 mb-6">
                Build AI systems that understand context, user intent, and situational factors for more accurate and relevant responses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contextual AI models</li>
                <li>• Intent understanding</li>
                <li>• Adaptive systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Context-Aware AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how context engineering can transform your AI capabilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-white/50 transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}