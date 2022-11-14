import React, { useEffect, useState } from "react";
import { Category } from "../category/category";
import CategoryItem from "../category/category.item";
import axios from "axios";

// const categories: Category[] = [
//   {
//     name: "Smartphones & Tablets",
//     image: "images/popular_1.png",
//   },
//   {
//     name: "Computers & Laptops",
//     image: "images/popular_2.png",
//   },
//   {
//     name: "Gadgets",
//     image: "images/popular_3.png",
//   },
//   {
//     name: "Video Games & Consoles",
//     image: "images/popular_4.png",
//   },
//   {
//     name: "Accessories",
//     image: "images/popular_5.png",
//   },
// ];

const PopularCatg = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategory = async () => {
    const response = await axios.get("http://localhost:3004/categories");
    const catg: Category[] = (await response.data) as Category[];
    setCategories(catg);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="popular_categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="popular_categories_content">
              <div className="popular_categories_title">Popular Categories</div>
              <div className="popular_categories_slider_nav">
                <div className="popular_categories_prev popular_categories_nav">
                  <i className="fas fa-angle-left ml-auto"></i>
                </div>
                <div className="popular_categories_next popular_categories_nav">
                  <i className="fas fa-angle-right ml-auto"></i>
                </div>
              </div>
              <div className="popular_categories_link">
                <a href="#">full catalog</a>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="popular_categories_slider_container">
              <div className="owl-carousel owl-theme popular_categories_slider">
                {categories.map((catgegory) => {
                  return (
                    <CategoryItem
                      key={catgegory.id}
                      name={catgegory.name}
                      image={catgegory.image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCatg;
