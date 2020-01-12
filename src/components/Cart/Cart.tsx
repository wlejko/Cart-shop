import React, { useState, useContext, useEffect } from "react";
import SingleItem from "../ItemDisplay/SingleItem";
import { CartContext } from "../../contexts/CartProvider";
import { context } from "../../contexts/AppProvider";
import "../../App.css";

export default function Cart() {
  const { cartList } = useContext(CartContext); //array of items in cart
  const itemConsumer = useContext(context); //to manipulate theme color
  const [currenPrice, setCurrentPrice] = useState(0);

  function renderList() {
    //rendering cart content
    return cartList.map(item => (
      <div
        style={{
          width: "100%"
        }}
      >
        <SingleItem
          name={item.name}
          price={item.price}
          description={item.description}
          shipping={item.shipping}
          key={item.name}
          isAdded={true}
        />
      </div>
    ));
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        Price:{currenPrice}
      </div>

      <div
        className="listStyle"
        style={{ backgroundColor: itemConsumer?.themeStyle }}
      >
        {renderList()}
      </div>
    </>
  );
}
