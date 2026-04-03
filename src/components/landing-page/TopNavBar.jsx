import { Box, Container, Button, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from './NavLink';
import { colorTokens } from '../../theme/landing-page-theme';

export default function TopNavBar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(250, 250, 242, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colorTokens.outlineVariant}15`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2.5, px: { xs: 2, md: 0 } }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.3rem',
              fontFamily: '"Noto Serif", serif',
              fontWeight: 700,
              color: colorTokens.primary,
              letterSpacing: '-0.5px',
              cursor: 'pointer',
            }}
          >
            Digital Wedding
          </Typography>

          {/* Desktop Links */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#samples">Samples</NavLink>
            <NavLink href="#about">About</NavLink>

            <Button
              variant="contained"
              sx={{
                backgroundColor: colorTokens.primary,
                color: 'white',
                px: 3.5,
                py: 1,
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 'none',
                ml: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: colorTokens.primary,
                  opacity: 0.9,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 12px ${colorTokens.primary}30`,
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Start Creating
            </Button>
          </Stack>

          {/* Mobile Menu Toggle */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon sx={{ color: colorTokens.primary, cursor: 'pointer' }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
