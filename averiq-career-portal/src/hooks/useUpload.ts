import { useState } from 'react';
import { uploadResume } from '../services/firebaseService';

const useUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (file: File) => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setSuccess(false);

    try {
      const onProgress = (progress: number) => {
        setProgress(progress);
      };

      await uploadResume(file, onProgress);
      setSuccess(true);
    } catch (err) {
      setError('Failed to upload resume. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    progress,
    error,
    success,
    handleUpload,
  };
};

export default useUpload;