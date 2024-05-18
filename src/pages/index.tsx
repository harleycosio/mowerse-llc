import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { lightThemeClass, darkThemeClass } from "../styles/themes.css"
import "../styles/global.css"
import { useColorScheme } from "../hooks/use-color-scheme"
import * as styles from "../styles/custom.css"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  const scheme = useColorScheme()
  const schemeClass = scheme === `dark` ? darkThemeClass : lightThemeClass
  const [variant, setVariant] = React.useState<"default" | "invert">(`default`)
  return (
    <div className={[schemeClass, styles.wrapper].join(` `)}>
      <Header></Header>
      <main className={styles.innerWrapper}>
        <div className={styles.leftCol}>
          <h1>Get the perfect yard without breaking a sweat</h1>
          <p className={styles.subHead}>
            Free estimate in just one click. No contracts, if you want to stop
            service, just say the word.
          </p>
          <div className={styles.ctaBtns}>
            <a href="#" className={styles.primaryCta}>
              Get your free quote
            </a>
            <a href="#" className={styles.secondaryCta}>
              <span>Learn more</span>
              <svg viewBox="0 0 24 8" fill="none" className={styles.svgCta}>
                <path
                  d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5L23 4.5V3.5L0 3.5L0 4.5Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div className={styles.news}>
            <p className={styles.ranking}>#1</p>
            <p className={styles.details}>
              In Louisville/Jefferson County with more than <strong>120</strong>{" "}
              positive reviews and overall rating of 5/5.
            </p>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.card}>
            <StaticImage
              src="https://images.unsplash.com/photo-1658180952728-8e84083ecb73?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              quality={95}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
              alt="a pool with plants and a stone wall with a stone wall and trees"
              className={styles.backgroundImage}
            />
          </div>
          <div>
            <StaticImage
              src="https://images.unsplash.com/photo-1620393508176-1474bd6f6f9d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              quality={95}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
              alt="green metal gate near green grass field during daytime"
              className={styles.backgroundImage}
            />
          </div>
          <div>
            <StaticImage
              src="https://images.unsplash.com/photo-1625766924110-efbb2db1d1d0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              quality={95}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
              alt="green grass field with trees"
              className={styles.backgroundImage}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mowerse LLC</title>
