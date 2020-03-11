import products from "../product";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_UNIT = "INCREASE_UNIT";

const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  };
};

const receiveProducts = data => {
  return {
    type: RECEIVE_PRODUCTS,
    products: data
  };
};

const setCartItems = product => {
  return {
    type: SET_CART_ITEMS,
    cart: product
  };
};
const deleteCart = () => {
  return {
    type: EMPTY_CART
  };
};
const increateUnit = val => {
  return {
    type: INCREASE_UNIT,
    unit: val
  };
};

const removeProduct = index => {
  return {
    type: REMOVE_PRODUCT,
    index: index
  };
};

const existingProductIndex = (product, cart) =>
  cart.findIndex(p => p.id === product.id);

export const addItemToCart = (product, increment) => {
  return (dispatch, getState) => {
    let cart = getState().cart;
    let index = existingProductIndex(product, cart);

    if (index >= 0) {
      const cartProducts = [...cart];

      const existingProduct = cartProducts[index];

      cartProducts[index] = {
        ...existingProduct,
        units: existingProduct.units + 1,
        total: existingProduct.price * (existingProduct.units + 1)
      };

      dispatch(setCartItems(cartProducts));
    } else {
      dispatch(
        setCartItems([
          ...cart,
          Object.assign({}, product, {
            units: 1,
            price: product.skus[0].price,
            total: product.skus[0].price
          })
        ])
      );
    }
  };
};

export const updateCartProduct = (sku, product) => {
  return (dispatch, getState) => {
    let cart = getState().cart;
    let index = existingProductIndex(product, cart);
    if (index >= 0) {
      const cartProducts = [...cart];
      const existingProduct = cartProducts[index];
      const [updated_sku] = existingProduct.skus.filter(s => s.id === sku);

      cartProducts[index] = {
        ...existingProduct,
        price: updated_sku.price,
        selected_sku: sku,
        total: updated_sku.price * existingProduct.units
      };
      dispatch(setCartItems(cartProducts));
    }
  };
};

export const clearCart = () => {
  return dispatch => {
    dispatch(deleteCart());
  };
};
export const deleteProduct = index => {
  return (dispatch, getState) => {
    dispatch(removeProduct(index));
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(requestProducts());
    const filter_products = [...products];
    filter_products.map(product => (product.selected_sku = product.skus[0].id));
    dispatch(receiveProducts(filter_products));
  };
};
