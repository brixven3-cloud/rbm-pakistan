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
        // Primary: teal/emerald — buttons, links, active states
        primary: {
          DEFAULT: '#0F9D7A',
          dark: '#0B7A5E',
          soft: '#E3F4EF',
          50: '#F0FAF7',
          100: '#E3F4EF',
          200: '#B9E8D9',
          500: '#0F9D7A',
          600: '#0B7A5E',
          700: '#086146',
        },
        // Navy: headings, nav, footer, depth
        navy: {
          DEFAULT: '#0E2A3B',
          soft: '#1C3D52',
          50: '#EEF3F6',
          100: '#D5E2EA',
          800: '#0E2A3B',
        },
        // Gold: ONLY for Featured / Verified badges
        gold: {
          DEFAULT: '#C99A3C',
          soft: '#FDF4E3',
          dark: '#A07830',
        },
        // Semantic text
        ink: {
          DEFAULT: '#16201A',
          muted: '#6B726E',
          faint: '#9CA3A0',
        },
        // Backgrounds
        page: '#FAFAF8',
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F5F3',
        },
        // Hairline border
        hairline: '#E7E7E2',
        // States
        success: {
          DEFAULT: '#1D9E75',
          soft: '#E8F8F3',
        },
        danger: {
          DEFAULT: '#E24B4A',
          soft: '#FEECEC',
        },
        warning: {
          DEFAULT: '#BA7517',
          soft: '#FEF3E0',
        },
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
        card: '0 1px 3px 0 rgba(14, 42, 59, 0.06), 0 1px 2px -1px rgba(14, 42, 59, 0.04)',
        elevated: '0 4px 12px -2px rgba(14, 42, 59, 0.08), 0 2px 4px -2px rgba(14, 42, 59, 0.04)',
        sticky: '0 1px 0 0 #E7E7E2',
        float: '0 8px 24px -4px rgba(14, 42, 59, 0.18)',
        'primary-sm': '0 2px 8px -1px rgba(15, 157, 122, 0.30)',
        'primary-md': '0 4px 16px -2px rgba(15, 157, 122, 0.28)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-ring': 'pulseRing 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(15, 157, 122, 0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(15, 157, 122, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(15, 157, 122, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
