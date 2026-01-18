import React from 'react';
import { Box, Typography } from '@mui/material';

function ParentsInvitationCard({ bride, invitation, fonts, colors, sizes }) {
  return (
    <Box sx={{ m: 2 }}>
      <Typography
        sx={(theme) => ({
          ...fonts.serif,
          color: colors.primary,
          mb: 2,
          fontSize: sizes.eventTitleFontSize,
        })}
      >
        {bride.parents}
      </Typography>

      <Typography
        sx={(theme) => ({
          ...fonts.altSerif,
          color: colors.lightText,
          lineHeight: 1.0,
          letterSpacing: '0.5px',
          m: 3,
          fontSize: '1.0rem',
        })}
      >
        {invitation.opening}
      </Typography>
    </Box>
  );
}

export default ParentsInvitationCard;