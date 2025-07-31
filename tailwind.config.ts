import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        section: '#18181b',
        accent: {
          DEFAULT: '#00c6ff',
          dark: '#0072ff',
        },
        text: {
          DEFAULT: '#fff',
          muted: '#d1d5db',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #0a0a0a 0%, #18181b 100%)',
        'accent-gradient': 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
      },
      boxShadow: {
        soft: '0 8px 32px 0 rgba(31,38,135,0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;