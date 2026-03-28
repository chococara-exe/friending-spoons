import SettingsIcon from "@mui/icons-material/Settings"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import "../Popup.css"
import { useTheme, ACCENTS } from "../themeContext.tsx"

import type Professional from "../models/Professional"
import framePNG from "../assets/frame.png"
import dudePNG from "../assets/image.png"

import { CiTextAlignCenter } from "react-icons/ci"
import { BsMoonStars } from "react-icons/bs";

import { CiSun } from "react-icons/ci";

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
                <span>{t === "dark" ? <BsMoonStars /> : <CiSun />}</span>
                <span style={{ color: t === "dark" ? "#f0f0f8" : "#111118", fontSize: 13, fontWeight: 600 }}>{t}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
            <div className="section-label" style={{ color: subtext }}>Accent Color</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {(Object.entries(ACCENTS) as [AccentColor, typeof ACCENTS[AccentColor]][]).map(([key, val]) => (
                <button
                    key={key}
                    onClick={() => setAccent(key)}
                    style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: accent === key ? val.bg + "18" : "transparent",
                    border: `2px solid ${accent === key ? val.bg : border}`,
                    borderRadius: "12px",
                    padding: "10px 14px",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    }}
                >
                    {/* Circle */}
                    <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: val.bg,
                    flexShrink: 0,
                    boxShadow: accent === key ? `0 0 0 3px ${val.bg}55` : "none",
                    transition: "box-shadow 0.15s",
                    }} />
                    {/* Label */}
                    <span style={{
                    color: accent === key ? val.bg : text,
                    fontSize: 14,
                    fontWeight: accent === key ? 700 : 500,
                    transition: "color 0.15s",
                    }}>
                    {val.label}
                    </span>
                    {/* Tick when selected */}
                    {accent === key && (
                    <span style={{ marginLeft: "auto", color: val.bg, fontSize: 18 }}>✓</span>
                    )}
                </button>
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

export function PicPopup({ professional }: { professional: Professional }) {
  return (
    <Popup
      trigger={
        <div style={{ cursor: "pointer", position: "relative", display: "inline-block" }}>
          <div style={{ display: "grid" }}>
            <img src={dudePNG} alt={professional.name} style={{ gridArea: "1/1", width: "40%", alignSelf: "center", justifySelf: "start", marginLeft: "30%", marginTop: "5%", height: "65%", objectFit: "cover", objectPosition: "center" }} />
            <img src={framePNG} alt="" style={{ gridArea: "1/1", display: "block", width: "100%" }} />
          </div>
          <div style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #b8860b, #ffd700, #b8860b)", padding: "4px 20px", border: "1px solid #92400e", fontFamily: "Georgia, serif", fontSize: 12, letterSpacing: 2, color: "#5a3f05", whiteSpace: "nowrap" }}>
            <h1 style={{ textAlign: "center"  }}>{professional.type}</h1>
            <h1>{professional.name}</h1>
          </div>
        </div>
      }
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      contentStyle={{ background: "transparent", border: "none", padding: 0, width: "min(520px, 94vw)" }}
    >
      <div className="pic-popup-shell">
        <div className="settings-header">
          <div className="settings-title pic-popup-title">{professional.name}</div>
        </div>
        <div className="settings-body">
          <p className="pic-popup-type">{professional.type}</p>
          <p className="pic-popup-description">{professional.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {professional.tags.map(tag => (
              <span key={tag} className="pic-popup-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Popup>
  )
}