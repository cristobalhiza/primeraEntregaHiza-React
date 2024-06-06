import React from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes/MainRoutes";
// import MainLayout from './layouts/MainLayout';

NavBarComponent;

function App() {
  return (
    <>
      <NavBarComponent />
      <MainRoutes />
    </>
  );
}

export default App;
