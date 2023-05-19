import React, { useContext } from "react";
import CartItem from "./CartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartContainer.css";
import CartContext from "../../store/cart-context";

const CartContainer = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="col-md-3 mb-2">
      <div className="border border-1 d-flex flex-column px-0 cart-container">
        <div className="d-flex justify-content-between total-icon p-2">
          <h3>Total</h3>
          <span onClick={cartCtx.clearCart}><DeleteIcon /></span>
        </div>
        {cartCtx.items.map((ite, index) => (
          <CartItem key={index} title={ite.item.name} quantity={ite.quantity} price={ite.item.price} />
        ))}
        <div>
          <div className="d-flex justify-content-between p-2">
            <h5>Total</h5>
            <div>&#8377;{cartCtx.totalAmount}</div>
          </div>
          <button className="checkout-button" onClick={cartCtx.clearCart}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
