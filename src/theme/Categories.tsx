import React from "react";
import { Category } from "../category/category";
const categories: Category[] = [
  {
    name: "Computers & Laptops",
    class: "fas fa-chevron-right ms-auto",
  },
  {
    name: "Cameras & Photos",
    class: "fas fa-chevron-right",
  },
  {
    name: "Smartphones & Tablets",
    class: "fas fa-chevron-right",
  },
  {
    name: "TV & Audio",
    class: "fas fa-chevron-right",
  },
  {
    name: "Gadgets",
    class: "fas fa-chevron-right",
  },
  {
    name: "Car Electronics",
    class: "fas fa-chevron-right",
  },
  {
    name: "Video Games & Consoles",
    class: "fas fa-chevron-right",
  },
  {
    name: "Accessories",
    class: "fas fa-chevron-right",
  },
];

const Categories = () => {
  const items = categories.map((category) => {
    return (
      <li>
        <a href="#">
          {category.name} <i className={category.class}></i>
        </a>
      </li>
    );
  });

  return (
    <div className="cat_menu_container">
      <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
        <div className="cat_burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="cat_menu_text">categories</div>
      </div>

      <ul className="cat_menu">{items}</ul>
    </div>
  );
};

export default Categories;
