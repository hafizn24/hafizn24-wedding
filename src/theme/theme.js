
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
  },
  'theme-3': {
    colors: {
      primary: '#2C3E50',       // Deep navy — matches floral accents, ideal for headers
      secondary: '#C9A961',     // Metallic gold — elegant for subheadings or decorative text
      tertiary: '#3A9B9B',      // Teal — subtle highlight or accent text
      text: '#1a1a1a',          // Rich neutral black — optimal contrast for body text
      lightText: '#6b6b6b',     // Soft gray — for secondary info or muted labels
    },
    fonts: {
      cursive: '"Parisienne", cursive',
      primary: '"Playfair Display", serif',
      secondary: '"Cormorant Garamond", serif',
    },
  },
  'theme-4': {
    colors: {
      primary: '#E9B44C',      // Golden yellow — matches floral accents, ideal for headings or decorative text
      secondary: '#2D9596',    // Teal — complements leaves, suitable for subheadings or accents
      tertiary: '#E76F51',     // Orange — matches buds, good for small highlights or dividers
      text: '#F5F5F5',         // Soft cream — high contrast on navy, perfect for body text
      lightText: '#D9D9D9',    // Muted cream — for secondary text or subtle labels
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
