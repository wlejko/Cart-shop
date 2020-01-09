import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { context } from "../../contexts/AppProvider";

import "../../App.css";

export default function MenuList(props: { visible: boolean }) {
  const { visible } = props;
  const itemConsumer = useContext(context);

  return (
    <div id="menu" className={visible ? "slideIn" : "slideOut"}>
      <div
        className={visible ? "slideInMenuItem" : "slideOutMenuItem"}
        onClick={() => itemConsumer?.setView("itemView")}
      >
        <ListAltIcon style={{ width: "40px", height: "40px" }} />
        <p>List</p>
      </div>
      <div
        className={visible ? "slideInMenuItem" : "slideOutMenuItem"}
        onClick={() => itemConsumer?.setView("cart")}
      >
        <ShoppingCartIcon style={{ width: "40px", height: "40px" }} />
        <p>Cart</p>
      </div>
    </div>
  );
}
