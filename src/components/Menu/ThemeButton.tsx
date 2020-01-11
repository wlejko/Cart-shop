import React, { useContext } from "react";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { context } from "../../contexts/AppProvider";

import "../../App.css";

export default function ThemeButton() {
  const itemConsumer = useContext(context);

  const renderButton = () => {
    if (itemConsumer?.themeStyle === "white") {
      return (
        <div onClick={() => itemConsumer?.setThemeStyle("grey")}>
          <Brightness3Icon style={{ width: "40px", height: "40px" }} />
        </div>
      );
    } else {
      return (
        <div onClick={() => itemConsumer?.setThemeStyle("white")}>
          <Brightness1Icon style={{ width: "40px", height: "40px" }} />
        </div>
      );
    }
  };

  return <div>{renderButton()}</div>;
}
