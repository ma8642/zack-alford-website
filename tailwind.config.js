module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Audiowide", "monospace"],
      body: ["Roboto", "sans-serif"],
    },
    height: {
      xl: "90vh",
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
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
