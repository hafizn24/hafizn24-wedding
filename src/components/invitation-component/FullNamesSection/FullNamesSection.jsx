import React from 'react';
import { Box, Typography } from '@mui/material';

function FullNamesSection({ bride, groom, invitation, fonts, colors, sizes }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        sx={(theme) => ({
          ...fonts.cursive,
          color: colors.secondary,
          mb: 1,
          fontSize: sizes.guestNameFontSize,
        })}
      >
        {bride.fullName}
      </Typography>

      <Typography
        sx={(theme) => ({
          ...fonts.altSerif,
          color: colors.lightText,
          my: 1.8,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
        })}
      >
        {invitation.relationship}
      </Typography>

      <Typography
        sx={(theme) => ({
          ...fonts.cursive,
          color: colors.secondary,
          mb: 2,
          fontSize: sizes.guestNameFontSize,
        })}
      >
        {groom.fullName}
      </Typography>
    </Box>
  );
}

export default FullNamesSection;