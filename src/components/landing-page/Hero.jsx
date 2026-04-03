import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colorTokens } from '../../theme/landing-page-theme';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('samples').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 12,
        pb: 6,
        px: 4,
        backgroundColor: 'linear-gradient(135deg, #fafaf2 0%, #f4f4ea 100%)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: `radial-gradient(circle, ${colorTokens.primaryContainer}15 0%, transparent 70%)`,
          borderRadius: '50%',
          top: '-150px',
          right: '-100px',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colorTokens.secondaryContainer}10 0%, transparent 70%)`,
          borderRadius: '50%',
          bottom: '-50px',
          left: '-100px',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={5}
          alignItems="flex-start"
          justifyContent="center"
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '700px',
          }}
        >
          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: colorTokens.primary,
            }}
          >
            Create & Share
          </Typography>

          {/* Main Heading */}
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              color: colorTokens.onSurface,
              fontFamily: '"Noto Serif", serif',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Digital Wedding Invitations That Impress
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: colorTokens.onSurfaceVariant,
              lineHeight: 1.7,
              maxWidth: '600px',
            }}
          >
            Create beautiful, personalized digital wedding invitations in minutes. Share them instantly with your guests and manage RSVPs all in one place.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colorTokens.primary,
                color: 'white',
                px: { xs: 3, md: 5 },
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '10px',
                boxShadow: `0 8px 24px ${colorTokens.primary}30`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 32px ${colorTokens.primary}40`,
                },
              }}
            >
              Start Creating
            </Button>

            <Button
              onClick={handleScroll}
              sx={{
                color: colorTokens.primary,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.8,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: `${colorTokens.primaryContainer}20`,
                  transform: 'translateX(4px)',
                },
              }}
            >
              View Samples
              <ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />
            </Button>
          </Stack>

          {/* Stats */}
          <Stack
            direction="row"
            spacing={{ xs: 4, md: 8 }}
            sx={{
              pt: 4,
              borderTop: `1px solid ${colorTokens.outlineVariant}30`,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: colorTokens.primary,
                }}
              >
                5,000+
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: colorTokens.onSurfaceVariant }}>
                Happy Couples
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: colorTokens.secondary,
                }}
              >
                50K+
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: colorTokens.onSurfaceVariant }}>
                Guests Invited
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: colorTokens.tertiary,
                }}
              >
                98%
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: colorTokens.onSurfaceVariant }}>
                RSVP Rate
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
