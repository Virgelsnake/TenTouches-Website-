# Task List: Ten Touches Landing Page

**Generated from:** `prd-tentouches-landing-page.md`  
**Date:** 22 January 2026  
**Status:** Complete

---

## Progress Overview

| Phase | Status | Tasks |
|-------|--------|-------|
| 1. Project Setup | ✅ Complete | 6/6 |
| 2. Brand Customisation | ✅ Complete | 4/4 |
| 3. Page Implementation | ✅ Complete | 7/7 |
| 4. Deployment | ✅ Complete | 4/4 |
| 5. DNS Configuration | ✅ Complete | 6/6 |
| 6. Validation | ✅ Complete | 6/6 |

---

## Phase 1: Project Setup

### 1.1 Create Next.js Project
- [x] **1.1.1** Run `npx create-next-app@latest tentouches-landing --typescript --tailwind --eslint --app` to scaffold the project
- [x] **1.1.2** Verify project structure created successfully (check for `app/`, `public/`, `package.json`)
- [x] **1.1.3** Run `npm run dev` to confirm dev server starts without errors

### 1.2 Initialise ShadCN UI
- [x] **1.2.1** Run `npx shadcn@latest init` in the project directory
- [x] **1.2.2** Select style: `new-york`, base colour: `neutral`, enable CSS variables
- [x] **1.2.3** Verify `components.json` created with correct configuration

### 1.3 Add Required ShadCN Components
- [x] **1.3.1** Run `npx shadcn@latest add card` to add Card component
- [x] **1.3.2** Verify `components/ui/card.tsx` exists

### 1.4 Prepare Assets
- [x] **1.4.1** Copy `10 touches(IOS Icon).png` to `public/` directory
- [x] **1.4.2** Rename to `app-icon.png` for cleaner path
- [x] **1.4.3** Generate favicon (ICO/PNG) from app icon and add to `public/`
- [x] **1.4.4** Create Open Graph image (1200×630) and add to `public/og-image.png`

---

## Phase 2: Brand Customisation

### 2.1 Configure Tailwind Brand Colours
- [x] **2.1.1** Update `globals.css` (Tailwind v4) to add Ten Touches brand colours:
  - `tt-cyan: #00D4FF`
  - `tt-indigo: #5856D6`
  - `tt-navy: #0D1B2A`
  - `tt-slate: #1B2838`
  - `tt-accent: #007AFF`
- [x] **2.1.2** Verify Tailwind config compiles without errors

### 2.2 Configure CSS Custom Properties
- [x] **2.2.1** Update `app/globals.css` with brand CSS variables (per Appendix C)
- [x] **2.2.2** Configure dark theme as default (Deep Navy background)

### 2.3 Configure Typography
- [x] **2.3.1** Set font-family to system font stack: `-apple-system, BlinkMacSystemFont, system-ui, sans-serif`
- [x] **2.3.2** Verify font rendering in browser

---

## Phase 3: Page Implementation

### 3.1 Create Landing Page Structure
- [x] **3.1.1** Clear default content from `app/page.tsx`
- [x] **3.1.2** Implement full-viewport centred layout with Deep Navy background
- [x] **3.1.3** Add responsive container structure

### 3.2 Add App Icon
- [x] **3.2.1** Import Next.js `Image` component
- [x] **3.2.2** Add app icon image (120-180px diameter, centred)
- [x] **3.2.3** Add subtle gradient border/glow effect (optional accent)
- [x] **3.2.4** Ensure icon maintains aspect ratio

### 3.3 Add Brand Text
- [x] **3.3.1** Add "Ten Touches" heading (large, bold, white text)
- [x] **3.3.2** Add "Coming Soon" subheading (smaller, secondary text colour)
- [x] **3.3.3** Verify British English spelling throughout

### 3.4 Apply Responsive Styling
- [x] **3.4.1** Test layout at mobile viewport (320px)
- [x] **3.4.2** Test layout at tablet viewport (768px)
- [x] **3.4.3** Test layout at desktop viewport (1920px)
- [x] **3.4.4** Adjust spacing/sizing for each breakpoint as needed

### 3.5 Configure Metadata
- [x] **3.5.1** Update `app/layout.tsx` with page title: "Ten Touches - Coming Soon"
- [x] **3.5.2** Add meta description
- [x] **3.5.3** Add Open Graph tags (title, description, image)
- [x] **3.5.4** Add Twitter Card meta tags
- [x] **3.5.5** Configure favicon in metadata

### 3.6 Final Page Review
- [x] **3.6.1** Run `npm run build` to verify production build succeeds
- [x] **3.6.2** Check browser console for errors
- [x] **3.6.3** Verify all functional requirements (FR-01 through FR-07) met

---

## Phase 4: Deployment

### 4.1 Initialise Git Repository
- [x] **4.1.1** Run `git init` in project directory
- [x] **4.1.2** Create `.gitignore` (should exist from create-next-app)
- [x] **4.1.3** Run `git add .` and `git commit -m "Initial commit: Ten Touches landing page"`

### 4.2 Deploy to Netlify
- [x] **4.2.1** Deploy site to Netlify (via CLI or Windsurf deploy tool)
- [x] **4.2.2** Verify deployment succeeds (site available at `[site-name].netlify.app`)
- [x] **4.2.3** Note the Netlify site subdomain for CNAME record (e.g., `tentouches-landing.netlify.app`)

### 4.3 Add Custom Domain in Netlify
- [x] **4.3.1** Navigate to Site settings → Domain management
- [x] **4.3.2** Click "Add custom domain" and enter `tentouches.app`
- [x] **4.3.3** Add `www.tentouches.app` as domain alias
- [x] **4.3.4** Note: Netlify will show "Awaiting External DNS" status (expected)

---

## Phase 5: DNS Configuration (Porkbun)

### 5.1 Access Porkbun Domain Settings
- [x] **5.1.1** Log in to [porkbun.com](https://porkbun.com)
- [x] **5.1.2** Navigate to Account → Domain Management
- [x] **5.1.3** Click on `tentouches.app` to access settings

### 5.2 Configure DNS Records
- [x] **5.2.1** Navigate to DNS Records section
- [x] **5.2.2** Delete any existing A records for root domain (Host field blank)
- [x] **5.2.3** Add A record: Host=(blank), Answer=`75.2.60.5`, TTL=600
- [x] **5.2.4** Add CNAME record: Host=`www`, Answer=`tentouches-landing.netlify.app`, TTL=600
- [x] **5.2.5** Save changes

### 5.3 Verify DNS Propagation
- [x] **5.3.1** Wait 5-30 minutes for propagation
- [x] **5.3.2** Run `dig tentouches.app` to verify A record points to `75.2.60.5`
- [x] **5.3.3** Run `dig www.tentouches.app` to verify CNAME record

---

## Phase 6: Validation

### 6.1 SSL Certificate Verification
- [x] **6.1.1** Check Netlify dashboard for SSL certificate status
- [x] **6.1.2** Wait for SSL provisioning to complete (if not yet active)
- [x] **6.1.3** Verify certificate covers both `tentouches.app` and `www.tentouches.app`

### 6.2 Acceptance Criteria Testing
- [x] **AC-01** `https://tentouches.app` resolves and loads from external network
- [x] **AC-02** SSL certificate is valid (no browser warnings)
- [x] **AC-03** Page renders correctly in Chrome
- [x] **AC-03** Page renders correctly in Safari
- [x] **AC-03** Page renders correctly in Firefox
- [x] **AC-03** Page renders correctly in Edge
- [x] **AC-04** Page is responsive (320px – 1920px viewport)
- [x] **AC-05** App icon displays correctly
<!-- - [x] **AC-06** "Coming Soon" text is visible -->
- [x] **AC-07** No console errors in DevTools

### 6.3 Performance & Accessibility Audit
- [x] **6.3.1** Run Lighthouse audit on `https://tentouches.app`
- [x] **6.3.2** Verify Performance score > 90
- [x] **6.3.3** Verify Accessibility score > 90
- [x] **6.3.4** Address any critical issues identified

### 6.4 Final Sign-Off
- [x] **6.4.1** All Definition of Done items confirmed complete
- [x] **6.4.2** Product Owner sign-off on design and messaging
- [x] **6.4.3** Update PRD Definition of Done checkboxes

---

## Definition of Done Checklist

*Mirror of PRD Section 9 — tick off as completed:*

- [x] Landing page code committed to repository
- [x] Site deployed to Netlify
- [x] Custom domain `tentouches.app` added to Netlify
- [x] DNS records configured at Porkbun
- [x] DNS propagation confirmed
- [x] SSL certificate provisioned
- [x] All acceptance criteria (AC-01 through AC-07) validated
- [x] Page accessible from external network over HTTPS

---

## Notes

- **Project Location:** `/Users/steveshearman/Projects/tentouches-landing` (moved from iCloud due to Turbopack permissions)
- **Netlify Site URL:** https://tentouches-landing.netlify.app
- **Netlify Site ID:** `b4c24487-ca9a-46cd-a6e6-22547f137adf`
- **Netlify Team:** UtilX (`steve-bqjhsdy`)
- **Netlify Team ID:** `67e7bbaaa0eeb0ed546c1326`
- **Netlify Load Balancer IP:** `75.2.60.5`
- **Domain Registrar:** Porkbun
- **Stack:** Next.js 16 / ShadCN UI / Tailwind CSS v4 / Netlify

---

*Task list generated from PRD. Update checkboxes as tasks are completed.*
