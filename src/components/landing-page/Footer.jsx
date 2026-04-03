import { Box, Container, Typography, Stack } from '@mui/material';
import FooterLink from './FooterLink';
import { colorTokens } from '../../theme/landing-page-theme';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'FAQ', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        borderTop: `1px solid ${colorTokens.outlineVariant}20`,
        py: 6,
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Left - Logo & Copyright */}
          <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Typography
              sx={{
                fontSize: '1.125rem',
                fontFamily: '"Noto Serif", serif',
                fontWeight: 700,
                color: colorTokens.primary,
              }}
            >
              The Digital Atelier
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: colorTokens.onSurfaceVariant,
              }}
            >
              © {currentYear} The Digital Atelier. Affordable Elegance.
            </Typography>
          </Stack>

          {/* Center - Navigation Links */}
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            sx={{ flexWrap: 'wrap' }}
          >
            {footerLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
