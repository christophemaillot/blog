import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blog: {
        100: "#E8E5C2",
        200: "#D0CAB0",
        300: "#C1BAB1"
      },
      emph1: "#92205C",
      emph2: "#39113E",
    },
  },
  plugins: [],
}

export default config
