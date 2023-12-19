import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "./navbar"

import * as styles from "../styles/index.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <StaticImage
        src="../images/logo.svg"
        loading="eager"
        quality={95}
        width={274}
        alt="Mowerse LLC page logo"
      />
      <Navbar></Navbar>
    </header>
  )
}
