import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
import { getTheme } from '../../theme/theme'

function Page1({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', px: 2 }}>
      {/* Names */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.text,
          fontSize: '2.2rem',
          mb: 2.5,
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
          my: 3,
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
          fontSize: '1.4rem', // slightly smaller than before
          mb: 1.8,
          fontWeight: 500,
        }}
      >
        {config.event.date}
      </Typography>
    </Box>
  )
}

export default Page1
