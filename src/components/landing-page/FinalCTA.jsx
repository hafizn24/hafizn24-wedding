import { colorTokens } from '../../theme/landing-page-theme';

export default function FinalCTA() {
  return (
    <section
      className="py-8 md:py-12 px-4"
      style={{
        backgroundColor: colorTokens.surface,
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-3xl p-6 md:p-8 border"
          style={{
            background: `linear-gradient(135deg, ${colorTokens.primaryContainer}20 0%, ${colorTokens.secondaryContainer}10 100%)`,
            borderColor: `${colorTokens.outlineVariant}20`,
          }}
        >
          <div className="flex flex-col gap-5 text-center items-center">
            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold leading-snug"
              style={{
                color: colorTokens.onSurface,
                fontFamily: '"Noto Serif", serif',
              }}
            >
              Ready to Create Your Digital Invitation?
            </h2>

            {/* Subheading */}
            <p
              className="text-lg max-w-lg leading-relaxed"
              style={{
                color: colorTokens.onSurfaceVariant,
              }}
            >
              Join thousands of happy couples and start designing your beautiful digital wedding invitation today. It takes just minutes!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2 w-full sm:w-auto">
              <button
                className="px-3 md:px-5 py-4 text-lg font-bold rounded-xl transition-all hover:-translate-y-0.75 text-white"
                style={{
                  backgroundColor: colorTokens.primary,
                  boxShadow: `0 8px 24px ${colorTokens.primary}30`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 32px ${colorTokens.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px ${colorTokens.primary}30`;
                }}
              >
                Start Creating Now
              </button>

              <button
                className="px-3 md:px-5 py-4 text-lg font-semibold rounded-xl transition-all border"
                style={{
                  color: colorTokens.primary,
                  borderColor: `${colorTokens.primary}50`,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${colorTokens.primary}08`;
                  e.currentTarget.style.borderColor = colorTokens.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = `${colorTokens.primary}50`;
                }}
              >
                View Live Demo
              </button>
            </div>

            {/* Trust Badge */}
            <p
              className="text-sm pt-2"
              style={{
                color: colorTokens.onSurfaceVariant,
              }}
            >
              ✓ No credit card required • ✓ Free to start • ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
