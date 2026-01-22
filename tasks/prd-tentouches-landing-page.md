# Product Requirements Document: Ten Touches Landing Page

**Document Version:** 1.0  
**Date:** 22 January 2026  
**Project:** `tentouches.app` Domain Launch  
**Prepared by:** Development Team  

---

## 1. Overview

### 1.1 Purpose of This Document

This PRD provides a complete, actionable plan for launching a minimal "Coming Soon" landing page on the newly purchased domain `tentouches.app`. The document covers:

- Domain configuration via **Porkbun** (registrar)
- Site deployment and DNS delegation to **Netlify**
- Frontend implementation using **ShadCN UI** components

### 1.2 Key Stakeholders

| Role | Responsibility |
|------|----------------|
| **Development Team** | Implementation, deployment, DNS configuration |
| **Product Owner** | Sign-off on design and messaging |
| **QA** | Validation of public accessibility and cross-browser testing |

---

## 2. Objectives

| # | Objective | Success Metric |
|---|-----------|----------------|
| 1 | Get `tentouches.app` live on Netlify | Domain resolves to Netlify-hosted site |
| 2 | Configure DNS via Netlify nameservers | SSL certificate provisioned automatically |
| 3 | Deploy minimal ShadCN UI landing page | Page renders correctly across major browsers |
| 4 | Validate external access | Domain accessible over HTTPS from external network |

---

## 3. Platforms & Release Targets

| Attribute | Value |
|-----------|-------|
| **Platform** | PWA (Web) |
| **Target Browsers** | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| **Device Support** | Desktop, tablet, mobile (responsive) |
| **Accessibility** | WCAG 2.1 AA compliance |

---

## 4. Recommended Stack & Rationale

### 4.1 Primary Recommendation

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | Native ShadCN UI support, SSG for landing pages, excellent Netlify integration |
| **UI Library** | ShadCN UI | Matches internal standards, accessible components, Tailwind-based |
| **Styling** | Tailwind CSS | Required by ShadCN, utility-first, rapid development |
| **Icons** | Lucide React | Default ShadCN icon library |
| **Deployment** | Netlify | Existing team account, automatic SSL, DNS management |
| **Package Manager** | npm | Standard, broad compatibility |

### 4.2 Alternatives Considered

| Alternative | Trade-offs |
|-------------|------------|
| Vite + React | Faster build, but less SSG support; requires additional configuration for Netlify |
| Astro | Excellent for static sites, but ShadCN integration requires React islands |

### 4.3 Confirmed Stack Decision

**Next.js 14+ with ShadCN UI deployed to Netlify** — aligns with existing team workflows and ShadCN requirements.

---

## 5. Technical Requirements

### 5.1 Porkbun Integration (Domain Registrar)

#### 5.1.1 Domain Information Required

The following information must be retrieved from Porkbun to verify ownership:

| Information | Purpose |
|-------------|---------|
| Domain name | `tentouches.app` (confirmed) |
| Current nameservers | Verify default Porkbun NS before changing |
| Domain lock status | Must be unlocked to change nameservers |

#### 5.1.2 How to Access Domain Settings at Porkbun

**Step-by-step instructions:**

1. Navigate to [https://porkbun.com](https://porkbun.com) and log in
2. Click **ACCOUNT** in the top-right corner
3. Select **Domain Management** from the dropdown
4. Locate `tentouches.app` in your domain list
5. Click on the domain name to access settings
6. Navigate to the **Nameservers** section (under "Details" or "DNS" tab)

#### 5.1.3 Adding DNS Records to Point to Netlify

Per Porkbun documentation, to keep DNS at Porkbun and point to Netlify:

1. In Domain Management, click on `tentouches.app`
2. Navigate to the **DNS Records** section
3. **Delete** any existing A records for the root domain (Host field blank)
4. **Add an A record** for the root domain:
   - **Type:** A
   - **Host:** *(leave blank for root domain)*
   - **Answer:** `75.2.60.5` (Netlify load balancer IP)
   - **TTL:** 600 (or default)
5. **Add a CNAME record** for www:
   - **Type:** CNAME
   - **Host:** `www`
   - **Answer:** `[your-site-name].netlify.app`
   - **TTL:** 600 (or default)
6. Click **Save** after each record

> **Note:** The Netlify load balancer IP (`75.2.60.5`) is the standard IP for Netlify sites. The CNAME for `www` should point to your Netlify subdomain (e.g., `tentouches-landing.netlify.app`).

### 5.2 Netlify Integration

#### 5.2.1 Existing Account Details

| Attribute | Value |
|-----------|-------|
| **Team Name** | UtilX |
| **Team Slug** | `steve-bqjhsdy` |
| **Team ID** | `67e7bbaaa0eeb0ed546c1326` |
| **Plan** | Free |
| **Team URL** | https://app.netlify.com/teams/steve-bqjhsdy |

#### 5.2.2 Creating a New Site

1. Deploy the landing page project to create a new Netlify site
2. The site will initially be available at `[site-name].netlify.app`
3. Custom domain configuration follows deployment

#### 5.2.3 Adding Custom Domain to Netlify (External DNS)

After site deployment:

1. Navigate to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter `tentouches.app`
4. Netlify will show "Awaiting External DNS" status
5. Note your Netlify site subdomain (e.g., `tentouches-landing.netlify.app`)
6. Also add `www.tentouches.app` as a domain alias
7. Return to Porkbun and add the DNS records (per Section 5.1.3)
8. Once DNS propagates, Netlify will verify and provision SSL

#### 5.2.4 SSL/TLS Configuration

- Netlify automatically provisions a **Let's Encrypt** SSL certificate once DNS propagates
- No manual SSL configuration required
- Certificate covers both `tentouches.app` and `www.tentouches.app`

#### 5.2.5 DNS Propagation

| Aspect | Expected Time |
|--------|---------------|
| **A/CNAME record update** | 5-30 minutes (typically fast) |
| **SSL provisioning** | Minutes after DNS propagation |
| **Verification command** | `dig tentouches.app` |

### 5.3 Frontend Requirements

#### 5.3.1 ShadCN UI Integration

| Requirement | Specification |
|-------------|---------------|
| **Style** | `new-york` (ShadCN default) |
| **Base colour** | `neutral` (customised to brand) |
| **CSS Variables** | Enabled |
| **TypeScript** | Required |
| **Icon library** | Lucide React |

#### 5.3.2 Required ShadCN Components

| Component | Purpose |
|-----------|---------|
| `Card` | Main content container |
| `Button` | Optional CTA (future use) |

#### 5.3.3 Brand Customisation

The landing page must apply Ten Touches brand guidelines:

| Element | Value |
|---------|-------|
| **Primary colour (Cyan)** | `#00D4FF` |
| **Secondary colour (Indigo)** | `#5856D6` |
| **Background (Dark)** | `#0D1B2A` |
| **Accent** | `#007AFF` (System Blue) |
| **Typography** | `-apple-system, BlinkMacSystemFont, system-ui` (web equivalent of SF Pro) |
| **Language** | British English |

---

## 6. User Stories & Personas

### 6.1 Primary Persona

**Prospective User / Visitor**
> "As a visitor who has heard about Ten Touches, I want to see that the app is coming soon so that I know the domain is legitimate and can anticipate the launch."

### 6.2 User Stories

| ID | User Story | Priority |
|----|------------|----------|
| US-01 | As a visitor, I want to see the Ten Touches branding so I know I'm on the correct site | Must Have |
| US-02 | As a visitor, I want to see a "Coming Soon" message so I understand the app is launching | Must Have |
| US-03 | As a visitor, I want the page to load quickly and display correctly on my device | Must Have |

---

## 7. Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-01 | Display Ten Touches app icon | Icon renders at appropriate size, maintains aspect ratio |
| FR-02 | Display "Ten Touches" brand name | Text uses correct typography, British English |
| FR-03 | Display "Coming Soon" message | Clear, visible message below brand name |
| FR-04 | Apply brand colour scheme | Background uses Deep Navy (#0D1B2A), gradient accents where appropriate |
| FR-05 | Responsive layout | Page displays correctly on mobile, tablet, desktop |
| FR-06 | HTTPS enabled | Site serves over HTTPS with valid certificate |
| FR-07 | Favicon configured | Browser tab shows Ten Touches icon |

---

## 8. Acceptance Criteria & Test Strategy

### 8.1 Acceptance Criteria

| AC ID | Criteria | Validation Method |
|-------|----------|-------------------|
| AC-01 | `https://tentouches.app` resolves and loads | Manual: visit URL from external network |
| AC-02 | SSL certificate is valid (no browser warnings) | Manual: check certificate in browser |
| AC-03 | Page renders in Chrome, Safari, Firefox, Edge | Manual: cross-browser testing |
| AC-04 | Page is responsive (320px – 1920px viewport) | Manual: resize browser, test on mobile |
| AC-05 | App icon displays correctly | Visual inspection |
| AC-06 | "Coming Soon" text is visible | Visual inspection |
| AC-07 | No console errors | DevTools: check console |

### 8.2 Test Strategy

| Test Type | Scope | When |
|-----------|-------|------|
| **Manual smoke test** | DNS resolution, HTTPS, page load | Post-deployment |
| **Cross-browser test** | Chrome, Safari, Firefox, Edge | Post-deployment |
| **Responsive test** | Mobile, tablet, desktop viewports | Post-deployment |
| **Lighthouse audit** | Performance, accessibility, SEO | Post-deployment |

---

## 9. Definition of Done

- [ ] Landing page code committed to repository
- [ ] Site deployed to Netlify
- [ ] Custom domain `tentouches.app` added to Netlify
- [ ] Nameservers updated at Porkbun
- [ ] DNS propagation confirmed
- [ ] SSL certificate provisioned
- [ ] All acceptance criteria (AC-01 through AC-07) validated
- [ ] Page accessible from external network over HTTPS

---

## 10. Non-Goals (Out of Scope)

| Item | Reason |
|------|--------|
| Email signup form | Not required for initial domain validation |
| Analytics integration | Future enhancement |
| Full marketing content | This is a minimal "Coming Soon" page only |
| App Store links | App not yet publicly available |
| Multi-language support | Single language (British English) for launch |
| Blog or news section | Future enhancement |

---

## 11. Design Specifications

### 11.1 Visual Design

| Element | Specification |
|---------|---------------|
| **Layout** | Centred, single-column, full-viewport height |
| **Background** | Deep Navy (`#0D1B2A`) solid or subtle gradient |
| **App Icon** | Centred, 120-180px diameter |
| **Brand Name** | "Ten Touches" — Large, bold, white text |
| **Tagline** | "Coming Soon" — Smaller, secondary text colour |
| **Optional accent** | Subtle Cyan-to-Indigo gradient border or glow on icon |

### 11.2 Component Structure

```
┌─────────────────────────────────────┐
│                                     │
│           [ App Icon ]              │
│                                     │
│          Ten Touches                │
│          Coming Soon                │
│                                     │
└─────────────────────────────────────┘
```

### 11.3 ShadCN Component Usage

| Component | Usage |
|-----------|-------|
| `Card` | Optional wrapper for content with glassmorphic effect |
| CSS Custom Properties | Brand colours applied via Tailwind config |

### 11.4 Asset Requirements

| Asset | Source | Format |
|-------|--------|--------|
| App Icon | `/10 touches(IOS Icon).png` | PNG (resize for web) |
| Favicon | Derived from app icon | ICO / PNG |
| Open Graph image | Derived from app icon + brand | PNG (1200×630) |

---

## 12. Implementation Steps

### Phase 1: Project Setup

| Step | Command / Action | Notes |
|------|------------------|-------|
| 1.1 | `npx create-next-app@latest tentouches-landing --typescript --tailwind --eslint --app` | Create Next.js project |
| 1.2 | `npx shadcn@latest init` | Initialise ShadCN UI |
| 1.3 | Select style: `new-york`, base colour: `neutral` | Match ShadCN defaults |
| 1.4 | `npx shadcn@latest add card` | Add Card component |
| 1.5 | Copy app icon to `/public/` directory | Prepare assets |
| 1.6 | Generate favicon from icon | Use favicon generator |

### Phase 2: Brand Customisation

| Step | Action |
|------|--------|
| 2.1 | Update `tailwind.config.ts` with brand colours |
| 2.2 | Update `globals.css` with CSS custom properties |
| 2.3 | Configure web fonts (system font stack) |

### Phase 3: Page Implementation

| Step | Action |
|------|--------|
| 3.1 | Create landing page in `app/page.tsx` |
| 3.2 | Add app icon image with Next.js `Image` component |
| 3.3 | Add "Ten Touches" heading |
| 3.4 | Add "Coming Soon" subheading |
| 3.5 | Apply responsive styling |
| 3.6 | Configure metadata (title, description, OG tags) |

### Phase 4: Deployment

| Step | Action |
|------|--------|
| 4.1 | Initialise Git repository |
| 4.2 | Deploy to Netlify (via CLI or Windsurf deploy tool) |
| 4.3 | Add custom domain `tentouches.app` in Netlify |
| 4.4 | Note Netlify site subdomain for CNAME record |

### Phase 5: DNS Configuration (at Porkbun)

| Step | Action |
|------|--------|
| 5.1 | Log in to Porkbun account |
| 5.2 | Navigate to Domain Management → `tentouches.app` → DNS Records |
| 5.3 | Delete existing A records for root domain |
| 5.4 | Add A record: Host=(blank), Answer=`75.2.60.5` |
| 5.5 | Add CNAME record: Host=`www`, Answer=`[site-name].netlify.app` |
| 5.6 | Save changes |
| 5.7 | Wait for DNS propagation (check with `dig tentouches.app`) |

### Phase 6: Validation

| Step | Action |
|------|--------|
| 6.1 | Verify SSL certificate is active in Netlify dashboard |
| 6.2 | Visit `https://tentouches.app` from external network |
| 6.3 | Run cross-browser tests |
| 6.4 | Run Lighthouse audit |
| 6.5 | Confirm all acceptance criteria met |

---

## 13. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Domain resolution** | 100% | `dig` command returns Netlify IPs |
| **SSL validity** | Valid certificate, no warnings | Browser certificate check |
| **Page load time** | < 2 seconds | Lighthouse Performance |
| **Lighthouse Performance** | > 90 | Lighthouse audit |
| **Lighthouse Accessibility** | > 90 | Lighthouse audit |
| **Cross-browser compatibility** | 100% (4 browsers) | Manual testing |

---

## 14. Dependencies

### 14.1 Accounts & Access

| Service | Requirement | Status |
|---------|-------------|--------|
| **Porkbun** | Account with `tentouches.app` ownership | ✅ Confirmed |
| **Netlify** | Team account (UtilX) | ✅ Confirmed |

### 14.2 Development Environment

| Dependency | Version |
|------------|---------|
| Node.js | 18.x or 20.x LTS |
| npm | 9.x+ |
| Next.js | 14.x+ |
| ShadCN UI | Latest |
| Tailwind CSS | 3.4+ |

### 14.3 Assets

| Asset | Location |
|-------|----------|
| App Icon | `@/Website/10 touches(IOS Icon).png` |
| Brand Guidelines | `@/Website/branding_input_for_marketing.md` |

---

## 15. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Should we add a "Notify me" email signup in a future iteration? | Product Owner | Open |
| 2 | Do we need analytics (e.g., Plausible, Fathom) on the landing page? | Product Owner | Open |
| 3 | Should `www.tentouches.app` redirect to `tentouches.app` or vice versa? | Development | Pending (Netlify handles automatically) |

---

## 16. Appendices

### Appendix A: Documentation Links

| Resource | URL |
|----------|-----|
| **Porkbun: Pointing Domain to Hosting** | https://kb.porkbun.com/article/54-pointing-your-domain-to-hosting-with-a-records |
| **Porkbun: How to Change Nameservers** | https://kb.porkbun.com/article/22-how-to-change-nameservers |
| **Porkbun: Adding DNS Records** | https://kb.porkbun.com/article/231-how-to-add-dns-records-on-porkbun |
| **Netlify: Custom Domains** | https://docs.netlify.com/domains-https/custom-domains/ |
| **Netlify: DNS Configuration** | https://docs.netlify.com/domains-https/netlify-dns/ |
| **ShadCN UI: Installation (Next.js)** | https://ui.shadcn.com/docs/installation/next |
| **ShadCN UI: Components** | https://ui.shadcn.com/docs/components |

### Appendix B: Glossary

| Term | Definition |
|------|------------|
| **A Record** | DNS record mapping a domain to an IPv4 address |
| **CNAME** | DNS record creating an alias from one domain to another |
| **DNS** | Domain Name System — translates domain names to IP addresses |
| **Nameserver (NS)** | Server responsible for DNS records for a domain |
| **SSL/TLS** | Encryption protocol for secure HTTPS connections |
| **SSG** | Static Site Generation — pre-rendering pages at build time |
| **PWA** | Progressive Web App — web application with app-like capabilities |

### Appendix C: Brand Colour Reference

```css
/* Ten Touches Brand Colours */
:root {
  --tt-cyan: #00D4FF;
  --tt-indigo: #5856D6;
  --tt-navy: #0D1B2A;
  --tt-slate: #1B2838;
  --tt-accent: #007AFF;
  --tt-success: #34C759;
  --tt-warning: #FF9500;
  --tt-error: #FF3B30;
}
```

### Appendix D: Source Notes

| Source File | Key Information Extracted |
|-------------|---------------------------|
| `branding_input_for_marketing.md` | Colour palette, typography, icon specifications, brand name usage |
| `10 touches(IOS Icon).png` | Primary app icon for landing page display |
| Porkbun Knowledge Base | DNS configuration steps, nameserver change process |
| Netlify Documentation | Custom domain setup, SSL provisioning, DNS delegation |
| ShadCN UI Documentation | Installation commands, component usage, Next.js integration |

---

*Document generated following the Create PRD workflow. For implementation, proceed with Phase 1 tasks.*
