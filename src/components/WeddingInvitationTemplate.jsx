import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getTheme } from '../theme/theme';

import CoupleNamesCard from './invitation-component/CoupleNamesCard';
import EventDateVenueCard from './invitation-component/EventDateVenueCard';
import EventDetailsSection from './invitation-component/EventDetailsSection';
import EventTitle from './invitation-component/EventTitle';
import FullNamesSection from './invitation-component/FullNamesSection';
import NavigationButtons from './invitation-component/NavigationButtons';
import ParentsInvitationCard from './invitation-component/ParentsInvitationCard';
import PhoneContact from './invitation-component/PhoneContact';

function WeddingInvitationTemplate({ config }) {
  const lowerRef = useRef(null);
  const { themeName, theme } = config;
  const themeData = getTheme(themeName);
  const themeColors = themeData.colors;
  
  // Get background images based on theme ID
  const themeId = theme?.id || themeName;
  const backgroundImages = {
    upper: `theme/${themeId}/${themeId}-upper.png`,
    lower: `theme/${themeId}/${themeId}-lower.png`,
  };

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
          <EventTitle config={config} />

          <CoupleNamesCard config={config} />

          <EventDateVenueCard config={config} />

          <IconButton
            onClick={scrollToLower}
            sx={{
              color: themeColors.primary,
              border: `1px solid rgba(${parseInt(themeColors.primary.slice(1, 3), 16)}, ${parseInt(themeColors.primary.slice(3, 5), 16)}, ${parseInt(themeColors.primary.slice(5, 7), 16)}, 0.2)`,
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
                background: `rgba(${parseInt(themeColors.primary.slice(1, 3), 16)}, ${parseInt(themeColors.primary.slice(3, 5), 16)}, ${parseInt(themeColors.primary.slice(5, 7), 16)}, 0.04)`,
                border: `1px solid rgba(${parseInt(themeColors.primary.slice(1, 3), 16)}, ${parseInt(themeColors.primary.slice(3, 5), 16)}, ${parseInt(themeColors.primary.slice(5, 7), 16)}, 0.4)`,
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
        <ParentsInvitationCard config={config} />

        <FullNamesSection config={config} />

        <EventDetailsSection config={config} />

        <NavigationButtons config={config} />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <PhoneContact config={config} />
        </Box>
      </Box>
    </>
  );
}

export default WeddingInvitationTemplate;