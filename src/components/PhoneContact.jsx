import { Card, CardContent, Typography, Box, IconButton, Divider } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";

function PhoneContact({ contacts = [] }) {
  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`);
  };

  return (
    <Card
      sx={{
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
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }
      }}
      elevation={0}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            ...theme.typography.serifFont,
            textAlign: 'center',
            color: '#0a1526',
            fontWeight: 700,
            letterSpacing: '2.5px',
            mb: 2.5,
            fontSize: '0.95rem',
            textTransform: 'uppercase'
          })}
        >
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
                  <Typography
                    sx={(theme) => ({
                      ...theme.typography.altSerifFont,
                      fontWeight: 700,
                      color: '#142847',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    })}
                  >
                    {contact.name}
                    <Typography
                      component="span"
                      sx={(theme) => ({
                        ...theme.typography.altSerifFont,
                        color: '#4a5568',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        fontStyle: 'italic'
                      })}
                    >
                      ({contact.title})
                    </Typography>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <IconButton
                    onClick={() => handleCall(contact.phone)}
                    size="small"
                    sx={{
                      color: '#4a5568',
                      border: '1px solid rgba(74, 85, 104, 0.2)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(74, 85, 104, 0.05)',
                        border: '1px solid rgba(74, 85, 104, 0.4)'
                      }
                    }}
                  >
                    <Phone sx={{ fontSize: '1.1rem' }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleWhatsApp(contact.phone)}
                    size="small"
                    sx={{
                      color: '#25d366',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 211, 102, 0.05)',
                        border: '1px solid rgba(37, 211, 102, 0.5)'
                      }
                    }}
                  >
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
