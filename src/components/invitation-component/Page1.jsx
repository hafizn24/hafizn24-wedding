import React from 'react'
import { Typography, Box } from '@mui/material'
import { getTheme } from '../../theme/theme'

function Page1({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: themeFonts.cursive,
          color: themeColors.primary,
          fontSize: '3.5rem',
          marginBottom: 2,
          fontWeight: 300,
        }}
      >
        Walimatulurus
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.text,
          fontSize: '2rem',
          marginBottom: 3,
          fontWeight: 400,
        }}
      >
        {config.bride.shortName} & {config.groom.shortName}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '1.2rem',
          marginBottom: 2,
        }}
      >
        {config.event.date}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '0.95rem',
        }}
      >
        {config.location.fullAddress}
      </Typography>
    </Box>
  )
}

export default Page1