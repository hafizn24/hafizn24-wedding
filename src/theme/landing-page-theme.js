import { createTheme } from '@mui/material/styles';

// Color palette from The Digital Atelier design
const colors = {
  primary: '#526447',
  primaryContainer: '#d4e9c4',
  secondary: '#775757',
  secondaryContainer: '#ffdad9',
  tertiary: '#605f58',
  tertiaryContainer: '#feffd6',
  error: '#a73b21',
  errorContainer: '#fd795a',
  surface: '#fafaf2',
  onSurface: '#30342b',
  onSurfaceVariant: '#5d6056',
  surfaceContainer: '#eeefe4',
  surfaceContainerLow: '#f4f4ea',
  surfaceContainerHigh: '#e8e9dd',
  outlineVariant: '#b1b3a7',
  outline: '#797c71',
};

export const landingPageTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryContainer,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryContainer,
    },
    tertiary: {
      main: colors.tertiary,
      light: colors.tertiaryContainer,
    },
    background: {
      default: colors.surface,
      paper: colors.surface,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
    },
    divider: colors.outlineVariant,
  },
  typography: {
    fontFamily: '"Manrope", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Noto Serif", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: '"Noto Serif", serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Noto Serif", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
});

export const colorTokens = colors;
