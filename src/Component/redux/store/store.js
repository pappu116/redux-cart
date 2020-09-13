const { createStore } = require("redux");
const { default: cartReducers } = require("../reducer/cartReducers");

export const store = createStore(cartReducers);
