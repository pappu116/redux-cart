const { ADD_TO_CART, REMOVE_FROM_CART } = require("../action/cartActions");

const initialState = {
  cart: [],
  products: [
    { name: "Lenovo Laptop", id: 1 },
    { name: "Hp Laptop", id: 2 },
    { name: "AFSUS Laptop", id: 3 },
    { name: "Tashiba Laptop", id: 4 },
    { name: "SAMSUNG Laptop", id: 5 },
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      console.log(action);
      const cartId = action.cartId;
      const remainingCart = state.cart.filter((item) => item.cartId !== cartId);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};

export default cartReducers;
