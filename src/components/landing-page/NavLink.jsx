import { colorTokens } from '../../theme/landing-page-theme';

/**
 * Reusable navigation link component
 * Reduces 40+ lines of repeated code in TopNavBar
 */
export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer hover:bg-slate-100"
      style={{
        color: colorTokens.onSurface,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colorTokens.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colorTokens.onSurface;
      }}
    >
      {children}
    </a>
  );
}
