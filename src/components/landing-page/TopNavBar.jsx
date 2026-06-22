import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './NavLink';
import { colorTokens } from '../../theme/landing-page-theme';

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-amber-50/95 backdrop-blur-xl border-b border-slate-200/15 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between items-center py-2.5 px-2 md:px-0">
          {/* Logo */}
          <h1
            className="text-2xl font-bold text-slate-900 font-noto tracking-tight cursor-pointer"
            style={{ color: colorTokens.primary }}
          >
            Digital Wedding
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-row gap-1 items-center">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#samples">Samples</NavLink>
            <NavLink href="#about">About</NavLink>

            <Button
              className="ml-2 px-3.5 py-1 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-95"
              style={{
                backgroundColor: colorTokens.primary,
                color: 'white',
              }}
            >
              Start Creating
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="block md:hidden">
            <Menu className="text-slate-900 cursor-pointer" size={24} style={{ color: colorTokens.primary }} />
          </div>
        </div>
      </div>
    </nav>
  );
}
