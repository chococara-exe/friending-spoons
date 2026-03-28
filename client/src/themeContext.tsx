import { createContext, useContext, useEffect, useState } from "react"

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

  // ← add this — writes CSS vars to <html> so the portal can see them
  useEffect(() => {
    const root = document.documentElement
    const isDark = theme === "dark"
    root.style.setProperty("--surface", isDark ? "#1a1a24" : "#ffffff")
    root.style.setProperty("--border",  isDark ? "#2a2a3a" : "#e8e8f0")
    root.style.setProperty("--text",    isDark ? "#f0f0f8" : "#111118")
    root.style.setProperty("--subtext", isDark ? "#8888a8" : "#6666a0")
    root.style.setProperty("--accent",  ACCENTS[accent].bg)
  }, [accent, theme])

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