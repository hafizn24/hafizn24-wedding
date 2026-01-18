import React from 'react'
import { Typography, Box } from '@mui/material'
import { getTheme } from '../../theme/theme'
import PhoneContact from './PhoneContact'

function Page2({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
      <Typography
        variant="body1"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '0.9rem',
          marginBottom: 1,
        }}
      >
        {config.bride.parents}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
          fontSize: '1rem',
          marginBottom: 3,
          lineHeight: 1.6,
        }}
      >
        Dengan penuh kesyukuran ke hadrat ilahi, Kami menjemput ke majlis perkahwinan puteri kami yang dikasihi
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.primary,
          fontSize: '1.3rem',
          marginBottom: 3,
          fontWeight: 500,
        }}
      >
        {config.bride.fullName}
        <br />
        dan
        <br />
        {config.groom.fullName}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
          fontSize: '1rem',
          marginBottom: 2,
          fontWeight: 600,
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
          marginBottom: 2,
        }}
      >
        {config.event.startTime} - {config.event.endTime}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.primary,
          fontSize: '1.1rem',
          marginBottom: 1,
          fontWeight: 500,
        }}
      >
        {config.location.venue}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '0.9rem',
          marginBottom: 3,
        }}
      >
        {config.location.fullAddress}
      </Typography>

      <Box sx={{ marginBottom: 3 }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: themeFonts.secondary,
            color: themeColors.text,
            fontSize: '0.9rem',
            marginBottom: 1,
          }}
        >
          Lokasi:
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Typography
            component="a"
            href={config.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: themeFonts.secondary,
              color: themeColors.secondary,
              fontSize: '0.85rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: themeColors.primary,
              },
            }}
          >
            Google Maps
          </Typography>
          <Typography
            sx={{
              color: themeColors.lightText,
            }}
          >
            |
          </Typography>
          <Typography
            component="a"
            href={config.location.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: themeFonts.secondary,
              color: themeColors.secondary,
              fontSize: '0.85rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: themeColors.primary,
              },
            }}
          >
            Waze
          </Typography>
        </Box>
      </Box>

      <PhoneContact config={config} contacts={config.contacts} />
    </Box>
  )
}

export default Page2