import React from "react";

const Product = (props) => {
  const { addToCart, product } = props;
  return (
    <div style={{ border: "1px solid tomato" }}>
      <h2>{product.name}</h2>
      <button onClick={() => addToCart(product.id, product.name)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
