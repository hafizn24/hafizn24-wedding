# Font Usage Summary

## Fonts by Category

| Category | Sample Theme 1 | Sample Theme 2 | Usage Status |
|----------|---|---|---|
| **Primary** | Quintessential (serif) | Great Vibes (cursive) | ❌ Not actively used |
| **Secondary** | Domine (serif) | Merriweather (serif) | ❌ Not actively used |
| **Serif** | Playfair Display | Lora | ✅ ACTIVE |
| **Alt Serif** | Cormorant Garamond | Georgia | ✅ ACTIVE |
| **Cursive** | Parisienne | Dancing Script | ✅ ACTIVE |
| **Sans Serif** | Roboto | Open Sans | ⚠️ Fallback only |

---

## Font Usage by Component

### ✅ Cursive Font
- `CoupleNamesCard`: Bride & groom short names (4rem)
- `FullNamesSection`: Bride & groom full names (2rem)

### ✅ Serif Font
- `EventTitle`: "WALIMATUL URUS" title (2.5rem)
- `ParentsInvitationCard`: Parents name (1rem)
- `EventDetailsSection`: "Bertempat di" label (1rem)
- `PhoneContact`: "Hubungi" label (0.95rem)

### ✅ Alt Serif Font
- `EventDateVenueCard`: Event date (1.5rem)
- `EventDateVenueCard`: Venue & address (1.4rem)
- `EventDetailsSection`: Time formatted (1rem)
- `EventDetailsSection`: Full address (1rem)
- `FullNamesSection`: "Dengan Pasangannya" label (0.8rem)
- `ParentsInvitationCard`: Opening invitation text (1rem)
- `PhoneContact`: Contact names & titles (1.1rem / 0.9rem)

### ❌ Not Used
- **Primary Font**: Defined but never applied to components
- **Secondary Font**: Defined but never applied to components
- **Sans Serif Font**: Defined but never applied to components

---

## Component Font Combinations

| Component | Font Type | Font Name (T1) | Font Name (T2) | Size |
|-----------|-----------|---|---|---|
| EventTitle | serif | Playfair Display | Lora | 2.5rem |
| CoupleNamesCard (Names) | cursive | Parisienne | Dancing Script | 4rem |
| CoupleNamesCard (&) | serif | Playfair Display | Lora | 1.5rem |
| EventDateVenueCard (Date) | altSerif | Cormorant Garamond | Georgia | 1.5rem |
| EventDateVenueCard (Address) | altSerif | Cormorant Garamond | Georgia | 1.4rem |
| FullNamesSection (Names) | cursive | Parisienne | Dancing Script | 2rem |
| FullNamesSection (Label) | altSerif | Cormorant Garamond | Georgia | 0.8rem |
| EventDetailsSection (Time) | altSerif | Cormorant Garamond | Georgia | 1rem |
| EventDetailsSection (Label) | serif | Playfair Display | Lora | 1rem |
| EventDetailsSection (Address) | altSerif | Cormorant Garamond | Georgia | 1rem |
| ParentsInvitationCard (Name) | serif | Playfair Display | Lora | 1rem |
| ParentsInvitationCard (Text) | altSerif | Cormorant Garamond | Georgia | 1rem |
| PhoneContact (Title) | serif | Playfair Display | Lora | 0.95rem |
| PhoneContact (Names) | altSerif | Cormorant Garamond | Georgia | 1.1rem |
| NavigationButtons | None | - | - | - |

---

## Summary Statistics

- **Total Fonts Defined**: 6 (primary, secondary, sansSerif, serif, altSerif, cursive)
- **Fonts Currently Used**: 3 (serif, altSerif, cursive)
- **Font Categories Unused**: 3 (primary, secondary, sansSerif)
- **Components Using Multiple Font Types**: 7 out of 8
- **Most Used Font**: Alt Serif (7 uses)
- **Second Most Used**: Cursive (4 uses)
- **Third Most Used**: Serif (4 uses)
