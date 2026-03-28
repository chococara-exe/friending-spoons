import type Professional from "../models/Professional"
import framePNG from "../assets/frame.png"

export default function CatalogItem(professional: Professional) {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            

            <img
                src={framePNG}
                alt=""
                style={{ 
                    display: "block",
                    width: "40%"
                }}
            />

            <img
                src={professional.image}
                alt={professional.name}
                style={{
                position: "absolute",
                top: "18%",      /* adjust these to match where the hole is */
                left: "12%",
                width: "17%",    /* adjust to fit the hole size */
                height: "65%",
                objectFit: "cover",
                objectPosition: "center",  // which part of the image to show
                zIndex: -1,      /* behind the frame */
                }}
            />

            {/* Nameplate */}
            <div style={{
                position: "absolute",
                bottom: "5%",
                left: "20%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #b8860b, #ffd700, #b8860b)",
                padding: "4px 20px",
                border: "1px solid #92400e",
                fontFamily: "Georgia, serif",
                fontSize: 12,
                letterSpacing: 2,
                color: "#5a3f05",
                whiteSpace: "nowrap",
            }}>
                {professional.name}
            </div>
        </div>
    )
}