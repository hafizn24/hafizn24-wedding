import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from '../components/landing-page/TopNavBar';
import Hero from '../components/landing-page/Hero';
import FeaturesSection from '../components/landing-page/FeaturesSection';
import HowItWorks from '../components/landing-page/HowItWorks';
import SamplesGallery from '../components/landing-page/SamplesGallery';
import FinalCTA from '../components/landing-page/FinalCTA';
import Footer from '../components/landing-page/Footer';
import { landingPageTheme } from '../theme/landing-page-theme';

export default function LandingPage() {
  return (
    <ThemeProvider theme={landingPageTheme}>
      <CssBaseline />
      <Box sx={{ width: '100%', overflowX: 'hidden' }}>
        <TopNavBar />
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <SamplesGallery />
        <FinalCTA />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
