
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
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
      greatVibes: '"Great Vibes", cursive',
      merriweather: '"Merriweather", serif',
      sansSerif: '"Open Sans", sans-serif',
    },
    components: {
      CoupleNamesCard: {
        variant1: {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            fontSize: '3rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
          ampersand: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#2b579a',
            textAlign: 'center',
            m: 0,
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            fontSize: '3rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventDateVenueCard: {
        variant1: {
          date: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            mb: 2,
          },
          venue: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
          address: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#4a5568',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventDetailsSection: {
        variant1: {
          timeFormatted: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            mb: 1,
          },
          venueLabel: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#2b579a',
            textAlign: 'center',
            m: 0,
          },
          fullAddress: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.9rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventTitle: {
        variant1: {
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: '#1a365d',
          textAlign: 'center',
          mb: 2,
          letterSpacing: 3,
        },
      },
      FullNamesSection: {
        variant1: {
          brideName: {
            fontFamily: '"Great Vibes", cursive',
            fontSize: '1.8rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
          relationship: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#4a5568',
            textAlign: 'center',
            mb: 1,
          },
          groomName: {
            fontFamily: '"Great Vibes", cursive',
            fontSize: '1.8rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
        },
      },
      NavigationButtons: {
        variant1: {
          google: {
            color: '#1a365d',
            '&:hover': {
              color: '#2b579a',
            },
          },
          waze: {
            color: '#1a365d',
            '&:hover': {
              color: '#2b579a',
            },
          },
        },
      },
      ParentsInvitationCard: {
        variant1: {
          parents: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
          opening: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            lineHeight: 1.6,
          },
        },
      },
      PhoneContact: {
        variant1: {
          card: {
            border: '1px solid #2b579a',
            borderRadius: '8px',
            backgroundColor: 'rgba(26, 54, 93, 0.02)',
          },
          title: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#1a365d',
            mb: 1.5,
          },
          contactName: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#0a1526',
          },
          contactTitle: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.85rem',
            fontWeight: 400,
            color: '#4a5568',
            ml: 0.5,
          },
          callButton: {
            color: '#2b579a',
            '&:hover': {
              backgroundColor: 'rgba(43, 87, 154, 0.1)',
            },
          },
          whatsappButton: {
            color: '#25D366',
            '&:hover': {
              backgroundColor: 'rgba(37, 211, 102, 0.1)',
            },
          },
        },
      },
    },
  },
  'theme-2': {
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
      playfair: '"Playfair Display", serif',
      cormorant: '"Cormorant Garamond", serif',
      greatVibes: '"Great Vibes", cursive',
      merriweather: '"Merriweather", serif',
      sansSerif: '"Open Sans", sans-serif',
    },
    components: {
      CoupleNamesCard: {
        variant1: {
          brideName: {
            fontFamily: '"Parisienne", cursive',
            fontSize: '3rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
          ampersand: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#2b579a',
            textAlign: 'center',
            m: 0,
          },
          groomName: {
            fontFamily: '"Parisienne", cursive',
            fontSize: '3rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventDateVenueCard: {
        variant1: {
          date: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            mb: 2,
          },
          venue: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            m: 0,
          },
          address: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#4a5568',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventDetailsSection: {
        variant1: {
          timeFormatted: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            mb: 1,
          },
          venueLabel: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#2b579a',
            textAlign: 'center',
            m: 0,
          },
          fullAddress: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.9rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            m: 0,
          },
        },
      },
      EventTitle: {
        variant1: {
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: '#1a365d',
          textAlign: 'center',
          mb: 2,
          letterSpacing: 3,
        },
      },
      FullNamesSection: {
        variant1: {
          brideName: {
            fontFamily: '"Great Vibes", cursive',
            fontSize: '1.8rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
          relationship: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#4a5568',
            textAlign: 'center',
            mb: 1,
          },
          groomName: {
            fontFamily: '"Great Vibes", cursive',
            fontSize: '1.8rem',
            fontWeight: 400,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
        },
      },
      NavigationButtons: {
        variant1: {
          google: {
            color: '#1a365d',
            '&:hover': {
              color: '#2b579a',
            },
          },
          waze: {
            color: '#1a365d',
            '&:hover': {
              color: '#2b579a',
            },
          },
        },
      },
      ParentsInvitationCard: {
        variant1: {
          parents: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#1a365d',
            textAlign: 'center',
            mb: 1,
          },
          opening: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            color: '#0a1526',
            textAlign: 'center',
            lineHeight: 1.6,
          },
        },
      },
      PhoneContact: {
        variant1: {
          card: {
            border: '1px solid #2b579a',
            borderRadius: '8px',
            backgroundColor: 'rgba(26, 54, 93, 0.02)',
          },
          title: {
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#1a365d',
            mb: 1.5,
          },
          contactName: {
            fontFamily: '"Merriweather", serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#0a1526',
          },
          contactTitle: {
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.85rem',
            fontWeight: 400,
            color: '#4a5568',
            ml: 0.5,
          },
          callButton: {
            color: '#2b579a',
            '&:hover': {
              backgroundColor: 'rgba(43, 87, 154, 0.1)',
            },
          },
          whatsappButton: {
            color: '#25D366',
            '&:hover': {
              backgroundColor: 'rgba(37, 211, 102, 0.1)',
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
