import { Award, Zap, Globe, Smartphone, Palette, Lock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

const features = [
  {
    icon: Zap,
    title: 'Quick & Easy',
    description: 'Create stunning invitations in just minutes with our intuitive editor',
    color: colorTokens.primary,
  },
  {
    icon: Globe,
    title: 'Share Anywhere',
    description: 'Send via email, SMS, or share links on social media instantly',
    color: colorTokens.secondary,
  },
  {
    icon: Award,
    title: 'Manage Guests',
    description: 'Track RSVPs and manage your guest list from one dashboard',
    color: colorTokens.tertiary,
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Beautifully designed invitations that look perfect on any device',
    color: colorTokens.primary,
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Personalize colors, fonts, and layouts to match your theme',
    color: colorTokens.secondary,
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data and guest information are always protected',
    color: colorTokens.tertiary,
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-8 md:py-12 px-4"
      style={{
        backgroundColor: colorTokens.surface,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Why Choose Us"
          title="Everything You Need for the Perfect Invitation"
          description="Our platform gives you all the tools to create, customize, and share beautiful digital wedding invitations"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="h-full p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-2 hover:-translate-y-2"
                style={{
                  backgroundColor: colorTokens.surfaceContainerLow,
                  borderColor: `${colorTokens.outlineVariant}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 24px ${colorTokens.primary}15`;
                  e.currentTarget.style.borderColor = `${colorTokens.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = `${colorTokens.outlineVariant}20`;
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${feature.color}20`,
                  }}
                >
                  <IconComponent size={28} color={feature.color} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 flex-1">
                  <h3
                    className="font-semibold"
                    style={{
                      color: colorTokens.onSurface,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: colorTokens.onSurfaceVariant,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
