import { useEffect, useState } from "react"

const query = (mode: string) => `(prefers-color-scheme: ${mode})`

const isBrowser = typeof window !== "undefined"

export const useColorScheme = () => {
  if (!isBrowser) {
    return
  }
  const darkQuery = window.matchMedia?.(query(`dark`))
  const lightQuery = window.matchMedia?.(query(`light`))

  const isDark = darkQuery?.matches
  const isLight = lightQuery?.matches

  const [preferredColorSchema, setPreferredColorScheme] = useState<
    "light" | "dark"
  >(`light`)

  useEffect(() => {
    if (isDark) setPreferredColorScheme(`dark`)
    else setPreferredColorScheme(`light`)
  }, [isDark, isLight])

  useEffect(() => {
    const darkListener = ({ matches }: { matches: any }) =>
      matches && setPreferredColorScheme(`dark`)
    const lightListener = ({ matches }: { matches: any }) =>
      matches && setPreferredColorScheme(`light`)

    darkQuery!.addEventListener(`change`, darkListener)
    lightQuery!.addEventListener(`change`, lightListener)

    return () => {
      darkQuery!.removeEventListener(`change`, darkListener)
      lightQuery!.removeEventListener(`change`, lightListener)
    }
  }, [])

  return preferredColorSchema
}
