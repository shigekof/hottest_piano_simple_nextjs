# Piano Website Development Plan

## Project Overview

This document outlines the development plan for a simple piano-focused website built with Next.js. The site will feature a home page showcasing YouTube videos and a dedicated piano sheets page for downloadable content.

## Site Structure

### Pages
1. **Home Page** (`/`)
2. **Piano Sheets Page** (`/piano-sheets`)

## Detailed Requirements

### Home Page (`/`)
- **Header**: Title and navigation menu bar
- **Hero Section**: 
  - Main title/heading
  - Two action buttons:
    - "Visit YouTube Channel"
    - "Download Piano Sheets"
- **YouTube Videos Section**:
  - Embedded YouTube videos
  - **Desktop**: 3 videos per row
  - **Mobile**: 1 video per row
  - Fully responsive grid layout

### Piano Sheets Page (`/piano-sheets`)
- **Header**: Same navigation as home page
- **Hero Section**: Smaller version of home hero
- **Content**:
  - List of downloadable PDF piano sheets
  - MuseScore links for each sheet
  - Download functionality

## Component Architecture

### Shared Components
```
components/
├── layout/
│   ├── Header.tsx          # Navigation bar with title and menu
│   └── Layout.tsx          # Main layout wrapper
├── ui/
│   └── Button.tsx          # Reusable button component
└── sections/
    ├── Hero.tsx            # Hero section component
    ├── YouTubeGrid.tsx     # Responsive video grid
    └── PianoSheetsList.tsx # Piano sheets with downloads
```

### Component Specifications

#### Header Component
- Responsive navigation
- Mobile hamburger menu
- Consistent across all pages
- Piano-themed styling

#### Hero Component
- Flexible content (full hero for home, compact for sheets page)
- Call-to-action buttons
- Responsive text sizing

#### YouTubeGrid Component
- Responsive grid: 3 columns (desktop) → 1 column (mobile)
- YouTube embed integration
- Lazy loading for performance

#### PianoSheetsList Component
- PDF download links
- MuseScore integration
- Organized list with metadata

## Technical Stack

### Core Technologies
- **Framework**: Next.js 16.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js config

### Dependencies (Current)
```json
{
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "next": "16.0.1",
  "typescript": "^5",
  "tailwindcss": "^4"
}
```

## Responsive Design Strategy

### Breakpoints (Tailwind CSS)
- **Mobile**: `< 768px` (default)
- **Tablet**: `md: 768px+`
- **Desktop**: `lg: 1024px+`
- **Large Desktop**: `xl: 1280px+`

### Layout Patterns
- **Mobile-first approach**
- **Flexbox and CSS Grid** for layouts
- **Container queries** for component-level responsiveness

### YouTube Video Grid Responsive Behavior
```css
/* Mobile (default) */
grid-template-columns: 1fr;

/* Desktop (md+) */
grid-template-columns: repeat(3, 1fr);
```

## File Structure

```
hottest_piano_simple_nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Home page
│   └── piano-sheets/
│       └── page.tsx          # Piano sheets page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── YouTubeGrid.tsx
│   │   └── PianoSheetsList.tsx
│   └── ui/
│       └── Button.tsx
├── public/
│   └── piano-sheets/         # PDF files
│       ├── sheet1.pdf
│       └── sheet2.pdf
├── docs/
│   └── development-plan.md   # This document
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Development Tasks

### Phase 1: Foundation
- [ ] Create shared layout components (Header, Layout)
- [ ] Set up basic routing structure
- [ ] Configure Tailwind CSS theme

### Phase 2: Home Page
- [ ] Implement Hero section with buttons
- [ ] Create responsive YouTube video grid
- [ ] Add sample video content
- [ ] Test responsive behavior

### Phase 3: Piano Sheets Page
- [ ] Build piano sheets page layout
- [ ] Implement PDF download functionality
- [ ] Add MuseScore integration links
- [ ] Create sample content

### Phase 4: Polish & Testing
- [ ] Mobile responsiveness testing
- [ ] Cross-browser compatibility
- [ ] Performance optimization
- [ ] SEO improvements

## Content Strategy

### Sample Content Needed
1. **YouTube Videos**:
   - 6-9 sample piano performance videos
   - Video titles and descriptions
   - Proper embed URLs

2. **Piano Sheets**:
   - 5-10 sample PDF files
   - Sheet titles and descriptions
   - MuseScore file links
   - Difficulty levels

### SEO Considerations
- Meta descriptions for both pages
- Open Graph tags for social sharing
- Structured data for music content
- Image alt tags and proper heading hierarchy

## Performance Goals

### Target Metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Strategies
- Next.js Image optimization
- Lazy loading for YouTube embeds
- Code splitting by route
- Compressed assets

## Future Enhancements

### Potential Features
1. **User Authentication**: User accounts for personalized content
2. **Search Functionality**: Search through piano sheets
3. **Categories/Tags**: Organize content by genre/difficulty
4. **Blog Section**: Piano tutorials and articles
5. **Contact Form**: User inquiries and requests
6. **Shopping Cart**: Paid premium content

### Technical Improvements
1. **CMS Integration**: Headless CMS for content management
2. **Database**: Store sheet metadata and user data
3. **API Routes**: Backend functionality for downloads/tracking
4. **Analytics**: User behavior tracking
5. **PWA Features**: Offline access to downloaded sheets

## Testing Strategy

### Manual Testing Checklist
- [ ] Navigation works on all devices
- [ ] YouTube videos load and play properly
- [ ] PDF downloads function correctly
- [ ] MuseScore links open properly
- [ ] Responsive layouts display correctly
- [ ] All buttons and links work as expected

### Automated Testing (Future)
- Unit tests for components
- Integration tests for user flows
- E2E testing with Playwright
- Performance testing with Lighthouse CI

---

**Last Updated**: November 1, 2025  
**Version**: 1.0  
**Status**: Planning Phase