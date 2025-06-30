// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1E',
        ash: '#E5E5E7',
        ember: '#D87A56',
        crimson: '#B53C4D',
        lavender: '#B4A1C9',
        cyan: '#9EDCE2',
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
export default config
