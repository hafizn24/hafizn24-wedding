# Implementation Guide: Component Variants System

## Overview
This guide walks through implementing a config-driven variant system for the 8 wedding invitation components.

---

## Architecture: How It Works

```
┌─────────────────────────────────────────────────────┐
│  config.json                                         │
│  {                                                   │
│    componentVariants: {                              │
│      CoupleNamesCard: "elegant"                      │
│    }                                                 │
│  }                                                   │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  variantResolver.js                                  │
│  getComponentVariant(name, variantName, props)       │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  CoupleNamesCard/variants.js                         │
│  {                                                   │
│    elegant: <ElegantCoupleNamesCard />,              │
│    minimal: <MinimalCoupleNamesCard />,              │
│    modern: <ModernCoupleNamesCard />                 │
│  }                                                   │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  WeddingInvitationTemplate.jsx                       │
│  Renders selected variant without knowing details    │
└──────────────────────────────────────────────────────┘
```

---

## Step 1: Create variantResolver.js

**File**: `src/utils/variantResolver.js`

```javascript
/**
 * Resolves component variants from config
 * Maps component names to their variant factories
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

// Map component names to their variant factories
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

// Default variants (fallback)
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

/**
 * Gets the correct variant component for a given component name
 * @param {string} componentName - Name of the component (e.g., 'CoupleNamesCard')
 * @param {string} variantName - Name of the variant (e.g., 'elegant')
 * @param {object} props - Props to pass to the component
 * @returns {React.Component} - The component instance
 */
export const getComponentVariant = (componentName, variantName, props) => {
  const factory = variantFactories[componentName];
  
  if (!factory) {
    console.warn(`Component ${componentName} not found in variant factories`);
    return null;
  }

  const variant = variantName || defaultVariants[componentName];
  const VariantComponent = factory[variant] || factory[defaultVariants[componentName]];

  if (!VariantComponent) {
    console.warn(
      `Variant "${variant}" not found for ${componentName}, using default`
    );
    return factory[defaultVariants[componentName]](props);
  }

  return VariantComponent(props);
};

/**
 * Gets the variant name from config with fallback to default
 * @param {object} config - The invitation config
 * @param {string} componentName - Name of the component
 * @returns {string} - The variant name to use
 */
export const resolveVariantName = (config, componentName) => {
  return (
    config?.componentVariants?.[componentName] ||
    defaultVariants[componentName]
  );
};

/**
 * Gets all available variants for a component
 * @param {string} componentName - Name of the component
 * @returns {Array<string>} - Array of available variant names
 */
export const getAvailableVariants = (componentName) => {
  const factory = variantFactories[componentName];
  return factory ? Object.keys(factory) : [];
};

export default {
  getComponentVariant,
  resolveVariantName,
  getAvailableVariants,
};
```

---

## Step 2: Create Variant Files for Each Component

### Example: CoupleNamesCard/variants.js

**File**: `src/components/invitation-component/CoupleNamesCard/variants.js`

```javascript
import React from 'react';
import { Box, Typography } from '@mui/material';

// Default Variant (Current Implementation)
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

// Minimal Variant (No ampersand, single line)
const MinimalVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
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
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize,
      })}
    >
      {groom.shortName}
    </Typography>
  </Box>
);

// Modern Variant (Larger, bolder styling)
const ModernVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3 }}>
    <Typography
      sx={(theme) => ({
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize * 1.2,
        fontWeight: 600,
      })}
    >
      {bride.shortName.toUpperCase()}
    </Typography>
    <Typography
      sx={(theme) => ({
        ...fonts.serif,
        color: colors.primary,
        my: 2,
        letterSpacing: '6px',
        textTransform: 'uppercase',
        fontSize: sizes.ampersandFontSize * 1.1,
        fontWeight: 700,
      })}
    >
      +
    </Typography>
    <Typography
      sx={(theme) => ({
        ...fonts.cursive,
        color: colors.secondary,
        fontSize: sizes.nameFontSize * 1.2,
        fontWeight: 600,
      })}
    >
      {groom.shortName.toUpperCase()}
    </Typography>
  </Box>
);

// Export all variants as factory functions
export const variants = {
  default: (props) => <DefaultVariant {...props} />,
  minimal: (props) => <MinimalVariant {...props} />,
  modern: (props) => <ModernVariant {...props} />,
};

// Export as named exports for flexibility
export { DefaultVariant, MinimalVariant, ModernVariant };
```

---

## Step 3: Create Wrapper Components

Update each component to be a thin wrapper that uses the variant resolver:

### Example: CoupleNamesCard.jsx

**File**: `src/components/invitation-component/CoupleNamesCard/CoupleNamesCard.jsx`

```javascript
import React from 'react';
import * as variants from './variants';

/**
 * CoupleNamesCard - Wrapper component
 * Gets the variant from the parent component or uses default
 */
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

## Step 4: Update Config Schema

Add to `sample-theme-1.config.json`:

```json
{
  "title": "Natasya & Iskandar",
  "eventTitle": "WALIMATUL URUS",
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

## Step 5: Update WeddingInvitationTemplate.jsx

```javascript
import { getComponentVariant, resolveVariantName } from '../utils/variantResolver';

function WeddingInvitationTemplate({ config }) {
  // ... existing code ...

  const { theme, bride, groom, event, location, invitation, backgroundImages, eventTitle, contacts, componentVariants } = config;
  const { colors, fonts, sizes } = theme;

  const getCoupleNamesCard = () => {
    const variant = resolveVariantName(config, 'CoupleNamesCard');
    return getComponentVariant('CoupleNamesCard', variant, {
      bride,
      groom,
      fonts,
      colors,
      sizes,
    });
  };

  const getEventDateVenueCard = () => {
    const variant = resolveVariantName(config, 'EventDateVenueCard');
    return getComponentVariant('EventDateVenueCard', variant, {
      event,
      location,
      fonts,
      colors,
      sizes,
    });
  };

  // ... similar for other components ...

  return (
    <>
      {/* Upper Section */}
      <Box sx={{ /* ... */ }}>
        <Box>
          {getEventTitle()}
          {getCoupleNamesCard()}
          {getEventDateVenueCard()}
          {/* ... */}
        </Box>
      </Box>

      {/* Lower Section */}
      <Box ref={lowerRef} sx={{ /* ... */ }}>
        {getParentsInvitationCard()}
        {getFullNamesSection()}
        {getEventDetailsSection()}
        {getNavigationButtons()}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {getPhoneContact()}
        </Box>
      </Box>
    </>
  );
}
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Create `variantResolver.js`
- [ ] Update `WeddingInvitationTemplate.jsx` to use resolver

### Phase 2: Component Variants
- [ ] Create `CoupleNamesCard/variants.js`
- [ ] Create `EventDateVenueCard/variants.js`
- [ ] Create `EventTitle/variants.js`
- [ ] Create `FullNamesSection/variants.js`
- [ ] Create `EventDetailsSection/variants.js`
- [ ] Create `ParentsInvitationCard/variants.js`
- [ ] Create `NavigationButtons/variants.js`
- [ ] Create `PhoneContact/variants.js`

### Phase 3: Wrapper Updates
- [ ] Update `CoupleNamesCard.jsx` wrapper
- [ ] Update `EventDateVenueCard.jsx` wrapper
- [ ] Update `EventTitle.jsx` wrapper
- [ ] Update `FullNamesSection.jsx` wrapper
- [ ] Update `EventDetailsSection.jsx` wrapper
- [ ] Update `ParentsInvitationCard.jsx` wrapper
- [ ] Update `NavigationButtons.jsx` wrapper
- [ ] Update `PhoneContact.jsx` wrapper

### Phase 4: Configuration
- [ ] Update `sample-theme-1.config.json`
- [ ] Update `sample-theme-2.config.json`
- [ ] Add schema documentation

### Phase 5: Testing
- [ ] Test default variants
- [ ] Test variant switching
- [ ] Test fallback behavior
- [ ] Verify no breaking changes

---

## Benefits Achieved

✅ **Separation of Concerns**: Variants isolated from main component logic
✅ **Configuration-Driven**: Variants specified in config.json
✅ **Clean Template**: WeddingInvitationTemplate doesn't know implementation details
✅ **Scalable**: Easy to add new variants without touching template
✅ **Maintainable**: Each variant is independent
✅ **Testable**: Each variant can be tested in isolation
✅ **Backward Compatible**: Default variants ensure existing configs work

---

## Example Variant Definitions

### Variant Types You Can Create

1. **Layout Variants**: Different arrangements (stacked, inline, grid)
2. **Style Variants**: Different visual styles (minimal, elegant, bold)
3. **Content Variants**: Different text displays (full, abbreviated, centered)
4. **Animation Variants**: Different entrance/animation effects
5. **Theme Variants**: Different color combinations (dark, light, accent)

Example for EventTitle:
```javascript
export const variants = {
  default: (props) => <CenteredTitle {...props} />,
  minimal: (props) => <MinimalTitle {...props} />,
  bordered: (props) => <BorderedTitle {...props} />,
  gradient: (props) => <GradientTitle {...props} />,
};
```

---

## Backward Compatibility

If `componentVariants` is not in config.json:
1. Resolver uses `defaultVariants` object
2. All components render with "default" variant
3. Existing configs work without modification
4. No breaking changes

This ensures zero migration effort for existing weddings!
