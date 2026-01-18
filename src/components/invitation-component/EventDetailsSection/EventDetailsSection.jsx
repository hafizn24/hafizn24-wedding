import React from 'react';
import { Box, Typography } from '@mui/material';

function EventDetailsSection({ event, location, invitation, fonts, colors }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        sx={(theme) => ({
          ...fonts.altSerif,
          color: colors.tertiary,
          mb: 1,
          letterSpacing: '0.8px',
          lineHeight: 1.2,
          fontSize: '1.0rem',
        })}
      >
        {event.timeFormatted}
      </Typography>

      <Typography
        sx={(theme) => ({
          ...fonts.serif,
          color: colors.lightText,
          mt: 3,
          mb: 1,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontSize: '1.0rem',
        })}
      >
        {invitation.venueLabel}
      </Typography>

      <Typography
        sx={(theme) => ({
          ...fonts.altSerif,
          color: colors.tertiary,
          letterSpacing: '0.5px',
          lineHeight: 1.0,
          mb: 3,
          fontSize: '1.0rem',
        })}
      >
        {location.fullAddress}
      </Typography>
    </Box>
  );
}

export default EventDetailsSection;