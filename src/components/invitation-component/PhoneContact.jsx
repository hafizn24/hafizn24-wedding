import { Card, CardContent, Typography, Box, IconButton, Divider } from "@mui/material";
import { Phone, WhatsApp } from "@mui/icons-material";
import { getTheme } from "../../theme/theme";

function PhoneContact({ config, contacts }) {
  const themeData = getTheme(config.themeName);
  const themeColors = themeData.colors;
  const themeFonts = themeData.fonts;

  const styles = {
    card: {
      borderRadius: 2,
      border: `1px solid ${themeColors.border}`,
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      backgroundColor: "rgba(249, 249, 249, 0.8)",        // Light universal background
    },
    title: {
      fontFamily: themeFonts.primary,
      color: themeColors.primary,
      fontSize: "1.1rem",
      fontWeight: 700,
      mb: 1.5,
    },
    contactName: {
      fontFamily: themeFonts.secondary,
      color: themeColors.text,
      fontSize: { xs: "0.95rem", sm: "1rem" },
      fontWeight: 700,
    },
    contactTitle: {
      fontFamily: themeFonts.secondary,
      color: themeColors.lightText,
      fontSize: { xs: "0.85rem", sm: "1rem" },
      fontWeight: 500,
      ml: 0.5,
    },
    iconButtonBase: {
      borderRadius: "50%",
      border: "1px solid",
      transition: "all 0.2s ease",
    },
    callButton: {
      borderColor: "#007BFF",                  // Universal blue for call
      color: "#007BFF",
      "&:hover": {
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        transform: "scale(1.05)",
      },
    },
    whatsappButton: {
      borderColor: "#25D366",                  // WhatsApp green
      color: "#25D366",
      "&:hover": {
        backgroundColor: "rgba(37, 211, 102, 0.1)",
        transform: "scale(1.05)",
      },
    },
    divider: {
      my: 1.5,
      opacity: 0.2,
      borderColor: "#ccc",
    },
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`);
  };

  return (
    <Card elevation={0} sx={styles.card}>
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" sx={styles.title}>
          Hubungi
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2 } }}>
          {contacts.map((contact, index) => (
            <Box key={contact.phone}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
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

                <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 1 } }}>
                  <IconButton
                    onClick={() => handleCall(contact.phone)}
                    size="small"
                    sx={{ ...styles.iconButtonBase, ...styles.callButton }}
                  >
                    <Phone sx={{ fontSize: "1.2rem" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleWhatsApp(contact.phone)}
                    size="small"
                    sx={{ ...styles.iconButtonBase, ...styles.whatsappButton }}
                  >
                    <WhatsApp sx={{ fontSize: "1.2rem" }} />
                  </IconButton>
                </Box>
              </Box>
              {index < contacts.length - 1 && <Divider sx={styles.divider} />}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default PhoneContact;
