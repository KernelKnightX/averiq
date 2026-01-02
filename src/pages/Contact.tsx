import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        status: 'new',
        submittedAt: serverTimestamp(),
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // You might want to show an error message here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const contactInfo = [
    { icon: MapPin, title: 'Location', detail: 'Conroe, Texas', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Mail, title: 'Email', detail: 'contact@averiq.ai', gradient: 'from-purple-500 to-pink-500' },
    { icon: Phone, title: 'Phone', detail: 'Available upon request', gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#0A6190]/10 rounded-full px-4 py-2 border border-[#0A6190]/20">
              <Mail className="w-4 h-4 text-[#0A6190]" />
              <span className="text-sm font-semibold text-[#0A6190]">Contact Us</span>
            </div>

         <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Let's Build Something
            <br />
            <span className="text-[#0A6190]">Amazing Together</span>
         </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Ready to transform your data into intelligent AI systems? Let's start the conversation.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition-colors">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{info.title}</p>
                      <p className="text-sm text-gray-600">{info.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:sticky lg:top-8">
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank you!
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We've received your message and will get back to you shortly.
                </p>
<button
  onClick={() => setSubmitted(false)}
  className="bg-[#0A6190] text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
>
  Send another message
</button>


              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm text-gray-900 transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g., name@company.com)"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm text-gray-900 transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm text-gray-900 transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.company && <p className="text-sm text-red-600">{errors.company}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-sm text-gray-900 transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>


                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:outline-none resize-none text-sm text-gray-900 transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#0A6190] to-[#00D4FF] hover:from-[#084C6B] hover:to-[#00B8E6] text-white px-6 py-4 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[#0A6190]/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}