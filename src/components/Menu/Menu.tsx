import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MenuList from "./MenuList";
import "../../App.css";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <MenuList visible={openMenu} />
      <div
        id="aroow"
        className={openMenu ? "slideInArrow" : ""}
        onClick={() => handleClick()}
      >
        <ArrowForwardIcon />
      </div>
    </div>
  );
}
