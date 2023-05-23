import React from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  const clickHandler = () => {
    props.onClick({ title: props.title });
    props.onChange(`category${props.index}`);
  };
  return (
    <div
      className="border-bottom border-2 category-item"
      onClick={clickHandler}
      style={props.style(`category${props.index}`)}
    >
      <h5 className="ms-2">{props.title}</h5>
    </div>
  );
};

export default CategoryItem;
