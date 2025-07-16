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
- Configurable multi-step operation sequences
- Video playback for each operation
- Step revision functionality (click earlier steps to modify)
- Maximum steps configurable via `maxSteps` in demoData
- Three scenarios: Kitchen, Bathroom, Office
- Consistent Apple-style minimal design with gray/white/black palette

### Apple-Inspired Design System
- Light theme only (dark mode removed)
- Apple's SF Pro system fonts for body text
- Google Sans for titles and headings
- Translucent effects with backdrop-filter blur
- Rounded corners following Apple's design language
- Subtle shadows and depth
- Smooth animations with Apple-style easing curves

### Responsive Design
- Mobile-first approach
- Flexible grid systems
- Responsive typography
- Optimized for all screen sizes
- Seamless full-screen header background

## Configuration

### Interactive Demo
Edit the `demoData` object in `static/js/script.js`:
- `maxSteps`: Maximum operations per sequence
- `scenarios`: Add/modify scenario data
- Each scenario needs: name, thumbnail, initialImage, operations

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

## No Build Process

This is a static site with no build tools, package managers, or dependencies. All functionality is implemented in vanilla HTML, CSS, and JavaScript.

## Testing

Open `index.html` in a web browser to test locally. The site uses relative paths and should work without a web server for basic testing.

## Notes

- All placeholder content uses `demo1.mp4` and `framework.png`
- BibTeX citation copying functionality included
- Smooth scroll behavior and intersection observer animations
- Full-screen header background with seamless top edge
- Theme toggle system completely removed
- Apple-style animations with proper easing curves
- Translucent action buttons with backdrop blur effects
- Minimal interactive demo design consistent with Apple aesthetics