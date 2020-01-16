import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ThemeButton from "./ThemeButton";
import { context } from "../../contexts/AppProvider";
import "../../App.css";

export default function MenuTop() {
  const itemConsumer = useContext(context);

  return (
    <div className="menuTop">
      <div onClick={() => itemConsumer?.setView("itemView")}>
        <ListAltIcon
          style={{
            width: "40px",
            height: "40px",
            marginRight: "16px",
            cursor: "pointer"
          }}
        />
      </div>
      <div onClick={() => itemConsumer?.setView("cart")}>
        <ShoppingCartIcon
          style={{
            width: "40px",
            height: "40px",
            marginRight: "16px",
            cursor: "pointer"
          }}
        />
      </div>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
}
