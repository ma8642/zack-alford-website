module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Audiowide", "monospace"],
      body: ["Roboto", "sans-serif"],
    },
    height: {
      full: "100%",
      xl: "90vh",
      screen: "100vh",
    },
    extend: {
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 5s infinite",
      },
      zIndex: {
        "-1": "-10",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
