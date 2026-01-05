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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        ...formData,
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
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Location', detail: 'Conroe, Texas' },
    { icon: Mail, title: 'Email', detail: 'contact@averiq.ai' },
    { icon: Phone, title: 'Phone', detail: 'Available upon request' },
  ];

  return (
    <div className="w-full bg-white py-24 px-5">
      {/* 🔑 THIS mx-auto FIXES LEFT SHIFT */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Let&apos;s Build Something
              <br />
              <span className="text-[#0A6190]">Amazing Together</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Ready to transform your data into intelligent AI systems?
              Let&apos;s start the conversation.
            </p>

            <div className="space-y-3 pt-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#0A6190]/20 hover:bg-[#0A6190]/5 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0A6190]">
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

          {/* RIGHT */}
          <div className="lg:sticky lg:top-24">
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-gray-600 mb-6">
                  We&apos;ve received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0A6190] text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg space-y-6 border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="text-sm font-semibold capitalize">{field} *</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder={field === 'name' ? 'John Doe' : 'john@company.com'}
                      />
                      {errors[field] && (
                        <p className="text-sm text-red-600">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {['company', 'phone'].map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="text-sm font-semibold capitalize">{field} *</label>
                      <input
                        type="text"
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        placeholder={field === 'company' ? 'Your Company' : '+1 (555) 000-0000'}
                      />
                      {errors[field] && (
                        <p className="text-sm text-red-600">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A6190] to-[#00D4FF] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
