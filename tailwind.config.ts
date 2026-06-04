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
        // ── Charcoal (header / footer) ─────────────────────────────────
        charcoal: {
          DEFAULT: '#15171C',
          soft:    '#1A1D23',
          muted:   '#2B2F36',
        },
        // ── Copper: THE single accent ─────────────────────────────────
        // logo, icons, CTAs, active states, AI bot, "Featured" badges
        copper: {
          DEFAULT: '#D9764A',
          dark:    '#C95F32',
          soft:    '#FBF1EB',
          border:  '#EBD3C4',
        },
        // ── Muted text on dark backgrounds ───────────────────────────
        dark: {
          muted: '#9AA0A6',
        },
        // ── Light content zone ────────────────────────────────────────
        ink: {
          DEFAULT: '#16201A',
          muted:   '#6B726E',
          faint:   '#9CA3A0',
        },
        page:    '#FAFAF8',
        surface: {
          DEFAULT: '#FFFFFF',
          soft:    '#F5F5F3',
        },
        hairline: '#E7E7E2',
        // ── States ───────────────────────────────────────────────────
        success: { DEFAULT: '#1D9E75', soft: '#E8F8F3' },
        danger:  { DEFAULT: '#E24B4A', soft: '#FEECEC' },
        warning: { DEFAULT: '#BA7517', soft: '#FEF3E0' },
      },
      backgroundImage: {
        // Charcoal gradient — ONLY the top header band
        'header-grad': 'linear-gradient(160deg, #2B2F36 0%, #1A1D23 55%, #15171C 100%)',
        // Copper gradient — AI FAB button fill
        'copper-grad': 'linear-gradient(160deg, #E08A5C, #C95F32)',
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
        card:  '12px',
        btn:   '8px',
        input: '8px',
        pill:  '9999px',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgba(21,23,28,0.07), 0 1px 2px -1px rgba(21,23,28,0.05)',
        elevated:   '0 4px 12px -2px rgba(21,23,28,0.10), 0 2px 4px -2px rgba(21,23,28,0.06)',
        sticky:     '0 1px 0 0 #E7E7E2',
        float:      '0 8px 24px -4px rgba(21,23,28,0.20)',
        hero:       '0 4px 24px rgba(0,0,0,0.30)',
        'copper-sm':'0 2px 8px -1px rgba(217,118,74,0.35)',
        'copper-md':'0 4px 16px -2px rgba(217,118,74,0.28)',
      },
      animation: {
        'fade-in':  'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.28s cubic-bezier(0.4,0,0.2,1)',
        shimmer:    'shimmer 2s linear infinite',
        float:      'floatBob 2.5s ease-in-out infinite',
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
        floatBob: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
