import { Box, Container, Grid, Card, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import GroupsIcon from '@mui/icons-material/Groups';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

const features = [
  {
    icon: SpeedIcon,
    title: 'Quick & Easy',
    description: 'Create stunning invitations in just minutes with our intuitive editor',
    color: colorTokens.primary,
  },
  {
    icon: PublicIcon,
    title: 'Share Anywhere',
    description: 'Send via email, SMS, or share links on social media instantly',
    color: colorTokens.secondary,
  },
  {
    icon: GroupsIcon,
    title: 'Manage Guests',
    description: 'Track RSVPs and manage your guest list from one dashboard',
    color: colorTokens.tertiary,
  },
  {
    icon: MobileScreenShareIcon,
    title: 'Mobile Friendly',
    description: 'Beautifully designed invitations that look perfect on any device',
    color: colorTokens.primary,
  },
  {
    icon: EmojiEventsIcon,
    title: 'Fully Customizable',
    description: 'Personalize colors, fonts, and layouts to match your theme',
    color: colorTokens.secondary,
  },
  {
    icon: SecurityIcon,
    title: 'Secure & Private',
    description: 'Your data and guest information are always protected',
    color: colorTokens.tertiary,
  },
];

export default function FeaturesSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 4,
        backgroundColor: colorTokens.surface,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          label="Why Choose Us"
          title="Everything You Need for the Perfect Invitation"
          description="Our platform gives you all the tools to create, customize, and share beautiful digital wedding invitations"
        />

        {/* Features Grid */}
        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    backgroundColor: colorTokens.surfaceContainerLow,
                    border: `1px solid ${colorTokens.outlineVariant}20`,
                    borderRadius: '12px',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${colorTokens.primary}15`,
                      borderColor: `${colorTokens.primary}40`,
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      backgroundColor: `${feature.color}20`,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent sx={{ color: feature.color, fontSize: 28 }} />
                  </Box>

                  {/* Content */}
                  <Stack spacing={1} sx={{ flex: 1 }}>
                    <Box sx={{ fontSize: '1.1rem', fontWeight: 600, color: colorTokens.onSurface }}>
                      {feature.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: '0.95rem',
                        color: colorTokens.onSurfaceVariant,
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
