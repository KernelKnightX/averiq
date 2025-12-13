import { useState } from 'react';
import CareerSelect from '../components/CareerSelect';
import ResumeUploader from '../components/ResumeUploader';
import { uploadResume } from '../services/firebaseService';

const CareerPortal = () => {
  const [selectedCareer, setSelectedCareer] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleCareerSelect = (career: string) => {
    setSelectedCareer(career);
  };

  const handleResumeUpload = (file: File) => {
    setResumeFile(file);
  };

  const handleSubmit = async () => {
    if (selectedCareer && resumeFile) {
      try {
        await uploadResume(selectedCareer, resumeFile);
        alert('Resume submitted successfully!');
      } catch (error) {
        console.error('Error uploading resume:', error);
        alert('Failed to submit resume. Please try again.');
      }
    } else {
      alert('Please select a career option and upload your resume.');
    }
  };

  return (
    <div className="career-portal">
      <h1 className="text-2xl font-bold mb-4">Career Portal</h1>
      <CareerSelect onSelect={handleCareerSelect} />
      <ResumeUploader onUpload={handleResumeUpload} />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default CareerPortal;