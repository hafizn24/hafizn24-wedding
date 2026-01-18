
const themes = {
  'theme-1': {
    colors: {
      primary: '#1a365d',
      secondary: '#2b579a',
      tertiary: '#2d4a6d',
      text: '#0a1526',
      lightText: '#4a5568',
    },
    fonts: {
      cursive: '"Parisienne", cursive',
      primary: '"Playfair Display", serif',
      secondary: '"Cormorant Garamond", serif',
    },
  }
};

export const getTheme = (themeName) => {
  return themes[themeName] || themes['theme-1'];
};

export default themes;
