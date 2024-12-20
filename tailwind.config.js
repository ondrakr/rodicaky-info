/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        modra: "#13375B",
        cerna: "#352E2E"
      },
    },
  },
  plugins: [],
};
