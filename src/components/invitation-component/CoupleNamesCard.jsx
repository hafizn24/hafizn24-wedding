import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function CoupleNamesCard({ config }) {
  const { bride, groom, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.CoupleNamesCard[variant.CoupleNamesCard];

  return (
    <Box sx={{ m: 3 }}>
      <Typography sx={styles.brideName}>
        {bride.shortName}
      </Typography>
      <Typography sx={styles.ampersand}>
        &
      </Typography>
      <Typography sx={styles.groomName}>
        {groom.shortName}
      </Typography>
    </Box>
  );
}

export default CoupleNamesCard;