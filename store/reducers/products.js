import * as P from "../types/products";

const initialState = {
  products: [
    { id: Date.now(), name: "iphone", price: 200 },
    { id: Date.now() + 1, name: "ipad", price: 400 },
    { id: Date.now() + 2, name: "ipod", price: 250 },
    { id: Date.now() + 3, name: "airpods", price: 100 },
    { id: Date.now() + 4, name: "macbook", price: 900 }
  ]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case P.GET_PRODUCTS_LIST:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
