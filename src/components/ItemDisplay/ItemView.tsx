import React, { useState, useContext } from "react";
import SingleItem from "./SingleItem";
import { itemList } from "../../shared/arrays";

export default function ItemView() {
  const [viewStyle, setViewStyle] = useState(false);

  const renderList = () => {
    return itemList.map(item => (
      <div
        style={{
          width: viewStyle ? "400px" : "100%"
        }}
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

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setViewStyle(!viewStyle)}
          className="changeStyleButton"
        >
          List
        </button>
      </div>

      <div className={viewStyle ? "gridStyle" : "listStyle"}>
        {renderList()}
      </div>
    </>
  );
}
