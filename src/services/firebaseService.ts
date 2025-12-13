import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';

export interface CareerApplication {
  name: string;
  email: string;
  role: string;
  resumePath?: string;
  resumeUrl?: string;
  createdAt?: any;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest: string;
  message: string;
}

/**
 * Submit a career application directly to Firebase
 * File upload happens directly to Firebase Storage
 */
export async function submitCareerApplication(
  name: string,
  email: string,
  role: string,
  file: File
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate inputs
    if (!name || !email || !role || !file) {
      return { success: false, message: 'Missing required fields' };
    }

    // Upload resume directly to Firebase Storage
    const timestamp = Date.now();
    const safeName = file.name.replace(/\s+/g, '_');
    const storageRef = ref(storage, `careers/${timestamp}_${safeName}`);
    
    await uploadBytes(storageRef, file);
    const resumeUrl = await getDownloadURL(storageRef);

    // Save application to Firestore
    await addDoc(collection(db, 'career_applications'), {
      name,
      email,
      role,
      resumeUrl,
      resumePath: `careers/${timestamp}_${safeName}`,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type,
      createdAt: serverTimestamp(),
      status: 'pending',
    });

    return { success: true, message: 'Application submitted successfully! We\'ll review it within 48 hours.' };
  } catch (err: any) {
    console.error('Career application error:', err);
    return { success: false, message: err.message || 'Failed to submit application' };
  }
}

/**
 * Submit a contact form directly to Firebase
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Save to Firestore
    await addDoc(collection(db, 'contact_submissions'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new',
      read: false,
    });

    return { success: true, message: 'Message sent successfully! We\'ll get back to you within 1 business day.' };
  } catch (err: any) {
    console.error('Contact form error:', err);
    return { success: false, message: err.message || 'Failed to send message. Please try again later.' };
  }
}

/**
 * Check if email already applied for a role
 */
export async function hasAppliedBefore(email: string, role?: string): Promise<boolean> {
  try {
    const q = role
      ? query(collection(db, 'career_applications'), where('email', '==', email), where('role', '==', role))
      : query(collection(db, 'career_applications'), where('email', '==', email));

    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (err) {
    console.warn('Check applied error:', err);
    return false;
  }
}

/**
 * Subscribe to newsletter directly to Firebase
 */
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // Check if already subscribed
    const q = query(collection(db, 'newsletter_subscribers'), where('email', '==', email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { success: false, message: 'You\'re already subscribed to our newsletter!' };
    }

    // Save to Firestore
    await addDoc(collection(db, 'newsletter_subscribers'), {
      email,
      subscribedAt: serverTimestamp(),
      status: 'active',
    });

    return { success: true, message: 'Successfully subscribed! Check your email for confirmation.' };
  } catch (err: any) {
    console.error('Newsletter subscription error:', err);
    return { success: false, message: err.message || 'Failed to subscribe. Please try again later.' };
  }
}