import React from 'react';
import { Typography } from '@mui/material';

function EventTitle({ eventTitle, fonts, colors, sizes }) {
  return (
    <Typography
      sx={(theme) => ({
        ...fonts.serif,
        color: colors.primary,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        mb: 3,
        fontSize: sizes.titleFontSize,
      })}
    >
      {eventTitle}
    </Typography>
  );
}

export default EventTitle;