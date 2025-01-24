import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    console.log("hoook trig!!");
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      if (!json) return;
      setProducts(json);
    } catch (error) {
      if (error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
