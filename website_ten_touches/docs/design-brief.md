# Ten Touches — Website Design Brief

**Document Version:** 1.0
**Date:** 5 February 2026
**Author:** Development Team
**Purpose:** Comprehensive design brief for tentouches.app marketing website

---

## 1. Strategic Purpose & Conversion Goals

### Primary Purpose
Position Ten Touches as the relationship-first mobile CRM for salespeople who sell through trust, not scripts. The website must communicate the product's philosophy — that CRMs should help the person doing the work, not just generate reports for management.

### Primary Conversion Goal
**Drive App Store downloads.** Every section funnels toward a single action: download Ten Touches from the Apple App Store.

### Secondary Goals
- Build brand credibility and trust with relationship-driven sellers
- Educate visitors on the "ten touches" methodology and philosophy
- Provide required App Store compliance pages (privacy policy, support)
- Establish SEO and AI-discoverability for key search terms (mobile CRM, relationship CRM, voice CRM, sales follow-up app)

---

## 2. Target Audience & Key Needs

### Primary Audience: Relationship-Driven Sellers
- **Business development professionals** — Build pipelines through networking and referrals
- **Founders and entrepreneurs** — Running their own sales while juggling everything else
- **Consultants and advisors** — Long sales cycles, high-value engagements, repeat business
- **Sales leaders who sell** — Player-coaches carrying their own quota
- **Account managers** — Maintaining and growing existing client portfolios

### Core Emotional Needs
- Relief from CRM guilt and admin dread
- Confidence walking into every conversation
- Control over relationships without mental overhead
- Feeling that their tool works *for them*, not against them

### Core Functional Needs
- Remember personal details about clients
- Follow up consistently without relying on memory
- Understand which sales actions actually lead to wins
- Capture information instantly by voice, not forms

### Buying Triggers (What Brings Them to the Site)
- CRM fatigue ("We bought Salesforce and nobody uses it")
- Scaling sales efforts ("I used to remember everyone, now I can't")
- Poor follow-up discipline ("I'm great at first meetings, terrible at follow-up")
- Founder-led sales chaos ("I need something I can use on my phone between meetings")

---

## 3. Site Map & Page Hierarchy

### Single-Page Marketing Site (with anchor navigation)
The site is a single scrolling page with smooth anchor navigation — optimised for conversion and storytelling flow.

```
tentouches.app/
├── #hero          — Headline, value proposition, App Store CTA
├── #problem       — The pain of traditional CRMs (emotional resonance)
├── #solution      — The Ten Touches philosophy (the shift)
├── #features      — Six core capabilities with visual treatments
├── #how-it-works  — Three-step journey (Capture → Act → Improve)
├── #use-cases     — Real-world scenarios with before/after
├── #download      — Final CTA with App Store badge
└── Footer         — Links, legal, social
```

### Additional Pages
```
tentouches.app/privacy   — Privacy Policy (App Store requirement)
tentouches.app/support   — Support / Contact (App Store requirement)
```

---

## 4. Visual Direction

### Overall Aesthetic
**Premium, dark-mode-first, glassmorphic.** The website mirrors the app's visual identity — deep navy backgrounds, frosted glass cards, cyan-to-indigo gradients. It should feel like holding the app in your hands: modern, calm, intelligent, and unmistakably premium.

### Colour Palette

| Role | Colour | Hex | Usage |
|------|--------|-----|-------|
| **Background Primary** | Deep Navy | #0D1B2A | Page background, hero |
| **Background Secondary** | Slate | #1B2838 | Card backgrounds, alternating sections |
| **Accent Gradient Start** | Cyan | #00D4FF | Gradient start, highlights |
| **Accent Gradient End** | Indigo | #5856D6 | Gradient end, buttons |
| **Interactive** | System Blue | #007AFF | Links, hover states |
| **Success** | Green | #34C759 | Positive indicators |
| **Warning** | Orange | #FF9500 | Caution states |
| **Text Primary** | White | #FFFFFF | Headlines, body text |
| **Text Secondary** | Light Grey | #94A3B8 | Subheadlines, captions |
| **Text Tertiary** | Mid Grey | #64748B | Fine print, metadata |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| **H1 (Hero)** | SF Pro Display / system-ui | Bold | 64px | 36px |
| **H2 (Section)** | SF Pro Display / system-ui | Bold | 48px | 28px |
| **H3 (Card)** | SF Pro Display / system-ui | Semibold | 24px | 20px |
| **Body** | SF Pro Text / system-ui | Regular | 18px | 16px |
| **Caption** | SF Pro Text / system-ui | Regular | 14px | 13px |
| **Button** | SF Pro Text / system-ui | Semibold | 16px | 15px |

Font stack: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif`

### Imagery Style
- **No stock photography.** The site uses the app's own screenshots, the app icon, and abstract visual elements (gradient orbs, glass cards, progress rings)
- **Device mockups:** iPhone frames showing real app screens in context
- **Gradient orbs:** Soft, blurred cyan/indigo circles as atmospheric background elements
- **Glass cards:** `.ultraThinMaterial`-style frosted containers matching the app's GlassCard component

### Spacing System
8px base grid. Section padding: 120px vertical (desktop), 80px (mobile). Card padding: 24px. Gap between elements: 16px standard, 32px between groups.

### Corner Radius
- Cards: 16px (slightly larger than app's 12px for web scale)
- Buttons: Full capsule (pill shape)
- Chips/badges: 10px

### Shadows & Elevation
Minimal shadows. Elevation conveyed through:
- Background blur (backdrop-filter)
- Subtle gradient borders (white 20% → white 5%)
- Layered opacity

---

## 5. Content Structure Per Section

### 5.1 Hero Section
**Purpose:** Instantly communicate what Ten Touches is and why it matters. Capture attention in under 7 seconds.

**Contains:**
- **Badge:** "Personal CRM for iOS" — positions the product category
- **Headline:** "Remember everyone. Follow up consistently. Sell smarter."
- **Subheadline:** One sentence explaining the product (the canonical description)
- **Primary CTA:** App Store download badge
- **Visual:** iPhone mockup showing the app (Opportunities Dashboard or Client Detail)
- **Background:** Deep navy with soft gradient orbs

**Why:** The hero must immediately answer "What is this?" and "Why should I care?" — using the brand's own language. The three-part headline mirrors the three core outcomes from the Value Proposition document.

### 5.2 Problem Section
**Purpose:** Create emotional resonance by naming the pain visitors already feel.

**Contains:**
- **Section header:** "Sound familiar?"
- **Pain point cards** (3-4 glassmorphic cards):
  - "You met someone great at a conference. Three days later, you can barely remember their name."
  - "You promised to follow up last week. Now it's been a month. The guilt compounds."
  - "You spend twenty minutes updating your CRM. What did you get out of it? Nothing."
  - "You have no idea which of your actions actually lead to wins."
- **Transition line:** Leading into the solution

**Why:** The Knowledge Base identifies four core emotional problems — forgetting details, guilt about follow-up, wasted CRM effort, and selling blind. Naming these creates instant identification.

### 5.3 Solution / Philosophy Section
**Purpose:** Introduce the Ten Touches philosophy as the answer to the pain.

**Contains:**
- **Section header:** "A CRM built for you, not your manager"
- **Philosophy pillars** (4 items with icons):
  - **Relationship Memory** — "Ten Touches doesn't store contacts. It preserves relationships."
  - **Voice-First Capture** — "Speak it. Don't type it. Capture insight when it's fresh."
  - **Intelligent Follow-Up** — "Know exactly what to do next — and do it when you're ready."
  - **Continuous Improvement** — "Learn what works for you and get better over time."
- **Visual treatment:** Each pillar in a glass card with gradient icon

**Why:** These are the four Message Pillars from the Value Proposition document — the foundational positioning that differentiates Ten Touches from everything else.

### 5.4 Features Section
**Purpose:** Ground the philosophy in concrete product capabilities.

**Contains:**
- **Section header:** "Everything you need. Nothing you don't."
- **Feature cards** (6 features, 2×3 grid on desktop):
  1. **Client Cards** — Relationship-first data with personal details, searchable by any attribute
  2. **Voice Input** — Create clients, log touches, capture notes by speaking naturally
  3. **Touch Tracking** — Log every interaction, schedule future follow-ups with full context
  4. **Opportunity Management** — Four-stage pipeline with honest revenue-risking
  5. **GTD-Style Actions** — Filter reminders by context to match your energy and environment
  6. **Optimise Dashboard** — See which actions win deals, match the moment, sell faster
- Each card includes: icon, title, one-sentence description, key benefit

**Why:** Mapped directly to the six feature areas in the Product Overview, with language from the Features & Capabilities document.

### 5.5 How It Works Section
**Purpose:** Show the simplicity of the workflow in three steps.

**Contains:**
- **Section header:** "How it works"
- **Three steps** (horizontal on desktop, vertical on mobile):
  1. **Capture** — "Meet someone. Speak their details. Done in 30 seconds."
  2. **Act** — "Reminders by context. Match your actions to your energy."
  3. **Improve** — "See what works. Learn your patterns. Sell smarter."
- **Visual:** Progress indicators with the brand's cyan-to-indigo gradient connecting the steps

**Why:** Reduces complexity anxiety. Shows the product isn't "another complex CRM" but a simple capture-act-improve loop.

### 5.6 Use Cases Section
**Purpose:** Help visitors see themselves in the product through real scenarios.

**Contains:**
- **Section header:** "Built for how you actually sell"
- **Scenario cards** (3 key personas):
  - **The Networker** — "You meet 12 people at a conference. All 12 get personalised follow-ups."
  - **The Founder** — "You're running sales and everything else. Ten Touches keeps relationships warm while you focus."
  - **The Closer** — "Six-month sales cycles. Fourteen touches. You know exactly what moved it forward."
- Each with a brief before/after contrast

**Why:** Drawn from Use Cases document. Each maps to a primary ICP persona from Customer Profiles.

### 5.7 Final CTA / Download Section
**Purpose:** Convert. Single, clear action.

**Contains:**
- **Headline:** "Start remembering everyone"
- **Subheadline:** "Ten Touches is free to download on iOS."
- **App Store badge** (large, prominent)
- **App icon** displayed alongside
- **Background:** Gradient treatment with the brand colours

**Why:** Every section has been building toward this moment. Clean, confident, no distractions.

### 5.8 Footer
**Contains:**
- Ten Touches logo/wordmark
- Navigation links (Features, How It Works, Download)
- Legal links (Privacy Policy, Support)
- Copyright notice
- Social media links (placeholder)
- British English throughout

---

## 6. Tone of Voice & Messaging Approach

### Voice Characteristics
- **Confident, not arrogant** — We know what we do well
- **Human, not corporate** — Relationship-first applies to our writing too
- **Practical, not aspirational** — Grounded in what the product actually does
- **Specific, not vague** — Real examples, concrete benefits

### Language to Use
- "Relationship memory" (not "contact database")
- "Client" (not "contact" or "lead")
- "Touch" (any meaningful interaction)
- "Remember / recall / reconnect"
- "Built for you" / "Actually helps" / "Gives back"
- "Momentum" / "Rhythm" / "Confidence"

### Language to Avoid
- "360-degree view", "single source of truth"
- "Next-gen", "AI-powered", "seamless", "robust"
- "Leverage", "synergy", "empower"
- "Best-in-class", "revolutionary", "game-changer"
- American English spelling (use British: optimise, colour, behaviour)

### Copy Rules
- **All copy in British English** (optimise, behaviour, colour, favour)
- Headlines: ≤8 words where possible
- Body text: Short paragraphs, scannable
- Feature descriptions: Benefit first, then mechanism
- CTAs: Action-oriented ("Download", "Start", "Try")

---

## 7. Interaction Patterns & Animations

### Scroll Animations
- **Fade-in-up:** Content sections fade in and slide up 20px on scroll into view
- **Stagger:** Cards within a section animate in sequence (100ms delay between)
- **Duration:** 0.5s with ease-out curve
- **Reduced motion:** All animations respect `prefers-reduced-motion`

### Progress Ring Animation
- The hero or feature section includes an animated progress ring matching the app icon
- Fills from 0 to ~80% with the cyan-to-indigo gradient on scroll
- Duration: 1.2s ease-in-out

### Hover States
- Cards: Subtle scale (1.02) with border glow
- Buttons: Gradient shift with smooth transition
- Links: Underline slide-in from left

### Navigation
- Fixed/sticky header with blur background
- Smooth scroll to anchored sections
- Active section indicator in navigation

### Mobile Interactions
- Full touch-friendly tap targets (minimum 44px)
- Swipeable card carousels for features and use cases
- No hover-dependent interactions

---

## 8. Technology Decisions

### Framework: Next.js 14 (App Router)
- Static site generation for maximum performance
- Built-in image optimisation
- Excellent SEO with metadata API
- Deploy-ready for Netlify

### Styling: Tailwind CSS 4
- Utility-first for rapid development
- Custom theme extending brand colours
- Dark mode by default

### Components: shadcn/ui
- Consistent with internal UI standards
- Accessible by default (Radix primitives)
- Customisable to match brand

### Icons: Lucide React
- Clean, consistent icon set
- Tree-shakeable for performance

### Animations: CSS + Intersection Observer
- Lightweight scroll animations without heavy JS libraries
- Respects `prefers-reduced-motion`

### Deployment: Netlify
- Domain: tentouches.app (registered via Porkbun)
- Automatic builds from repository
- SSL/HTTPS included

---

*This design brief provides everything needed to build a premium, conversion-optimised website that faithfully represents the Ten Touches brand and drives App Store downloads.*
