import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import "./styles/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = lazy(() => import('./components/NavbarComponent/index.jsx'));
const HeroSection = lazy(() => import('./pages/HeroSection/index.jsx'));
const ChallengesSection = lazy(() => import('./pages/ChallengesSection'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const ReviewSection = lazy(() => import('./pages/ReviewSection'));
const LinkedinSolutions = lazy(() => import('./pages/LinkedinSolutions'));
const SupportedCRMs = lazy(() => import('./pages/SupportedCRMs'));
const CTA = lazy(() => import('./pages/CTA.jsx'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingFooter = lazy(() => import('./components/FloatingFooter'));

const LoadingFallback = () => (
  <div className="loading-container">
    <div className="spinner-border text-primary" role="status"></div>
    <div className="ms-3 loading-txt">Loading LeadCRM.io....</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Suspense fallback={<LoadingFallback />}>
          <NavbarComponent />
          <HeroSection />
          <ChallengesSection />
          <HowItWorks />
          <ReviewSection />
          <LinkedinSolutions />
          <SupportedCRMs />
          <CTA />
          <Footer />
          <FloatingFooter />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;