import TopNavBar from '../components/landing-page/TopNavBar';
import Hero from '../components/landing-page/Hero';
import FeaturesSection from '../components/landing-page/FeaturesSection';
import HowItWorks from '../components/landing-page/HowItWorks';
import SamplesGallery from '../components/landing-page/SamplesGallery';
import FinalCTA from '../components/landing-page/FinalCTA';
import Footer from '../components/landing-page/Footer';

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <TopNavBar />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <SamplesGallery />
      <FinalCTA />
      <Footer />
    </div>
  );
}
