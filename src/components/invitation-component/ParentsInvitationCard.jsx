import React from 'react';
import { Box, Typography } from '@mui/material';
import { getTheme } from '../../theme/theme';

function ParentsInvitationCard({ config }) {
  const { bride, invitation, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.ParentsInvitationCard[variant.ParentsInvitationCard];

  return (
    <Box sx={{ m: 2 }}>
      <Typography sx={styles.parents}>
        {bride.parents}
      </Typography>

      <Typography sx={styles.opening}>
        {invitation.opening}
      </Typography>
    </Box>
  );
}

export default ParentsInvitationCard;