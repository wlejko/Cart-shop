import React, { useState, useContext } from "react";
import SingleItem from "./SingleItem";
import Dropdown from "../Dropdown/Dropdown";
import { useTranslation } from "react-i18next";
import { itemList } from "../../shared/arrays";
import { context } from "../../contexts/AppProvider";

export default function ItemView() {
  const [arrayOfItems, setArrayOfItems] = useState(itemList);
  const [viewStyle, setViewStyle] = useState(false); //to change layout
  const { t } = useTranslation();
  const itemConsumer = useContext(context);

  const renderList = () => {
    //rendering items in shop
    return arrayOfItems.map(item => (
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

  function sortingAsc(key: string) {
    const sortedArray = [...arrayOfItems];
    sortedArray.sort((a, b) => (a.price > b.price ? 1 : -1));
    if (key === "asc") {
      setArrayOfItems(sortedArray);
    } else if (key === "desc") {
      setArrayOfItems(sortedArray.reverse());
    } else if (key === "ascName") {
      sortedArray.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setArrayOfItems(sortedArray);
    } else if (key === "descName") {
      sortedArray.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setArrayOfItems(sortedArray.reverse());
    }
  }

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
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={() => setViewStyle(!viewStyle)}
          className="changeStyleButton"
        >
          {renderStyleTitle()}
        </button>
        <Dropdown sortingFunction={key => sortingAsc(key)} />
      </div>

      <div className={viewStyle ? "gridStyle" : "listStyle"}>
        {renderList()}
      </div>
    </div>
  );
}
