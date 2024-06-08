import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailsContainer from "../pages/ItemDetails";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CategoryPage from "../pages/Category";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
