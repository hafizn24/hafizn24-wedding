# Quick Start: Component Variants Implementation

## Copy-Paste Ready Code

### 1️⃣ variantResolver.js (Copy as-is)

**File**: `src/utils/variantResolver.js`

```javascript
/**
 * Central resolver for component variants
 * Maps config variant names to actual component implementations
 */

// Import all variant factories
import * as coupleNamesVariants from '../components/invitation-component/CoupleNamesCard/variants';
import * as eventDateVenueVariants from '../components/invitation-component/EventDateVenueCard/variants';
import * as eventTitleVariants from '../components/invitation-component/EventTitle/variants';
import * as fullNamesSectionVariants from '../components/invitation-component/FullNamesSection/variants';
import * as eventDetailsSectionVariants from '../components/invitation-component/EventDetailsSection/variants';
import * as parentsInvitationVariants from '../components/invitation-component/ParentsInvitationCard/variants';
import * as navigationButtonsVariants from '../components/invitation-component/NavigationButtons/variants';
import * as phoneContactVariants from '../components/invitation-component/PhoneContact/variants';

const variantFactories = {
  CoupleNamesCard: coupleNamesVariants.variants,
  EventDateVenueCard: eventDateVenueVariants.variants,
  EventTitle: eventTitleVariants.variants,
  FullNamesSection: fullNamesSectionVariants.variants,
  EventDetailsSection: eventDetailsSectionVariants.variants,
  ParentsInvitationCard: parentsInvitationVariants.variants,
  NavigationButtons: navigationButtonsVariants.variants,
  PhoneContact: phoneContactVariants.variants,
};

const defaultVariants = {
  CoupleNamesCard: 'default',
  EventDateVenueCard: 'default',
  EventTitle: 'default',
  FullNamesSection: 'default',
  EventDetailsSection: 'default',
  ParentsInvitationCard: 'default',
  NavigationButtons: 'default',
  PhoneContact: 'default',
};

export const getComponentVariant = (componentName, variantName, props) => {
  const factory = variantFactories[componentName];
  if (!factory) {
    console.warn(`Component ${componentName} not found`);
    return null;
  }

  const variant = variantName || defaultVariants[componentName];
  const VariantComponent = factory[variant] || factory[defaultVariants[componentName]];

  if (!VariantComponent) {
    console.warn(`Variant "${variant}" not found for ${componentName}`);
    return factory[defaultVariants[componentName]](props);
  }

  return VariantComponent(props);
};

export const resolveVariantName = (config, componentName) => {
  return (
    config?.componentVariants?.[componentName] ||
    defaultVariants[componentName]
  );
};

export const getAvailableVariants = (componentName) => {
  const factory = variantFactories[componentName];
  return factory ? Object.keys(factory) : [];
};

export default { getComponentVariant, resolveVariantName, getAvailableVariants };
```

---

### 2️⃣ CoupleNamesCard/variants.js (Template)

**File**: `src/components/invitation-component/CoupleNamesCard/variants.js`

```javascript
import React from 'react';
import { Box, Typography } from '@mui/material';

// ===== DEFAULT VARIANT (Current Implementation) =====
const DefaultVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3 }}>
    <Typography
      sx={(theme) => ({
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize,
      })}
    >
      {bride.shortName}
    </Typography>
    <Typography
      sx={(theme) => ({
        ...fonts.serif,
        color: colors.lightText,
        my: 1.5,
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontSize: sizes.ampersandFontSize,
      })}
    >
      &
    </Typography>
    <Typography
      sx={(theme) => ({
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize,
      })}
    >
      {groom.shortName}
    </Typography>
  </Box>
);

// ===== MINIMAL VARIANT =====
const MinimalVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
    <Typography sx={{ ...fonts.cursive, color: colors.secondary, fontSize: sizes.nameFontSize }}>
      {bride.shortName}
    </Typography>
    <Typography sx={{ ...fonts.cursive, color: colors.secondary, fontSize: sizes.nameFontSize }}>
      {groom.shortName}
    </Typography>
  </Box>
);

// ===== MODERN VARIANT =====
const ModernVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3 }}>
    <Typography
      sx={{
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize * 1.2,
        fontWeight: 600,
      }}
    >
      {bride.shortName.toUpperCase()}
    </Typography>
    <Typography
      sx={{
        ...fonts.serif,
        color: colors.primary,
        my: 2,
        letterSpacing: '6px',
        textTransform: 'uppercase',
        fontSize: sizes.ampersandFontSize * 1.1,
        fontWeight: 700,
      }}
    >
      +
    </Typography>
    <Typography
      sx={{
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize * 1.2,
        fontWeight: 600,
      }}
    >
      {groom.shortName.toUpperCase()}
    </Typography>
  </Box>
);

// Export variants as factory functions
export const variants = {
  default: (props) => <DefaultVariant {...props} />,
  minimal: (props) => <MinimalVariant {...props} />,
  modern: (props) => <ModernVariant {...props} />,
};
```

---

### 3️⃣ Component Wrapper Template

**For each component**, update like this:

```javascript
import React from 'react';
import * as variants from './variants';

function CoupleNamesCard({ bride, groom, fonts, colors, sizes, variant = 'default' }) {
  const VariantComponent = variants.variants[variant] || variants.variants.default;
  return (
    <VariantComponent 
      bride={bride} 
      groom={groom} 
      fonts={fonts} 
      colors={colors} 
      sizes={sizes} 
    />
  );
}

export default CoupleNamesCard;
```

---

### 4️⃣ Updated Config (Add to config.json)

Add this section to both config files:

```json
{
  "title": "...",
  "eventTitle": "...",
  "bride": { ... },
  "groom": { ... },
  "event": { ... },
  "location": { ... },
  "contacts": [ ... ],
  "theme": { ... },
  "backgroundImages": { ... },
  "invitation": { ... },
  "componentVariants": {
    "CoupleNamesCard": "default",
    "EventDateVenueCard": "default",
    "EventTitle": "default",
    "FullNamesSection": "default",
    "EventDetailsSection": "default",
    "ParentsInvitationCard": "default",
    "NavigationButtons": "default",
    "PhoneContact": "default"
  }
}
```

---

### 5️⃣ Updated WeddingInvitationTemplate.jsx (Simplified)

Replace the entire template with this optimized version:

```javascript
import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Import variant resolver
import { getComponentVariant, resolveVariantName } from '../utils/variantResolver';

// Import wrapper components
import CoupleNamesCard from './invitation-component/CoupleNamesCard/CoupleNamesCard';
import EventDateVenueCard from './invitation-component/EventDateVenueCard/EventDateVenueCard';
import EventDetailsSection from './invitation-component/EventDetailsSection/EventDetailsSection';
import EventTitle from './invitation-component/EventTitle/EventTitle';
import FullNamesSection from './invitation-component/FullNamesSection/FullNamesSection';
import NavigationButtons from './invitation-component/NavigationButtons/NavigationButtons';
import ParentsInvitationCard from './invitation-component/ParentsInvitationCard/ParentsInvitationCard';
import PhoneContact from './invitation-component/PhoneContact/PhoneContact';

function WeddingInvitationTemplate({ config }) {
  const lowerRef = useRef(null);

  const scrollToLower = () => {
    const element = lowerRef.current;
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 2000;
    let startTime = null;

    function animateScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const scrollY = startY + distance * easeInOutQuad;
      window.scrollTo(0, scrollY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  const { theme, bride, groom, event, location, invitation, backgroundImages, eventTitle, contacts } = config;
  const { colors, fonts, sizes } = theme;

  // Helper to get variant name
  const getVariant = (componentName) => resolveVariantName(config, componentName);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('${backgroundImages.lower}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Upper Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url('${backgroundImages.upper}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box>
          <EventTitle 
            eventTitle={eventTitle}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
            variant={getVariant('EventTitle')}
          />

          <CoupleNamesCard
            bride={bride}
            groom={groom}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
            variant={getVariant('CoupleNamesCard')}
          />

          <EventDateVenueCard
            event={event}
            location={location}
            fonts={fonts}
            colors={colors}
            sizes={sizes}
            variant={getVariant('EventDateVenueCard')}
          />

          <IconButton
            onClick={scrollToLower}
            sx={{
              color: colors.tertiary,
              border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.2)`,
              padding: '12px',
              transition: 'all 0.4s ease',
              animation: 'float 2s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(10px)' },
              },
              '&:hover': {
                background: `rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.04)`,
                border: `1px solid rgba(${parseInt(colors.tertiary.slice(1, 3), 16)}, ${parseInt(colors.tertiary.slice(3, 5), 16)}, ${parseInt(colors.tertiary.slice(5, 7), 16)}, 0.4)`,
                transform: 'translateY(5px)'
              }
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: '1.8rem' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Lower Section */}
      <Box
        ref={lowerRef}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        <ParentsInvitationCard
          bride={bride}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
          sizes={sizes}
          variant={getVariant('ParentsInvitationCard')}
        />

        <FullNamesSection
          bride={bride}
          groom={groom}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
          sizes={sizes}
          variant={getVariant('FullNamesSection')}
        />

        <EventDetailsSection
          event={event}
          location={location}
          invitation={invitation}
          fonts={fonts}
          colors={colors}
          variant={getVariant('EventDetailsSection')}
        />

        <NavigationButtons
          location={location}
          colors={colors}
          variant={getVariant('NavigationButtons')}
        />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <PhoneContact 
            contacts={contacts}
            variant={getVariant('PhoneContact')}
          />
        </Box>
      </Box>
    </>
  );
}

export default WeddingInvitationTemplate;
```

---

## Simple Steps to Implement

1. **Create** `src/utils/variantResolver.js` (copy code from section 1️⃣)

2. **For each component**:
   - Create `variants.js` file in component folder (use section 2️⃣ as template)
   - Update component wrapper to accept `variant` prop
   - Replace component logic with variants

3. **Update config files** - add `componentVariants` section (section 4️⃣)

4. **Update WeddingInvitationTemplate** - use new template (section 5️⃣)

5. **Test** - run `npm run dev` and verify nothing broke

---

## Testing Checklist

```javascript
// Test 1: Verify default variant loads
// Just run the app - should look exactly like before

// Test 2: Test variant switching
// Change config: "CoupleNamesCard": "minimal"
// Refresh - should see inline names instead of stacked

// Test 3: Test fallback
// Try invalid variant name: "CoupleNamesCard": "invalidVariant"
// Should fallback to default, no errors in console

// Test 4: Mix variants
// Set different variants for different components
// Should work independently
```

---

## Folder Structure After Implementation

```
src/
├── components/
│   ├── WeddingInvitationTemplate.jsx ✏️ UPDATED
│   └── invitation-component/
│       ├── CoupleNamesCard/
│       │   ├── CoupleNamesCard.jsx ✏️ UPDATED
│       │   └── variants.js ✨ NEW
│       ├── EventDateVenueCard/
│       │   ├── EventDateVenueCard.jsx ✏️ UPDATED
│       │   └── variants.js ✨ NEW
│       ├── EventTitle/
│       │   ├── EventTitle.jsx ✏️ UPDATED
│       │   └── variants.js ✨ NEW
│       └── [other components with similar structure]
├── utils/
│   ├── configLoader.js
│   ├── themeFactory.js
│   └── variantResolver.js ✨ NEW
└── ...

public/config/
├── invitations.config.json
├── sample-theme-1.config.json ✏️ UPDATED
└── sample-theme-2.config.json ✏️ UPDATED
```

---

## Key Points

✅ **Non-Breaking**: Existing configs work with default variants
✅ **Scalable**: Easy to add more variants later
✅ **Clean**: WeddingInvitationTemplate stays simple
✅ **Flexible**: Mix and match variants per component
✅ **Maintainable**: Each variant isolated and independent
