import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function EventDetailsSection({ config }) {
  const { event, location, invitation, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.EventDetailsSection[variant.EventDetailsSection];

  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={styles.timeFormatted}>
        {event.timeFormatted}
      </Typography>

      <Typography sx={styles.venueLabel}>
        {invitation.venueLabel}
      </Typography>

      <Typography sx={styles.fullAddress}>
        {location.fullAddress}
      </Typography>
    </Box>
  );
}

export default EventDetailsSection;