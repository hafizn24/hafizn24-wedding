import { Box, Container, Grid, Card, CardContent, Button, CircularProgress, Alert, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

export default function SamplesGallery() {
  const navigate = useNavigate();
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/config/invitations.config.json');
        if (!response.ok) throw new Error('Failed to load invitations');
        const data = await response.json();
        setInvitations(data.invitations || []);
      } catch (err) {
        console.error('Error fetching invitations:', err);
        setError('Failed to load sample invitations');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, []);

  const handleViewInvitation = (slug) => {
    navigate(`/${slug}`);
  };

  const themeColors = [
    { bg: '#d4e9c4', primary: '#526447' },
    { bg: '#ffdad9', primary: '#775757' },
    { bg: '#feffd6', primary: '#605f58' },
  ];

  return (
    <Box
      id="samples"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 4,
        backgroundColor: colorTokens.surfaceContainerLow,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          label="Explore & Inspire"
          title="Beautiful Sample Invitations"
          description="Take a look at some of our most popular invitation templates to get inspired for your own design"
        />

        {/* Error State */}
        {error && (
          <Alert severity="info" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {/* Loading State */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: colorTokens.primary }} />
          </Box>
        ) : invitations.length > 0 ? (
          <Grid container spacing={4}>
            {invitations.map((invitation, idx) => {
              const themeColor = themeColors[idx % themeColors.length];
              return (
                <Grid item xs={12} sm={6} md={4} key={invitation.slug}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      border: `1px solid ${colorTokens.outlineVariant}20`,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-8px)',
                        '& .preview-image': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    {/* Preview Image */}
                    <Box
                      className="preview-image"
                      sx={{
                        width: '100%',
                        height: 280,
                        background: `linear-gradient(135deg, ${themeColor.bg} 0%, ${themeColor.primary}15 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Stack alignItems="center" spacing={2}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            backgroundColor: themeColor.primary,
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            '_groupHover': {
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <PreviewIcon sx={{ fontSize: 32, color: 'white' }} />
                        </Box>
                        <Typography
                          sx={{
                            color: themeColor.primary,
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            opacity: 0.7,
                            letterSpacing: '0.05em',
                          }}
                        >
                          PREVIEW
                        </Typography>
                      </Stack>
                    </Box>

                    {/* Card Content */}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: colorTokens.onSurface,
                            fontFamily: '"Noto Serif", serif',
                            mb: 1,
                          }}
                        >
                          {invitation.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.9rem',
                            color: colorTokens.onSurfaceVariant,
                            lineHeight: 1.5,
                          }}
                        >
                          Beautiful invitation template to use as inspiration for your big day
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, pt: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: themeColor.primary,
                          }}
                        />
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: themeColor.bg,
                            border: `2px solid ${colorTokens.outlineVariant}`,
                          }}
                        />
                      </Box>

                      <Button
                        fullWidth
                        onClick={() => handleViewInvitation(invitation.slug)}
                        sx={{
                          color: 'white',
                          backgroundColor: themeColor.primary,
                          fontWeight: 600,
                          textTransform: 'none',
                          py: 1.2,
                          borderRadius: '10px',
                          transition: 'all 0.3s ease',
                          mt: 'auto',
                          '&:hover': {
                            backgroundColor: themeColor.primary,
                            opacity: 0.9,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        View Sample
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box textAlign="center" py={8}>
            <Typography color="textSecondary">
              No sample invitations available at the moment.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
