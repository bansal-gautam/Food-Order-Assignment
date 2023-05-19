import React from "react";

const CartItem = (props) => {
    return (
        <div className="d-flex p-2 align-items-center border-bottom border-2">
            <h6 className="w-50">{props.title}</h6>
            <div className="ms-3">&#215;{props.quantity}</div>
            <div className="ms-auto">&#8377;{props.price * props.quantity}</div>
        </div>
    )
};

export default CartItem;
