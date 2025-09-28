import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './styles/**/*.{css}'],
  theme: { extend: {} },
  darkMode: 'class'
}
export default config
