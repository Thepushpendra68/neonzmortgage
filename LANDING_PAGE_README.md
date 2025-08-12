# Neon Mortgage - Landing Page

## Overview
A black & white themed landing page with a multi-step mortgage application flow, designed for optimal user experience and conversion.

## Features

### Design System
- **Pure monochrome design**: Black (#000000), White (#FFFFFF), and grayscale shades
- **High contrast**: Ensures excellent readability and accessibility
- **Minimal aesthetic**: Clean, professional appearance that stands out from colorful competitors
- **Mobile-first responsive**: Optimized for all device sizes

### Multi-Step Application Flow

#### Step 1: Service Type (10% Complete)
- **Options**: New Purchase / Mortgage Refinance
- **Purpose**: Determine the type of mortgage service needed

#### Step 2: Property Status (20% Complete) 
- **Options**: Just browsing / Started looking / Found dream home
- **Purpose**: Understand the customer's timeline and urgency

#### Step 3: Property Type (30% Complete)
- **Options**: Villa / Apartment / Undecided
- **Purpose**: Tailor mortgage recommendations to property type

#### Completion Page
- **Summary**: Review of selected options
- **Next Steps**: Clear explanation of the process
- **Actions**: Continue to full application or start over

## File Structure

```
app/src/app/landing/
├── page.js                 # Main landing page
├── layout.js              # Landing-specific layout
├── landing.css            # Custom B&W styling
├── step1/page.js          # Service type selection
├── step2/page.js          # Property status
├── step3/page.js          # Property type
└── complete/page.js       # Completion/thank you page

app/src/components/
├── LandingLayout.js       # B&W header/footer layout
├── ProgressBar.js         # Black progress indicator
├── StepCard.js           # Selectable option cards
└── StepNavigation.js     # Back/Next buttons

app/src/contexts/
└── ApplicationContext.js  # Form state management
```

## Components

### LandingLayout
- Black & white header with Neon branding
- Contact information display
- Consistent footer across all pages

### ProgressBar
- Visual progress indicator (10%, 20%, 30%)
- Smooth animations
- Black progress on gray background

### StepCard
- **Unselected**: White background, gray border, black text
- **Selected**: Black background, white text
- **Hover**: Gray border becomes black
- Touch-friendly sizing

### StepNavigation
- **Next Button**: Black background, white text
- **Back Button**: White background, black border, black text
- Disabled state for incomplete selections

## State Management

### Local Storage
Currently using browser localStorage to persist form data between steps:
- `loanType`: new-purchase / refinance  
- `propertyStatus`: browsing / looking / found
- `propertyType`: villa / apartment / undecided

### Future Enhancement
- Replace with React Context or Redux for better state management
- Add form validation
- Integrate with backend API

## Responsive Design

### Mobile (< 640px)
- Stacked button layout
- Reduced font sizes
- Optimized card spacing
- Touch-friendly tap targets

### Tablet (640px - 1024px)
- Two-column card layouts where appropriate
- Balanced spacing

### Desktop (> 1024px)
- Multi-column layouts
- Optimal reading widths
- Enhanced hover states

## Accessibility Features

- **High contrast ratios**: Meets WCAG guidelines
- **Keyboard navigation**: Full tab/enter support
- **Focus indicators**: Clear visual focus states
- **Semantic HTML**: Proper headings and ARIA labels
- **Screen reader friendly**: Descriptive text and labels

## Custom CSS Classes

```css
.landing-transition        # Smooth transitions for all interactions
.landing-card             # Hover effects and focus states
.landing-button           # Button hover animations
.landing-hero-title       # Responsive hero text sizing
.progress-bar-fill        # Animated progress bar
```

## Integration Points

### With Existing System
- `/calculator` - Links to existing mortgage calculator
- `/journey` - Links to full application from completion page
- Maintains existing header/footer branding

### Future Enhancements
- Backend integration for form submissions
- Email notifications
- CRM integration
- A/B testing capabilities

## Performance Optimizations

- **Minimal CSS**: Only essential styles, no external libraries
- **Optimized images**: Using SVG icons where possible
- **Fast navigation**: Client-side routing with Next.js
- **Efficient state**: localStorage for persistence without server calls

## Usage

### Navigation Flow
1. `/landing` - Hero page with call-to-action
2. `/landing/step1` - Service type selection  
3. `/landing/step2` - Property status
4. `/landing/step3` - Property type
5. `/landing/complete` - Thank you and next steps

### Entry Points
- Direct marketing campaigns
- Social media ads
- SEO landing pages
- Referral links

## Conversion Optimization

### Design Principles
- **Single focus**: One clear action per page
- **Progress indication**: Users know where they are
- **Low friction**: Minimal required information
- **Trust signals**: Professional design and clear next steps
- **Mobile optimization**: Seamless mobile experience

### Metrics to Track
- Completion rate per step
- Drop-off points
- Time to complete
- Mobile vs desktop performance
- Conversion to full application

This landing page provides a streamlined, professional experience that guides users through a quick qualification process while maintaining the sophisticated black & white aesthetic.