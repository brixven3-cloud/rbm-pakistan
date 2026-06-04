import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Canvas & surfaces (dark theme) ────────────────────────────
        canvas:  '#08090B',   // Outermost body background
        surface: {
          DEFAULT: '#19181B', // Cards, tiles
          2:       '#1B1A1E', // Inputs, search bar
          3:       '#100F13', // Footer, bottom nav (darkest)
          soft:    '#1D1C20', // Hover states on dark
        },
        // Keep 'page' as alias for canvas for backward compatibility
        page: '#08090B',
        // ── Accent: Copper → Copper-Red ───────────────────────────────
        copper: {
          DEFAULT: '#DD7A4E', // THE accent — icons, prices, CTAs, active states
          red:     '#C0392B', // Deep red gradient end / urgent accents
          muted:   '#CE9279', // Soft accent text
        },
        // ── Text ──────────────────────────────────────────────────────
        ink: {
          DEFAULT: '#FFFFFF', // Primary text (white on dark)
          muted:   '#9AA0A6', // Secondary text / captions
          faint:   '#5C6370', // Placeholder / disabled
        },
        // ── Borders (dark hairline) ───────────────────────────────────
        hairline: '#2E2A29',  // Default card/section border
        // ── States ───────────────────────────────────────────────────
        success: { DEFAULT: '#1D9E75', soft: '#0E2E23' },
        danger:  { DEFAULT: '#E24B4A', soft: '#2E1212' },
        warning: { DEFAULT: '#D9A23A', soft: '#2E2010' },
      },
      backgroundImage: {
        // Warm radial glow from the top (page background)
        'page-grad':   'radial-gradient(130% 70% at 50% -5%, #232024 0%, #15151A 42%, #0C0D0F 100%)',
        // Primary CTA gradient — buttons, FAB, icon tiles
        'accent-grad': 'linear-gradient(160deg, #DD7A4E, #C0392B)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.45' }],
      },
      lineHeight: {
        body:    '1.6',
        heading: '1.25',
      },
      borderRadius: {
        card:  '16px',  // 14-16px per spec
        btn:   '8px',
        input: '8px',
        pill:  '9999px',
      },
      boxShadow: {
        card:          '0 10px 26px rgba(0,0,0,0.45)',
        elevated:      '0 14px 36px rgba(0,0,0,0.55)',
        'search-glow': '0 0 0 1px rgba(221,122,78,0.30), 0 0 18px rgba(221,122,78,0.12)',
        'copper-glow': '0 0 0 1px rgba(221,122,78,0.40), 0 0 24px rgba(221,122,78,0.20)',
        'copper-sm':   '0 2px 8px -1px rgba(221,122,78,0.35)',
        'copper-md':   '0 4px 16px -2px rgba(221,122,78,0.28)',
      },
      animation: {
        'fade-in':  'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.28s cubic-bezier(0.4,0,0.2,1)',
        shimmer:    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
