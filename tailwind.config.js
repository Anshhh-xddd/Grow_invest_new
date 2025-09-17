/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        midnight: '#0f172a',
        forest: '#064e3b',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(34,197,94,0.15), transparent 60%), radial-gradient(circle at bottom right, rgba(15,23,42,0.2), transparent 65%)',
      },
    },
  },
  plugins: [],
}
