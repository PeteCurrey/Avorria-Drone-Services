import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        ui:      ['var(--font-ui)',      'sans-serif'],
      },
      colors: {
        accent: '#c8a96e',
        'accent-light': '#e2cc9e',
        dark: '#080808',
        mid: '#111111',
      },
      fontSize: {
        hero: ['clamp(72px, 9vw, 136px)', { lineHeight: '0.92' }],
        section: ['clamp(52px, 6.5vw, 96px)', { lineHeight: '0.95' }],
        contact: ['clamp(64px, 8vw, 112px)', { lineHeight: '0.93' }],
      },
    },
  },
  plugins: [],
}

export default config
