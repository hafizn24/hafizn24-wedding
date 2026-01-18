import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function FullNamesSection({ config }) {
  const { bride, groom, invitation, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.FullNamesSection[variant.FullNamesSection];

  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={styles.brideName}>
        {bride.fullName}
      </Typography>

      <Typography sx={styles.relationship}>
        {invitation.relationship}
      </Typography>

      <Typography sx={styles.groomName}>
        {groom.fullName}
      </Typography>
    </Box>
  );
}

export default FullNamesSection;