import React from "react";
import SingleProduct from "./SingleProduct";
const ProductList = ({ products, loading, error }) => {
  if (loading) return <div>...LOADING....</div>;
  if (error) return null;
  return (
    <div className="bg-white">
      ProductList : {products.length}
      <div>
        {products.map((product, index) => {
          return <SingleProduct product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
