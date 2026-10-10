import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, createTheme } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import WeddingInvitationTemplate from '../components/WeddingInvitationTemplate';
import LoadingScreen from '../components/LoadingScreen';
import { loadInvitationConfig } from '../utils/configLoader';
import { preloadAll, waitForFonts, getInvitationAssets } from '../utils/preloadImages';

const MIN_SPLASH_MS = 800;
const ASSET_TIMEOUT_MS = 15000;

function InvitationPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [phase, setPhase] = useState('config'); // 'config' | 'assets' | 'ready'
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  // Step 1: load config JSON
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setPhase('config');
        setProgress(null);
        setError(null);
        setConfig(null);
        const loadedConfig = await loadInvitationConfig(slug);
        if (cancelledRef.current) return;
        setConfig(loadedConfig);
        document.title = loadedConfig.title;
        setPhase('assets');
      } catch (err) {
        console.error('Error loading invitation:', err);
        if (!cancelledRef.current) navigate('/404', { replace: true });
      }
    };

    loadConfig();
  }, [slug, navigate]);

  // Step 2: preload backgrounds + initial + fonts before revealing
  useEffect(() => {
    if (!config || phase !== 'assets') return;
    let cancelled = false;
    const startedAt = Date.now();
    setProgress(5);

    const run = async () => {
      const assets = getInvitationAssets(config);
      const total = assets.length || 1;
      // Fonts load in parallel while images preload
      const fontsPromise = waitForFonts();
      await preloadAll(
        assets,
        (loaded) => {
          if (!cancelled) setProgress(5 + Math.round((loaded / total) * 90));
        },
        ASSET_TIMEOUT_MS
      );
      await fontsPromise;
      // Enforce minimum splash time for a smooth feel
      const elapsed = Date.now() - startedAt;
      const remaining = MIN_SPLASH_MS - elapsed;
      if (remaining > 0) await new Promise((res) => setTimeout(res, remaining));
      if (!cancelled && !cancelledRef.current) {
        setProgress(100);
        setPhase('ready');
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [config, phase]);

  const theme = useMemo(() => createTheme(), []);

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

  // Gate: show progress bar until config + ALL assets are ready
  if (phase !== 'ready' || !config) {
    return (
      <LoadingScreen
        progress={phase === 'assets' ? progress ?? 5 : null}
        themeName={config?.themeName}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeddingInvitationTemplate config={config} />
    </ThemeProvider>
  );
}

export default InvitationPage;
