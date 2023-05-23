import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import "./MealContainer.css";

const MealContainer = ({ data, filter, forAll, addHandler, removeHandler }) => {
  const filterData = (value) => {
    return data.filter((item) => item.category === value);
  };

  return (
    <div className="col-md-6 meals-container mb-2">
      {filter === "All" ? (
        forAll.map(filterData).map((item) => (
          <div key={Math.random() * 100000000000}>
            <div className="meals-head p-2 ms-2">
              <h4>{item[0].category}</h4>
            </div>
            {item.map((dat) => (
              <MealItem
                key={`${Math.random() * 1000000}`}
                data={dat}
                onAdd={addHandler}
                onRemove={removeHandler}
              />
            ))}
          </div>
        ))
      ) : (
        <>
          <div className="meals-head p-2 ms-2">
            <h4>{filter}</h4>
          </div>
          {filterData(filter).map((item, index) => (
            <MealItem
              key={`${filter}${index}`}
              data={item}
              onAdd={addHandler}
              onRemove={removeHandler}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MealContainer;
