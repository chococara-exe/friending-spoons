import { createContext, useContext, useState } from "react"

export type Theme = "dark" | "light"
export type AccentColor = "violet" | "rose" | "amber" | "emerald" | "sky"

export const ACCENTS: Record<AccentColor, { bg: string; light: string; label: string }> = {
  violet:  { bg: "#7c3aed", light: "#ede9fe", label: "Violet"  },
  rose:    { bg: "#e11d48", light: "#ffe4e6", label: "Rose"    },
  amber:   { bg: "#d97706", light: "#fef3c7", label: "Amber"   },
  emerald: { bg: "#059669", light: "#d1fae5", label: "Emerald" },
  sky:     { bg: "#0284c7", light: "#e0f2fe", label: "Sky"     },
}

interface ThemeContextType {
  accent: AccentColor
  setAccent: (a: AccentColor) => void
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useState<AccentColor>("violet")
  const [theme, setTheme] = useState<Theme>("dark")
  return (
    <ThemeContext.Provider value={{ accent, setAccent, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider")
  return ctx
}