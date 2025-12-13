import { Briefcase, Users, Rocket, Heart, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';
import ResumeUploader from '../components/ResumeUploader';
import SectionHeading from '../components/SectionHeading';
import FloatingElement from '../components/FloatingElement';

export default function Careers() {
  const openRoles = [
    {
      title: 'Junior Context Engineer',
      department: 'Engineering',
      location: 'Remote / Conroe, TX',
      type: 'Full-time',
      description: 'Help build semantic knowledge graphs and AI systems for enterprise clients.',
    },
    {
      title: 'Data Engineer',
      department: 'Engineering',
      location: 'Remote / Conroe, TX',
      type: 'Full-time',
      description: 'Design and implement scalable data pipelines and integration solutions.',
    },
    {
      title: 'Product Manager — Semantic AI',
      department: 'Product',
      location: 'Remote / Conroe, TX',
      type: 'Full-time',
      description: 'Drive product strategy for our semantic AI and knowledge graph solutions.',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
    },
    {
      icon: TrendingUp,
      title: 'Growth & Learning',
      description: 'Continuous learning opportunities, conferences, and professional development budget.',
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, unlimited PTO, and remote-first culture.',
    },
    {
      icon: Rocket,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest AI, semantic technologies, and enterprise platforms.',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore new frontiers in semantic AI and knowledge engineering.',
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success. We go above and beyond to deliver value.',
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage curiosity and experimentation.',
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and open communication.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center gradient-mesh text-white overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement delay={0} className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 shimmer">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">Join Our Team</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight fade-in">
            Build the Future of
            <span className="block mt-2">
              <span className="gradient-text">Semantic AI with Us</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto fade-in-delayed">
            Join a team of innovators transforming how enterprises leverage AI and knowledge graphs.
          </p>
        </div>
      </section>

      {/* Why Join AverIQ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why AverIQ"
            title="Why work with us?"
            subtitle="Be part of a team that's shaping the future of enterprise AI"
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What we believe in"
            subtitle="The principles that guide everything we do"
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Open Positions"
            title="Current openings"
            subtitle="Find your next opportunity with AverIQ"
          />

          <div className="mt-10 space-y-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                        <Briefcase className="w-3 h-3" />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                        {role.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Apply Now
            </h2>
            <p className="text-base text-gray-600">
              Submit your application and we'll review it within 48 hours
            </p>
          </div>

          <div className="glass-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            <ResumeUploader />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-mesh text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <FloatingElement delay={2} className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don't see the right role?
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and let's talk about how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-base shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Learn more about AverIQ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}