import React from 'react'
import { Typography, Box } from '@mui/material'
import { getTheme } from '../../theme/theme'
import PhoneContact from './PhoneContact'
import { FaGoogle } from "react-icons/fa";
import { FaWaze } from "react-icons/fa6";

function Page2({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', px: 2 }}>
      {/* Opening line */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '1.6rem', // reduced from 2rem
          mb: 3,
          fontWeight: 600,
          letterSpacing: '0.05em',
        }}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </Typography>

      {/* Parents */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
          fontSize: '1.2rem', // reduced from 1.4rem
          mb: 3,
          fontWeight: 600,
        }}
      >
        {config.person1.parents}
      </Typography>

      {/* Invitation text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
          fontSize: '0.9rem', // reduced from 1rem
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Dengan penuh kesyukuran atas limpah kurnia-Nya,
        kami sekeluarga menjemput dengan segala hormat ke majlis perkahwinan anakanda kami yang dikasihi.
      </Typography>

      {/* Names */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.primary,
          fontSize: '1.3rem', // reduced from 1.6rem
          mb: 2,
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        {config.person1.fullName}
        <br />
        &
        <br />
        {config.person2.fullName}
      </Typography>

      {/* Event Details */}
      <Box
        sx={{
          backgroundColor: themeColors.lightBackground,
          borderRadius: 2,
          p: 3,
          mb: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: themeFonts.primary,
            color: themeColors.primary,
            fontSize: '1.1rem', // reduced from 1.3rem
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          {config.event.date}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: themeFonts.secondary,
            color: themeColors.text,
            fontSize: '0.9rem', // reduced from 1.05rem
            mb: 2,
          }}
        >
          {config.event.startTime} – {config.event.endTime}
        </Typography>

        <Box sx={{ borderTop: `1px solid ${themeColors.border}`, my: 2 }} />

        <Typography
          variant="h6"
          sx={{
            fontFamily: themeFonts.primary,
            color: themeColors.primary,
            fontSize: '1rem', // reduced from 1.2rem
            fontWeight: 500,
            mb: 1.5,
          }}
        >
          {config.location.venue}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: themeFonts.secondary,
            color: themeColors.lightText,
            fontSize: '0.85rem', // reduced from 1rem
            lineHeight: 1.5,
          }}
        >
          {config.location.fullAddress}
        </Typography>
      </Box>

      {/* Map Links */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          {/* Google Maps */}
          <Box
            component="a"
            href={config.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: '50%',
              border: `2px solid ${themeColors.primary}`,
              color: themeColors.primary,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: themeColors.secondary,
                borderColor: themeColors.secondary,
                backgroundColor: themeColors.lightBackground,
              },
            }}
          >
            <FaGoogle size={26} />
          </Box>

          {/* Waze */}
          <Box
            component="a"
            href={config.location.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: '50%',
              border: `2px solid ${themeColors.primary}`,
              color: themeColors.primary,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: themeColors.secondary,
                borderColor: themeColors.secondary,
                backgroundColor: themeColors.lightBackground,
              },
            }}
          >
            <FaWaze size={26} />
          </Box>
        </Box>
      </Box>

      <PhoneContact config={config} contacts={config.contacts} />
    </Box>
  )
}

export default Page2
