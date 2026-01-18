import React from 'react';
import { Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function EventTitle({ config }) {
  const { eventTitle, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.EventTitle[variant.EventTitle];

  return (
    <Typography sx={styles}>
      {eventTitle}
    </Typography>
  );
}

export default EventTitle;