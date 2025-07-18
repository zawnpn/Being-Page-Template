# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML academic webpage template called "Being-Page-Template" designed for research paper presentations. It features a modern, Apple-inspired design with clean aesthetics, translucent effects, and an interactive demo system. The design follows Apple's minimalist philosophy with a light-only theme.

## Architecture

The project uses a simple three-file structure:

- **index.html**: Main HTML file containing the complete webpage structure
- **static/css/styles.css**: Comprehensive CSS with CSS custom properties for theming
- **static/js/script.js**: JavaScript for interactive functionality

### Key Components

1. **Apple-Inspired Design**: Clean aesthetic with SF Pro fonts for body text and Google Sans for titles
2. **Interactive Demo**: Dynamic multi-step scenario system with video playback using minimal gray/white/black palette
3. **Responsive Grid Layouts**: Flexible 1, 2, and 3-column grid systems with subtle shadows and rounded corners
4. **Video Gallery**: Responsive video grid with Apple-style cards and controls
5. **Translucent Effects**: Backdrop blur and glass morphism effects throughout the interface

## File Structure

```
/
├── index.html                 # Main webpage
├── static/
│   ├── css/styles.css        # All styles with theme variables
│   ├── js/script.js          # All JavaScript functionality
│   └── font/                 # Custom fonts
├── assets/
│   ├── image/               # Images and icons
│   │   ├── scenarios/       # Demo scenario images
│   │   └── icon/           # SVG icons and favicon
│   └── video/              # Video files
└── INTERACTIVE_DEMO_README.md # Demo configuration guide
```

## Key Features

### Interactive Demo System
- Hierarchical navigation system with configurable depth levels
- Video playback for each category/operation
- Breadcrumb navigation for multi-level categories
- Configurable navigation depth via `maxCategoryLevels` in demoData
- Current scenarios: Home Activities, Work Activities
- Consistent Apple-style minimal design with gray/white/black palette
- Slider-based interface for scenario selection

### Apple-Inspired Design System
- Light theme only (dark mode removed)
- Apple's SF Pro system fonts for body text
- Google Sans for titles and headings
- Translucent effects with backdrop-filter blur
- Rounded corners following Apple's design language
- Subtle shadows and depth
- Smooth animations with Apple-style easing curves

### Responsive Design
- Mobile-first approach with comprehensive multi-breakpoint scaling
- Flexible grid systems with consistent responsive behavior
- Progressive typography scaling across all screen sizes
- Optimized for all devices from mobile (480px) to ultra-wide (2400px+)
- Seamless full-screen header background
- Conflict-free CSS with proper cascade order and specificity management

## Configuration

### Interactive Demo
Edit the `demoData` object in `static/js/script.js`:
- `maxCategoryLevels`: Configures navigation depth (0=scenario→category→videos, 1=scenario→category→category→videos, etc.)
- `scenarios`: Add/modify scenario data with hierarchical structure
- Each scenario needs: name, description, thumbnail, categories
- Each category needs: name, description, video (for final level categories)

### Apple-Style Design Colors
Modify CSS custom properties in `:root` selector in `static/css/styles.css`:
- Light theme only (dark mode removed)
- Apple's color palette: `#1d1d1f`, `#f5f5f7`, `#86868b`
- Accent blue: `#007aff`
- Translucent effects with `backdrop-filter: blur()`

### Typography
- Titles: Google Sans (imported from Google Fonts)
- Body text: Apple's SF Pro system fonts
- Proper font smoothing and kerning

### Content
- Update author information, links, and citations in `index.html`
- Replace placeholder images in `assets/image/`
- Add real videos to `assets/video/`

## Development Commands

This is a static site with no build tools, package managers, or dependencies. All functionality is implemented in vanilla HTML, CSS, and JavaScript.

### Testing and Development
- **Local testing**: Open `index.html` in a web browser (uses relative paths, no server required)
- **Live server**: Use any static file server (e.g., `python -m http.server 8000` or VS Code Live Server)
- **Browser testing**: Test in Chrome, Firefox, Safari for compatibility

### No Build Process
- No package.json, webpack, or build tools
- No dependencies to install
- No transpilation or bundling
- All code runs directly in the browser

## Code Architecture

### Core Data Structure
The interactive demo system is built around a hierarchical data structure in `script.js`:
- `demoData.scenarios`: Top-level scenarios (e.g., home_activities, work_activities)
- `categories`: Nested categories with configurable depth (e.g., kitchen_cooking, bathroom_hygiene)
- `videos`: Individual video files referenced in final-level categories
- `maxCategoryLevels`: Controls navigation depth (0=2 levels, 1=3 levels, etc.)

### Key JavaScript Components
- **Demo Navigation**: Hierarchical category system with breadcrumb navigation and slider interface
- **State Management**: Tracks selected scenario, category path, and current navigation level
- **Video Playback**: Handles video loading, playback controls, and error states
- **Slider Controls**: Horizontal scrolling for scenario selection with navigation buttons
- **Intersection Observer**: Smooth scroll animations and section visibility
- **BibTeX Handler**: Citation copying functionality

### CSS Architecture
- **CSS Custom Properties**: Centralized theming in `:root` selector
- **Apple Design System**: Consistent use of SF Pro fonts and Apple color palette
- **Responsive Grid**: Flexible 1/2/3-column layouts with CSS Grid
- **Translucent Effects**: Backdrop blur effects throughout interface
- **Responsive Breakpoints**: Clean, organized media queries with proper cascade order:
  - Base: Default laptop/desktop styles
  - 1800px+: Large desktop monitors (18px base font)
  - 2400px+: Ultra-wide displays (20px base font)
  - 1024px-: Tablets (grid adjustments)
  - 768px-: Mobile devices (comprehensive mobile styling)
  - 480px-: Extra small mobile devices
- **Optimized Performance**: Deduplicated CSS rules, removed debug comments, consolidated selectors

## Common Development Tasks

### Updating Demo Content
1. **Configure navigation depth**: Set `maxCategoryLevels` in `demoData` (0=2 levels, 1=3 levels, etc.)
2. **Add new scenarios**: Edit `demoData.scenarios` object in `script.js`
3. **Structure data**: Organize categories according to desired depth
   - Level 0: scenarios → categories → videos
   - Level 1: scenarios → categories → categories → videos
   - Level 2: scenarios → categories → categories → categories → videos
4. **Add videos**: Place in `assets/video/` following the hierarchical structure
5. **Update images**: Replace placeholders in `assets/image/scenarios/`

### Styling Modifications
1. **Colors**: Update CSS custom properties in `:root` selector in `styles.css`
2. **Fonts**: Modify `--primary-font` and `--title-font` variables
3. **Layout**: Adjust grid systems and responsive breakpoints
4. **Apple design**: Maintain consistency with existing blur effects and rounded corners
5. **Responsive scaling**: Modify breakpoint values in organized media queries (1800px+, 2400px+, etc.)
6. **Performance**: CSS is optimized with consolidated rules and clean structure

### Content Updates
1. **Author info**: Update author links and affiliations in `index.html`
2. **Publication details**: Modify publication info and venue
3. **Abstract**: Update project description and methodology
4. **BibTeX**: Update citation format in the embedded script

### File Organization
- `index.html`: Single-page application structure
- `static/css/styles.css`: Complete styling with Apple design system and optimized responsive breakpoints
- `static/js/script.js`: All JavaScript functionality and demo data
- `assets/`: Static assets organized by type (image, video, icons)
- `INTERACTIVE_DEMO_README.md`: Detailed demo configuration guide

### CSS Code Quality
- **Clean Structure**: Organized sections with meaningful comments
- **No Duplicates**: Consolidated redundant CSS rules and selectors
- **Optimized Performance**: Removed debug comments and unnecessary code
- **Consistent Formatting**: Standardized indentation and spacing throughout
- **Proper Cascade**: Media queries organized by screen size with correct specificity

## Notes

- Demo uses `task1.mp4` from prediction folder as placeholder for all videos
- Scenario thumbnails use `scene_1.jpg` as placeholder
- BibTeX citation copying functionality included
- Smooth scroll behavior and intersection observer animations
- Full-screen header background with seamless top edge
- Theme toggle system completely removed
- Apple-style animations with proper easing curves
- Translucent action buttons with backdrop blur effects
- Minimal interactive demo design consistent with Apple aesthetics
- Slider-based scenario selection with responsive navigation buttons
- Current demo structure: Home Activities (kitchen/bathroom/living room) and Work Activities (computer tasks)

## Recent Updates (Latest Session)

- **Comprehensive Responsive Design Overhaul**: Rebuilt responsive system with clean, organized breakpoints
- **CSS Performance Optimization**: Removed duplicate rules, consolidated selectors, cleaned up debug comments
- **Ultra-Wide Display Support**: Enhanced scaling for 2400px+ displays with proper font-size and component scaling
- **Mobile Optimization**: Consolidated all mobile styles into single, comprehensive 768px breakpoint
- **Action Button Enhancement**: Fixed responsive scaling issues with proper cascade order
- **Scenario Card Improvements**: Maintained proportional scaling across all screen sizes (240px base → 280px large → 350px ultra-wide)
- **Code Quality**: Eliminated redundant CSS, improved structure, and ensured consistent formatting throughout