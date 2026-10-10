import { Box, LinearProgress, Typography } from '@mui/material';
import { getTheme } from '../theme/theme';

function LoadingScreen({ progress = null, themeName }) {
  const { colors } = getTheme(themeName);
  const determinate = typeof progress === 'number';
  const pct = determinate ? Math.round(Math.min(100, Math.max(0, progress))) : 0;

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        px: 4,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '280px', textAlign: 'center' }}>
        <LinearProgress
          variant={determinate ? 'determinate' : 'indeterminate'}
          {...(determinate ? { value: pct } : {})}
          sx={{
            height: 4,
            borderRadius: 999,
            backgroundColor: `${colors.primary}1f`,
            '& .MuiLinearProgress-bar': { backgroundColor: colors.primary, borderRadius: 999 },
          }}
        />
        <Typography sx={{ mt: 1.5, fontSize: '0.8rem', color: colors.lightText }}>
          {determinate ? `${pct}%` : 'Loading...'}
        </Typography>
      </Box>
    </Box>
  );
}

export default LoadingScreen;
