import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { colorTokens } from '../../theme/landing-page-theme';

export default function FinalCTA() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 4,
        backgroundColor: colorTokens.surface,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: `linear-gradient(135deg, ${colorTokens.primaryContainer}20 0%, ${colorTokens.secondaryContainer}10 100%)`,
            borderRadius: '20px',
            p: { xs: 6, md: 8 },
            border: `1px solid ${colorTokens.outlineVariant}20`,
          }}
        >
          <Stack spacing={5} textAlign="center" alignItems="center">
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                fontWeight: 700,
                color: colorTokens.onSurface,
                fontFamily: '"Noto Serif", serif',
                lineHeight: 1.2,
              }}
            >
              Ready to Create Your Digital Invitation?
            </Typography>

            {/* Subheading */}
            <Typography
              sx={{
                fontSize: '1.05rem',
                color: colorTokens.onSurfaceVariant,
                maxWidth: '500px',
                lineHeight: 1.7,
              }}
            >
              Join thousands of happy couples and start designing your beautiful digital wedding invitation today. It takes just minutes!
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
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
                  fontWeight: 700,
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
                Start Creating Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: { xs: 3, md: 5 },
                  py: 1.8,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '10px',
                  color: colorTokens.primary,
                  borderColor: `${colorTokens.primary}50`,
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: `${colorTokens.primary}08`,
                    borderColor: colorTokens.primary,
                  },
                }}
              >
                View Live Demo
              </Button>
            </Stack>

            {/* Trust Badge */}
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: colorTokens.onSurfaceVariant,
                pt: 2,
              }}
            >
              ✓ No credit card required • ✓ Free to start • ✓ Cancel anytime
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
