import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our site, you agree to our use of cookies as described in our <a href="/privacy" className="underline hover:text-blue-300">Privacy Policy</a>.</p>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={reject} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors">Reject</button>
          <button onClick={accept} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">Accept</button>
        </div>
      </div>
    </div>
  );
}