# Portfolio Platform - Project Documentation

## Project Overview

This is a portfolio website for **Ismail Chaudhry**, an Operations, Systems & Automation Engineer. The platform serves a dual purpose:
1. **Primary**: Consulting conversion - attracting and converting consulting clients
2. **Secondary**: Employment visibility - showcasing work for full-time/contract opportunities

**Live URL**: https://portfolio-platform-rho.vercel.app

---

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3.4
- **Rendering**: Static Site Generation (SSG)
- **Deployment**: Vercel
- **Runtime**: Node.js
- **Package Manager**: npm
- **Integrations**: Calendly (inline widget)

---

## Design System

### Typography
- **Headings**: Serif font, `font-bold` (700 weight)
- **Body Text**: Sans-serif, 95% opacity (`text-[#1A1A1A]` with 95% opacity)
- **Accent Text**: 60% opacity (`text-accent`)

### Colors
- **Background**: `#FAFAFA`
- **Primary Text**: `#1A1A1A`
- **Accent**: `#666666`
- **Borders**: `#E0E0E0` and `#DDDDDD`

### Spacing
- **Hero sections**: 120px top padding
- **Section margins**: 80px
- **Container max-width**: 1200px
- **Content max-width**: 680px (for readability)

### Design Philosophy
- **Editorial style**: Generous whitespace, readable line lengths
- **Proof-first**: Tangible outcomes before narrative
- **Conversion-optimized**: Clear CTAs, low friction
- **Mobile-responsive**: All components scale properly

---

## Project Structure

```
portfolio-platform/
├── app/
│   ├── layout.tsx                 # Root layout with Nav + Footer
│   ├── page.tsx                   # Homepage (Systems I've Shipped + featured case study)
│   ├── about/page.tsx             # About page
│   ├── work-with-me/page.tsx      # Conversion page with Calendly
│   ├── case-studies/
│   │   ├── page.tsx               # Case studies index
│   │   └── flagship/page.tsx      # Pricing System case study
│   └── globals.css                # Global styles + Tailwind
├── components/
│   ├── Nav.tsx                    # Site navigation
│   ├── Footer.tsx                 # Contact footer (site-wide)
│   ├── CTA.tsx                    # Call-to-action component
│   ├── EmphasisBlock.tsx          # Highlighted content blocks
│   ├── Accordion.tsx              # Expandable case study component
│   └── CalendlyBadge.tsx          # Calendly script loader (client component)
├── public/
│   └── pricing-system-diagram.svg # Pricing system architecture diagram
├── tailwind.config.ts             # Tailwind configuration
├── next.config.ts                 # Next.js configuration
└── package.json                   # Dependencies
```

---

## Key Components

### `app/layout.tsx`
- Root layout for all pages
- Includes `<Nav>` and `<Footer>` for site-wide consistency
- Wraps children with `pt-20` to account for fixed navigation

### `app/page.tsx` (Homepage)
- Hero section with positioning statement
- Featured case study preview (Pricing System)
- **Systems I've Shipped** section - proof-first architecture showing 5 real systems
- CTA to Work With Me page

### `app/work-with-me/page.tsx`
- Primary conversion page for consulting clients
- Sections:
  - What I Build
  - How We Work
  - Pricing Philosophy
  - **Calendly Inline Widget** - book a fit check
  - Employment Opportunities acknowledgment
- Uses `CalendlyBadge` component to load Calendly script

### `app/case-studies/flagship/page.tsx`
- Flagship case study: **Pricing System**
- Real project replacing placeholder content
- Structure:
  - Hero with problem statement
  - **Delivered** block (outcomes first)
  - Pricing system diagram (SVG)
  - Detailed narrative sections
- All metrics are real operational results

### `components/Footer.tsx`
- Site-wide contact visibility
- Clickable contact methods:
  - Email: ismailchoudhry332@gmail.com
  - Phone: +92 310 9169087
  - LinkedIn: linkedin.com/in/ismail-chaudhry-022842142
- Serves both consulting leads and recruiters

### `components/Accordion.tsx`
- Used for supporting case studies on `/case-studies`
- Props: `title`, `problemSummary`, `outcomeSummary`, `delivered[]`, `children`
- Expandable/collapsible interaction
- Optional `delivered` prop for outcome lists

### `components/CalendlyBadge.tsx`
- Client component (`"use client"`)
- Loads Calendly script and styles
- Used on Work With Me page to enable inline widget
- Polling mechanism ensures script loads before initialization

---

## Content Strategy

### Dual-Use Architecture
The portfolio serves two audiences with one unified platform:

**For Consulting Clients:**
- Systems I've Shipped section (homepage)
- Work With Me page with Calendly booking
- Proof-first case studies with "Delivered" blocks
- Clear CTAs throughout

**For Recruiters/Employers:**
- Footer contact information (site-wide)
- Employment acknowledgment on Work With Me page
- Detailed case studies showing technical depth
- About page with background

### Proof-First Approach
All content prioritizes **tangible outcomes** over process:
- "Delivered" blocks appear before narrative in case studies
- Systems I've Shipped lists concrete systems, not concepts
- Metrics are real operational results, not estimates
- Outcomes before artifacts

---

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:3000
```

### Building
```bash
# Create production build
npm run build

# Test production build locally
npm start
```

### Deployment
```bash
# Deploy to Vercel production
npx vercel --prod

# Deploy to preview environment
npx vercel
```

**Deployment is automatic** via Vercel Git integration when pushing to main branch.

---

## Key Features

### 1. Systems I've Shipped Section
- **Location**: Homepage (`app/page.tsx:80-115`)
- **Purpose**: Quickly demonstrate tangible work
- **Content**: 5 real systems with outcomes
- **Format**: Bullet list with system → outcome pattern

### 2. Calendly Integration
- **Location**: Work With Me page (`app/work-with-me/page.tsx:90-98`)
- **Type**: Inline widget embed
- **URL**: https://calendly.com/ismailchoudhry332
- **Configuration**: Hide landing page details, hide GDPR banner
- **Dimensions**: 320px min-width, 700px height
- **Script loading**: Via `CalendlyBadge` component

### 3. Delivered Blocks
- **Purpose**: Show outcomes before narrative
- **Location**: All case studies (flagship + accordion cases)
- **Format**: Bulleted list of deliverables
- **Example**: `app/case-studies/flagship/page.tsx:49-61`

### 4. Responsive SVG Diagram
- **File**: `public/pricing-system-diagram.svg`
- **ViewBox**: `0 0 800 180`
- **Responsive**: Uses `width="100%" height="auto"` with `preserveAspectRatio="xMidYMid meet"`
- **Mobile handling**: Wrapped in `overflow-x-auto` container with `min-w-[600px]`

---

## Important Technical Notes

### Server vs Client Components
- **Server Components** (default): All page components, layout, most UI components
- **Client Components** (`"use client"`): Only `CalendlyBadge.tsx`
- Use client components only when browser APIs or React hooks are required

### Image Handling
- SVG diagrams in `/public` directory
- Use Next.js `<Image>` component for optimization
- Set `priority` prop for above-the-fold images

### Styling Guidelines
- Use Tailwind utility classes exclusively
- No custom CSS except in `globals.css`
- Maintain 680px max-width for readable text blocks
- Use 1200px max-width for page containers

### TypeScript
- Strict mode disabled in `tsconfig.json` for rapid development
- All components are `.tsx` files
- Minimal type annotations (rely on inference)

---

## Content Updates

### Adding a New Case Study

**Option 1: Flagship Case Study**
1. Edit `app/case-studies/flagship/page.tsx`
2. Update metadata (title, description)
3. Replace content sections
4. Update "Delivered" block with new outcomes
5. Update featured preview on homepage (`app/page.tsx`) and case studies page

**Option 2: Supporting Case Study (Accordion)**
1. Edit `app/case-studies/page.tsx`
2. Add new `<Accordion>` component with:
   - `title`: System name
   - `problemSummary`: One-line problem
   - `outcomeSummary`: One-line outcome
   - `delivered`: Array of deliverables
   - `children`: Full narrative content

### Updating Systems I've Shipped
1. Edit `app/page.tsx` lines 80-115
2. Follow pattern: `• System description` → `→ Outcome`
3. Keep list to 5 items maximum
4. All items should be real shipped systems, not concepts

### Updating Contact Information
1. **Footer**: Edit `components/Footer.tsx`
2. **Work With Me employment section**: Edit `app/work-with-me/page.tsx:136-168`
3. Update all three: email, phone, LinkedIn

### Updating Calendly Settings
1. **Widget URL**: Edit `app/work-with-me/page.tsx:94`
2. **Script loading**: Modify `components/CalendlyBadge.tsx`
3. Test on local dev server before deploying

---

## Known Issues & Quirks

### Tailwind v3.4 vs v4
- Project uses Tailwind v3.4 (not v4)
- This is intentional for Next.js 15 compatibility
- `tailwind.config.ts` uses v3 syntax

### Calendly Badge vs Inline Widget
- Originally used badge widget (floating button)
- Switched to inline embed for better visibility
- `CalendlyBadge` component still exists but now only loads the script
- Inline widget is the primary integration method

### SVG Diagram Responsiveness
- Original viewBox was too narrow (680px)
- Expanded to 800px to prevent clipping
- Mobile uses horizontal scroll with `overflow-x-auto`
- Desktop displays at full width

### Build Warnings
- May see warnings about multiple lockfiles (pnpm + npm)
- Safe to ignore - project uses npm exclusively
- Can set `turbopack.root` in `next.config.ts` to silence

---

## Testing Checklist

Before deploying major changes:

- [ ] Run `npm run build` and verify no errors
- [ ] Test all pages load correctly
- [ ] Verify contact links work (email, phone, LinkedIn)
- [ ] Test Calendly widget loads and is interactive
- [ ] Check mobile responsiveness (especially diagrams)
- [ ] Verify all case study accordions expand/collapse
- [ ] Test navigation between all pages
- [ ] Check footer appears on all pages
- [ ] Verify external links open in new tabs

---

## Dependencies

### Core
- `next`: ^15.1.4
- `react`: ^19.0.0
- `react-dom`: ^19.0.0

### Styling
- `tailwindcss`: ^3.4.17
- `postcss`: ^8.4.49
- `autoprefixer`: ^10.4.20

### TypeScript
- `typescript`: ^5.7.2
- `@types/node`: ^22.10.5
- `@types/react`: ^19.0.6
- `@types/react-dom`: ^19.0.2

### Other
- `eslint`: ^9.18.0
- `eslint-config-next`: ^15.1.4

---

## Deployment Configuration

### Vercel Settings
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x (default)

### Environment Variables
None currently required.

### Custom Domain
Not configured yet - using default Vercel subdomain.

---

## Version History

### Phase 1: Foundation (v1.0)
- Initial Next.js 15 setup
- Basic page structure
- Navigation component

### Phase 1.1: Design Refinement
- Editorial design system implemented
- Typography hierarchy established
- Spacing standards defined

### Phase 1.2: Typography
- Bold serif headings
- 95% opacity body text
- Accent text styling

### Phase 2: Proof-First Architecture
- "Systems I've Shipped" section added to homepage
- "Delivered" blocks added to all case studies
- Dual-use architecture (consulting + employment)
- Footer component with contact visibility

### Phase 3: Real Content
- Flagship case study replaced with Pricing System
- Pricing system diagram created and integrated
- Calendly integration (badge → inline widget)
- Bug fixes: SVG responsiveness, Calendly loading

---

## Future Considerations

### Potential Enhancements
- Add more supporting case studies as projects complete
- Implement analytics to track conversion metrics
- Add custom domain
- Consider blog/writing section if needed
- Add testimonials if client provides them

### Technical Debt
- `CalendlyBadge` component could be simplified (only loads script now)
- Consider removing unused placeholder code
- Add proper error boundaries for production
- Implement SEO optimizations (meta tags, structured data)

---

## Contact & Support

**Project Owner**: Ismail Chaudhry
- Email: ismailchoudhry332@gmail.com
- Phone: +92 310 9169087
- LinkedIn: https://www.linkedin.com/in/ismail-chaudhry-022842142

**Repository**: Not specified (likely private Vercel Git integration)

**Deployment Platform**: Vercel
- Dashboard: https://vercel.com/
- Project: portfolio-platform

---

## Quick Reference

### Common Commands
```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Run ESLint

# Deployment
npx vercel               # Deploy preview
npx vercel --prod        # Deploy production

# Debugging
npx vercel logs [URL]    # View deployment logs
```

### File Paths for Common Tasks
- Homepage content: `app/page.tsx`
- Navigation: `components/Nav.tsx`
- Footer contacts: `components/Footer.tsx`
- Work With Me CTA: `app/work-with-me/page.tsx`
- Flagship case study: `app/case-studies/flagship/page.tsx`
- Case studies index: `app/case-studies/page.tsx`
- Design system: `app/globals.css` + `tailwind.config.ts`

### Key URLs (Production)
- Homepage: https://portfolio-platform-rho.vercel.app
- Work With Me: https://portfolio-platform-rho.vercel.app/work-with-me
- Case Studies: https://portfolio-platform-rho.vercel.app/case-studies
- About: https://portfolio-platform-rho.vercel.app/about

---

**Last Updated**: January 2026
**Documentation Version**: 1.0
