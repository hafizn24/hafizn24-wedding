import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack
} from '@mui/material';

const colors = {
  primary: '#D4AF37',
  secondary: '#F1E5AC',
  dark: '#0A192F',
  background: '#FDFCFB',
  lightBg: '#F5E6D3'
};

// Navbar Component
const Navbar = () => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: 'rgba(10, 25, 47, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid rgba(212, 175, 55, 0.2)`,
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: colors.primary,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 500
          }}
        >
          Sayang Wedding
        </Typography>
      </Box>
      <Button
        sx={{
          padding: '12px 32px',
          backgroundColor: colors.primary,
          color: colors.dark,
          fontSize: '0.75rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
          '&:hover': { backgroundColor: colors.secondary },
        }}
      >
        Get Started
      </Button>
    </Toolbar>
  </AppBar>
);

// Hero Component
const Hero = () => (
  <Box sx={{
    backgroundColor: colors.dark,
    position: 'relative',
    overflow: 'hidden'
  }}>
    <Box sx={{
      position: 'absolute',
      inset: 0,
      opacity: 0.1,
      background: `radial-gradient(circle at top left, rgba(212, 175, 55, 0.2), transparent, transparent)`
    }} />
    <Container maxWidth="lg" sx={{ py: { xs: 12, lg: 20 }, px: { xs: 3, sm: 4, md: 6 } }}>
      <Stack spacing={6}>
        <Box sx={{ position: 'relative', zIndex: 10 }}>
          <Typography
            sx={{
              color: colors.primary,
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: '0.75rem',
              fontWeight: 500,
              mb: 4
            }}
          >
            The Platinum Collection
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', lg: '4.5rem' },
              color: colors.secondary,
              lineHeight: 1.1,
              mb: 4
            }}
          >
            Exquisite <br />
            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 300 }}>
              Digital Artistry
            </Box>{' '}
            <br />
            For Your Union
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: `${colors.secondary}b3`,
              fontStyle: 'italic',
              maxWidth: 600,
              lineHeight: 1.8,
              mb: 6
            }}
          >
            The timeless elegance of traditional stationery met with the
            effortless sophistication of the digital age.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 2.5,
                backgroundColor: colors.primary,
                color: colors.dark,
                fontSize: '0.875rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                '&:hover': { backgroundColor: colors.secondary },
              }}
            >
              Design Your Invite
            </Button>
            <Button
              sx={{
                px: 5,
                py: 2.5,
                border: `1px solid rgba(212, 175, 55, 0.4)`,
                color: colors.secondary,
                fontSize: '0.875rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                '&:hover': { backgroundColor: 'rgba(212, 175, 55, 0.1)' },
              }}
            >
              View Lookbook
            </Button>
          </Stack>
        </Box>
        <Box sx={{
          border: `3px solid ${colors.primary}`,
          p: 2,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          '&:hover .hero-image': { transform: 'scale(1.05)' }
        }}>
          <Box
            className="hero-image"
            sx={{
              aspectRatio: '16/9',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 1s',
            }}
          />
        </Box>
      </Stack>
    </Container>
  </Box>
);

// CTA Component
const CTASection = () => (
  <Box sx={{
    py: { xs: 10, md: 14 },
    backgroundColor: colors.dark,
    color: colors.secondary
  }}>
    <Container maxWidth="md" sx={{ textAlign: 'center', px: { xs: 3, sm: 4, md: 6 } }}>
      <Stack spacing={5}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.75rem' },
            fontStyle: 'italic',
            fontWeight: 300
          }}
        >
          Begin Your Journey
        </Typography>
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1.8,
            opacity: 0.8,
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          Craft an invitation as unforgettable as your love. Join the world's most
          discerning couples in redefining the digital invitation experience.
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              px: 6,
              py: 2.5,
              backgroundColor: colors.primary,
              color: colors.dark,
              fontSize: '0.875rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: colors.secondary },
            }}
          >
            Create Your Masterpiece
          </Button>
        </Box>
      </Stack>
    </Container>
  </Box>
);

// Footer Component
const Footer = () => (
  <Box sx={{
    backgroundColor: colors.background,
    borderTop: `1px solid rgba(212, 175, 55, 0.2)`,
    py: 8
  }}>
    <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: 6
      }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: colors.dark,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 500
              }}
            >
              Sayang Wedding
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: `${colors.dark}66`
          }}
        >
          © 2026 Sayang Wedding
        </Typography>
      </Box>
    </Container>
  </Box>
);

// Main Component
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTASection />
      <Footer />
    </>
  );
}