import { createTheme } from '@mui/material/styles';

/**
 * Creates a dynamic theme based on the invitation config
 * @param {Object} config - The invitation config object
 * @returns {Object} - MUI theme object
 */
export const createInvitationTheme = (config) => {
  const { theme: themeConfig } = config;
  const { fonts, colors } = themeConfig;

  return createTheme({
    typography: {
      fontFamily: fonts.primary.fontFamily,
      allVariants: {
        color: colors.text,
      },
      secondaryFont: fonts.secondary,
      sansSerifFont: fonts.sansSerif,
      serifFont: fonts.serif,
      altSerifFont: fonts.altSerif,
      cursiveFont: fonts.cursive,
    },
  });
};

export default createInvitationTheme;
