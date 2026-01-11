import { Box, Typography, Button } from '@mui/material';

function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: 3,
        p: 2,
        bgcolor: 'background.default',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 'bold', color: 'error.main' }}
      >
        404
      </Typography>

      <Typography variant="h5" sx={{ color: 'text.secondary' }}>
        Invitation not found
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 400, color: 'text.secondary' }}>
        The link you followed may be broken or the invitation has expired.
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
