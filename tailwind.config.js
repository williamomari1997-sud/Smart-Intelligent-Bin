/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0b868e",
        "background-light": "#f1f2f4",
        "background-dark": "#0f172a",
        "surface-dark": "#1e293b",
        "accent-coral": "#CC614D",
        "neon-green": "#3ef61e"
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "mono": ["Space Grotesk", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
