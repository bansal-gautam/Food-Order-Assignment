import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import "./CategoryContainer.css";

const CategoryContainer = (props) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  const getCategoryStyle = (category) => {
    if (category === activeCategory) {
      return { backgroundColor: "yellow" };
    }
    return {};
  };
  return (
    <div className="border border-1 mb-3 col-md-3 p-0 category-container">
      <CategoryItem
        title="All"
        onClick={props.onClick}
        index={4}
        onChange={handleCategoryClick}
        style={getCategoryStyle}
      />
      {props.array.map((item, index) => {
        return (
          <CategoryItem
            key={index}
            title={item}
            onClick={props.onClick}
            index={index}
            onChange={handleCategoryClick}
            style={getCategoryStyle}
          />
        );
      })}
    </div>
  );
};

export default CategoryContainer;
