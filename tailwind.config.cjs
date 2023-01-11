/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32
      },
      fontFamily:  {
        sans: "Inter, sans-serif"
      },
      colors: {
        esmerald: {
          700: "#047857",
          600: "#059669",
          500: "#10b981"
        }
      }
    },
  },
  plugins: [],
}
