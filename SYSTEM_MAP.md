# SYSTEM_MAP.md — Bento Grid Responsive Architecture

## Grid System Overview

The portfolio uses a **12-column CSS grid** that ensures 100% left-alignment and responsive behavior.

### Core CSS Variables

```css
:root {
  /* Brand Colors */
  --carolean-red: #D31E40;
  --carolean-navy: #2C3E6E;
  
  /* Theme Colors */
  --background: #121212;
  --foreground: #FAFAFA;
  --accent-cyan: #00FFFF;
  --accent-purple: #BB86FC;
  --border: #333333;
  
  /* Spacing */
  --grid-gap: 1.5rem;
  --bento-padding: 2rem;
  --bento-radius: 8px;
}
```

---

## Grid Architecture

### The 12-Column Base

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gap);
}
```

### Responsive Breakpoints

| Breakpoint | Columns | Usage |
|------------|---------|-------|
| Mobile (<768px) | `col-span-12` | Full width, stacked |
| Tablet (768px-1023px) | `col-span-6` | 2-column layout |
| Desktop (≥1024px) | `col-span-4` | 3-column layout |

---

## Bento Box Specification

### CSS Definition

```css
.bento-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.bento-box:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  border-color: #444;
}
```

### Border Integrity Rules

1. **All content blocks** must be wrapped in `.bento-box`
2. **Never break the border** by setting `overflow: hidden` incorrectly
3. **Hover state** must show cyan glow with `box-shadow`

---

## Adding a 4th Box (e.g., "Real Estate")

To add a new experience box, simply add another grid item:

```tsx
{/* Box 4: Real Estate */}
<div className="col-span-12 md:col-span-6 lg:col-span-4">
  <div className="bento-box p-8 h-full">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 rounded-full bg-accent-cyan"></div>
      <h3 className="text-xl font-mono text-accent-cyan">Real Estate</h3>
    </div>
    <div className="space-y-4 text-foreground-muted">
      <div>
        <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Scale</p>
        <p className="text-sm">Property management across X units.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-accent-light mb-1 font-mono">The Build</p>
        <p className="text-sm">Automated tenant lifecycle and maintenance workflows.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-accent-cyan mb-1 font-mono">The Result</p>
        <p className="text-sm font-mono text-accent-cyan">Zero vacancy drift</p>
      </div>
    </div>
  </div>
</div>
```

### Wrapping Behavior

- On desktop: 4 boxes → 3 in row 1, 1 in row 2 (left-aligned)
- On tablet: 4 boxes → 2 per row
- On mobile: 4 boxes → stacked vertically

**The grid wraps logically without breaking left-alignment or border integrity.**

---

## Color Reference

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Carolean Red | `#D31E40` | `--carolean-red` | Transport sector badge |
| Carolean Navy | `#2C3E6E` | `--carolean-navy` | Tech sector badge |
| Accent Cyan | `#00FFFF` | `--accent-cyan` | Primary highlights, CTAs |
| Accent Purple | `#BB86FC` | `--accent-purple` | Secondary accents |
| Border | `#333333` | `--border` | Bento box borders |

---

*"If it doesn't look like an Operations Dashboard, it isn't finished."*
