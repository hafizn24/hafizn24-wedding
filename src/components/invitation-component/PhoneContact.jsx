import { Card, CardContent, Typography, Box, IconButton, Divider } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";
import { getTheme } from "../../theme/theme";

function PhoneContact({ config, contacts }) {
  const themeData = getTheme(config.themeName);
  const themeColors = themeData.colors;
  const themeFonts = themeData.fonts;

  const styles = {
    title: {
      fontFamily: themeFonts.primary,
      color: themeColors.primary,
      fontSize: '1rem',
      fontWeight: 600,
    },
    contactName: {
      fontFamily: themeFonts.secondary,
      color: themeColors.text,
      fontSize: '0.95rem',
      fontWeight: 500,
    },
    contactTitle: {
      fontFamily: themeFonts.secondary,
      color: themeColors.lightText,
      fontSize: '0.85rem',
      fontWeight: 400,
      ml: 0.5,
    },
    callButton: {
      color: themeColors.secondary,
      border: `1px solid ${themeColors.secondary}`,
      '&:hover': {
        backgroundColor: `rgba(43, 87, 154, 0.1)`,
      },
    },
    whatsappButton: {
      color: '#25D366',
      border: '1px solid #25D366',
      '&:hover': {
        backgroundColor: 'rgba(37, 211, 102, 0.1)',
      },
    },
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`);
  };

  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={styles.title}>
          Hubungi
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {contacts.map((contact, index) => (
            <Box key={contact.phone}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography sx={styles.contactName}>
                    {contact.name}
                    <Typography component="span" sx={styles.contactTitle}>
                      ({contact.title})
                    </Typography>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton onClick={() => handleCall(contact.phone)} size="small" sx={styles.callButton}>
                    <Phone sx={{ fontSize: '1.1rem' }} />
                  </IconButton>
                  <IconButton onClick={() => handleWhatsApp(contact.phone)} size="small" sx={styles.whatsappButton}>
                    <WhatsApp sx={{ fontSize: '1.1rem' }} />
                  </IconButton>
                </Box>
              </Box>
              {index < contacts.length - 1 && (
                <Divider sx={{ my: 1.5, opacity: 0.3 }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default PhoneContact;
