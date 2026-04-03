import { Link } from '@mui/material';
import { colorTokens } from '../../theme/landing-page-theme';

export default function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      sx={{
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: colorTokens.onSurfaceVariant,
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          color: colorTokens.primary,
        },
      }}
    >
      {children}
    </Link>
  );
}
