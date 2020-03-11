import React, { useEffect, useState } from "react";
import { fetchProducts, addItemToCart } from "../redux/actions";
import Products from "../components/Products/";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";

const HomePage = props => {
  const { products, isFetching, handleAddFunc, skuSelected } = props;

  return (
    <div className="App">
      {isFetching || !products.length ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row pt-3">
            {products.map((product, index) => (
              <div className="col-xl-3 mb-3" key={index}>
                <Products
                  product={product}
                  addFunc={handleAddFunc}
                  skuSelected={skuSelected}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
const ConnectedHomePage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector(state => state.products);

  const isFetching = useSelector(state => state.isFetching);

  const skuSelected = id => {};
  const handleAddFunc = product => {
    dispatch(addItemToCart(product));
  };
  return (
    <HomePage
      skuSelected={skuSelected}
      products={products}
      isFetching={isFetching}
      handleAddFunc={handleAddFunc}
    />
  );
};
export default ConnectedHomePage;
