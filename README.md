# Portfolio Platform — Ismail Chaudhry

Personal portfolio for an Operations, Systems & Automation Engineer. Content-first, judgment-driven site built on the principle: **Interaction exists to reveal meaning — not to impress.**

# Portfolio Platform — Ismail Chaudhry

Personal portfolio for an Operations, Systems & Automation Engineer. Content-first, judgment-driven site built on the principle: **Interaction exists to reveal meaning — not to impress.**

## Phase 2 Complete — Enhancements

Key Improvements:
- **Full-Width Footer**: Replaced constrained layout with a standard 1200px container.
- **Enhanced Contact**: Added visual icons (Email, Phone, LinkedIn) via `lucide-react`.
- **Reliable Booking**: Switched from raw embed to `react-calendly` for stable loading.
- **Visual Depth**: Added subtle background texture to remove the "flat" feel.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3.4
- **Icons:** Lucide React
- **Integration:** React Calendly
- **Content:** MDX support configured
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

No environment variables needed for Phase 1.

## Project Structure

```
/app
  /page.tsx              → Home
  /case-studies
    /page.tsx            → Case Studies (with accordions)
    /flagship
      /page.tsx          → Flagship case study
  /about
    /page.tsx            → About
  /work-with-me
    /page.tsx            → Work With Me

/components
  Nav.tsx                → Global navigation
  CTA.tsx                → "Book a fit check" button
  Accordion.tsx          → Case study accordions

/content                 → Empty (for future MDX files)
```

## Next Steps (Phase 2)

1. Replace placeholder content with final case studies
2. Add real Calendly embed code in `/app/work-with-me/page.tsx`
3. Polish typography, spacing, transitions
4. Add Plausible analytics

## Design System

- **Colors:** #FAFAFA background, #1A1A1A text, #666666 accent, #E5E5E5 borders
- **Typography:** Georgia serif (headings), system sans-serif (body)
- **Spacing:** 80-120px vertical rhythm on desktop
- **Breakpoint:** 768px for mobile
- **Max widths:** 680px prose, 1200px layout

## Content Editing (Post-Phase 1)

All content can be edited directly in the page files:
- `/app/page.tsx` — Home page content
- `/app/case-studies/page.tsx` — Case studies index
- `/app/case-studies/flagship/page.tsx` — Flagship case study
- `/app/about/page.tsx` — About page with experience section
- `/app/work-with-me/page.tsx` — Work With Me page

Future: Move content to MDX files in `/content/` for easier editing.

---

Built with [Claude Code](https://claude.com/claude-code)
