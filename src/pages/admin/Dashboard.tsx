import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDocs, query, collection, orderBy, updateDoc, doc } from 'firebase/firestore';
import {
  Briefcase,
  Mail,
  LogOut,
  Download,
  Archive,
  Check,
  X,
  Phone,
} from 'lucide-react';

import { auth, db } from '../../firebase/config';

/* ================= TYPES ================= */

type CareerStatus =
  | 'new'
  | 'reviewed'
  | 'contacted'
  | 'rejected'
  | 'archived';

type ContactStatus = 'new' | 'read' | 'archived';

interface CareerApplication {
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
  resumeURL: string;
  resumeFileName: string;
  status: CareerStatus;
  createdAt: any;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: ContactStatus;
  submittedAt: any;
}

/* ================= COMPONENT ================= */

export default function AdminDashboard() {
  const navigate = useNavigate();
  const sessionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [careerApps, setCareerApps] = useState<CareerApplication[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeCareerTab, setActiveCareerTab] = useState<CareerStatus>('new');
  const [activeContactTab, setActiveContactTab] =
    useState<ContactStatus>('new');

  /* ================= SESSION TIMER ================= */

  const startSessionTimer = useCallback(() => {
    // Clear existing timer
    if (sessionTimerRef.current) {
      clearTimeout(sessionTimerRef.current);
    }
    // Set new timer for 10 minutes (600000 ms)
    sessionTimerRef.current = setTimeout(async () => {
      await signOut(auth);
      navigate('/admin/login');
    }, 600000);
  }, [navigate]);

  const resetSessionTimer = useCallback(() => {
    startSessionTimer();
  }, [startSessionTimer]);

  /* ================= DATA ================= */

  const loadData = useCallback(async () => {
    setLoading(true);

    const careerSnap = await getDocs(
      query(collection(db, 'career_applications'), orderBy('createdAt', 'desc'))
    );
    const contactSnap = await getDocs(
      query(collection(db, 'contact_submissions'), orderBy('submittedAt', 'desc'))
    );

    setCareerApps(
      careerSnap.docs.map((d) => ({ id: d.id, ...d.data() } as CareerApplication))
    );
    setContacts(
      contactSnap.docs.map((d) => ({
        id: d.id,
        status: 'new', // Default status for existing submissions without status
        ...d.data()
      } as ContactSubmission))
    );

    setLoading(false);
  }, []);

  /* ================= AUTH ================= */

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/admin/login');
        return;
      }

      // Check admin claim
      try {
        const idTokenResult = await user.getIdTokenResult();
        if (!idTokenResult.claims.admin) {
          await signOut(auth);
          navigate('/admin/login');
          return;
        }
      } catch (error) {
        console.error('Error checking admin claim:', error);
        await signOut(auth);
        navigate('/admin/login');
        return;
      }

      loadData();
      startSessionTimer();
    });
    return unsub;
  }, [navigate, loadData, startSessionTimer]);

  // Add event listeners for user activity
  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    const resetTimer = () => resetSessionTimer();

    events.forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
      if (sessionTimerRef.current) {
        clearTimeout(sessionTimerRef.current);
      }
    };
  }, [resetSessionTimer]);

  /* ================= ACTIONS ================= */

  const updateCareerStatus = async (id: string, status: CareerStatus) => {
    await updateDoc(doc(db, 'career_applications', id), { status });
    setCareerApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const updateContactStatus = async (id: string, status: ContactStatus) => {
    await updateDoc(doc(db, 'contact_submissions', id), { status });
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  const logout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Welcome Admin</h1>
            <p className="text-sm text-gray-600">Admin Dashboard</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-600 font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* ================= CAREER APPLICATIONS ================= */}

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-blue-600" />
            <h2 className="text-lg font-semibold">Career Applications</h2>
          </div>

          {/* TABS */}
          <div className="flex gap-2 mb-6">
            {['new', 'reviewed', 'contacted', 'rejected', 'archived'].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCareerTab(tab as CareerStatus)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    activeCareerTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              )
            )}
          </div>

          {/* LIST */}
          <div className="bg-white rounded-xl border divide-y">
            {careerApps
              .filter((a) => a.status === activeCareerTab)
              .map((app) => (
                <div key={app.id} className="p-4 flex justify-between gap-4">
                  <div>
                    <p className="font-semibold">{app.name}</p>
                    <p className="text-sm text-gray-600">{app.email}</p>
                    <p className="text-sm text-gray-500">Phone: {app.phone}</p>
                    <p className="text-sm text-gray-500">Role: {app.role}</p>
                    <p className="text-sm text-gray-500">Experience: {app.experience} years</p>
                    <p className="text-sm text-gray-500">Skills: {app.skills}</p>
                    <p className="text-sm text-gray-500">Location: {app.location}, {app.city} {app.pincode}</p>
                    {app.portfolio && <p className="text-sm text-gray-500">Portfolio: {app.portfolio}</p>}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={app.resumeURL}
                      target="_blank"
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                    >
                      <Download size={14} />
                    </a>

                    {app.status === 'new' && (
                      <button
                        onClick={() =>
                          updateCareerStatus(app.id, 'reviewed')
                        }
                        className="px-3 py-1 bg-gray-800 text-white rounded"
                      >
                        Review
                      </button>
                    )}

                    {app.status === 'reviewed' && (
                      <>
                        <button
                          onClick={() =>
                            updateCareerStatus(app.id, 'contacted')
                          }
                          className="px-3 py-1 bg-green-600 text-white rounded"
                        >
                          Contacted
                        </button>
                        <button
                          onClick={() =>
                            updateCareerStatus(app.id, 'rejected')
                          }
                          className="px-3 py-1 bg-red-600 text-white rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {(app.status === 'contacted' ||
                      app.status === 'rejected') && (
                      <button
                        onClick={() =>
                          updateCareerStatus(app.id, 'archived')
                        }
                        className="px-3 py-1 bg-gray-300 rounded"
                      >
                        <Archive size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}

            {careerApps.filter((a) => a.status === activeCareerTab).length ===
              0 && (
              <div className="p-6 text-center text-gray-500">
                No applications here
              </div>
            )}
          </div>
        </section>

        {/* ================= CONTACT MESSAGES ================= */}

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-purple-600" />
            <h2 className="text-lg font-semibold">Contact Messages</h2>
          </div>

          <div className="flex gap-2 mb-6">
            {['new', 'read', 'archived'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveContactTab(tab as ContactStatus)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeContactTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl border divide-y">
            {contacts
              .filter((c) => c.status === activeContactTab)
              .map((msg) => (
                <div key={msg.id} className="p-4 space-y-1">
                  <p className="font-semibold">{msg.name}</p>
                  <p className="text-sm text-gray-600">{msg.email}</p>
                  {msg.phone && <p className="text-sm text-gray-500">Phone: {msg.phone}</p>}
                  {msg.company && <p className="text-sm text-gray-500">Company: {msg.company}</p>}
                  <p className="text-sm mt-2">{msg.message}</p>
                  {msg.submittedAt && (
                    <p className="text-xs text-gray-400 mt-2">
                      {msg.submittedAt.toDate().toLocaleDateString()} at {msg.submittedAt.toDate().toLocaleTimeString()}
                    </p>
                  )}

                  <div className="flex gap-2 mt-3">
                    {msg.status === 'new' && (
                      <button
                        onClick={() =>
                          updateContactStatus(msg.id, 'read')
                        }
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    {msg.status !== 'archived' && (
                      <button
                        onClick={() =>
                          updateContactStatus(msg.id, 'archived')
                        }
                        className="px-3 py-1 bg-gray-300 rounded"
                      >
                        <Archive size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}

            {contacts.filter((c) => c.status === activeContactTab).length ===
              0 && (
              <div className="p-6 text-center text-gray-500">
                No messages
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
