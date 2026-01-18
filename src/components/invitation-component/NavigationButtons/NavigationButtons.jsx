import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa6';

function NavigationButtons({ location, colors }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        width: '100%',
        mb: 2
      }}
    >
      <IconButton
        onClick={() => window.open(location.googleMapsUrl, "_blank")}
        sx={{
          color: colors.tertiary,
          padding: '12px',
          border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.3)`,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: `rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.04)`,
            border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.5)`
          }
        }}
      >
        <FaGoogle style={{ fontSize: 32 }} />
      </IconButton>

      <IconButton
        onClick={() => window.open(location.wazeUrl, "_blank")}
        sx={{
          color: '#0a7aa6',
          padding: '12px',
          border: '1px solid rgba(10, 122, 166, 0.3)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(10, 122, 166, 0.04)',
            border: '1px solid rgba(10, 122, 166, 0.5)'
          }
        }}
      >
        <FaWaze style={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
}

export default NavigationButtons;