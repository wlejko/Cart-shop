import React, { useState, useContext } from "react";
import MenuList from "./MenuList";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { context } from "../../contexts/AppProvider";
import "../../App.css";

export default function MenuLeft() {
  const [openMenu, setOpenMenu] = useState(false);
  const itemConsumer = useContext(context);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div style={{ backgroundColor: itemConsumer?.themeStyle }}>
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
