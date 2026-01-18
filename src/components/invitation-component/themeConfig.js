/**
 * Theme-based font and color configuration for invitation components
 * This configuration is theme-specific, not variant-specific.
 * Variants define the display style of components within a theme.
 */

export const themeConfig = {
  'theme-2': {
    // Base theme colors
    colors: {
      primary: '#1a365d',
      secondary: '#2b579a',
      tertiary: '#2d4a6d',
      text: '#0a1526',
      lightText: '#4a5568',
    },

    // Base theme fonts
    fonts: {
      primary: '"Great Vibes", cursive',
      secondary: '"Merriweather", serif',
      sansSerif: '"Open Sans", sans-serif',
      serif: '"Lora", serif',
      altSerif: '"Georgia", serif',
      cursive: '"Dancing Script", cursive',
      parisienne: '"Parisienne", cursive',
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
    },
  },

  'theme-1': {
    colors: {
      primary: '#1a365d',
      secondary: '#2b579a',
      tertiary: '#2d4a6d',
      text: '#0a1526',
      lightText: '#4a5568',
    },

    fonts: {
      primary: '"Great Vibes", cursive',
      secondary: '"Merriweather", serif',
      sansSerif: '"Open Sans", sans-serif',
      serif: '"Lora", serif',
      altSerif: '"Georgia", serif',
      cursive: '"Dancing Script", cursive',
      parisienne: '"Parisienne", cursive',
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
    },
  },
};

/**
 * Gets the theme configuration for a given theme name
 * @param {string} themeName - The name of the theme (e.g., 'theme-1', 'theme-2')
 * @returns {Object} - The theme configuration object
 */
export const getThemeConfig = (themeName) => {
  return themeConfig[themeName] || themeConfig['theme-2'];
};

export default themeConfig;
