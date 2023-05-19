import React from "react";
import CategoryItem from "./CategoryItem";
import "./CategoryContainer.css";

const CategoryContainer = (props) => {
  return (
    <div className="border border-1 mb-3 col-md-3 p-0 category-container">
      <CategoryItem title="All" onClick={props.onClick} index={4} />
      {props.array.map((item, index) => {
        return (
          <CategoryItem key={index} title={item} onClick={props.onClick} index={index} />
        );
      })}
    </div>
  );
};

export default CategoryContainer;
