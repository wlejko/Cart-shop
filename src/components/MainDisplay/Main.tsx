import React, { useContext } from "react";
import ItemView from "../ItemDisplay/ItemView";
import Cart from "../Cart/Cart";
import { context } from "../../contexts/AppProvider";

export default function Main() {
  const itemConsumer = useContext(context);

  const renderMainView = () => {
    if (itemConsumer?.view === "itemView") {
      return <ItemView />;
    }
    if (itemConsumer?.view === "cart") {
      return <Cart />;
    }
  };

  return <div className="itemListStyle">{renderMainView()}</div>;
}
