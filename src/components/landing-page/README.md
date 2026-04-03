# Landing Page Components

## Overview
The landing page for the Digital Wedding Invitations platform is built with modular, reusable React components using Material-UI.

## Components

### TopNavBar
- Fixed navigation bar with logo and menu links
- Responsive design for mobile and desktop
- Links to main sections: How It Works, Samples, About
- Call-to-action button: "Start Creating"

### Hero
- Eye-catching hero section
- Main headline: "Digital Wedding Invitations That Impress"
- Descriptive tagline and benefits
- Two CTA buttons: "Start Creating" and "View Samples"
- Trust metrics: Happy Couples, Guests Invited, RSVP Rate
- Elegant gradient background with decorative elements

### FeaturesSection
- Showcase 6 key features in a grid layout
- Icons for each feature
- Features include: Quick & Easy, Share Anywhere, Manage Guests, Mobile Friendly, Customizable, Secure
- Hover animations for better interactivity

### HowItWorks
- 3-step process visualization
- Step 1: Choose & Customize
- Step 2: Invite Your Guests
- Step 3: Track & Celebrate
- Numbered badges and colorful icons
- Includes connection lines on desktop

### SamplesGallery
- Displays sample invitations from config file
- Dynamically loads data from `/config/invitations.config.json`
- Each sample shows: title, preview, color palette dots, and "View Sample" button
- Linked to actual invitation pages
- Loading and error states

### FinalCTA
- Final call-to-action section
- Highlights main benefits
- Trust indicators: No credit card, Free to start, Cancel anytime
- Two action buttons with hover effects

### Footer
- Simple footer with company info
- Links to Privacy Policy, Terms of Service, Contact, FAQ
- Copyright information

## Theme
All components use the `landingPageTheme` from `theme/landing-page-theme.js` which includes:
- Refined color palette (primary, secondary, tertiary)
- Typography with Noto Serif and Manrope fonts
- Consistent spacing and border-radius

## File Structure
```
src/components/landing-page/
├── TopNavBar.jsx
├── Hero.jsx
├── FeaturesSection.jsx
├── HowItWorks.jsx
├── SamplesGallery.jsx
├── FinalCTA.jsx
└── Footer.jsx
```

## Usage
Import the main `LandingPage` component from `pages/LandingPage.jsx` which combines all sections.

```jsx
import LandingPage from './pages/LandingPage';
```
