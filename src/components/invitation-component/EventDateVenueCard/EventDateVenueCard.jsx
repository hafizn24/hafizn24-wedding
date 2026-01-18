import React from 'react';
import { Box, Typography } from '@mui/material';

function EventDateVenueCard({ event, location, fonts, colors, sizes }) {
  return (
    <>
      <Typography
        sx={(theme) => ({
          ...fonts.altSerif,
          color: colors.tertiary,
          fontSize: sizes.dateFontSize,
          mb: 3,
          mt: 1,
          letterSpacing: '1px',
        })}
      >
        {event.date}
      </Typography>

      <Box sx={{ m: 3 }}>
        <Typography
          sx={(theme) => ({
            ...fonts.altSerif,
            fontSize: sizes.venueFontSize,
            color: colors.tertiary,
            lineHeight: 1.0,
            letterSpacing: '0.5px'
          })}
        >
          {location.venue}
        </Typography>
        <Typography
          sx={(theme) => ({
            ...fonts.altSerif,
            fontSize: sizes.venueFontSize,
            color: colors.tertiary,
            lineHeight: 1.1,
            letterSpacing: '0.5px'
          })}
        >
          {location.address}
        </Typography>
      </Box>
    </>
  );
}

export default EventDateVenueCard;