import { Palette, Send, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

const steps = [
  {
    number: 1,
    icon: Palette,
    title: 'Choose & Customize',
    description:
      'Pick from our collection of beautiful templates and make it yours. Adjust colors, fonts, text, and images to match your style perfectly.',
    bgColor: colorTokens.primaryContainer,
    iconColor: colorTokens.primary,
  },
  {
    number: 2,
    icon: Send,
    title: 'Invite Your Guests',
    description:
      'Generate a unique link and share it via email, text, WhatsApp, or social media. Your guests can access it anytime, anywhere.',
    bgColor: colorTokens.secondaryContainer,
    iconColor: colorTokens.secondary,
  },
  {
    number: 3,
    icon: Sparkles,
    title: 'Track & Celebrate',
    description:
      'Monitor RSVPs in real-time, send automated reminders, and keep everything organized until your big day.',
    bgColor: colorTokens.tertiaryContainer,
    iconColor: colorTokens.tertiary,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-8 md:py-12 px-4"
      style={{
        backgroundColor: colorTokens.surfaceContainerLow,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Simple Process"
          title="How It Works in 3 Simple Steps"
          description="Creating your digital invitation is easier than ever. Get started in minutes!"
        />

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 relative"
        >
          {/* Connection Lines - Desktop Only */}
          <style>{`
            .steps-container::before {
              content: '';
              position: absolute;
              top: 40px;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(to right, ${colorTokens.outlineVariant}00, ${colorTokens.outlineVariant}30, ${colorTokens.outlineVariant}00);
              display: none;
            }
            @media (min-width: 768px) {
              .steps-container::before {
                display: block;
              }
            }
          `}</style>
          <div className="steps-container relative">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="text-center relative z-10"
                >
                  {/* Icon Container */}
                  <div className="mb-4 relative inline-block">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto transition-all hover:scale-105"
                      style={{
                        backgroundColor: step.bgColor,
                        color: step.iconColor,
                      }}
                    >
                      <IconComponent size={50} />
                    </div>

                    {/* Number Badge */}
                    <div
                      className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center font-black text-lg border-2"
                      style={{
                        backgroundColor: colorTokens.surface,
                        color: step.iconColor,
                        boxShadow: `0 4px 12px ${step.iconColor}25`,
                        borderColor: step.bgColor,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: colorTokens.onSurface,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed min-h-20"
                      style={{
                        color: colorTokens.onSurfaceVariant,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
