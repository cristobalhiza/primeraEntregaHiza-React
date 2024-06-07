import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../services/productsServices';

export const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getProductsByCategory(category);
        setProducts(res.data.products); 
      } catch (err) {
        console.error(err);
        setError("Error al recuperar productos por categoría");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return { products, loading, error };
};
