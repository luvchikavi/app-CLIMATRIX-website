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
        // Canopy — the platform's locked design language (Console × Guide,
        // pine accent on a sage canvas). The site wears the app's skin.
        primary: {
          50: '#E9F3EE',
          100: '#D6E9E0',
          200: '#AFD6C6',
          300: '#84BFA8',
          400: '#4F9F82',
          500: '#1F7A5C',
          600: '#1A684E',
          700: '#155540',
          800: '#114233',
          900: '#0C2F24',
        },
        secondary: {
          50: '#EAF0EE',
          100: '#D2DFDA',
          200: '#A8C1B8',
          300: '#7BA294',
          400: '#4E8271',
          500: '#2E6350',
          600: '#265342',
          700: '#1E4335',
          800: '#173428',
          900: '#10241C',
        },
        accent: {
          50: '#EFF9F4',
          100: '#DCF2E8',
          200: '#B8E5D1',
          300: '#8ED6B6',
          400: '#5EC49A',
          500: '#3EAB80',
          600: '#2E9069',
          700: '#247454',
          800: '#1B583F',
          900: '#123C2B',
        },
        canvas: '#F4F7F5',
        ink: '#212724',
        'ink-muted': '#67716B',
      },
      fontFamily: {
        // Nunito Sans via next/font (--font-sans) — the Canopy brand font,
        // same as the platform app.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
