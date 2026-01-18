import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import CoupleNamesCard from './invitation-component/CoupleNamesCard/CoupleNamesCard';
import EventDateVenueCard from './invitation-component/EventDateVenueCard/EventDateVenueCard';
import EventDetailsSection from './invitation-component/EventDetailsSection/EventDetailsSection';
import EventTitle from './invitation-component/EventTitle/EventTitle';
import FullNamesSection from './invitation-component/FullNamesSection/FullNamesSection';
import NavigationButtons from './invitation-component/NavigationButtons/NavigationButtons';
import ParentsInvitationCard from './invitation-component/ParentsInvitationCard/ParentsInvitationCard';
import PhoneContact from './invitation-component/PhoneContact/PhoneContact';

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
          <EventTitle 
            eventTitle={eventTitle}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
          />

          <CoupleNamesCard
            bride={bride}
            groom={groom}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
          />

          <EventDateVenueCard
            event={event}
            location={location}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
          />

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
        <ParentsInvitationCard
          bride={bride}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
          sizes={sizes}
        />

        <FullNamesSection
          bride={bride}
          groom={groom}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
          sizes={sizes}
        />

        <EventDetailsSection
          event={event}
          location={location}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
        />

        <NavigationButtons
          location={location}
          colors={colors}
        />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <PhoneContact contacts={contacts} />
        </Box>
      </Box>
    </>
  );
}

export default WeddingInvitationTemplate;