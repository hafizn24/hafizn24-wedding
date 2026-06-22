import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
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
    <div className="w-full min-h-screen bg-fixed bg-cover bg-center flex justify-center" style={{ backgroundImage: `url('${backgroundImages.upper}')` }}>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-0" />
      <div className="w-full max-w-sm bg-white min-h-screen shadow-2xl relative z-10">
        {/* Upper Section */}
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between text-center px-2 py-12 relative z-10"
          style={{ backgroundImage: `url('${backgroundImages.upper}')` }}
        >
          {/* Title */}
          <h2
            className="text-5xl mb-3 font-light tracking-wide"
            style={{
              fontFamily: themeFonts.cursive,
              color: themeColors.primary,
            }}
          >
            وليمة العروس
          </h2>
          <div className="flex-1 flex items-center justify-center w-full">
            <Page1 config={config} />
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(10px); }
            }
            .float-animation {
              animation: float 2s ease-in-out infinite;
            }
          `}</style>

          <button
            onClick={scrollToLower}
            className="float-animation p-3 transition-all duration-400 hover:translate-y-1.5"
            style={{
              color: themeColors.primary,
              border: `1px solid ${themeColors.primary}33`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${themeColors.primary}0a`;
              e.currentTarget.style.borderColor = `${themeColors.primary}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = `${themeColors.primary}33`;
            }}
          >
            <ArrowDown size={28} />
          </button>
        </div>

        {/* Lower Section */}
        <div
          ref={lowerRef}
          className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-2 py-6 relative z-10"
          style={{ backgroundImage: `url('${backgroundImages.lower}')` }}
        >
          <Page2 config={config} />
        </div>
      </div>
    </div>
  );
}

export default WeddingInvitationTemplate;