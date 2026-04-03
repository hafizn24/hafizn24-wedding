import { Box, Stack, Typography } from '@mui/material';
import { colorTokens } from '../../theme/landing-page-theme';

/**
 * Reusable section header component to reduce code duplication
 * Used across: FeaturesSection, HowItWorks, SamplesGallery
 */
export default function SectionHeader({ label, title, description, maxWidth = '500px' }) {
  return (
    <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 10 }}>
      {label && (
        <Typography
          sx={{
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: colorTokens.primary,
          }}
        >
          {label}
        </Typography>
      )}

      <Typography
        sx={{
          fontSize: { xs: '2rem', md: '2.75rem' },
          fontWeight: 700,
          color: colorTokens.onSurface,
          fontFamily: '"Noto Serif", serif',
          maxWidth,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            fontSize: '1rem',
            color: colorTokens.onSurfaceVariant,
            maxWidth: maxWidth,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}
