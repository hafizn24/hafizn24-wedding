import { Box } from '@mui/material';
import { colorTokens } from '../../theme/landing-page-theme';

/**
 * Reusable navigation link component
 * Reduces 40+ lines of repeated code in TopNavBar
 */
export default function NavLink({ href, children }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        px: 3,
        py: 1.5,
        fontSize: '0.95rem',
        fontWeight: 500,
        color: colorTokens.onSurface,
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        borderRadius: '6px',
        cursor: 'pointer',
        '&:hover': {
          color: colorTokens.primary,
          backgroundColor: `${colorTokens.primaryContainer}20`,
        },
      }}
    >
      {children}
    </Box>
  );
}
