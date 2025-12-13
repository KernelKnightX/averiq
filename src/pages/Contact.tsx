import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FloatingElement from '../components/FloatingElement';
import { submitContactForm } from '../services/firebaseService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      const firebaseResult = await submitContactForm(formData);
      
      // Also send email via backend
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success || firebaseResult.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          interest: '',
          message: '',
        });
      } else {
        console.error('Form submission failed:', data.message);
        alert(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const interests = [
    'Strategic Advisory & Assessment',
    'Organizational Enablement',
    'Knowledge Graph Development',
    'AI Integration',
    'General Inquiry',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Conroe, Texas', 'United States'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@averiq.com'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Available upon request'],
      gradient: 'from-orange-500 to-red-500',
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
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold">Contact Us</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight fade-in">
            Let's Build Something
            <span className="block mt-2">
              <span className="gradient-text">Amazing Together</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto fade-in-delayed">
            Ready to transform your data into intelligent AI systems? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Send us a message
              </h2>
              <p className="text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {submitted ? (
              <div className="glass-white rounded-3xl p-10 text-center shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-5">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank you for reaching out!
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  We've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
                  >
                    <option value="">Select an option</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none text-gray-900 text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-5">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why AverIQ"
            title="Why work with us?"
            subtitle="We're not just consultants—we're your partners in building intelligent, trustworthy AI systems"
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fast Time to Value",
                description: "See measurable results in 14 days with our rapid pilot framework. No lengthy enterprise sales cycles.",
              },
              {
                title: "Enterprise-Grade Security",
                description: "Your data stays secure with enterprise-grade governance, compliance, and access controls built in.",
              },
              {
                title: "Proven Methodology",
                description: "Our 4D framework has delivered results for leading enterprises across finance, energy, and manufacturing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            <span className="text-sm font-semibold">Ready to get started?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start your 14-day pilot today
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto">
            No lengthy sales cycles. No commitments. Just results you can measure in two weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-base shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
            >
              Book a demo
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Learn more about us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}