import { globalStyle } from "@vanilla-extract/css"
import { vars } from "./themes.css"

globalStyle(`*`, {
  margin: 0,
})

globalStyle("html", {
  height: `100%`,
  fontSize: "62.5%",
})

globalStyle(`body`, {
  height: `100%`,
  WebkitFontSmoothing: `antialiased`,
})

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
})

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
})

globalStyle(`h1`, {
  fontSize: `5rem`,
  fontFamily: "Playfair Display",
  fontWeight: "lighter",
  color: vars.colors.black,
})

globalStyle(`#root`, {
  isolation: `isolate`,
})
