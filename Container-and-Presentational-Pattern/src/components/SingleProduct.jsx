import React from "react";

const SingleProduct = ({ product }) => {
  const { id, title, description, category, image, price } = product;
  return (
    <div className="bg-transparent  text-gray-500 p-2 m-2">
      <h2> Title : {title} </h2>
      <h2> Descr : {description} </h2>
      <h2> category : {category} </h2>
      <h2>
        image : <img src={image} width={100} height={100} />{" "}
      </h2>
      <h2 className="text-black font-bold">Price : {price}</h2>
    </div>
  );
};

export default SingleProduct;
