import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Open Sans", "Arial", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  headerColor: "#212121",
  bodyColor: "#212121",
})

typography.injectStyles()

export default typography
