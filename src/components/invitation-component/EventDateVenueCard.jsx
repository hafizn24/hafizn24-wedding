import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function EventDateVenueCard({ config }) {
  const { event, location, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.EventDateVenueCard[variant.EventDateVenueCard];

  return (
    <>
      <Typography sx={styles.date}>
        {event.date}
      </Typography>

      <Box sx={{ m: 3 }}>
        <Typography sx={styles.venue}>
          {location.venue}
        </Typography>
        <Typography sx={styles.address}>
          {location.address}
        </Typography>
      </Box>
    </>
  );
}

export default EventDateVenueCard;