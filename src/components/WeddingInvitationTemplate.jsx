import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FaGoogle } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa6';
import PhoneContact from './PhoneContact';

function WeddingInvitationTemplate({ config }) {
  const lowerRef = useRef(null);

  const scrollToLower = () => {
    const element = lowerRef.current;
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 2000;
    let startTime = null;

    function animateScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const scrollY = startY + distance * easeInOutQuad;
      window.scrollTo(0, scrollY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  const { theme, bride, groom, event, location, invitation, backgroundImages, eventTitle, contacts } = config;
  const { colors, fonts, sizes } = theme;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('${backgroundImages.lower}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Upper Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url('${backgroundImages.upper}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box>
          <Typography
            sx={(theme) => ({
              ...fonts.serif,
              color: colors.primary,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              mb: 3,
              fontSize: sizes.titleFontSize,
            })}
          >
            {eventTitle}
          </Typography>

          <Box sx={{ m: 3 }}>
            <Typography
              sx={(theme) => ({
                ...fonts.cursive,
                color: colors.secondary,
                fontSize: sizes.nameFontSize,
              })}
            >
              {bride.shortName}
            </Typography>
            <Typography
              sx={(theme) => ({
                ...fonts.serif,
                color: colors.lightText,
                my: 1.5,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontSize: sizes.ampersandFontSize,
              })}
            >
              &
            </Typography>
            <Typography
              sx={(theme) => ({
                ...fonts.cursive,
                color: colors.secondary,
                fontSize: sizes.nameFontSize,
              })}
            >
              {groom.shortName}
            </Typography>
          </Box>

          <Typography
            sx={(theme) => ({
              ...fonts.altSerif,
              color: colors.tertiary,
              fontSize: sizes.dateFontSize,
              mb: 3,
              mt: 1,
              letterSpacing: '1px',
            })}
          >
            {event.date}
          </Typography>

          <Box sx={{ m: 3 }}>
            <Typography
              sx={(theme) => ({
                ...fonts.altSerif,
                fontSize: sizes.venueFontSize,
                color: colors.tertiary,
                lineHeight: 1.0,
                letterSpacing: '0.5px'
              })}
            >
              {location.venue}
            </Typography>
            <Typography
              sx={(theme) => ({
                ...fonts.altSerif,
                fontSize: sizes.venueFontSize,
                color: colors.tertiary,
                lineHeight: 1.1,
                letterSpacing: '0.5px'
              })}
            >
              {location.address}
            </Typography>
          </Box>

          <IconButton
            onClick={scrollToLower}
            sx={{
              color: colors.tertiary,
              border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.2)`,
              padding: '12px',
              transition: 'all 0.4s ease',
              animation: 'float 2s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': {
                  transform: 'translateY(0)',
                },
                '50%': {
                  transform: 'translateY(10px)',
                },
              },
              '&:hover': {
                background: `rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.04)`,
                border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.4)`,
                transform: 'translateY(5px)'
              }
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Lower Section */}
      <Box
        ref={lowerRef}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
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

        <Box sx={{ mb: 2 }}>
          <Typography
            sx={(theme) => ({
              ...fonts.cursive,
              color: colors.secondary,
              mb: 1,
              fontSize: sizes.guestNameFontSize,
            })}
          >
            {bride.fullName}
          </Typography>

          <Typography
            sx={(theme) => ({
              ...fonts.altSerif,
              color: colors.lightText,
              my: 1.8,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
            })}
          >
            {invitation.relationship}
          </Typography>

          <Typography
            sx={(theme) => ({
              ...fonts.cursive,
              color: colors.secondary,
              mb: 2,
              fontSize: sizes.guestNameFontSize,
            })}
          >
            {groom.fullName}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography
            sx={(theme) => ({
              ...fonts.altSerif,
              color: colors.tertiary,
              mb: 1,
              letterSpacing: '0.8px',
              lineHeight: 1.2,
              fontSize: '1.0rem',
            })}
          >
            {event.timeFormatted}
          </Typography>

          <Typography
            sx={(theme) => ({
              ...fonts.serif,
              color: colors.lightText,
              mt: 3,
              mb: 1,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontSize: '1.0rem',
            })}
          >
            {invitation.venueLabel}
          </Typography>

          <Typography
            sx={(theme) => ({
              ...fonts.altSerif,
              color: colors.tertiary,
              letterSpacing: '0.5px',
              lineHeight: 1.0,
              mb: 3,
              fontSize: '1.0rem',
            })}
          >
            {location.fullAddress}
          </Typography>
        </Box>

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
            onClick={() =>
              window.open(location.googleMapsUrl, "_blank")
            }
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
            onClick={() =>
              window.open(location.wazeUrl, "_blank")
            }
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

        <Box sx={{ display: 'flex', gap: 2 }}>
          <PhoneContact contacts={contacts} />
        </Box>
      </Box>
    </>
  );
}

export default WeddingInvitationTemplate;
