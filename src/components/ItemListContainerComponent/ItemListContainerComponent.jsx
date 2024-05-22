import React from "react";

const ItemListContainerComponent = ({ greeting }) => {
  const CustomStyles = {
    color: "white",
    fontSize: "2rem",
    backgroundColor: "dark",
    padding: "1rem",
    margin: "auto",
    textAlign: "center",
    borderRadius: "10px",
    border: "1px solid white",
  };

  return <div style={CustomStyles}>{greeting}</div>;
};

export default ItemListContainerComponent;
