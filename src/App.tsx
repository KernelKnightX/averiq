import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const DataReadinessAssessment = React.lazy(() => import('./pages/DataReadinessAssessment'));
const ContextEngineering = React.lazy(() => import('./pages/ContextEngineering'));
const UseCaseDelivery = React.lazy(() => import('./pages/UseCaseDelivery'));
const ProductionSupport = React.lazy(() => import('./pages/ProductionSupport'));
const TalentAugmentation = React.lazy(() => import('./pages/TalentAugmentation'));
const GraphRAG = React.lazy(() => import('./pages/Graphrag'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Training = React.lazy(() => import('./pages/Training'));
const Consulting = React.lazy(() => import('./pages/Consulting'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Admin pages
const AdminLogin = React.lazy(() => import('./pages/admin/Login'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Admin routes (without layout) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Public routes (with layout) */}
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/data-readiness-assessment" element={<DataReadinessAssessment />} />
                  <Route path="/context-engineering" element={<ContextEngineering />} />
                  <Route path="/use-case-delivery" element={<UseCaseDelivery />} />
                  <Route path="/production-support" element={<ProductionSupport />} />
                  <Route path="/talent-augmentation" element={<TalentAugmentation />} />
                  <Route path="/graphrag" element={<GraphRAG />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
