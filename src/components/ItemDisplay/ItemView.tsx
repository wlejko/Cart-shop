import React, { useState, useContext } from "react";
import SingleItem from "./SingleItem";
import { useTranslation } from "react-i18next";
import { itemList } from "../../shared/arrays";
import { context } from "../../contexts/AppProvider";

export default function ItemView() {
  const [viewStyle, setViewStyle] = useState(false); //to change layout
  const { t } = useTranslation();
  const itemConsumer = useContext(context);

  const renderList = () => {
    //rendering items in shop
    return itemList.map(item => (
      <div
        style={{
          width: viewStyle ? "400px" : "100%"
        }}
        key={item.name}
      >
        <SingleItem
          name={item.name}
          price={item.price}
          description={item.description}
          shipping={item.shipping}
          key={item.name}
        />
      </div>
    ));
  };

  const renderStyleTitle = () => {
    //button text to change layout style
    if (!viewStyle) {
      return <p>{t("List.1")}</p>;
    } else {
      return <p>{t("List.2")}</p>;
    }
  };

  return (
    <div style={{ backgroundColor: itemConsumer?.themeStyle }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setViewStyle(!viewStyle)}
          className="changeStyleButton"
        >
          {renderStyleTitle()}
        </button>
      </div>

      <div className={viewStyle ? "gridStyle" : "listStyle"}>
        {renderList()}
      </div>
    </div>
  );
}
