# Visual Implementation Flowchart

## How the Variant System Works

### Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    Application Start                          │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  InvitationPage.jsx                                          │
│  ├─ Load config from config JSON                             │
│  ├─ Create theme from config                                 │
│  └─ Pass config to WeddingInvitationTemplate                 │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  config.json Structure:                                       │
│  {                                                            │
│    title: "...",                                              │
│    theme: { colors, fonts, sizes },                           │
│    bride: { ... },                                            │
│    componentVariants: {  ◄─── NEW SECTION                     │
│      CoupleNamesCard: "elegant",                              │
│      EventTitle: "default"                                    │
│    }                                                          │
│  }                                                            │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  WeddingInvitationTemplate.jsx                               │
│                                                               │
│  For each component:                                         │
│  ├─ variantName = config.componentVariants[componentName]    │
│  ├─ Component receives { variant: variantName }              │
│  └─ Component renders that variant                           │
└────────────────────────────┬─────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────────┐ ┌────────────────┐ ┌──────────────────┐
│ CoupleNamesCard  │ │  EventTitle    │ │ EventDateVenue   │
│ variant="elegant"│ │ variant="def"  │ │ variant="minimal"│
└────────┬─────────┘ └────────┬───────┘ └────────┬─────────┘
         │                    │                  │
         ▼                    ▼                  ▼
┌──────────────────┐ ┌────────────────┐ ┌──────────────────┐
│ variants.js      │ │ variants.js    │ │ variants.js      │
│                  │ │                │ │                  │
│ switch(variant) {│ │ switch(variant)│ │switch(variant)   │
│  case"elegant":  │ │  case"default":│ │  case"minimal":  │
│   return <Eleg/> │ │   return <Def/>│ │   return <Min/>  │
│  ...             │ │  ...           │ │  ...             │
│}                 │ │}               │ │}                 │
└────────┬─────────┘ └────────┬───────┘ └────────┬─────────┘
         │                    │                  │
         └────────────────────┼──────────────────┘
                              │
                              ▼
                  ┌──────────────────────────┐
                  │   Rendered UI            │
                  │   (All variants active)  │
                  └──────────────────────────┘
```

---

## Component Variant Routing

### CoupleNamesCard Example

```
Input: CoupleNamesCard component with variant="elegant"
│
├─ Check variants.js for "elegant"
│  └─ variants = { default, minimal, modern, elegant }
│     └─ Found! ✓
│
└─ Render ElegantVariant component
   └─ Returns JSX with elegant styling
```

### Decision Tree

```
                    ┌─────────────────────────────────┐
                    │  Get variant from config        │
                    └────────────┬────────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────────────┐
                    │  Variant name exists?           │
                    └────────┬────────────┬───────────┘
                         YES │            │ NO
                             │            └──────────┐
                             ▼                       │
                ┌─────────────────────────┐          │
                │ Look up in variants.js  │          │
                └────────┬────────────────┘          │
                     FOUND │    NOTFOUND             │
                         ┌─┴────┐                    │
                         ▼      ▼                    │
                    Render   Use default ◄───────────┘
                    variant
```

---

## State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│ User visits /sample-1                                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ InvitationPage loads config                                  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ config = {                                                   │
│   theme: {...},                                              │
│   bride: {...},                                              │
│   componentVariants: {                                       │
│     CoupleNamesCard: "elegant" ◄─── Stored in state         │
│   }                                                          │
│ }                                                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Pass config to WeddingInvitationTemplate                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Template reads config.componentVariants                      │
│ and passes variant prop to each child                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ Each child component uses variant to render                  │
│ correct variant implementation                               │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure Before & After

### BEFORE
```
src/components/
├── WeddingInvitationTemplate.jsx
├── invitation-component/
│   ├── CoupleNamesCard/
│   │   └── CoupleNamesCard.jsx (contains all logic)
│   ├── EventDateVenueCard/
│   │   └── EventDateVenueCard.jsx (contains all logic)
│   └── ... (7 more components)
└── ...
```

### AFTER
```
src/components/
├── WeddingInvitationTemplate.jsx (updated - uses variantResolver)
├── invitation-component/
│   ├── CoupleNamesCard/
│   │   ├── CoupleNamesCard.jsx (wrapper - routes to variant)
│   │   └── variants.js (NEW - contains all variant logic)
│   ├── EventDateVenueCard/
│   │   ├── EventDateVenueCard.jsx (wrapper)
│   │   └── variants.js (NEW)
│   └── ... (7 more components with variants.js)
└── ...

src/utils/
├── configLoader.js
├── themeFactory.js
└── variantResolver.js (NEW - central routing)
```

---

## Variant Resolution Algorithm

```javascript
// Pseudo-code showing the resolution process

function renderComponent(componentName, config, props) {
  
  // Step 1: Get variant name from config
  const variantName = config.componentVariants?.[componentName] || 'default'
  
  // Step 2: Get variant factory
  const variantFactory = variantFactories[componentName]
  if (!variantFactory) return null  // Component not found
  
  // Step 3: Get variant component
  let variant = variantFactory[variantName]
  if (!variant) variant = variantFactory['default']  // Fallback
  
  // Step 4: Render variant with props
  return variant(props)
}

// Usage:
const coupleCard = renderComponent(
  'CoupleNamesCard',
  config,
  { bride, groom, fonts, colors, sizes }
)
```

---

## Typical User Journey

### Config-Based Selection

```
User creates new invitation config:

sample-theme-3.config.json:
{
  ...
  componentVariants: {
    CoupleNamesCard: "minimal",      ◄─── User choice
    EventTitle: "gradient",           ◄─── User choice
    FullNamesSection: "default"       ◄─── User choice
  }
}

↓

User visits /sample-3

↓

System loads config and:
1. Reads componentVariants section
2. Resolves each component variant
3. Renders wedding with chosen variants
4. User sees customized layout
```

---

## Error Handling Flow

```
                    ┌─────────────────────┐
                    │ Load variant        │
                    └────────┬────────────┘
                             │
                   ┌─────────┴─────────┐
                   ▼                   ▼
            ┌──────────────┐    ┌──────────────┐
            │ Found?       │    │ Not found    │
            │ ✓ YES        │    │ ✗ NO         │
            └──────┬───────┘    └──────┬───────┘
                   │                   │
                   ▼                   ▼
            ┌──────────────┐    ┌──────────────────┐
            │ Render it    │    │ Try default      │
            └──────────────┘    └──────┬───────────┘
                                       │
                            ┌──────────┴──────────┐
                            ▼                     ▼
                      ┌──────────┐        ┌────────────────┐
                      │ Found?   │        │ Log warning    │
                      │ ✓ YES    │        │ in console     │
                      └──────┬───┘        └────────┬───────┘
                             │                     │
                             ▼                     ▼
                      ┌──────────────┐      ┌──────────────┐
                      │ Render       │      │ Render       │
                      │ default      │      │ default      │
                      └──────────────┘      │ variant      │
                                            └──────────────┘
```

---

## Component Communication

### Data Passing Flow

```
WeddingInvitationTemplate
│
├─ config = { componentVariants, theme, bride, ... }
│
├─ getVariant("CoupleNamesCard")
│  └─ Returns: config.componentVariants.CoupleNamesCard
│
├─ Pass to child: <CoupleNamesCard variant="elegant" {...props} />
│
└─ CoupleNamesCard receives:
   ├─ variant = "elegant"
   ├─ bride = {...}
   ├─ groom = {...}
   ├─ fonts = {...}
   ├─ colors = {...}
   └─ sizes = {...}
      │
      └─ Looks up in variants.js
         └─ Renders ElegantVariant component
            └─ Uses received props for styling
```

---

## Scale & Performance

### Variant System Scaling

```
Current: 8 components × 1 implementation
├─ Lines of code: ~800
├─ Variants available: 1
└─ Flexibility: Limited

After (Phase 1): 8 components × 3 variants average
├─ Lines of code: ~1200 (+50% for variant code)
├─ Variants available: 24
└─ Flexibility: High

Future (Phase 5): 8 components × 5 variants average
├─ Lines of code: ~1600 (+100% total)
├─ Variants available: 40
└─ Flexibility: Extremely high

Note: Minimal performance impact:
- Only 1 variant loaded per component
- No dynamic compilation
- Static file parsing only
```

---

## Quick Reference

### When to Add New Variant

```
Want to create "bold" variant for CoupleNamesCard?

1. Open CoupleNamesCard/variants.js
2. Add new component:
   const BoldVariant = ({ bride, groom, ... }) => (
     // New styling here
   )
3. Export in variants object:
   export const variants = {
     default: ...,
     minimal: ...,
     bold: (props) => <BoldVariant {...props} />  ← Add this
   }
4. Use in config:
   "CoupleNamesCard": "bold"  ← Set in config.json
5. Done! No other changes needed
```

### When to Switch Variants

```
Want to change from "elegant" to "minimal"?

Before:
{
  "componentVariants": {
    "CoupleNamesCard": "elegant"
  }
}

After:
{
  "componentVariants": {
    "CoupleNamesCard": "minimal"
  }
}

Reload page → New variant loads automatically
```

---

## Configuration Matrix

### All 8 Components with Possible Variants

```
CoupleNamesCard        EventDateVenueCard     EventTitle
├─ default             ├─ default             ├─ default
├─ minimal             ├─ compact             ├─ gradient
└─ modern              └─ alternate           └─ minimal

FullNamesSection       EventDetailsSection    ParentsInvitationCard
├─ default             ├─ default             ├─ default
├─ inline              ├─ compact             └─ minimal
└─ modern              └─ minimal

NavigationButtons      PhoneContact
├─ default             ├─ default
└─ text-only           └─ list-style


Total possible combinations: 3×3×3×3×3×3×2×2 = 1,728 unique layouts!
```

---

## Decision Matrix: Why This Architecture?

```
Criteria                    | Current | Proposed | ✓ Reason
─────────────────────────────┼─────────┼──────────┼──────────────
Config-driven?              | ❌ No   | ✅ Yes   | Flexible
Changes in code?            | ❌ Yes  | ✅ No    | Safer
Adding variants?            | ❌ Hard | ✅ Easy  | Scalable
Template stays clean?       | ❌ No   | ✅ Yes   | Maintainable
Non-developers can use?     | ❌ No   | ✅ Yes   | Accessible
Backward compatible?        | N/A     | ✅ Yes   | Safe rollout
Test individual variant?    | ❌ No   | ✅ Yes   | Easier QA
Fallback if variant missing?| N/A     | ✅ Yes   | Robust
```

This ensures the optimal solution for your needs! ✨
