import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  SET_CART_ITEMS,
  EMPTY_CART,
  REMOVE_PRODUCT
} from "./actions";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "products",
  storage
};
const products = (
  state = {
    isFetching: false,
    products: [],
    cart: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: mergeById(action.products, state.products)
      });
    case SET_CART_ITEMS:
      return Object.assign({}, state, {
        cart: action.cart
      });
    case EMPTY_CART:
      return {
        ...state,
        cart: []
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.index),
          ...state.cart.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

const mergeById = (a1, a2) =>
  a1.map(itm => ({ ...a2.find(item => item.id === itm.id && item), ...itm }));
export default persistReducer(persistConfig, products);
