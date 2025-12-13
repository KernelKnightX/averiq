import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase/config';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export const uploadResume = async (file: File, careerOption: string) => {
  try {
    const storageRef = ref(storage, `resumes/${file.name}`);
    await uploadBytes(storageRef, file);

    const resumeData = {
      fileName: file.name,
      careerOption,
      uploadedAt: new Date(),
    };

    const docRef = await addDoc(collection(db, 'resumes'), resumeData);
    console.log('Resume uploaded and data saved with ID: ', docRef.id);
  } catch (error) {
    console.error('Error uploading resume: ', error);
  }
};