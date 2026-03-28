import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { GrCatalog } from "react-icons/gr";

function Tab() {
  return (
    <div className="flex items-center justify-between w-screen p-3">
        <div className="flex items-center">
            <IconButton onClick={() => {}}>
            <SettingsIcon />
            </IconButton>
            <IconButton onClick={() => {}}>
            <QuestionMarkIcon/>
            </IconButton>
        </div>
        <div>
            <IconButton onClick={() => {}}>
            <GrCatalog />
            </IconButton>
        </div>
    </div>
  );
}

export default Tab;