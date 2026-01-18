# Wedding Invitation Project - Analysis & Recommendations

## Task 1: Font Usage Analysis

### Font Classification by Category

#### **Primary Font (Logo/Display)**
- **Sample Theme 1**: `"Quintessential"` (serif)
- **Sample Theme 2**: `"Great Vibes"` (cursive)
- **Used in**: Main branding, decorative purposes
- **Components**: Not directly used in main components (set in `themeFactory.js`)

#### **Secondary Font**
- **Sample Theme 1**: `"Domine"` (serif)
- **Sample Theme 2**: `"Merriweather"` (serif)
- **Used in**: Decorative/alternative text styling
- **Current Usage**: Not actively used in components

#### **Serif Font** ✅ ACTIVELY USED
- **Sample Theme 1**: `"Playfair Display"` (serif)
- **Sample Theme 2**: `"Lora"` (serif)
- **Used in**:
  - `EventTitle` - Event title (WALIMATUL URUS)
  - `ParentsInvitationCard` - Parents name
  - `ParentsInvitationCard` - "Bertempat di" label
  - `EventDetailsSection` - "Bertempat di" label
  - `PhoneContact` - "Hubungi" label

#### **Alt Serif Font** ✅ ACTIVELY USED
- **Sample Theme 1**: `"Cormorant Garamond"` (serif)
- **Sample Theme 2**: `"Georgia"` (serif)
- **Used in**:
  - `EventDateVenueCard` - Event date
  - `EventDateVenueCard` - Venue & address
  - `EventDetailsSection` - Time formatted
  - `EventDetailsSection` - Full address
  - `FullNamesSection` - "Dengan Pasangannya" label
  - `ParentsInvitationCard` - Opening invitation text
  - `PhoneContact` - Contact names and titles

#### **Cursive Font** ✅ ACTIVELY USED
- **Sample Theme 1**: `"Parisienne"` (cursive)
- **Sample Theme 2**: `"Dancing Script"` (cursive)
- **Used in**:
  - `CoupleNamesCard` - Bride short name
  - `CoupleNamesCard` - Groom short name
  - `FullNamesSection` - Bride full name
  - `FullNamesSection` - Groom full name

#### **Sans Serif Font**
- **Sample Theme 1**: `"Roboto"` (sans-serif)
- **Sample Theme 2**: `"Open Sans"` (sans-serif)
- **Used in**: Not actively used in components
- **Note**: MUI default fallback

---

## Task 2: Component Variants Architecture

### Current Problem
- **Variants are hardcoded** inside each component
- **WeddingInvitationTemplate** has no way to control which variant to render
- **Config.json** has no variant specification
- Adding variants requires modifying component code

### Proposed Solution: Config-Driven Variant System

#### Architecture Overview
```
config.json
├── componentVariants
│   ├── CoupleNamesCard: "variant-1"
│   ├── EventDateVenueCard: "variant-1"
│   ├── EventTitle: "variant-2"
│   ├── FullNamesSection: "variant-1"
│   ├── EventDetailsSection: "variant-1"
│   ├── ParentsInvitationCard: "variant-1"
│   ├── NavigationButtons: "variant-2"
│   └── PhoneContact: "variant-1"
├── variantDefinitions
│   └── [variant configurations]
```

#### Implementation Strategy

##### Step 1: Create Variant Factory Files
Create variant files for each component that define different rendering approaches:
- `CoupleNamesCard.variants.jsx`
- `EventDateVenueCard.variants.jsx`
- `EventTitle.variants.jsx`
- `FullNamesSection.variants.jsx`
- `EventDetailsSection.variants.jsx`
- `ParentsInvitationCard.variants.jsx`
- `NavigationButtons.variants.jsx`
- `PhoneContact.variants.jsx`

##### Step 2: Update Config Schema
```json
{
  "theme": { ... },
  "componentVariants": {
    "CoupleNamesCard": "elegant",
    "EventDateVenueCard": "minimal",
    "EventTitle": "centered",
    "FullNamesSection": "stacked",
    "EventDetailsSection": "compact",
    "ParentsInvitationCard": "traditional",
    "NavigationButtons": "icons",
    "PhoneContact": "card"
  }
}
```

##### Step 3: Create Variant System
- Factory pattern to load correct variant based on config
- Fallback to default if variant not found
- Type-safe variant selection

##### Step 4: Update Components
- Refactor each component to accept variant prop
- Move variant logic to external factory
- Keep component clean and simple

##### Step 5: Update WeddingInvitationTemplate
```jsx
// Pseudo-code
const getComponentVariant = (componentName, variantName, props) => {
  const variant = variantFactory.get(componentName, variantName);
  return variant(props);
};
```

---

## Optimal Implementation Approach

### Phase 1: Foundation (Low Risk)
1. Create utility function: `variantResolver.js`
   - Maps component names to variant factories
   - Resolves variant from config
   - Returns correct component with variant props

2. Create `componentVariants/` folder structure:
   ```
   src/
   └── components/
       └── invitation-component/
           ├── CoupleNamesCard/
           │   ├── CoupleNamesCard.jsx (wrapper)
           │   └── variants.js
           └── [other components...]
   ```

### Phase 2: Variant Definitions (Medium Risk)
1. Define 2-3 variants per component:
   - **Default/Traditional**: Current implementation
   - **Minimal**: Reduced decorative elements
   - **Modern**: Contemporary layout

2. Each variant exports a component factory function:
   ```jsx
   export const variants = {
     default: (props) => <DefaultCoupleNamesCard {...props} />,
     minimal: (props) => <MinimalCoupleNamesCard {...props} />,
     modern: (props) => <ModernCoupleNamesCard {...props} />
   };
   ```

### Phase 3: Configuration (Low Risk)
1. Update config schema in both sample configs
2. Add `componentVariants` section specifying variant choice
3. Maintain backward compatibility (default variants if not specified)

### Phase 4: Integration (Low Risk)
1. Update `WeddingInvitationTemplate`:
   - Fetch variant names from config
   - Use `variantResolver` to get correct component
   - Render without changes to structure

### Benefits
✅ **Maintainability**: Variants isolated, easy to add new ones
✅ **Scalability**: No config.json size explosion
✅ **Flexibility**: Can mix variants across components
✅ **Simplicity**: WeddingInvitationTemplate remains clean
✅ **DRY**: No code duplication across variants
✅ **Testability**: Each variant independently testable
✅ **Performance**: Only render selected variant

---

## File Structure After Implementation

```
src/
├── components/
│   ├── WeddingInvitationTemplate.jsx
│   ├── invitation-component/
│   │   ├── CoupleNamesCard/
│   │   │   ├── CoupleNamesCard.jsx (wrapper)
│   │   │   ├── variants/
│   │   │   │   ├── DefaultVariant.jsx
│   │   │   │   ├── MinimalVariant.jsx
│   │   │   │   └── ModernVariant.jsx
│   │   │   └── index.js (exports variants)
│   │   └── [other components...]
├── utils/
│   ├── configLoader.js
│   ├── themeFactory.js
│   └── variantResolver.js (NEW)
└── ...
```

---

## Config.json Example After Implementation

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
    "CoupleNamesCard": "elegant",
    "EventDateVenueCard": "traditional",
    "EventTitle": "centered",
    "FullNamesSection": "stacked",
    "EventDetailsSection": "compact",
    "ParentsInvitationCard": "traditional",
    "NavigationButtons": "icons",
    "PhoneContact": "card"
  }
}
```

---

## Summary

**Font Usage**: 5 fonts are actively used (serif, altSerif, cursive actively; sansSerif and secondary reserved for future use)

**Variants Solution**: Implement config-driven variant system with:
- Dedicated variant files per component
- Central `variantResolver` utility
- Config schema with `componentVariants` mapping
- Clean separation of concerns in WeddingInvitationTemplate
