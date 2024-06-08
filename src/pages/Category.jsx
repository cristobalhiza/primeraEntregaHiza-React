import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import useProductsByCategory from "../hooks/UseProductByCategory";

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, error } = useProductsByCategory(category);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 style={{ margin: "15px" }}>Categoría: {category}</h1>

      <ItemListContainerComponent products={products} />
    </div>
  );
};

export default CategoryPage;
