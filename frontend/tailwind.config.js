/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: {
          DEFAULT: '#0a0a0a',
          secondary: '#111111',
          tertiary: '#1a1a1a',
        },
        'cyan-accent': {
          DEFAULT: '#00c8e8',
          hover: '#33d6ee',
          subtle: '#00c8e810',
          border: '#00c8e830',
        },
        'slate-text': {
          primary: '#e8e8e8',
          secondary: '#8892a4',
          muted: '#4a5568',
        },
        border: {
          DEFAULT: '#1e1e1e',
        },
      },
      maxWidth: {
        content: '1100px',
      },
      boxShadow: {
        nav: '0 4px 20px #00000080',
        card: '0 8px 30px #00000060',
        'glow-cyan': '0 0 20px #00c8e830',
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
      },
    },
  },
  plugins: [],
}
