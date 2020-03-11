import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./logo";
import "./nav.scss";
import { useSelector } from "react-redux";

const Nav = cart => {
  return (
    <header className="fixed-top  bg-white border-bottom shadow-sm  py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-8 offset-2 d-flex justify-content-center align-items-center">
          <NavLink to="/">
            <Icon className="logo" />
          </NavLink>
        </div>
        <div className="col-2 d-flex justify-content-end  align-items-center">
          <NavLink to="/cart" className="text-dark mr-4">
            Cart ({cart.cart.length})
          </NavLink>
        </div>
      </div>
    </header>
  );
};

const ConnectedNav = props => {
  const cart = useSelector(state => state.cart);
  return <Nav cart={cart} />;
};

export default ConnectedNav;
