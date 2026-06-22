import { Phone, MessageCircle } from "lucide-react";
import { getTheme } from "../../theme/theme";

function PhoneContact({ config, contacts }) {
  const themeData = getTheme(config.themeName);
  const themeFonts = themeData.fonts;

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`);
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-gray-50/80 p-3">
      <h3 className="text-lg font-bold mb-1.5" style={{ fontFamily: themeFonts.primary, color: "#333" }}>
        Hubungi
      </h3>

      <div className="flex flex-col gap-2">
        {contacts.map((contact, index) => (
          <div key={contact.phone}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1">
                <p style={{ fontFamily: themeFonts.secondary, color: "#222", fontSize: "1rem", fontWeight: 700 }}>
                  {contact.name}
                  <span style={{ color: "#222", fontSize: "1rem", fontWeight: 500, marginLeft: "0.125rem" }}>
                    ({contact.title})
                  </span>
                </p>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => handleCall(contact.phone)}
                  className="p-2 rounded-full border border-blue-500 text-blue-500 transition-all hover:bg-blue-50 hover:scale-105"
                  aria-label="Call"
                >
                  <Phone size={20} />
                </button>
                <button
                  onClick={() => handleWhatsApp(contact.phone)}
                  className="p-2 rounded-full border border-green-500 text-green-500 transition-all hover:bg-green-50 hover:scale-105"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>
            {index < contacts.length - 1 && <div className="my-1.5 border-t border-gray-300 opacity-20" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneContact;
