# Ten Touches — Branding Input for Marketing Team

**Document Version:** 1.0  
**Date:** 22 January 2026  
**Prepared by:** Development Team  
**Purpose:** Primary reference for maintaining brand consistency across all marketing materials

---

## Executive Summary

Ten Touches is a personal CRM iOS application implementing a 10-touch sales methodology. The app helps sales professionals track client relationships, manage opportunities, and optimise their engagement strategy through data-driven insights. This document provides the visual identity guidelines, design principles, and asset specifications extracted from the production application.

---

## 1. Brand Identity Guidelines

### 1.1 Brand Name

| Element | Specification |
|---------|---------------|
| **Primary Name** | Ten Touches |
| **App Store Name** | Ten Touches (or "10 Touches" for character efficiency) |
| **Internal Reference** | TenTouches (camelCase, no space) |
| **Bundle Identifier** | `ai.digitaltechnologypartner.ten-touches` |

**Usage Notes:**
- Use "Ten Touches" (spelled out) in formal marketing copy
- "10 Touches" acceptable in space-constrained contexts (App Store subtitle, social media)
- Never use "TenTouches" or "10Touches" in customer-facing materials

### 1.2 Logo / App Icon

#### Primary App Icon

The app icon features a **circular progress ring** design with the number "10" centred within. This visual directly represents the core product concept: tracking progress towards 10 meaningful client touchpoints.

**Icon Composition:**
- **Background:** Deep navy/dark slate (#0D1B2A approximate)
- **Progress Ring:** Gradient arc from Cyan (left) through Blue to Indigo/Purple (right)
- **Inner Ring:** Subtle grey track showing remaining progress
- **Numeral "10":** Bold white sans-serif typography, centred

**Icon Symbolism:**
- The progress ring reinforces the "10 touches" methodology
- The gradient suggests momentum and progression
- The circular form conveys completeness and goal achievement

#### Icon Specifications

| Context | Size | Format |
|---------|------|--------|
| App Store | 1024 × 1024 px | PNG, no transparency |
| iOS Home Screen (@3x) | 180 × 180 px | PNG |
| iOS Home Screen (@2x) | 120 × 120 px | PNG |
| iOS Spotlight (@3x) | 120 × 120 px | PNG |
| iOS Settings (@3x) | 87 × 87 px | PNG |

**Icon Usage Rules:**
- Do not add additional effects, shadows, or borders (iOS applies its own)
- Do not stretch, skew, or rotate the icon
- Maintain the icon's integrity at all sizes
- The icon must be rated 4+ appropriate (it is)
- Supports iOS Dark Mode and Tinted appearances (same asset used)

#### Clear Space

Maintain a minimum clear space around the icon equal to 25% of the icon's width on all sides when used in marketing materials.

---

## 2. Colour Palette

### 2.1 Primary Brand Colours

The application uses a **Cyan-to-Indigo gradient** as its signature visual element, appearing in progress indicators, accent buttons, and the app icon.

| Colour Name | SwiftUI Reference | Approximate Hex | RGB | Usage |
|-------------|-------------------|-----------------|-----|-------|
| **Cyan** | `Color.cyan` | #00D4FF | 0, 212, 255 | Gradient start, progress indicators |
| **Indigo** | `Color.indigo` | #5856D6 | 88, 86, 214 | Gradient end, primary accent |
| **System Accent** | `Color.accentColor` | System Blue | — | Interactive elements, buttons, links |

### 2.2 Background Colours

| Colour Name | Context | Approximate Hex | Usage |
|-------------|---------|-----------------|-------|
| **Deep Navy** | Dark Mode background | #0D1B2A | App icon background, dark surfaces |
| **Slate** | Dark Mode cards | #1B2838 | Card backgrounds in dark mode |
| **System Background** | Light Mode | #FFFFFF | Primary light mode background |
| **Secondary Background** | Light Mode | #F2F2F7 | Grouped list backgrounds |

### 2.3 Semantic Colours

| Colour | SwiftUI Reference | Usage |
|--------|-------------------|-------|
| **Green** | `Color.green` | Success states, "Won" opportunities, positive deltas |
| **Red** | `Color.red` | Error states, "Lost" opportunities, warnings |
| **Orange/Amber** | `Color.orange` | Caution states, underused metrics |
| **Blue** | `Color.blue` | Interactive elements, links, sort controls |
| **Secondary** | `.secondary` | Subheadlines, supporting text, inactive states |

### 2.4 Gradient Specifications

**Primary Progress Gradient (Angular):**
```
AngularGradient(
    colors: [Cyan, Indigo],
    center: .center
)
```
- Used in: Progress rings, engagement indicators
- Direction: Clockwise from 12 o'clock position

**Button Accent Gradient (Linear):**
```
LinearGradient(
    colors: [Accent @ 90% opacity, White @ 40% opacity],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)
```
- Used in: Accent button borders, card overlays

### 2.5 Colour Usage Guidelines

1. **Gradient Usage:** Reserve the Cyan-to-Indigo gradient for progress indicators and hero elements only
2. **Accent Colour:** Use system accent (blue) for all interactive elements
3. **Dark Mode:** The app fully supports Dark Mode; all marketing materials should show both appearances
4. **Accessibility:** Maintain WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text)

---

## 3. Typography

### 3.1 System Fonts

Ten Touches uses **San Francisco** (SF Pro), Apple's system font, exclusively. This ensures:
- Native iOS appearance and feel
- Optimal legibility across all device sizes
- Automatic Dynamic Type support for accessibility

### 3.2 Type Scale (iOS System)

| Style | SwiftUI Modifier | Weight | Size (Default) | Usage |
|-------|------------------|--------|----------------|-------|
| **Large Title** | `.largeTitle` | Bold | 34pt | Navigation titles |
| **Title** | `.title` | Regular | 28pt | Section headers |
| **Title 2** | `.title2` | Regular | 22pt | Card titles |
| **Title 3** | `.title3` | Regular | 20pt | Metric values |
| **Headline** | `.headline` | Semibold | 17pt | Card headers, emphasis |
| **Body** | `.body` | Regular | 17pt | Primary content |
| **Subheadline** | `.subheadline` | Regular | 15pt | Secondary labels |
| **Footnote** | `.footnote` | Regular | 13pt | Tertiary information |
| **Caption** | `.caption` | Regular | 12pt | Timestamps, annotations |
| **Caption 2** | `.caption2` | Regular | 11pt | Smallest labels, chart annotations |

### 3.3 Typography in Marketing Materials

For marketing materials outside the app:

| Context | Recommended Font | Fallback |
|---------|------------------|----------|
| Headlines | SF Pro Display Bold | Helvetica Neue Bold |
| Body Copy | SF Pro Text Regular | Helvetica Neue Regular |
| Numerals | SF Pro (Monospaced Digits) | — |
| Web | -apple-system, BlinkMacSystemFont | system-ui |

### 3.4 Typography Guidelines

1. **Hierarchy:** Maintain clear visual hierarchy using the established type scale
2. **Weight:** Use Bold for emphasis, Regular for body, Semibold for interactive labels
3. **Monospaced Digits:** Use `.monospacedDigit()` for numerical displays (progress counters, metrics)
4. **Line Length:** Optimal 45-75 characters per line for readability
5. **British English:** All copy uses British English spelling (e.g., "optimise", "favour", "colour")

---

## 4. Visual Design Principles

### 4.1 Core Design Philosophy

The Ten Touches interface follows these guiding principles, derived from the product requirements:

| Principle | Description |
|-----------|-------------|
| **Clarity** | Native SwiftUI components, clear hierarchy, minimalist copy |
| **Consistency** | Stable patterns, predictable interactions, uniform spacing |
| **Accessibility** | Full VoiceOver support, Dynamic Type, reduced motion options |
| **Feedback** | Haptic responses for key actions, visual state changes |

### 4.2 Glassmorphism (GlassCard Component)

The app uses a signature **glassmorphic card** style for elevated content containers:

**Visual Properties:**
- Background: `.ultraThinMaterial` (frosted glass effect)
- Corner Radius: 12pt (continuous/squircle)
- Border: 1pt gradient stroke (white 60% → white 10%, top-leading to bottom-trailing)
- Dark Mode Overlay: Black @ 14% opacity for improved contrast
- Padding: 16pt internal padding

**Usage:**
- Dashboard metric cards
- Insight panels
- Form sections
- Modal content

### 4.3 Component Specifications

#### Progress Ring
- **Size:** 44pt default (scalable to 60pt for emphasis)
- **Line Width:** 10pt
- **Track Colour:** Grey @ 20% opacity
- **Progress Colour:** Cyan-to-Indigo angular gradient
- **Animation:** 0.4s ease-in-out (respects Reduce Motion)

#### Engagement Progress Bar
- **Height:** 6pt
- **Width:** 140pt default (flexible)
- **Shape:** Capsule (fully rounded ends)
- **Track Colour:** Secondary @ 25% opacity
- **Fill Colour:** Accent colour

#### Info Chip
- **Corner Radius:** 10pt
- **Padding:** 10pt horizontal, 6pt vertical
- **Background:** Accent @ 15% opacity
- **Border:** 1pt accent colour stroke
- **Typography:** Caption

#### Accent Button
- **Shape:** Capsule
- **Background:** `.ultraThinMaterial`
- **Border:** Gradient stroke (accent 90% → white 40%)
- **Padding:** 10pt vertical, 16pt horizontal
- **Press Effect:** Scale to 98% with spring animation

### 4.4 Spacing System

The app uses an 8pt base grid with the following common values:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4pt | Tight spacing, inline elements |
| `sm` | 8pt | Related element spacing |
| `md` | 12pt | Grid item spacing |
| `lg` | 16pt | Card padding, section spacing |
| `xl` | 20pt | Major section breaks |

### 4.5 Corner Radius

| Element | Radius | Style |
|---------|--------|-------|
| Cards | 12pt | Continuous (squircle) |
| Buttons | Capsule | Fully rounded |
| Chips/Tags | 10pt | Continuous |
| Input Fields | 8pt | Continuous |

### 4.6 Shadows and Elevation

The app uses minimal shadows, relying instead on material backgrounds and subtle borders for elevation:

- **Cards:** No drop shadow; elevation conveyed via material blur and border gradient
- **Modals:** System-provided sheet shadows
- **Buttons:** No shadow; press state uses scale effect

### 4.7 Animation Principles

| Animation Type | Duration | Curve | Usage |
|----------------|----------|-------|-------|
| State Changes | 0.2s | ease-in-out | List updates, toggles |
| Progress | 0.4s | ease-in-out | Ring fills, bar updates |
| Micro-interactions | 0.25s | spring (0.25, 0.8) | Button presses |
| Chart Updates | 0.25s | ease-in-out | Data refreshes |

**Accessibility:** All animations respect the user's "Reduce Motion" preference.

---

## 5. Iconography

### 5.1 Icon System

Ten Touches uses **SF Symbols** (Apple's system icon library) exclusively for in-app iconography.

### 5.2 Touchpoint Type Icons

| Touchpoint | SF Symbol | Semantic |
|------------|-----------|----------|
| SMS | `message` | Text messaging |
| WhatsApp | `message` | Messaging (shared) |
| Phone Call | `phone` | Voice calls |
| Email | `envelope` | Email communication |
| Meeting | `person.2` | In-person meetings |
| LinkedIn | `l.square` | LinkedIn platform |
| Tweet/X | `x.square` | X/Twitter platform |
| Casual | `wineglass` | Informal interactions |
| Event | `calendar` | Scheduled events |
| Gift | `gift` | Gift-giving |

### 5.3 UI Icons (Common)

| Action | SF Symbol |
|--------|-----------|
| Add | `plus` |
| Edit | `pencil` |
| Delete | `trash` |
| Archive | `archivebox` |
| Settings | `gear` |
| Info | `info.circle` |
| Sort Ascending | `arrow.up` |
| Sort Descending | `arrow.down` |
| Dashboard | `chart.bar` |
| Clients | `person.3` |
| Search | `magnifyingglass` |

### 5.4 Icon Specifications

| Context | Size | Weight |
|---------|------|--------|
| Navigation/Tab Bar | 24pt | Regular |
| List Row | 20pt | Regular |
| Inline/Caption | 14-16pt | Semibold |
| Dashboard Tiles | 20pt | Semibold |

### 5.5 Icon Usage Guidelines

1. **Consistency:** Use SF Symbols exclusively; do not mix icon libraries
2. **Colour:** Icons inherit foreground colour; use `.primary` or `.secondary` appropriately
3. **Accessibility:** All icons include accessibility labels
4. **Weight:** Match icon weight to adjacent text weight

---

## 6. Asset Specifications and Guidelines

### 6.1 App Store Assets

#### Screenshots

| Device | Resolution | Orientation |
|--------|------------|-------------|
| iPhone 6.9" (required) | 1320 × 2868 px | Portrait |
| iPhone 6.5" | 1284 × 2778 px | Portrait |
| iPad 13" (if applicable) | 2048 × 2732 px | Portrait |

**Screenshot Content Recommendations:**
1. Dashboard with progress rings and open opportunities
2. Client detail view showing touchpoint history
3. Insights cards (Pick Winners, Optimise Adoption)
4. Settings/customisation options
5. Dark Mode variant of key screen

**Screenshot Design Guidelines:**
- Show real, representative data (not lorem ipsum)
- Include brief text overlays (3-5 words) highlighting benefits
- Maintain consistent device frame style
- Show both Light and Dark Mode variants
- First 3 screenshots are critical (most users don't scroll further)

#### App Preview Video (Optional)

| Specification | Value |
|---------------|-------|
| Duration | 15-30 seconds |
| Resolution | Match screenshot resolution |
| Format | H.264, .mov or .mp4 |
| Audio | Optional (many view muted) |

**Video Content Suggestions:**
- Quick walkthrough: Add client → Log touchpoint → View progress
- Dashboard insights in action
- Progress ring filling to 10

### 6.2 Marketing Collateral Assets

#### Logo Lockups

Provide the app icon in the following formats for marketing use:

| Format | Use Case |
|--------|----------|
| PNG (transparent) | Web, presentations |
| SVG | Scalable web use |
| PDF (vector) | Print materials |
| JPEG (white background) | Email, documents |

#### Colour Swatches

Provide colour swatches in:
- Hex codes (web)
- RGB values (digital)
- Pantone equivalents (print) — to be determined by marketing

### 6.3 Social Media Assets

| Platform | Image Size | Notes |
|----------|------------|-------|
| App Store Badge | Standard Apple badge | Download from Apple |
| Twitter/X Header | 1500 × 500 px | Show app icon + tagline |
| LinkedIn Banner | 1128 × 191 px | Professional context |
| Instagram Post | 1080 × 1080 px | Screenshot or feature highlight |
| Facebook Cover | 820 × 312 px | Brand awareness |

### 6.4 File Naming Convention

```
tentouches_[asset-type]_[variant]_[size].[format]

Examples:
tentouches_icon_primary_1024.png
tentouches_screenshot_dashboard_dark_1320x2868.png
tentouches_logo_horizontal_white.svg
```

---

## 7. Dark Mode Guidelines

Ten Touches fully supports iOS Dark Mode. All marketing materials should represent both appearances.

### 7.1 Dark Mode Colour Mapping

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | White (#FFFFFF) | System Black |
| Card Background | System Grey 6 | Elevated surface + material |
| Primary Text | Black | White |
| Secondary Text | Grey | Light Grey |
| Accent | System Blue | System Blue (unchanged) |
| Progress Gradient | Cyan → Indigo | Cyan → Indigo (unchanged) |

### 7.2 Dark Mode Best Practices

1. **Parity:** Ensure feature parity between modes
2. **Contrast:** Verify text remains legible in both modes
3. **Materials:** Use `.ultraThinMaterial` for elevated surfaces
4. **Testing:** Always test marketing screenshots in both modes

---

## 8. Accessibility Considerations

### 8.1 Visual Accessibility

| Feature | Implementation |
|---------|----------------|
| Dynamic Type | All text scales with user preference |
| Colour Contrast | Minimum 4.5:1 for body text |
| Colour Independence | Information not conveyed by colour alone |
| Reduce Motion | Animations respect system preference |

### 8.2 Screen Reader Support

- All interactive elements have accessibility labels
- Images include descriptive alt text
- Progress indicators announce current value

### 8.3 Marketing Implications

- Avoid text embedded in images where possible
- Provide alt text for all marketing images
- Ensure sufficient contrast in all visual materials
- Consider colour-blind users when using red/green indicators

---

## 9. Quick Reference Card

### Brand Essentials at a Glance

| Element | Value |
|---------|-------|
| **App Name** | Ten Touches |
| **Primary Colours** | Cyan (#00D4FF), Indigo (#5856D6) |
| **Background (Dark)** | Deep Navy (#0D1B2A) |
| **Font** | San Francisco (SF Pro) |
| **Corner Radius** | 12pt (cards), 10pt (chips) |
| **Icon Library** | SF Symbols |
| **Language** | British English |

### Do's and Don'ts

**Do:**
- ✓ Use the Cyan-to-Indigo gradient for progress elements
- ✓ Maintain consistent spacing (8pt grid)
- ✓ Show both Light and Dark Mode in materials
- ✓ Use SF Symbols for all icons
- ✓ Apply glassmorphic card style for elevated content

**Don't:**
- ✗ Stretch or distort the app icon
- ✗ Use colours outside the defined palette
- ✗ Mix icon libraries (stick to SF Symbols)
- ✗ Ignore accessibility contrast requirements
- ✗ Use American English spelling

---

## 10. Asset Checklist for Marketing Team

### Required Assets (to be provided by Development/Design)

- [ ] App icon (1024 × 1024 px, PNG)
- [ ] App icon (vector/SVG for scalable use)
- [ ] Colour palette swatch file
- [ ] Screenshot templates (Figma/Sketch)
- [ ] SF Symbols subset (for reference)
- [ ] GlassCard component example (for recreation)

### Assets Marketing Should Create

- [ ] App Store screenshots (all required sizes)
- [ ] App preview video (optional but recommended)
- [ ] Social media banners and posts
- [ ] Press kit materials
- [ ] Landing page assets
- [ ] Email marketing templates

---

## Appendix A: Source Files Reference

| Asset | Location in Repository |
|-------|------------------------|
| App Icon | `Assets.xcassets/AppIcon.appiconset/` |
| Accent Colour | `Assets.xcassets/AccentColor.colorset/` |
| Theme Definitions | `Themes/Theme.swift` |
| Component Styles | `Views/Components/` |
| Requirements Doc | `reference/10_touches_crm_requirements_v2.md` |
| Marketing Guide | `reference/app_store_marketing_guide.md` |

---

## Appendix B: Colour Palette Export

```css
/* Ten Touches Brand Colours */
:root {
  --tt-cyan: #00D4FF;
  --tt-indigo: #5856D6;
  --tt-navy: #0D1B2A;
  --tt-slate: #1B2838;
  --tt-accent: #007AFF; /* System Blue */
  --tt-success: #34C759;
  --tt-warning: #FF9500;
  --tt-error: #FF3B30;
}
```

---

*Document prepared from analysis of Ten Touches iOS application codebase. For questions or clarifications, contact the development team.*
