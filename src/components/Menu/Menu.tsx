import React, { useState, useEffect } from "react";
import MenuLeft from "./MenuLeft";
import MenuTop from "./MenuTop";
import "../../App.css";

export default function Menu() {
  const [dimension, setDimension] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [dimension]);

  const whatToRender = () => {
    if (dimension > 550) {
      return <MenuLeft />;
    } else {
      return <MenuTop />;
    }
  };

  return whatToRender();
}
