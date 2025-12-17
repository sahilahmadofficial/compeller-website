# Compeller - Tech Consultancy Website

A futuristic, cyberpunk-inspired tech consultancy website built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- **Animated Particle Background** - Interactive grid with connected dots
- **Glassmorphism UI** - Modern frosted glass effects throughout
- **Playful Micro-interactions** - Fun hover effects, easter eggs, and animations
- **Smooth Scroll Navigation** - Sticky header with section-based navigation
- **WhatsApp Integration** - Contact form sends messages directly to WhatsApp
- **Fully Responsive** - Mobile-first design that works on all devices

## Sections

- Hero with typing animation and floating code snippets
- Services showcase with interactive cards
- Tech stack marquee with infinite scroll
- Process timeline (horizontal/vertical responsive)
- Why Choose Us with animated stats
- Team section introducing the founders and their expertise
- Client testimonials carousel
- Contact form with WhatsApp integration
- Footer with newsletter signup

## Color Theme

The website uses a unique warm-to-cool color palette that sets it apart from typical tech sites:

- **Primary (Coral):** #FF6B6B - Warm, energetic accent for CTAs and highlights
- **Secondary (Mint/Teal):** #4ECDC4 - Cool contrast for balance and visual interest
- **Accent (Amber):** #FFAB4C - Adds warmth to gradients and hover states
- **Background (Dark Slate):** #0A0A0F - Rich, sophisticated dark mode base
- **Surface (Darker Slate):** #0F0F14 - Card and elevated element backgrounds
- **Muted:** #9CA3AF - Secondary text and borders

This coral-to-mint gradient combination creates a memorable, approachable yet futuristic aesthetic.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Components:** shadcn/ui
- **Fonts:** Inter, JetBrains Mono
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Theme and custom animations
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main page composition
├── components/
│   ├── navigation.tsx    # Sticky header with mobile menu
│   ├── particle-background.tsx
│   ├── scroll-animation.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── services.tsx
│       ├── tech-stack.tsx
│       ├── process.tsx
│       ├── why-choose-us.tsx
│       ├── team.tsx        # Team section introducing the founders and their expertise
│       ├── testimonials.tsx
│       ├── contact.tsx
│       └── footer.tsx
└── public/
    └── logo.png
```

## Easter Eggs

- Click the logo 5+ times for fun phrases
- Click 10+ times to add a rocket emoji
- Click the sparkle badge in hero for rainbow shimmer
- Hover on tech stack icons for fun facts
- Watch for playful loading messages in the contact form

## Environment Variables

No environment variables required for basic functionality.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

For inquiries, use the contact form on the website or reach out via WhatsApp.
