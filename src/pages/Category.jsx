import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../hooks/useProductsByCategory';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, error } = useProductsByCategory(category);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Category: {category}</h1>
      <ItemListContainerComponent products={products} />
    </div>
  );
};

export default CategoryPage;
