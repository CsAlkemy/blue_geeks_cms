const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "#111827",
      primary: "#EB5757",
      black: colors.black,
      green: colors.green,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      cyan: colors.cyan,
      gray: colors.gray,
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
