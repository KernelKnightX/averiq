import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export async function ensureAnonymousAuth(): Promise<void> {
  try {
    if (!auth.currentUser) {
      const cred = await signInAnonymously(auth);
      console.info('Anonymous sign-in OK:', cred.user.uid);
    } else {
      console.info('Already signed in:', auth.currentUser.uid);
    }
  } catch (err) {
    console.error('Anonymous sign-in failed. Enable it in Firebase Console.', err);
    throw err;
  }
}

export default app;