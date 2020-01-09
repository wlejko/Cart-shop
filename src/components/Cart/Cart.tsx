import React, { useState, useContext, useEffect } from "react";
import SingleItem from "../ItemDisplay/SingleItem";
import { CartContext } from "../../contexts/CartProvider";
import "../../App.css";

export default function Cart() {
  const { cartList, setCartList } = useContext(CartContext);
  const [currenPrice, setCurrentPrice] = useState(0);
  useEffect(() => {
    setCurrentPrice(cartList.reduce((sum, { price }) => sum + price, 0));
  }, [currenPrice]);

  function renderList() {
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
        />
      </div>
    ));
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Price:{currenPrice}
      </div>

      <div className="listStyle">{renderList()}</div>
      <button onClick={() => cartList.shift()}>Delete</button>
    </>
  );
}
