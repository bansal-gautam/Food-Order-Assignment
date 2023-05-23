import React, { useState } from "react";
import "./MealItem.css";

const MealItem = ({ data, onAdd, onRemove }) => {
  const addHandler = () => {
    onAdd(data);
  };

  const removeHandler = () => {
    onRemove(data);
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
