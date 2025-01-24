import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const PrdoductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      if (!json) return;
      setProducts(json);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-fuchsia-300 p-2 rounded-xl">
      <h2 className="text-2xl font-bold">Product Container ! </h2>
      <ProductList products={products} loading={loading} error={error} />
    </div>
  );
};

export default PrdoductContainer;
