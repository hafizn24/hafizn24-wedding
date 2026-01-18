import React from 'react';
import { Box, Typography } from '@mui/material';

function CoupleNamesCard({ bride, groom, fonts, colors, sizes }) {
  return (
    <Box sx={{ m: 3 }}>
      <Typography
        sx={(theme) => ({
          ...fonts.cursive,
          color: colors.secondary,
          fontSize: sizes.nameFontSize,
        })}
      >
        {bride.shortName}
      </Typography>
      <Typography
        sx={(theme) => ({
          ...fonts.serif,
          color: colors.lightText,
          my: 1.5,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontSize: sizes.ampersandFontSize,
        })}
      >
        &
      </Typography>
      <Typography
        sx={(theme) => ({
          ...fonts.cursive,
          color: colors.secondary,
          fontSize: sizes.nameFontSize,
        })}
      >
        {groom.shortName}
      </Typography>
    </Box>
  );
}

export default CoupleNamesCard;