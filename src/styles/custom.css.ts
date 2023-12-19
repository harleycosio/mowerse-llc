/* eslint-disable prettier/prettier */
import { style, styleVariants, globalStyle } from "@vanilla-extract/css"
import { vars } from "./themes.css"
import background from "../images/confetti.svg"

export const wrapper = style({
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.background,
  color: vars.colors.body,
  maxWidth: 1200,
  margin: "0 auto",
})

export const innerWrapper = style({
  marginTop: "5rem",
  display: "flex",
  gap: "8rem",
})

export const header = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
})

export const mainNav = style({
  margin: "4rem",
  listStyleType: "none",
  display: "flex",
  gap: vars.space.xl,
})

globalStyle(`${mainNav} > li > a`, {
  textDecoration: "none",
  color: vars.colors.black,
  textTransform: "uppercase",
  fontSize: vars.fontSize.lg,
  position: "relative",
})

export const active = style({
  "::before": {
    position: "absolute",
    content: ``,
    width: "35%",
    height: 1,
    borderBottom: "2px solid black",
    bottom: -6,
  },
})

export const inactive = style({
  selectors: {
    "&:hover::before": {
      width: "35%",
    },
  },
  "::before": {
    position: "absolute",
    content: ``,
    width: "0%",
    height: 1,
    borderBottom: "2px solid #9CA3AF",
    bottom: -6,
    transition: "width .3s",
  },
})

export const leftCol = style({
  width: "38%",
})

export const rightCol = style({
  flexGrow: 1,
  display: "grid",
  gap: "1.7rem",
  gridTemplateColumns: "repeat(2,auto)",
  gridTemplateAreas: `
    "left ."
    "left ."
  `,
})

globalStyle(`${rightCol} > div`, {
  position: "relative",
  backgroundSize: 150,
})

export const card = style({
  gridArea: "left",
})

export const backgroundImage = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: vars.radii.md,
})

export const subHead = style({
  fontSize: "2rem",
  marginTop: vars.space.xl,
})

export const ctaBtns = style({
  display: "flex",
  gap: vars.space.xl,
  margin: "4em 0",
})

export const primaryCta = style({
  backgroundColor: vars.colors.orange200,
  color: vars.colors.black,
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: vars.fontSize.xl,
  borderRadius: vars.radii.md,
  padding: "1em 2em",
  ":hover": {
    background: vars.colors.orange300,
  },
})

export const secondaryCta = style({
  color: vars.colors.black,
  textDecoration: "none",
  fontSize: vars.fontSize.xl,
  display: "block",
  padding: "1em 0",
  ":hover": {
    textDecoration: "underline",
  },
})

export const svgCta = style({
  width: 25,
  marginLeft: vars.space.md,
  transition: "transform .3s",
  selectors: {
    [`${secondaryCta}:hover &`]: {
      transform: "translateX(10px)",
    },
  },
})

export const news = style({
  display: "flex",
  marginTop: "4em",
  gap: vars.space.xl,
  padding: "3em",
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderColor: vars.colors.black,
  borderRadius: vars.radii.md,
  position: "relative",
  "::before": {
    position: "absolute",
    content: ``,
    backgroundImage: `url(${background})`,
    width: 100,
    height: 100,
    top: -30,
    left: -30,
    zIndex: 2,
  },
})

export const ranking = style({
  color: vars.colors.black,
  fontSize: "4rem",
  lineHeight: "100%",
})

export const details = style({
  fontSize: "1.6rem",
  fontWeight: 200,
})

globalStyle(`${details} > strong`, {
  fontWeight: "bold",
  color: vars.colors.black,
})

export const button = style({
  border: `none`,
  background: `none`,
  color: vars.colors.link,
  borderWidth: `1px`,
  borderStyle: `solid`,
  borderColor: `transparent`,
  transition: `all 0.3s ease-in-out`,
  borderRadius: vars.radii.sm,
  paddingLeft: vars.space.sm,
  paddingRight: vars.space.sm,
  selectors: {
    "&:hover": {
      color: vars.colors.linkHover,
      cursor: `pointer`,
      borderColor: vars.colors.linkHover,
    },
  },
})

const topBarHeadingBase = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
})

export const topBarHeading = styleVariants({
  light: [topBarHeadingBase, { color: `black` }],
  dark: [topBarHeadingBase, { color: `white` }],
})

const footerBase = style({
  fontSize: vars.fontSize.sm,
  textAlign: `center`,
  marginTop: vars.space.xl,
})

const footerColors = {
  light: vars.colors.gray600,
  dark: vars.colors.gray400,
}

export const footer = styleVariants(footerColors, (color) => [
  footerBase,
  { color },
])
