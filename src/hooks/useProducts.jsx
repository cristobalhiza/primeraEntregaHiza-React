import { useState, useEffect } from "react";
import getAllProducts from "../services/productsServices"

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products");
      });
  }, []);

  return { products, error };
};

export default useProducts;
