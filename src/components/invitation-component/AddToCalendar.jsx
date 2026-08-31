import React from 'react'
import { Box, Typography } from '@mui/material'
import { CalendarMonth } from '@mui/icons-material'
import { getTheme } from '../../theme/theme'

/* Convert an ISO datetime to a UTC stamp in the format YYYYMMDDTHHMMSSZ */
const toUTCStamp = (iso) => {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  const pad = (n) => String(n).padStart(2, '0')
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    'Z'
  )
}

function AddToCalendar({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  const { start, end } = config.event || {}
  const startDate = start ? new Date(start) : null
  const endDate = end ? new Date(end) : null
  if (!startDate || isNaN(startDate.getTime()) || !endDate || isNaN(endDate.getTime())) {
    return null
  }

  const title = config.title || 'Wedding Invitation'
  const venue = config.location?.venue || ''
  const fullAddress = config.location?.fullAddress || ''
  const location = [venue, fullAddress].filter(Boolean).join(', ')
  const details = `You're invited to the wedding of ${title}.${location ? `\nVenue: ${location}` : ''}`

  const startStamp = toUTCStamp(start)
  const endStamp = toUTCStamp(end)

  /* Google Calendar link */
  const googleUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${startStamp}/${endStamp}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}`

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    px: { xs: 2, sm: 2.5 },
    py: { xs: 1, sm: 1.2 },
    width: { xs: '100%', sm: 'auto' },
    borderRadius: '999px',
    border: `2px solid ${themeColors.primary}`,
    color: themeColors.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: themeFonts.secondary,
    fontSize: { xs: '0.8rem', sm: '0.85rem' },
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: themeColors.secondary,
      borderColor: themeColors.secondary,
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
  }

  return (
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: themeFonts.primary,
          color: themeColors.primary,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          fontWeight: 600,
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        Simpan Tarikh
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box
          component="a"
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={buttonStyle}
        >
          <CalendarMonth sx={{ fontSize: '1.2rem' }} />
          Google Calendar
        </Box>
      </Box>
    </Box>
  )
}

export default AddToCalendar
