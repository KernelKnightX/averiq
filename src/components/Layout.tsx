import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import CookieConsent from './CookieConsent';

/* =========================================================
   SERVICE DROPDOWN ITEM (PREMIUM STYLE)
   ========================================================= */
function ServiceItem({
  to,
  title,
  desc,
}: {
  to: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="block px-4 py-3 hover:bg-gray-50 transition"
    >
      <div className="text-sm font-semibold text-gray-900">
        {title}
      </div>
      <div className="text-xs text-gray-500 mt-0.5">
        {desc}
      </div>
    </Link>
  );
}

/* =========================================================
   LAYOUT
   ========================================================= */
export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<Link to="/" className="flex items-center">
  <img
    src="/Untitled_design__2.png"
    alt="AverIQ"
    className="h-10 w-auto object-contain"
  />
</Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

            <Link to="/" className={isActive('/') ? 'text-blue-600' : 'hover:text-gray-900'}>
              Home
            </Link>

            <Link to="/about" className={isActive('/about') ? 'text-blue-600' : 'hover:text-gray-900'}>
              About
            </Link>

            {/* SERVICES (CLICK + HOVER, CLEAN DROPDOWN) */}
            <div className="relative group">
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 ${
                  location.pathname.startsWith('/services')
                    ? 'text-blue-600'
                    : 'hover:text-gray-900'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 opacity-70" />
              </Link>

              <div
                className="
                  absolute left-0 top-full mt-3
                  w-72 rounded-xl bg-white
                  border border-gray-200
                  shadow-xl
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                "
              >
                <ServiceItem
                  to="/data-readiness-assessment"
                  title="Data & AI Advisory"
                  desc="AI readiness, strategy & semantic foundations"
                />
                <ServiceItem
                  to="/use-case-delivery"
                  title="Use Case Delivery"
                  desc="Production-grade AI systems, not pilots"
                />
                <ServiceItem
                  to="/talent-augmentation"
                  title="Talent Augmentation"
                  desc="Elite AI & knowledge graph engineers"
                />
                <ServiceItem
                  to="/production-support"
                  title="Production Support"
                  desc="Reliable L1–L3 AI platform support"
                />
              </div>
            </div>

            <Link to="/training" className={isActive('/training') ? 'text-blue-600' : 'hover:text-gray-900'}>
              Training
            </Link>

            <Link to="/careers" className={isActive('/careers') ? 'text-blue-600' : 'hover:text-gray-900'}>
              Careers
            </Link>

            <Link to="/contact" className={isActive('/contact') ? 'text-blue-600' : 'hover:text-gray-900'}>
              Contact
            </Link>
          </div>



          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link to="/services" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link to="/training" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Training</Link>
              <Link to="/careers" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Careers</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* ================= MAIN ================= */}
      <main className="pt-20">
        {children}
      </main>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#01121C] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.png" className="h-14 w-14" />
              <span className="text-2xl font-bold">AVERIQ</span>
            </div>
            <p className="text-white max-w-md">
              Your boutique AI partner for faster execution and better outcomes — without big-firm overhead.
            </p>
          </div>

          <div>
<h4 className="font-semibold mb-3 text-white">Company</h4>

<ul className="space-y-1">
  <li>
    <Link to="/" className="text-white hover:text-white">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about" className="text-white hover:text-white">
      About
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-white hover:text-white">
      Services
    </Link>
  </li>
  <li>
    <Link to="/careers" className="text-white hover:text-white">
      Careers
    </Link>
  </li>
  <li>
    <Link to="/contact" className="text-white hover:text-white">
      Contact
    </Link>
  </li>
</ul>

          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
<ul className="space-y-2 text-white [&_a]:text-white [&_a:hover]:text-white">
  <li><Link to="/data-readiness-assessment">Data & AI Advisory</Link></li>
  <li><Link to="/talent-augmentation">Talent Augmentation</Link></li>
  <li><Link to="/use-case-delivery">Use Case Delivery</Link></li>
  <li><Link to="/production-support">Production Support</Link></li>
  <li><Link to="/training">Training</Link></li>
</ul>

          </div>
        </div>

        <div className="border-t border-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-white">
            <div className="font-medium">
              © {new Date().getFullYear()} AverIQ. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}

