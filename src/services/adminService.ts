import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  DocumentSnapshot,
  Timestamp,
  writeBatch,
  getDoc
} from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  skills: string;
  location: string;
  pincode: string;
  city: string;
  portfolio?: string;
  resumeFileName: string;
  resumeStoragePath: string;
  resumeURL: string;
  status: 'submitted' | 'under_review' | 'shortlisted' | 'interviewed' | 'hired' | 'rejected';
  createdAt: Timestamp;
  reviewedAt?: Timestamp;
  reviewedBy?: string;
  notes?: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface ApplicationStats {
  total: number;
  submitted: number;
  under_review: number;
  shortlisted: number;
  interviewed: number;
  hired: number;
  rejected: number;
  thisWeek: number;
  thisMonth: number;
}

export interface PaginatedResult<T> {
  data: T[];
  hasMore: boolean;
  lastDoc: DocumentSnapshot | null;
}

// Get paginated career applications with filters
export const getCareerApplications = async (
  status?: string,
  limitCount: number = 20,
  startAfterDoc?: DocumentSnapshot
): Promise<PaginatedResult<CareerApplication>> => {
  try {
    let q = query(
      collection(db, 'career_applications'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    if (status && status !== 'all') {
      q = query(
        collection(db, 'career_applications'),
        where('status', '==', status),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
    }

    if (startAfterDoc) {
      q = query(q, startAfter(startAfterDoc));
    }

    const querySnapshot = await getDocs(q);
    const applications = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as CareerApplication[];

    return {
      data: applications,
      hasMore: querySnapshot.docs.length === limitCount,
      lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
    };
  } catch (error) {
    console.error('Error fetching career applications:', error);
    throw error;
  }
};

// Get application statistics
export const getApplicationStats = async (): Promise<ApplicationStats> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'career_applications'));
    const applications = querySnapshot.docs.map(doc => doc.data()) as CareerApplication[];

    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const stats: ApplicationStats = {
      total: applications.length,
      submitted: applications.filter(app => app.status === 'submitted').length,
      under_review: applications.filter(app => app.status === 'under_review').length,
      shortlisted: applications.filter(app => app.status === 'shortlisted').length,
      interviewed: applications.filter(app => app.status === 'interviewed').length,
      hired: applications.filter(app => app.status === 'hired').length,
      rejected: applications.filter(app => app.status === 'rejected').length,
      thisWeek: applications.filter(app => app.createdAt.toDate() > oneWeekAgo).length,
      thisMonth: applications.filter(app => app.createdAt.toDate() > oneMonthAgo).length,
    };

    return stats;
  } catch (error) {
    console.error('Error fetching application stats:', error);
    throw error;
  }
};

// Update application status with notes
export const updateApplicationStatus = async (
  id: string,
  status: CareerApplication['status'],
  notes?: string,
  reviewedBy?: string,
  priority?: CareerApplication['priority']
): Promise<void> => {
  try {
    const updateData: Record<string, unknown> = {
      status,
      reviewedAt: Timestamp.now(),
    };

    if (notes !== undefined) updateData.notes = notes;
    if (reviewedBy) updateData.reviewedBy = reviewedBy;
    if (priority) updateData.priority = priority;

    await updateDoc(doc(db, 'career_applications', id), updateData);
  } catch (error) {
    console.error('Error updating application status:', error);
    throw error;
  }
};

// Bulk update applications
export const bulkUpdateApplications = async (
  applicationIds: string[],
  status: CareerApplication['status'],
  reviewedBy: string
): Promise<void> => {
  try {
    const batch = writeBatch(db);

    applicationIds.forEach(id => {
      const appRef = doc(db, 'career_applications', id);
      batch.update(appRef, {
        status,
        reviewedAt: Timestamp.now(),
        reviewedBy,
      });
    });

    await batch.commit();
  } catch (error) {
    console.error('Error bulk updating applications:', error);
    throw error;
  }
};

// Delete application and its resume file
export const deleteApplication = async (id: string): Promise<void> => {
  try {
    // Get application data first
    const appDoc = await getDoc(doc(db, 'career_applications', id));
    if (!appDoc.exists()) {
      throw new Error('Application not found');
    }

    const appData = appDoc.data() as CareerApplication;

    // Delete resume file from storage if it exists
    if (appData.resumeStoragePath) {
      try {
        const resumeRef = ref(storage, appData.resumeStoragePath);
        await deleteObject(resumeRef);
        console.log('Resume file deleted from storage');
      } catch (storageError) {
        console.warn('Failed to delete resume file from storage:', storageError);
        // Don't throw error here, continue with Firestore deletion
      }
    }

    // Delete document from Firestore
    await deleteDoc(doc(db, 'career_applications', id));
    console.log('Application deleted from Firestore');
  } catch (error) {
    console.error('Error deleting application:', error);
    throw error;
  }
};

// Search applications by name, email, or role
export const searchApplications = async (
  searchTerm: string,
  limitCount: number = 20
): Promise<CareerApplication[]> => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'career_applications'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )
    );

    const applications = querySnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as CareerApplication[];

    // Client-side filtering (Firestore doesn't support full-text search easily)
    return applications.filter(app =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching applications:', error);
    throw error;
  }
};

// Get application by ID
export const getApplicationById = async (id: string): Promise<CareerApplication | null> => {
  try {
    const docSnap = await getDoc(doc(db, 'career_applications', id));
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as CareerApplication;
    }
    return null;
  } catch (error) {
    console.error('Error fetching application:', error);
    throw error;
  }
};