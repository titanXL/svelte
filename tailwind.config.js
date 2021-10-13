const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./public/index.html"],
    enabled: production,
  },
  darkMode: false,
  theme: {
    fontFamily: {
      roboto: "Roboto",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
