import { Card, CardContent, Typography, Box, IconButton, Divider } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";
import { getTheme } from '../../theme/theme';

function PhoneContact({ config }) {
  const { contacts, themeName, variant } = config;
  const theme = getTheme(themeName);
  
  const styles = theme.components.PhoneContact[variant.PhoneContact];

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`);
  };

  return (
    <Card sx={styles.card} elevation={0}>
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
