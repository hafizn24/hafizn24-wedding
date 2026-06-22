import { colorTokens } from '../../theme/landing-page-theme';

export default function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-xs font-semibold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
      style={{
        color: colorTokens.onSurfaceVariant,
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colorTokens.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colorTokens.onSurfaceVariant;
      }}
    >
      {children}
    </a>
  );
}
