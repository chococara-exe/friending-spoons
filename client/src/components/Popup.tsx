import SettingsIcon from "@mui/icons-material/Settings"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import "../Popup.css"
import { useTheme, ACCENTS } from "../themeContext"

export function SettingsPopup() {
  const { accent, setAccent, theme, setTheme } = useTheme()

  const isDark  = theme === "dark"
  const surface = isDark ? "#1a1a24" : "#ffffff"
  const border  = isDark ? "#2a2a3a" : "#e8e8f0"
  const text    = isDark ? "#f0f0f8" : "#111118"
  const subtext = isDark ? "#8888a8" : "#6666a0"

  return (
    <Popup
      trigger={
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <SettingsIcon style={{ color: ACCENTS[accent].bg }} />
        </button>
      }
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      contentStyle={{
        background: surface, border: `1px solid ${border}`,
        borderRadius: "20px", padding: 0,
        width: "min(520px, 94vw)", color: text,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="settings-header">
        <div className="settings-title" style={{ color: text }}>Settings</div>
      </div>

      <div className="settings-body">
        <div style={{ marginBottom: "20px" }}>
          <div className="section-label" style={{ color: subtext }}>Theme</div>
          <div className="theme-grid">
            {(["dark", "light"] as const).map(t => (
              <button key={t} className="theme-btn" onClick={() => setTheme(t)}
                style={{
                  background: t === "dark" ? "#0f0f13" : "#f8f8fc",
                  border: `2px solid ${theme === t ? ACCENTS[accent].bg : border}`,
                }}
              >
                <span>{t === "dark" ? "🌙" : "☀️"}</span>
                <span style={{ color: t === "dark" ? "#f0f0f8" : "#111118", fontSize: 13, fontWeight: 600 }}>{t}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="section-label" style={{ color: subtext }}>Accent Color</div>
          <div className="accent-row">
            {(Object.entries(ACCENTS) as [AccentColor, typeof ACCENTS[AccentColor]][]).map(([key, val]) => (
              <button key={key} className="accent-btn" onClick={() => setAccent(key)} title={val.label}
                style={{
                  background: val.bg,
                  border: `3px solid ${accent === key ? text : "transparent"}`,
                  transform: accent === key ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Popup>
  )
}

export function FAQPopup() {
  const { accent, theme } = useTheme()  // reads same global colour, no setter needed

  const isDark  = theme === "dark"
  const surface = isDark ? "#1a1a24" : "#ffffff"
  const border  = isDark ? "#2a2a3a" : "#e8e8f0"
  const text    = isDark ? "#f0f0f8" : "#111118"
  const subtext = isDark ? "#8888a8" : "#6666a0"

  const faqs = [
    { q: "What is this app?",         a: "A place to connect with friends and spooners." },
    { q: "How do I add a friend?",    a: "Click the add button on the friends page."     },
    { q: "Can I change my profile?",  a: "Yes, use the settings popup to update details." },
  ]

  return (
    <Popup
      trigger={
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <QuestionMarkIcon style={{ color: ACCENTS[accent].bg }} />
        </button>
      }
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      contentStyle={{
        background: surface, border: `1px solid ${border}`,
        borderRadius: "20px", padding: 0,
        width: "min(520px, 94vw)", color: text,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="settings-header">
        <div className="settings-title" style={{ color: text }}>FAQ</div>
      </div>

      <div className="settings-body">
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: "18px" }}>
            <div style={{ fontWeight: 600, color: ACCENTS[accent].bg, marginBottom: "4px" }}>
              {faq.q}
            </div>
            <div style={{ fontSize: "14px", color: subtext }}>{faq.a}</div>
          </div>
        ))}
      </div>
    </Popup>
  )
}

export function PicPopup() {
  const { accent, theme } = useTheme()  // reads same global colour, no setter needed

  const isDark  = theme === "dark"
  const surface = isDark ? "#1a1a24" : "#ffffff"
  const border  = isDark ? "#2a2a3a" : "#e8e8f0"
  const text    = isDark ? "#f0f0f8" : "#111118"
  const subtext = isDark ? "#8888a8" : "#6666a0"

  return (
    <Popup
      trigger={
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <QuestionMarkIcon style={{ color: ACCENTS[accent].bg }} />
        </button>
      }
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      contentStyle={{
        background: surface, border: `1px solid ${border}`,
        borderRadius: "20px", padding: 0,
        width: "min(520px, 94vw)", color: text,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="settings-header">
        <div className="settings-title" style={{ color: text }}>FAQ</div>
      </div>

      <div className="settings-body">
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: "18px" }}>
            <div style={{ fontWeight: 600, color: ACCENTS[accent].bg, marginBottom: "4px" }}>
              {faq.q}
            </div>
            <div style={{ fontSize: "14px", color: subtext }}>{faq.a}</div>
          </div>
        ))}
      </div>
    </Popup>
  )
}