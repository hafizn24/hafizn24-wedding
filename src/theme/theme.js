
const themes = {
  'theme-2': {
    colors: {
      primary: '#1a365d',
      secondary: '#2b579a',
      tertiary: '#2d4a6d',
      text: '#0a1526',
      lightText: '#4a5568',
    },
    fonts: {
      // Unused / Reserved Fonts
      // primary: '"Great Vibes", cursive',
      // secondary: '"Merriweather", serif',
      // sansSerif: '"Open Sans", sans-serif',
      // serif: '"Lora", serif',
      // altSerif: '"Georgia", serif',
      // cursive: '"Dancing Script", cursive',
      parisienne: '"Parisienne", cursive',
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
    },
    components: {
      CoupleNamesCard: {
        'variant-1': {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            fontSize: '4rem',
          },
          ampersand: {
            fontFamily: '"Playfair Display", serif',
            color: '#4a5568',
            my: 1.5,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontSize: '1.5rem',
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            fontSize: '4rem',
          },
        },
      },
      EventTitle: {
        'variant-1': {
          fontFamily: '"Playfair Display", serif',
          color: '#1a365d',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          mb: 3,
          fontSize: '2.5rem',
        },
      },
      EventDateVenueCard: {
        'variant-1': {
          date: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            fontSize: '1.5rem',
            mb: 3,
            mt: 1,
            letterSpacing: '1px',
          },
          venue: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.4rem',
            color: '#2d4a6d',
            lineHeight: 1.0,
            letterSpacing: '0.5px',
          },
          address: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.4rem',
            color: '#2d4a6d',
            lineHeight: 1.1,
            letterSpacing: '0.5px',
          },
        },
      },
      ParentsInvitationCard: {
        'variant-1': {
          parents: {
            fontFamily: '"Playfair Display", serif',
            color: '#1a365d',
            mb: 2,
            fontSize: '1.25rem',
          },
          opening: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            lineHeight: 1.0,
            letterSpacing: '0.5px',
            m: 3,
            fontSize: '1.0rem',
          },
        },
      },
      FullNamesSection: {
        'variant-1': {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            mb: 1,
            fontSize: '2.0rem',
          },
          relationship: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            my: 1.8,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            mb: 2,
            fontSize: '2.0rem',
          },
        },
      },
      EventDetailsSection: {
        'variant-1': {
          timeFormatted: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            mb: 1,
            letterSpacing: '0.8px',
            lineHeight: 1.2,
            fontSize: '1.0rem',
          },
          venueLabel: {
            fontFamily: '"Playfair Display", serif',
            color: '#4a5568',
            mt: 3,
            mb: 1,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontSize: '1.0rem',
          },
          fullAddress: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            letterSpacing: '0.5px',
            lineHeight: 1.0,
            mb: 3,
            fontSize: '1.0rem',
          },
        },
      },
      NavigationButtons: {
        'variant-1': {
          google: {
            color: '#2d4a6d',
            padding: '12px',
            border: '1px solid rgba(45, 74, 109, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(45, 74, 109, 0.04)',
              border: '1px solid rgba(45, 74, 109, 0.5)',
            },
          },
          waze: {
            color: '#0a7aa6',
            padding: '12px',
            border: '1px solid rgba(10, 122, 166, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(10, 122, 166, 0.04)',
              border: '1px solid rgba(10, 122, 166, 0.5)',
            },
          },
        },
      },
      PhoneContact: {
        'variant-1': {
          card: {
            width: '100%',
            maxWidth: 320,
            margin: '20px auto',
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            boxShadow: 'none',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            },
          },
          title: {
            fontFamily: '"Playfair Display", serif',
            textAlign: 'center',
            color: '#0a1526',
            fontWeight: 700,
            letterSpacing: '2.5px',
            mb: 2.5,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
          },
          contactName: {
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 700,
            color: '#142847',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
          contactTitle: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            fontSize: '0.9rem',
            fontWeight: 500,
            fontStyle: 'italic',
          },
          callButton: {
            color: '#4a5568',
            border: '1px solid rgba(74, 85, 104, 0.2)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(74, 85, 104, 0.05)',
              border: '1px solid rgba(74, 85, 104, 0.4)',
            },
          },
          whatsappButton: {
            color: '#25d366',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(37, 211, 102, 0.05)',
              border: '1px solid rgba(37, 211, 102, 0.5)',
            },
          },
        },
      },
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
      // Unused / Reserved Fonts
      // primary: '"Great Vibes", cursive',
      // secondary: '"Merriweather", serif',
      // sansSerif: '"Open Sans", sans-serif',
      // serif: '"Lora", serif',
      // altSerif: '"Georgia", serif',
      // cursive: '"Dancing Script", cursive',
      parisienne: '"Parisienne", cursive',
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
    },
    components: {
      CoupleNamesCard: {
        'variant-1': {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            fontSize: '4rem',
          },
          ampersand: {
            fontFamily: '"Playfair Display", serif',
            color: '#4a5568',
            my: 1.5,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontSize: '1.5rem',
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            fontSize: '4rem',
          },
        },
      },
      EventTitle: {
        'variant-1': {
          fontFamily: '"Playfair Display", serif',
          color: '#1a365d',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          mb: 3,
          fontSize: '2.5rem',
        },
      },
      EventDateVenueCard: {
        'variant-1': {
          date: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            fontSize: '1.5rem',
            mb: 3,
            mt: 1,
            letterSpacing: '1px',
          },
          venue: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.4rem',
            color: '#2d4a6d',
            lineHeight: 1.0,
            letterSpacing: '0.5px',
          },
          address: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.4rem',
            color: '#2d4a6d',
            lineHeight: 1.1,
            letterSpacing: '0.5px',
          },
        },
      },
      ParentsInvitationCard: {
        'variant-1': {
          parents: {
            fontFamily: '"Playfair Display", serif',
            color: '#1a365d',
            mb: 2,
            fontSize: '1.25rem',
          },
          opening: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            lineHeight: 1.0,
            letterSpacing: '0.5px',
            m: 3,
            fontSize: '1.0rem',
          },
        },
      },
      FullNamesSection: {
        'variant-1': {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            mb: 1,
            fontSize: '2.0rem',
          },
          relationship: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            my: 1.8,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            color: '#2b579a',
            mb: 2,
            fontSize: '2.0rem',
          },
        },
      },
      EventDetailsSection: {
        'variant-1': {
          timeFormatted: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            mb: 1,
            letterSpacing: '0.8px',
            lineHeight: 1.2,
            fontSize: '1.0rem',
          },
          venueLabel: {
            fontFamily: '"Playfair Display", serif',
            color: '#4a5568',
            mt: 3,
            mb: 1,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontSize: '1.0rem',
          },
          fullAddress: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#2d4a6d',
            letterSpacing: '0.5px',
            lineHeight: 1.0,
            mb: 3,
            fontSize: '1.0rem',
          },
        },
      },
      NavigationButtons: {
        'variant-1': {
          google: {
            color: '#2d4a6d',
            padding: '12px',
            border: '1px solid rgba(45, 74, 109, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(45, 74, 109, 0.04)',
              border: '1px solid rgba(45, 74, 109, 0.5)',
            },
          },
          waze: {
            color: '#0a7aa6',
            padding: '12px',
            border: '1px solid rgba(10, 122, 166, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(10, 122, 166, 0.04)',
              border: '1px solid rgba(10, 122, 166, 0.5)',
            },
          },
        },
      },
      PhoneContact: {
        'variant-1': {
          card: {
            width: '100%',
            maxWidth: 320,
            margin: '20px auto',
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            boxShadow: 'none',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            },
          },
          title: {
            fontFamily: '"Playfair Display", serif',
            textAlign: 'center',
            color: '#0a1526',
            fontWeight: 700,
            letterSpacing: '2.5px',
            mb: 2.5,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
          },
          contactName: {
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 700,
            color: '#142847',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
          contactTitle: {
            fontFamily: '"Cormorant Garamond", serif',
            color: '#4a5568',
            fontSize: '0.9rem',
            fontWeight: 500,
            fontStyle: 'italic',
          },
          callButton: {
            color: '#4a5568',
            border: '1px solid rgba(74, 85, 104, 0.2)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(74, 85, 104, 0.05)',
              border: '1px solid rgba(74, 85, 104, 0.4)',
            },
          },
          whatsappButton: {
            color: '#25d366',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(37, 211, 102, 0.05)',
              border: '1px solid rgba(37, 211, 102, 0.5)',
            },
          },
        },
      },
    },
  },
};

export const getTheme = (themeName) => {
    return themes[themeName] || themes['theme-2'];
};

export default themes;
