module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: "#64748B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A"
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Raleway', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  
    require('@tailwindcss/forms'), 
    require('@tailwindcss/line-clamp'), 
  ],
}
