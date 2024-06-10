import React, { useEffect } from "react";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import useProducts from "../hooks/useProducts";

const Home = () => {
  useEffect(() => {
    document.title = "Inicio";
  }, []);

  const { products, error } = useProducts();

  if (error) return <div>{error}</div>;

  return (
    <>
      <ItemListContainerComponent products={products} />
    </>
  );
};

export default Home;
