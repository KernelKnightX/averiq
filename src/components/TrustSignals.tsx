import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

export default function TrustSignals() {
  const certifications = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II Compliant',
      color: 'text-blue-600'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'GDPR & CCPA Ready',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'AI Excellence Award 2024',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Certified Partners',
      description: 'Official Snowflake Partner',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to security, compliance, and excellence is recognized across the enterprise AI landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4">
                <cert.icon className={`w-6 h-6 ${cert.color}`} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">All systems audited and certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}