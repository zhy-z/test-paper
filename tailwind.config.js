/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  css: {
    preflight: (preflight) => {
      const newPreflight = { ...preflight };
      delete newPreflight['a, [role="button"]'].textDecoration;
      return newPreflight;
    },
  },
} 