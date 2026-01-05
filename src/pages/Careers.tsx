import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    skills: '',
    location: '',
    pincode: '',
    city: '',
    portfolio: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError('Please upload your resume');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const storagePath = `careers/${Date.now()}_${file.name}`;
      const fileRef = ref(storage, storagePath);
      await uploadBytes(fileRef, file);
      const resumeURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, 'career_applications'), {
        ...form,
        resumeURL,
        resumeFileName: file.name,
        resumeStoragePath: storagePath,
        status: 'new',
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        skills: '',
        location: '',
        pincode: '',
        city: '',
        portfolio: '',
      });
      setFile(null);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ================= HERO (TRAINING STYLE) ================= */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — CONTENT */}
          <div>
            <p className="text-sm font-medium text-[#0A6190] uppercase tracking-wide">
              Careers
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Careers, 
              <span className="text-[#0A6190]"> at AVERIQ</span>
            </h1>


            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              We’re building next-generation data intelligence systems.
              If you love solving complex problems with data, you’ll fit right in.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Work on real-world AI & data platforms</li>
              <li>• Solve enterprise-scale problems</li>
              <li>• Remote-first, outcome-driven culture</li>
              <li>• Learn fast, grow faster</li>
            </ul>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center">
            <img
              src="/AI.jpeg"
              alt="Careers at AverIQ"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Who We’re Looking For
          </h2>

          <p className="text-slate-600 mb-6 max-w-md">
            We look for exceptional people.
            If you belong to any of these areas, we want to hear from you.
          </p>

          <ul className="space-y-2 text-slate-800">
            <li>• Data Scientists</li>
            <li>• Data Engineers</li>
            <li>• Knowledge Graph Experts</li>
            <li>• AI / ML Specialists</li>
            <li>• Analytics Engineers</li>
            <li>• BI & Reporting Experts</li>
            <li>• Backend / Full-Stack Developers</li>
          </ul>
        </div>

        {/* ================= FORM ================= */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">
            Apply Now
          </h3>

          {success ? (
            <p className="text-green-600 font-medium">
              ✅ Thank you! Your application has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* PERSONAL INFO */}
              <div>
                <p className="text-sm font-semibold mb-2">
                  Personal Information
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="border rounded px-4 py-2"
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="border rounded px-4 py-2"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-3 w-full border rounded px-4 py-2"
                />
              </div>

              {/* PROFESSIONAL */}
              <div>
                <p className="text-sm font-semibold mb-2">
                  Professional Details
                </p>

                <input
                  name="role"
                  placeholder="Primary Role (e.g. Data Scientist)"
                  required
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mb-3"
                />

                <input
                  name="experience"
                  placeholder="Years of Experience"
                  required
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mb-3"
                />

                <textarea
                  name="skills"
                  placeholder="Key Skills / Tools"
                  required
                  rows={3}
                  value={form.skills}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-sm font-semibold mb-2">
                  Location
                </p>

                <input
                  name="location"
                  placeholder="Location (City, State)"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mb-3"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="city"
                    placeholder="City"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="border rounded px-4 py-2"
                  />

                  <input
                    name="pincode"
                    placeholder="Zip Code"
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    value={form.pincode}
                    onChange={handleChange}
                    className="border rounded px-4 py-2"
                  />
                </div>
              </div>

              {/* LINKS + RESUME */}
              <div>
                <input
                  name="portfolio"
                  placeholder="Portfolio / GitHub / LinkedIn (optional)"
                  value={form.portfolio}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mb-3"
                />

                <label className="block text-sm font-medium mb-1">
                  Upload Resume (PDF only)
                </label>

                <input
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="w-full border rounded px-3 py-2"
                />

                {file && (
                  <p className="text-xs text-slate-500 mt-1">
                    Selected: {file.name}
                  </p>
                )}
              </div>

              {error && (
                <p className="text-red-600 text-sm">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A6190] hover:bg-[#084C6B] text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
              >
                {loading ? 'Uploading resume & submitting…' : 'Submit Application'}
              </button>

            </form>
          )}
        </div>
      </section>

    </div>
  );
}
