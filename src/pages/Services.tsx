import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Rocket,
  CheckCircle,
  Brain,
  Network,
  Zap,
  LineChart,
  Shield,
  Settings,
  BookOpen,
  TrendingUp,
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      icon: Target,
      title: 'Strategic Advisory & Assessment',
      description: 'Evaluate your current data landscape and develop a comprehensive roadmap for semantic integration.',
      color: 'from-blue-600 to-blue-700',
      services: [
        'Semantic & AI Strategy Sprint',
        'Data Architecture Assessment',
        'ROI Analysis & Business Case Development',
        'Technology Stack Evaluation',
      ],
    },
    {
      icon: Users,
      title: 'Organizational Enablement & Awareness',
      description: 'Ensure your teams are aligned and capable of working in a semantic-driven way.',
      color: 'from-cyan-600 to-cyan-700',
      services: [
        'Executive & Leadership Training',
        'Technical Team Upskilling',
        'Change Management Support',
        'Best Practices Implementation',
      ],
    },
    {
      icon: Rocket,
      title: 'Execution & Delivery',
      description: 'Hands-on implementation of ontologies, knowledge graphs, and AI integration.',
      color: 'from-blue-500 to-cyan-600',
      services: [
        'Knowledge Graph Development',
        'Ontology Design & Implementation',
        'AI Integration & Optimization',
        'Performance Monitoring & Support',
      ],
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Ontology Design',
      description: 'Define domain concepts, relationships, rules, and taxonomy of entities tailored to your business.',
    },
    {
      icon: Network,
      title: 'Knowledge Graph Construction',
      description: 'Integrate heterogeneous data sources and build meaningful relationships between entities.',
    },
    {
      icon: Zap,
      title: 'Semantic Layer Deployment',
      description: 'Expose business-friendly access to data, enabling contextual queries beyond raw tables.',
    },
    {
      icon: LineChart,
      title: 'AI/ML Integration',
      description: 'Leverage semantic layers for improved AI model performance and natural-language interaction.',
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Maintain semantic layer integrity with quality controls and alignment management.',
    },
    {
      icon: Settings,
      title: 'Performance Optimization',
      description: 'Ensure efficient graph queries, inference, and scalability for large knowledge graphs.',
    },
  ];

  const useCases = [
    {
      icon: Network,
      title: 'Data Unification',
      description: 'Unify siloed data systems (CRM, ERP, logs, documents) into a coherent semantic layer.',
    },
    {
      icon: Brain,
      title: 'AI Enhancement',
      description: 'Improve AI/ML outcomes by providing contextual coherence to underlying data.',
    },
    {
      icon: Shield,
      title: 'Risk & Fraud Detection',
      description: 'Analyze complex relationships for fraud detection, supply-chain dependencies, and risk analytics.',
    },
    {
      icon: TrendingUp,
      title: 'Self-Service Analytics',
      description: 'Enable business users to access and analyze data naturally without technical translation.',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Management',
      description: 'Create enterprise knowledge bases that capture relationships and context across domains.',
    },
    {
      icon: Zap,
      title: 'Rapid Insights',
      description: 'Accelerate time-to-value from data rather than long BI projects with slow returns.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-16">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Comprehensive Semantic Solutions
            </h1>
            <p className="text-base text-blue-100 leading-relaxed">
              From strategy to execution, we deliver end-to-end semantic intelligence services that transform how your organization leverages data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Service Offering
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              A full lifecycle approach spanning strategic advisory, organizational change, and technical implementation.
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

                  <div className="relative grid lg:grid-cols-3 gap-6 p-6 lg:p-8">
                    <div className="lg:col-span-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Services
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-sm text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Core Capabilities
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Technical expertise across the entire semantic intelligence stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Use Cases & Applications
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Semantic intelligence delivers value across diverse business scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 ml-3">
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Network className="w-14 h-14 mx-auto mb-5 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Semantic Layer?
          </h2>
          <p className="text-base text-blue-100 mb-6 leading-relaxed">
            Let's discuss how our services can help you unlock the full potential of your data through semantic intelligence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}