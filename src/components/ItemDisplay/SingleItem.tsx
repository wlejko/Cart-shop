import React, { useContext } from "react";
import { itemInterface } from "../../shared/interface";
import { descriptionList } from "../../shared/arrays";
import { CartContext } from "../../contexts/CartProvider";
import "../../App.css";

export default function SingleItem(props: itemInterface) {
  const { name, price, description, shipping } = props;
  const arrayOfProps = [name, price, description, shipping];
  const { cartList, setCartList } = useContext(CartContext);

  const renderDescription = () => {
    return descriptionList.map(item => (
      <p className="oneColumn" key={item[0]}>
        {item}
      </p>
    ));
  };

  const renderProps = () => {
    return arrayOfProps.map(item => <p className="oneColumn">{item}</p>);
  };

  return (
    <div className="card">
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ display: "flex" }}>{renderDescription()}</div>
        <div style={{ display: "flex" }}>{renderProps()}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="addToCartButton"
          onClick={() => {
            setCartList([
              ...cartList,
              {
                name: name,
                price: price,
                description: description,
                shipping: shipping
              }
            ]);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
