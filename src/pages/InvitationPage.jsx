import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Typography, createTheme } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import WeddingInvitationTemplate from '../components/WeddingInvitationTemplate';
import { loadInvitationConfig } from '../utils/configLoader';

function InvitationPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        const loadedConfig = await loadInvitationConfig(slug);
        setConfig(loadedConfig);
        
        // Update document title
        document.title = loadedConfig.title;
      } catch (err) {
        console.error('Error loading invitation:', err);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadConfig();
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h5" color="error">
          Error: {error}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Redirecting to home...
        </Typography>
      </Box>
    );
  }

  if (!config) {
    return null;
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeddingInvitationTemplate config={config} />
    </ThemeProvider>
  );
}

export default InvitationPage;
