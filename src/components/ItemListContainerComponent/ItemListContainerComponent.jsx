import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const ItemListContainerComponent = ({ greeting }) => {
  const CustomStyles = {
    color: "white",
    fontSize: "2rem",
    backgroundColor: "dark",
    padding: "1rem",
    margin: "auto",
    textAlign: "center",
    borderRadius: "15px",
    border: "1px solid white",
    width: "100vw",
    height: "80vh"
  };

  return <div style={CustomStyles}>{greeting}</div>;
};

export default ItemListContainerComponent;