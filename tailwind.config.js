module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["IBM Plex Mono", "monospace"],
      body: ["Roboto", "sans-serif"],
    },
    height: {
      xl: "90vh",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
