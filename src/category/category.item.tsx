import React from "react";
import { Category } from "./category";

const CategoryItem = (props: Category) => {
  return (
    <div className="owl-item">
      <div className="popular_category d-flex flex-column align-items-center justify-content-center">
        <div className="popular_category_image">
          <img src={props.image} alt="" />
        </div>
        <div className="popular_category_text">{props.name}</div>
        {/* //Test */}
      </div>
    </div>
  );
};

export default CategoryItem;
