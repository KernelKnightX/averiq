import React, { useState } from 'react';
import { uploadResume } from '../services/firebaseService';
import { useUpload } from '../hooks/useUpload';

const ResumeUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { uploadProgress, uploadFile } = useUpload();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        await uploadFile(selectedFile);
        await uploadResume(selectedFile);
        alert('Resume uploaded successfully!');
      } catch (error) {
        console.error('Error uploading resume:', error);
        alert('Failed to upload resume. Please try again.');
      }
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div className="resume-uploader">
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Resume
      </button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default ResumeUploader;