import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartContainer.css";

const CartContainer = ({ cartCtx, clearHandler, amount }) => {
  return (
    <div className="col-md-3 mb-2">
      <div className="border border-1 d-flex flex-column px-0 cart-container">
        <div className="d-flex justify-content-between total-icon p-2">
          <h3>Total</h3>
          <span onClick={clearHandler}>
            <DeleteIcon />
          </span>
        </div>
        {cartCtx.map((item) => (
          <CartItem
            key={Math.random() * 10000}
            title={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <div>
          <div className="d-flex justify-content-between p-2">
            <h5>Total</h5>
            <div>&#8377; {amount}</div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
