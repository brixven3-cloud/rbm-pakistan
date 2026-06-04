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
        // ── BLACK ZONE (header / hero / nav / footer) ─────────────────
        black: {
          DEFAULT: '#0E1116',
          soft: '#1A1F26',
        },
        // ── Gold: THE single accent ────────────────────────────────────
        // CTAs on dark, Featured/Verified badges, active states, key highlights
        gold: {
          DEFAULT: '#C99A3C',
          dark: '#A87E2C',
          soft: '#F5EAD2',
          50: '#FDF8EE',
          100: '#F5EAD2',
        },
        // ── Muted text on dark backgrounds ─────────────────────────────
        dark: {
          muted: '#8A9099',
        },
        // ── LIGHT CONTENT ZONE ─────────────────────────────────────────
        ink: {
          DEFAULT: '#16201A',
          muted: '#6B726E',
          faint: '#9CA3A0',
        },
        page: '#FAFAF8',
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F5F3',
        },
        hairline: '#E7E7E2',
        // ── States ─────────────────────────────────────────────────────
        success: { DEFAULT: '#1D9E75', soft: '#E8F8F3' },
        danger:  { DEFAULT: '#E24B4A', soft: '#FEECEC' },
        warning: { DEFAULT: '#BA7517', soft: '#FEF3E0' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.45' }],
      },
      lineHeight: {
        body: '1.6',
        heading: '1.25',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        input: '8px',
        pill: '9999px',
      },
      boxShadow: {
        card:     '0 1px 3px 0 rgba(14,17,22,0.08), 0 1px 2px -1px rgba(14,17,22,0.06)',
        elevated: '0 4px 12px -2px rgba(14,17,22,0.10), 0 2px 4px -2px rgba(14,17,22,0.06)',
        sticky:   '0 1px 0 0 #E7E7E2',
        float:    '0 8px 24px -4px rgba(14,17,22,0.25)',
        hero:     '0 4px 24px rgba(0,0,0,0.35)',
        'gold-sm':'0 2px 8px -1px rgba(201,154,60,0.40)',
        'gold-md':'0 4px 16px -2px rgba(201,154,60,0.35)',
      },
      animation: {
        'fade-in':   'fadeIn 0.2s ease-out',
        'slide-up':  'slideUp 0.25s cubic-bezier(0.4,0,0.2,1)',
        shimmer:     'shimmer 2s linear infinite',
        float:       'floatBob 2.5s ease-in-out infinite',
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
