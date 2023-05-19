import React, { useContext } from "react";
import "./MealItem.css";
import CartContext from "../../store/cart-context";

const MealItem = ({ data }) => {
  const cartCtx = useContext(CartContext);
  const addHandler = () => {
    cartCtx.addItem(data);
  };

  const removeHandler = () => {
    cartCtx.removeItem(data.name);
  };
  return (
    <div className="d-flex mealitem-container mx-2">
      <div
        className={`veg-flag me-2 ${
          data.vegflag === "veg" ? "veg" : "non-veg"
        }`}
      />
      <h6 className="mealsitem-title mb-0">{`${data.name} ${data.availabletime}`}</h6>
      <div className="d-flex">
        <div className="add-remove" onClick={addHandler}>
          +
        </div>
        <div className="add-remove" onClick={removeHandler}>
          -
        </div>
      </div>
      <div className="ms-auto">&#8377;{data.price}</div>
    </div>
  );
};

export default MealItem;
