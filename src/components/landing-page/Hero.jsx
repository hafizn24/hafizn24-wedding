import { ArrowRight } from 'lucide-react';
import { colorTokens } from '../../theme/landing-page-theme';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('samples').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center pt-12 pb-6 px-4 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #fafaf2 0%, #f4f4ea 100%)',
      }}
    >
      <style>{`
        .hero-before {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, ${colorTokens.primaryContainer}15 0%, transparent 70%);
          border-radius: 50%;
          top: -150px;
          right: -100px;
          z-index: 0;
        }
        .hero-after {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, ${colorTokens.secondaryContainer}10 0%, transparent 70%);
          border-radius: 50%;
          bottom: -50px;
          left: -100px;
          z-index: 0;
        }
      `}</style>
      
      <div className="hero-before" />
      <div className="hero-after" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 items-start justify-center relative z-10 max-w-2xl">
          {/* Subtitle */}
          <p
            className="text-sm font-semibold tracking-widest uppercase"
            style={{
              color: colorTokens.primary,
            }}
          >
            Create & Share
          </p>

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight -tracking-tight"
            style={{
              color: colorTokens.onSurface,
              fontFamily: '"Noto Serif", serif',
            }}
          >
            Digital Wedding Invitations That Impress
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{
              color: colorTokens.onSurfaceVariant,
            }}
          >
            Create beautiful, personalized digital wedding invitations in minutes. Share them instantly with your guests and manage RSVPs all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
            <button
              className="px-3 md:px-5 py-4 text-lg font-semibold rounded-xl transition-all text-white"
              style={{
                backgroundColor: colorTokens.primary,
                boxShadow: `0 8px 24px ${colorTokens.primary}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${colorTokens.primary}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 24px ${colorTokens.primary}30`;
              }}
            >
              Start Creating
            </button>

            <button
              onClick={handleScroll}
              className="flex items-center gap-2 px-3 md:px-5 py-4 font-semibold rounded-xl transition-all"
              style={{
                color: colorTokens.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colorTokens.primaryContainer}20`;
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              View Samples
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-row gap-4 md:gap-8 pt-4 border-t"
            style={{
              borderColor: `${colorTokens.outlineVariant}30`,
            }}
          >
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  color: colorTokens.primary,
                }}
              >
                5,000+
              </p>
              <p
                className="text-sm"
                style={{
                  color: colorTokens.onSurfaceVariant,
                }}
              >
                Happy Couples
              </p>
            </div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  color: colorTokens.secondary,
                }}
              >
                50K+
              </p>
              <p
                className="text-sm"
                style={{
                  color: colorTokens.onSurfaceVariant,
                }}
              >
                Guests Invited
              </p>
            </div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  color: colorTokens.tertiary,
                }}
              >
                98%
              </p>
              <p
                className="text-sm"
                style={{
                  color: colorTokens.onSurfaceVariant,
                }}
              >
                RSVP Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
