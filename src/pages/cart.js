import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  deleteProduct,
  addItemToCart,
  updateCartProduct
} from "../redux/actions";
import Currency from "../Helpers/currency";

const CartPage = props => {
  const {
    products,
    removeProduct,
    emptyCart,
    skuSelected,
    handleQuantity,
    cartTotal
  } = props;

  return (
    <div className="container">
      <div className="card shopping-cart">
        <div className="card-header bg-dark text-light">
          <NavLink to="/" className="btn btn-outline-info btn-sm float-right">
            Continue shopping
          </NavLink>
        </div>
        <div className="card-body">
          {products.map((product, index) => (
            <div key={product.id}>
              <Cart
                product={product}
                index={index}
                skuSelected={skuSelected}
                removeProduct={removeProduct}
                handleQuantity={handleQuantity}
              />
              <hr />
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="pull-right">
            <button onClick={emptyCart} className="btn btn-success ">
              Empty cart
            </button>
            <div className="float-right">
              Total price: <b>{Currency.format(cartTotal())}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ConnectedCartPage = props => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const removeProduct = product => {
    dispatch(deleteProduct(product));
  };
  const skuSelected = (sku, product) => {
    dispatch(updateCartProduct(sku, product));
  };
  const emptyCart = () => {
    dispatch(clearCart());
  };
  const handleQuantity = (e, product) => {
    dispatch(addItemToCart(product));
  };
  const cartTotal = () => {
    if (cart.length === 1) {
      return cart[0].total; // return the first value of the array
    } else if (cart.length > 1) {
      return cart.reduce((a, b) => a.total + b.total);
    } else {
      return 0;
    }
  };

  return (
    <CartPage
      removeProduct={removeProduct}
      products={cart}
      cartTotal={cartTotal}
      handleQuantity={handleQuantity}
      skuSelected={skuSelected}
      emptyCart={emptyCart}
    />
  );
};
export default ConnectedCartPage;
