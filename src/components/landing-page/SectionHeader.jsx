import { colorTokens } from '../../theme/landing-page-theme';

/**
 * Reusable section header component to reduce code duplication
 * Used across: FeaturesSection, HowItWorks, SamplesGallery
 */
export default function SectionHeader({ label, title, description, maxWidth = '500px' }) {
  return (
    <div className="flex flex-col gap-2 items-center text-center mb-10">
      {label && (
        <p
          className="text-sm font-semibold tracking-widest uppercase"
          style={{
            color: colorTokens.primary,
          }}
        >
          {label}
        </p>
      )}

      <h2
        className="text-4xl md:text-5xl font-bold"
        style={{
          color: colorTokens.onSurface,
          fontFamily: '"Noto Serif", serif',
          maxWidth,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="text-base leading-relaxed"
          style={{
            color: colorTokens.onSurfaceVariant,
            maxWidth,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
