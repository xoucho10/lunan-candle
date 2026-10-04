/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ivory: "#FFFCF7", espresso: "#3C2415", gold: "#C5A880", sand: "#F5EEE6", terracotta: "#8B5E3C" },
      fontFamily: { serif: ["Cormorant Garamond", "serif"], sans: ["Inter", "sans-serif"] }
    }
  },
  plugins: [],
}
