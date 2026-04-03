import { Box, Container, Stack } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import SendIcon from '@mui/icons-material/Send';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

const steps = [
  {
    number: 1,
    icon: PaletteIcon,
    title: 'Choose & Customize',
    description:
      'Pick from our collection of beautiful templates and make it yours. Adjust colors, fonts, text, and images to match your style perfectly.',
    bgColor: colorTokens.primaryContainer,
    iconColor: colorTokens.primary,
  },
  {
    number: 2,
    icon: SendIcon,
    title: 'Invite Your Guests',
    description:
      'Generate a unique link and share it via email, text, WhatsApp, or social media. Your guests can access it anytime, anywhere.',
    bgColor: colorTokens.secondaryContainer,
    iconColor: colorTokens.secondary,
  },
  {
    number: 3,
    icon: CelebrationIcon,
    title: 'Track & Celebrate',
    description:
      'Monitor RSVPs in real-time, send automated reminders, and keep everything organized until your big day.',
    bgColor: colorTokens.tertiaryContainer,
    iconColor: colorTokens.tertiary,
  },
];

export default function HowItWorks() {
  return (
    <Box
      id="how-it-works"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 4,
        backgroundColor: colorTokens.surfaceContainerLow,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          label="Simple Process"
          title="How It Works in 3 Simple Steps"
          description="Creating your digital invitation is easier than ever. Get started in minutes!"
        />

        {/* Steps Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 3 },
            position: 'relative',
          }}
        >
          {/* Connection Lines - Desktop Only */}
          <Box
            sx={{
              position: 'absolute',
              top: '40px',
              left: 0,
              right: 0,
              height: '2px',
              background: `linear-gradient(to right, ${colorTokens.outlineVariant}00, ${colorTokens.outlineVariant}30, ${colorTokens.outlineVariant}00)`,
              display: { xs: 'none', md: 'block' },
              zIndex: 0,
            }}
          />

          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Box
                key={step.number}
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Icon Container */}
                <Box sx={{ mb: 4, position: 'relative', display: 'inline-block' }}>
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      backgroundColor: step.bgColor,
                      color: step.iconColor,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <IconComponent sx={{ fontSize: 50, fill: 'currentColor' }} />
                  </Box>

                  {/* Number Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: -12,
                      width: 44,
                      height: 44,
                      backgroundColor: colorTokens.surface,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: step.iconColor,
                      boxShadow: `0 4px 12px ${step.iconColor}25`,
                      border: `2px solid ${step.bgColor}`,
                    }}
                  >
                    {step.number}
                  </Box>
                </Box>

                {/* Content */}
                <Stack spacing={2}>
                  <Box
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: colorTokens.onSurface,
                    }}
                  >
                    {step.title}
                  </Box>

                  <Box
                    sx={{
                      fontSize: '0.95rem',
                      color: colorTokens.onSurfaceVariant,
                      lineHeight: 1.6,
                      minHeight: '80px',
                    }}
                  >
                    {step.description}
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
