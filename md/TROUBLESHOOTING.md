# Implementation Tips & Troubleshooting Guide

## 🚀 Getting Started: Best Order

### 1. Start with Simplest Component First
**Recommended**: `EventTitle` or `NavigationButtons`
**Why**: Fewer props, easier to understand pattern

```javascript
// EventTitle is easiest:
- Only uses: eventTitle, fonts, colors, sizes
- Minimal styling
- Clear variant differences
```

### 2. Then Do Complex Components
**Order**:
1. ✅ EventTitle (easiest)
2. ✅ NavigationButtons (easy)
3. ✅ CoupleNamesCard (medium)
4. ✅ EventDateVenueCard (medium)
5. ✅ ParentsInvitationCard (medium)
6. ✅ EventDetailsSection (medium)
7. ✅ FullNamesSection (medium)
8. ✅ PhoneContact (hardest - most complex)

### 3. Test After Each Component
```bash
npm run dev
# After each component, refresh and verify:
# - Default variant renders correctly
# - No console errors
# - Props are passed correctly
```

---

## 📋 Checklist: Creating Each Variant

```javascript
// When creating CoupleNamesCard/variants.js:

☐ Import React and MUI components
☐ Copy current component code as DefaultVariant
☐ Create MinimalVariant (simplified version)
☐ Create ModernVariant (enhanced version)
☐ Add all variants to export object:
   export const variants = {
     default: (props) => <DefaultVariant {...props} />,
     minimal: (props) => <MinimalVariant {...props} />,
     modern: (props) => <ModernVariant {...props} />
   }
☐ Update wrapper component to accept variant prop
☐ Test each variant works:
   - Set config: "CoupleNamesCard": "default"
   - Verify renders correctly
   - Set config: "CoupleNamesCard": "minimal"
   - Verify renders correctly
   - Repeat for "modern"
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot read property 'variants' of undefined"

**Cause**: variants.js not exporting correctly

**Fix**:
```javascript
// ❌ WRONG
export const variants = { ... }
export default { ... }  // This overwrites the first export!

// ✅ CORRECT
export const variants = { 
  default: (props) => <Default {...props} />,
  minimal: (props) => <Minimal {...props} />
};

export default variants;  // Or just named export
```

---

### Issue 2: Variant not rendering, showing blank

**Cause**: Variant function not returning JSX

**Fix**:
```javascript
// ❌ WRONG
export const variants = {
  default: <DefaultVariant /> // This is JSX instance, not function!
}

// ✅ CORRECT
export const variants = {
  default: (props) => <DefaultVariant {...props} /> // Function that returns JSX
}
```

---

### Issue 3: Props not available in variant

**Cause**: Props not passed through wrapper

**Fix**:
```javascript
// In wrapper component:
function CoupleNamesCard({ bride, groom, fonts, colors, sizes, variant = 'default' }) {
  const VariantComponent = variants.variants[variant];
  
  // ❌ WRONG
  return <VariantComponent />
  
  // ✅ CORRECT
  return (
    <VariantComponent 
      bride={bride}
      groom={groom}
      fonts={fonts}
      colors={colors}
      sizes={sizes}
    />
  )
}
```

---

### Issue 4: Fallback variant not working

**Cause**: variantResolver not set up correctly

**Fix**:
```javascript
// In variantResolver.js

// ❌ WRONG - Missing fallback
const VariantComponent = factory[variant];
return VariantComponent(props); // Crashes if variant not found

// ✅ CORRECT - With fallback
const VariantComponent = factory[variant] || factory['default'];
if (!VariantComponent) {
  console.warn(`Variant not found for ${componentName}`);
  return factory['default'](props);
}
return VariantComponent(props);
```

---

### Issue 5: Config section not being read

**Cause**: Config structure doesn't match resolver

**Fix**:
```json
// ❌ WRONG
{
  "variants": {
    "CoupleNamesCard": "elegant"
  }
}

// ✅ CORRECT
{
  "componentVariants": {
    "CoupleNamesCard": "elegant"
  }
}
```

---

### Issue 6: Variant prop not being passed from template

**Cause**: WeddingInvitationTemplate not updated

**Fix**:
```jsx
// ❌ WRONG - Old way
<CoupleNamesCard bride={bride} groom={groom} fonts={fonts} colors={colors} sizes={sizes} />

// ✅ CORRECT - With variant
const getVariant = (componentName) => resolveVariantName(config, componentName);
<CoupleNamesCard 
  bride={bride} 
  groom={groom} 
  fonts={fonts} 
  colors={colors} 
  sizes={sizes}
  variant={getVariant('CoupleNamesCard')}
/>
```

---

## ✅ Testing Checklist

### Test 1: Default Variant Works
```bash
# Set in config.json:
"componentVariants": {
  "CoupleNamesCard": "default"
}

# Expected: Component renders exactly like before
# Check: No console errors, layout correct
```

### Test 2: Alternative Variant Works
```bash
# Set in config.json:
"componentVariants": {
  "CoupleNamesCard": "minimal"
}

# Expected: Component renders with minimal styling
# Check: Visually different, no errors
```

### Test 3: Invalid Variant Fallsback
```bash
# Set in config.json:
"componentVariants": {
  "CoupleNamesCard": "nonexistent"
}

# Expected: Falls back to default variant
# Check: Console warning appears, renders default
```

### Test 4: Missing componentVariants Section
```bash
# Remove componentVariants from config.json entirely

# Expected: Still works with all defaults
# Check: No errors, all components render
```

### Test 5: Mix Different Variants
```bash
# Set in config.json:
"componentVariants": {
  "CoupleNamesCard": "minimal",
  "EventTitle": "default",
  "EventDateVenueCard": "compact"
}

# Expected: Each component uses its variant
# Check: Different styles in different components
```

---

## 🔍 Debugging Tips

### Enable Debug Logging

Add to variantResolver.js:
```javascript
export const resolveVariantName = (config, componentName) => {
  const variant = config?.componentVariants?.[componentName] || defaultVariants[componentName];
  console.log(`[Variant] ${componentName} -> ${variant}`); // Debug log
  return variant;
};

export const getComponentVariant = (componentName, variantName, props) => {
  console.log(`[Variant] Resolving: ${componentName}/${variantName}`); // Debug log
  // ... rest of function
};
```

### Check Config Structure
```javascript
// Add to WeddingInvitationTemplate
console.log('Config componentVariants:', config.componentVariants);
// Should print something like:
// {
//   CoupleNamesCard: "minimal",
//   EventTitle: "default",
//   ...
// }
```

### Verify Variant Factory
```javascript
// In browser console:
// Check if variants are exported correctly
console.log(Object.keys(coupleNamesVariants.variants));
// Should output: ['default', 'minimal', 'modern', ...]
```

---

## 📝 Code Review Checklist

Before deploying, check:

```javascript
// variantResolver.js
☐ All 8 components imported
☐ variantFactories object has all components
☐ defaultVariants object has all components
☐ resolveVariantName handles missing config gracefully
☐ getComponentVariant has fallback mechanism
☐ Console warnings for debugging

// Each component's variants.js
☐ All variants are functions (not JSX instances)
☐ All variants receive same props
☐ All variants return JSX
☐ No console errors in any variant
☐ Each variant visually distinct

// Each component wrapper
☐ Accepts variant prop with default='default'
☐ Looks up variant from variants object
☐ Passes all props to VariantComponent
☐ No prop drilling issues

// WeddingInvitationTemplate.jsx
☐ Imports variantResolver
☐ Has getVariant() helper function
☐ Passes variant prop to all 8 components
☐ No console errors on load

// Config files
☐ Has componentVariants section
☐ All 8 components have variant assignment
☐ Variant names match available variants
☐ All other config sections unchanged
```

---

## 🎯 Optimization Tips

### Tip 1: Code Reuse in Variants
```javascript
// ✅ DRY - Extract common styles
const baseNameStyle = {
  fontSize: sizes.nameFontSize,
  color: colors.secondary,
  fontFamily: fonts.cursive.fontFamily,
};

const DefaultVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ m: 3 }}>
    <Typography sx={{ ...baseNameStyle }}>
      {bride.shortName}
    </Typography>
  </Box>
);

const MinimalVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Typography sx={{ ...baseNameStyle }}>
      {bride.shortName}
    </Typography>
  </Box>
);
```

### Tip 2: Conditional Components
```javascript
// ✅ Use variants for significant changes
const MinimalVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <Typography sx={{ ...fonts.cursive, fontSize: sizes.nameFontSize * 0.8 }}>
      {bride.shortName}
    </Typography>
    <Typography sx={{ ...fonts.cursive, fontSize: sizes.nameFontSize * 0.8 }}>
      {groom.shortName}
    </Typography>
  </Box>
);
```

### Tip 3: Utility Functions for Variants
```javascript
// ✅ Extract styles to utility functions
const createNameStyle = (fonts, colors, sizes, scale = 1) => ({
  ...fonts.cursive,
  color: colors.secondary,
  fontSize: sizes.nameFontSize * scale,
});

const DefaultVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Typography sx={createNameStyle(fonts, colors, sizes, 1)}>
    {bride.shortName}
  </Typography>
);

const ModernVariant = ({ bride, groom, fonts, colors, sizes }) => (
  <Typography sx={createNameStyle(fonts, colors, sizes, 1.2)}>
    {bride.shortName}
  </Typography>
);
```

---

## 🚦 Deployment Checklist

```
BEFORE DEPLOYING:

Pre-Deployment
☐ Run: npm run lint (no errors)
☐ Run: npm run build (builds successfully)
☐ Check: No console warnings/errors
☐ Test: All 8 components render
☐ Test: All variants render
☐ Test: Fallback variants work
☐ Check: config.json is valid JSON

During Deployment
☐ Backup old config.json
☐ Verify new files created (variantResolver.js, **/variants.js)
☐ Verify old components still import correctly
☐ Test in staging environment first

Post-Deployment
☐ Clear browser cache
☐ Test in production
☐ Monitor console for errors
☐ Verify all 8 components display correctly
☐ Test config variant switching
☐ Document new variant options for team
```

---

## 📚 Documentation Template

After implementing variants, document like this:

```markdown
## Component Variants Guide

### CoupleNamesCard Variants

#### Default
- Display: Stacked layout
- Style: Names in cursive, ampersand between them
- Use case: Traditional elegant look
- Config: "CoupleNamesCard": "default"

#### Minimal
- Display: Inline side-by-side
- Style: Reduced spacing, no ampersand
- Use case: Modern minimalist look
- Config: "CoupleNamesCard": "minimal"

#### Modern
- Display: Stacked, uppercase
- Style: Larger, bolder
- Use case: Contemporary bold look
- Config: "CoupleNamesCard": "modern"
```

---

## 🆘 Getting Help

If stuck, check in this order:

1. **Console Errors**
   ```bash
   # Open DevTools (F12)
   # Check Console tab for red errors
   # Copy full error message
   ```

2. **Check variantResolver.js**
   - Are all components imported?
   - Are all components in variantFactories?
   - Are default variants spelled correctly?

3. **Check variants.js**
   - Are all variants functions?
   - Do they return JSX?
   - Are they in export object?

4. **Check Component Wrapper**
   - Does it accept variant prop?
   - Does it pass props to VariantComponent?
   - Is it exported correctly?

5. **Check WeddingInvitationTemplate**
   - Does it import variantResolver?
   - Does it pass variant prop?
   - Is config.componentVariants being used?

6. **Check config.json**
   - Is JSON valid (use jsonlint.com)?
   - Does componentVariants section exist?
   - Are all component names spelled correctly?
   - Do variant names match exported variants?

---

## 📞 Common Questions

**Q: Can I have more than 3 variants per component?**
A: ✅ Yes! Just add more functions to the variants object.

**Q: Can I mix variants dynamically?**
A: ✅ Yes! The config controls it per-component.

**Q: What if I want to deprecate a variant?**
A: ✅ Keep it but document as deprecated, redirect to new variant.

**Q: Can users create custom variants?**
A: ✅ You could expose a plugin system, but start simple.

**Q: Will this affect performance?**
A: ✅ No negative impact. Only one variant rendered per component.

**Q: Can I test variants independently?**
A: ✅ Yes! Create storybook stories for each variant.

---

## 🎓 Learning Resources

Patterns used in this implementation:

1. **Factory Pattern**: variantResolver.js
2. **Render Props Pattern**: Each variant as function
3. **Composition Pattern**: Wrapper + variant components
4. **Config-Driven Development**: Using config.json to control behavior
5. **Fallback Pattern**: Default variant if requested not found

Each is a well-known React pattern - good for team understanding!

---

## Final Tips

1. **Commit frequently** - After each component, commit to git
2. **Document decisions** - Why you chose certain variants
3. **Get feedback** - Show variants to client, gather preferences
4. **Plan variants** - Don't make too many, focus on distinct styles
5. **Keep configs** - Save working configs for future reference

Good luck! 🚀
