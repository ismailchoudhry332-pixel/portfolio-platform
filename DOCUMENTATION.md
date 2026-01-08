# DOCUMENTATION.md — Ismail Chaudhry Portfolio System

## Section A: The Logic Engine

### Project Architecture

This portfolio represents a **Domain-Driven Design (DDD)** approach to systems engineering. While the portfolio itself is a Next.js application, it documents systems built with the following architecture:

```
domain/          # Core business logic (pricing rules, compliance guards)
├── pricing/     # Deterministic pricing algorithms
├── compliance/  # UK Driver Hours, margin protection
└── fleet/       # Vehicle type definitions, rates

policies/        # Business rule enforcement
├── empty-leg/   # 20km Smart-Radius logic
├── driver-hours/ # 13h compliance guard
└── margins/     # Floor price + 12% range algorithm

infrastructure/  # External integrations
├── google-maps/ # Distance Matrix API
├── crm/         # Monday.com SDK
└── email/       # SendGrid SMTP
```

### Pricing Formulas

#### 1. Smart Empty-Leg Logic (20km Radius)
```
IF distance(yard, pickup) <= 20km THEN
  empty_leg_charge = 0
ELSE
  empty_leg_charge = (distance - 20) * per_mile_rate
END
```

#### 2. Driver Compliance Rule (13h Guard)
```
IF journey_duration > 13h THEN
  drivers_required = 2
  price += second_driver_rate
  compliance_flag = "UK_DRIVER_HOURS_EXCEEDED"
END
```

#### 3. Dynamic Margin Protection
```
floor_price = base_cost * 1.20  # Minimum 20% margin
ceiling_price = floor_price * 1.12  # +12% range
displayed_range = [floor_price, ceiling_price]
```

---

## Section B: Tech Stack & Dependencies

### Core Stack
| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime | 20.x LTS |
| TypeScript | Type safety | 5.x |
| Redis | Session/cache | 7.x |
| Sentry | Error monitoring | Latest |

### APIs & Integrations
| Service | Purpose | Docs |
|---------|---------|------|
| Google Maps Distance Matrix | Journey calculation | maps.google.com |
| SendGrid | Transactional email | sendgrid.com |
| Monday.com SDK | CRM automation | monday.com/developers |

### Orchestration
- **n8n (Self-hosted)**: Webhook triggers for lead capture → CRM creation
- **Make.com**: Enterprise API bridging for complex multi-step workflows

---

## Section C: Deployment Manual

### Environment Variables
```env
# Google Maps
GOOGLE_MAPS_API_KEY=your_key_here

# Redis
REDIS_URL=redis://localhost:6379

# Sentry
SENTRY_DSN=https://xxx@sentry.io/xxx

# SendGrid
SENDGRID_API_KEY=SG.xxx

# Monday.com
MONDAY_API_TOKEN=xxx

# Admin
ADMIN_SECRET=your_secret_here
```

### Build Commands
```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel
npx vercel --prod
```

### Admin Access
The fleet rates and pricing variables are managed via a JSON-based CRUD interface:

1. Access: `/admin/pricing` (protected route)
2. Authentication: Bearer token via `ADMIN_SECRET`
3. Editable fields:
   - Per-mile rates by vehicle type
   - Empty-leg radius threshold
   - Margin floor percentage
   - Driver hourly rates

---

## Visual Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Background | #121212 | Body background |
| Foreground | #FAFAFA | Primary text |
| Accent Cyan | #00FFFF | CTAs, highlights |
| Accent Purple | #BB86FC | Secondary accents |
| Border | #333333 | Bento box borders |

### Typography
- **Headers**: JetBrains Mono (monospace)
- **Body**: System fonts (-apple-system, etc.)

### Bento Box CSS
```css
.bento-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 8px;
}
.bento-box:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  border-color: #444;
}
```

---

*"This portfolio is a piece of high-level engineering infrastructure. Structured, Deterministic, and Zero Drift."*
