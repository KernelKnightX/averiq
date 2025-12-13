import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { submitCareerApplication } from '../services/firebaseService';

export default function ResumeUploader() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const handleFileChange = (files: FileList | null) => {
    const selectedFile = files?.[0] ?? null;
    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!allowedTypes.includes(selectedFile.type)) {
      setMessage('Only PDF, DOC, and DOCX files are allowed');
      setStatus('error');
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setMessage('File size must be less than 5MB');
      setStatus('error');
      return;
    }

    setMessage('');
    setStatus('idle');
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !role || !file) {
      setMessage('Please fill all fields and attach your resume');
      setStatus('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      setStatus('uploading');
      setMessage('Uploading your application...');

      const result = await submitCareerApplication(name, email, role, file);

      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        // Reset form
        setName('');
        setEmail('');
        setRole('');
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Failed to submit application. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="applicant-name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            id="applicant-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
            disabled={status === 'uploading'}
          />
        </div>

        <div>
          <label htmlFor="applicant-email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            id="applicant-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
            disabled={status === 'uploading'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role-select" className="block text-sm font-semibold text-gray-900 mb-2">
          Position Applying For *
        </label>
        <select
          id="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm"
          disabled={status === 'uploading'}
        >
          <option value="">Select a role</option>
          <option value="Junior Context Engineer">Junior Context Engineer</option>
          <option value="Data Engineer">Data Engineer</option>
          <option value="Product Manager — Semantic AI">Product Manager — Semantic AI</option>
        </select>
      </div>

      <div>
        <label htmlFor="resume-upload" className="block text-sm font-semibold text-gray-900 mb-2">
          Resume (PDF, DOC, or DOCX - Max 5MB) *
        </label>
        <div className="relative">
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e.target.files)}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            disabled={status === 'uploading'}
          />
        </div>
        {file && (
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <Upload className="w-4 h-4" />
            <span>{file.name}</span>
            <span className="text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'uploading'}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'uploading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Uploading Application...
          </>
        ) : (
          <>
            Submit Application
            <Upload className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Status Messages */}
      {message && (
        <div
          className={`flex items-center gap-2 p-4 rounded-xl ${
            status === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : status === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : status === 'error' ? (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          ) : null}
          <span className="text-sm font-medium">{message}</span>
        </div>
      )}
    </form>
  );
}