module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax_regular: ["Chillax-Regular", "sans-serif"],
        chillax_bold: ["Chillax-Bold", "sans-serif"],
        chillax_semibold: ["Chillax-Semibold", "sans-serif"],
        chillax_medium: ["Chillax-Medium", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
