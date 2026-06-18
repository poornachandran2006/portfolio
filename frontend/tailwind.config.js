/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F8F6',
        'bg-card': '#FAFAF8',
        'text-primary': '#0D0D0D',
        'text-secondary': '#4A4A4A',
        'text-muted': '#8A8A8A',
        'accent-primary': '#0A0A0A',
        'accent-hover': '#1A1A1A',
        'border-light': '#E8E8E4',
        'border-strong': '#C8C8C2',
        'tag-bg': '#F0F0ED',
        'tag-text': '#2A2A2A',
      },
    },
  },
  plugins: [],
}
