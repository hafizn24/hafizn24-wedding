import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa6';
import { getTheme } from '../../theme/theme';

function NavigationButtons({ config }) {
  const { location, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.NavigationButtons[variant.NavigationButtons];

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
        sx={styles.google}
      >
        <FaGoogle style={{ fontSize: 32 }} />
      </IconButton>

      <IconButton
        onClick={() => window.open(location.wazeUrl, "_blank")}
        sx={styles.waze}
      >
        <FaWaze style={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
}

export default NavigationButtons;