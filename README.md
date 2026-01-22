# CLIMATRIX Website

Marketing website for the CLIMATRIX carbon accounting platform.

## Overview

This is the public-facing marketing website for CLIMATRIX, featuring:
- Landing page with product overview
- Features showcase
- Pricing information
- Demo request form
- Contact information

## Tech Stack

- **Framework**: Next.js 14
- **UI**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Edit .env.local with your settings

# Start development server
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
website/
├── src/
│   ├── app/           # Next.js pages
│   │   ├── page.tsx   # Home/landing page
│   │   ├── features/  # Features page
│   │   ├── pricing/   # Pricing page
│   │   └── demo/      # Demo request page
│   └── components/    # Reusable components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/            # Static assets
└── package.json
```

## Deployment

### Vercel

1. Import repository to Vercel
2. Set root directory to `/` (or website folder path)
3. Configure environment variables:
   - `NEXT_PUBLIC_APP_URL`: Main application URL

### Environment Variables

| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_APP_URL | URL to main CLIMATRIX application (for "Sign In" buttons) |

## Connecting to Main App

The website's "Sign In" and "Get Started" buttons link to the main CLIMATRIX application.

Update these URLs in:
- `src/components/Navbar.tsx` - `APP_URL` constant
- `src/app/page.tsx` - `APP_URL` constant
- `src/app/demo/page.tsx` - Links to registration

## License

Proprietary - All rights reserved.
