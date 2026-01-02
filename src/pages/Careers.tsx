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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      /* ========= Upload Resume ========= */
      const storagePath = `careers/${Date.now()}_${file.name}`;
      const fileRef = ref(storage, storagePath);
      await uploadBytes(fileRef, file);
      const resumeURL = await getDownloadURL(fileRef);

      /* ========= Firestore Document ========= */
      await addDoc(collection(db, 'career_applications'), {
        ...form,
        resumeURL,
        resumeFileName: file.name,
        resumeStoragePath: storagePath,
        status: 'new',            // 🔥 DO NOT REMOVE
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
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Careers at <span className="text-[#0A6190]">AverIQ</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We’re building next-generation data intelligence systems.
              If you love solving complex problems with data, you’ll fit right in.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>🚀 Work on real-world AI & data platforms</p>
              <p>🧠 Solve enterprise-scale problems</p>
              <p>🌍 Remote-first, outcome-driven culture</p>
              <p>📈 Learn fast, grow faster</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Careers at AverIQ"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We’re Looking For
          </h2>

          <p className="text-gray-600 mb-6">
            We look for exceptional people.
            If you belong to any of these areas, we want to hear from you.
          </p>

          <ul className="space-y-3 text-gray-800">
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
         <div className="bg-gray-50 border rounded-2xl p-8">
           <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
           <p className="text-sm text-gray-600 mb-6">
           
           </p>

          {success ? (
            <p className="text-green-600 font-medium">
              ✅ Thank you! Your application has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="role"
                placeholder="Primary Role (e.g. Data Scientist)"
                required
                value={form.role}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="experience"
                placeholder="Years of Experience"
                required
                value={form.experience}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
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

              <input
                name="location"
                placeholder="Location (City, State)"
                required
                value={form.location}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="pincode"
                placeholder="Zip Code"
                required
                pattern="[0-9]{5}"
                maxLength={5}
                value={form.pincode}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="city"
                placeholder="City"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                name="portfolio"
                placeholder="Portfolio / GitHub / LinkedIn (optional)"
                value={form.portfolio}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />

              <input
                type="file"
                accept=".pdf"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full"
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A6190] text-white py-3 rounded-lg hover:bg-[#084C6B] disabled:opacity-50"
              >
                {loading ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
