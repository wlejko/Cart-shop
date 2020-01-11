import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { context } from "../../contexts/AppProvider";
import { useTranslation } from "react-i18next";
import ThemeButton from "./ThemeButton";
import "../../App.css";

export default function MenuList(props: { visible: boolean }) {
  const { visible } = props;
  const { t } = useTranslation();
  const itemConsumer = useContext(context);

  return (
    <div id="menu" className={visible ? "slideIn" : "slideOut"}>
      <div
        className={visible ? "slideInMenuItem" : "slideOutMenuItem"}
        onClick={() => itemConsumer?.setView("itemView")}
      >
        <ListAltIcon style={{ width: "40px", height: "40px" }} />
        <p>{t("Menu.1")}</p>
      </div>
      <div
        className={visible ? "slideInMenuItem" : "slideOutMenuItem"}
        onClick={() => itemConsumer?.setView("cart")}
      >
        <ShoppingCartIcon style={{ width: "40px", height: "40px" }} />
        <p>{t("Menu.2")}</p>
      </div>
      <div className={visible ? "slideInMenuItem" : "slideOutMenuItem"}>
        <ThemeButton />
      </div>
    </div>
  );
}
