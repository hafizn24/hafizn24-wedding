import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
import { getTheme } from '../../theme/theme'

function Page1({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <Box sx={{ textAlign: 'center', maxWidth: { xs: '100%', sm: '600px' }, mx: 'auto', px: 2 }}>
      {/* Wedding Initial */}
      <Box
        component="img"
        src={config.initial}
        alt="Wedding initial"
        sx={{
          width: { xs: '120px', sm: '160px' },
          height: 'auto',
          mb: 2,
          mx: 'auto',
          display: 'block',
        }}
      />

      {/* Names */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.text,
          fontSize: { xs: '1.6rem', sm: '2.2rem' },
          mb: { xs: 2, sm: 2.5 },
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {config.person1.shortName} & {config.person2.shortName}
      </Typography>

      {/* Decorative Divider */}
      <Divider
        sx={{
          width: '60px',
          mx: 'auto',
          my: { xs: 2, sm: 3 },
          borderColor: themeColors.secondary,
          opacity: 0.6,
        }}
      />

      {/* Date */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
          fontSize: { xs: '1.1rem', sm: '1.4rem' }, // slightly smaller than before
          mb: { xs: 1.2, sm: 1.8 },
          fontWeight: 500,
        }}
      >
        {config.event.date}
      </Typography>
    </Box>
  )
}

export default Page1
