import React from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";
// import MainLayout from './layouts/MainLayout';

NavBarComponent;

function App() {
  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenidos a la tienda virtual" />
    </>
  );
}

export default App;
