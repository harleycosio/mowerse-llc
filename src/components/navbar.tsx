import React from "react"
import * as styles from "../styles/index.css"

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <a href="/" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="/" className={styles.inactive}>
            Pricing
          </a>
        </li>
        <li>
          <a href="/" className={styles.inactive}>
            Services
          </a>
        </li>
        <li>
          <a href="/" className={styles.inactive}>
            Gallery
          </a>
        </li>
        <li>
          <a href="/" className={styles.inactive}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
