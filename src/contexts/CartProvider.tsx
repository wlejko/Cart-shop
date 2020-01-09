import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export interface CartItemInterface {
  name: string;
  price: number;
  description: string;
  shipping: string;
}

interface SingleItem {
  cartList: CartItemInterface[];
  setCartList: Function;
}

export const CartContext = React.createContext<SingleItem>({
  cartList: [],
  setCartList: (item: CartItemInterface) => null
});

export const CartProvider = (props: Props) => {
  const [cartList, setCartList] = useState<CartItemInterface[]>([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {props.children}
    </CartContext.Provider>
  );
};


