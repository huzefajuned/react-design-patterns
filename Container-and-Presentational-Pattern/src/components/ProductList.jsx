import React from "react";
import SingleProduct from "./SingleProduct";
const ProductList = ({ products, loading, error }) => {
  if (loading) return <div>...LOADING....</div>;
  if (error) return null;
  return (
    <div className="bg-white rounded-xl m-2 p-2">
      ProductList : {products.length}
      <div>
        {products.map((product, index) => {
          return <SingleProduct product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
