import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Main from "./components/MainDisplay/Main";
import { CartProvider } from "./contexts/CartProvider";
import { context } from "./contexts/AppProvider";

import "./App.css";

const App: React.FC = () => {
  const [view, setView] = useState("itemView");
  const [themeStyle, setThemeStyle] = useState("white");

  return (
    <context.Provider value={{ view, setView, themeStyle, setThemeStyle }}>
      <CartProvider>
        <div className="App">
          <Menu />
          <Main />
        </div>
      </CartProvider>
    </context.Provider>
  );
};

export default App;
