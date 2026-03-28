import type Professional from "../models/Professional"
import framePNG from "../assets/frame.png"
import dudePNG from "../assets/image.png"
// import IconButton from "@mui/material/IconButton";
import { PicPopup } from "./Popup"
import { ThemeProvider } from "../themeContext"

export default function CatalogItem(professional: Professional) {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {/* <IconButton onClick={() => {}}> */}
            <ThemeProvider>
            <PicPopup professional={professional} /> 
            <div style={{ display: "grid" }}>
                <img
                    src={dudePNG}
                    alt={professional.name}
                    style={{
                        gridArea: "1/1",
                        width: "40%",
                        alignSelf: "center",
                        justifySelf: "start",
                        marginLeft: "30%",
                        marginTop: "5%",
                        height: "65%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <img
                    src={framePNG}
                    alt=""
                    style={{
                        gridArea: "1/1",  // same cell = frame renders on top
                        display: "block",
                        width: "100%",
                    }}
                />
            </div>
            {/* Nameplate */}
            <div style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #b8860b, #ffd700, #b8860b)",
                padding: "4px 20px",
                border: "1px solid #92400e",
                fontFamily: "Georgia, serif",
                fontSize: 12,
                letterSpacing: 2,
                color: "#5a3f05",
                whiteSpace: "nowrap",
                display: "block"
            }}>
                <h1>{professional.type}</h1>
                <h1>{professional.name}</h1>
            </div>
            {/* </IconButton> */}
            </ThemeProvider>
        </div>
    )
}