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
    <footer
      className="py-6 px-4"
      style={{
        backgroundColor: '#f5f5f5',
        borderTop: `1px solid ${colorTokens.outlineVariant}20`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Left - Logo & Copyright */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3
              className="text-lg font-bold"
              style={{
                fontFamily: '"Noto Serif", serif',
                color: colorTokens.primary,
              }}
            >
              The Digital Atelier
            </h3>
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: colorTokens.onSurfaceVariant,
              }}
            >
              © {currentYear} The Digital Atelier. Affordable Elegance.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-row gap-4 justify-center flex-wrap">
            {footerLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
