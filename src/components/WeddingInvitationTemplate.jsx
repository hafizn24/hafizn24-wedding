import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getTheme } from '../theme/theme';
import Page1 from './invitation-component/Page1';
import Page2 from './invitation-component/Page2';

function WeddingInvitationTemplate({ config }) {
  const lowerRef = useRef(null);
  const { themeName, theme } = config;
  const themeData = getTheme(themeName);
  const themeColors = themeData.colors;
  const themeFonts = themeData.fonts

  const themeId = theme?.id || themeName;
  const backgroundImages = {
    upper: `theme/${themeId}/first.png`,
    lower: `theme/${themeId}/second.png`,
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
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url('${backgroundImages.upper}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: '100%',
          maxWidth: '414px', // 1242px / 3
          bgcolor: '#fff',
          minHeight: '100vh',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          position: 'relative',
          zIndex: 1,
        }}
      >
      {/* Upper Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url('${backgroundImages.upper}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          px: 2,
          py: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: themeFonts.cursive,
            color: themeColors.primary,
            fontSize: '3.5rem',
            mb: 3,
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          وليمة العروس
        </Typography>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Page1 config={config} />
        </Box>

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

      {/* Lower Section */}
      <Box
        ref={lowerRef}
        sx={{
          minHeight: "100vh",
          backgroundImage: `url('${backgroundImages.lower}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
        <Page2 config={config} />
      </Box>
      </Box>
    </Box>
  );
}

export default WeddingInvitationTemplate;