import IconButton from "@mui/material/IconButton";
// import SettingsIcon from "@mui/icons-material/Settings";
// import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { GrCatalog } from "react-icons/gr";
import { SettingsPopup, FAQPopup } from "./Popup"
import { ThemeProvider } from "../themeContext"

function Tab() {
  return (
    <div className="flex items-center justify-between w-screen p-3">
        <div className="flex items-center">
            <IconButton onClick={() => {}}>
            <SettingsPopup/>
            </IconButton>
            <IconButton onClick={() => {}}>
            <FAQPopup/>
            </IconButton>
        </div>
        <div>
            <IconButton onClick={() => {}}>
            <ThemeProvider> jfjfj <GrCatalog /> </ThemeProvider>
            </IconButton>
        </div>
    </div>
  );
}

export default Tab;