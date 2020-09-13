import React from "react";
import { connect } from "react-redux";
import Product from "../Product/Product";
import { addToCart } from "../redux/action/cartActions";

const Shop = (props) => {
  console.log(props);
  const { products, addToCart } = props;
  return (
    <div>
      <h2>This is Shop</h2>
      {products.map((pd) => (
        <Product product={pd} key={pd.id} addToCart={addToCart}></Product>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
