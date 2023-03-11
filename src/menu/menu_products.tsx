import React from "react";
import { Product } from "../product/product";
import ProductItem from "../product/product-item";

const products: Product[] = [
  {
    id: 1,
    name: "Nokia 3310(2017)",
    image: "images/new_6.jpg",
    price: 379,
    description: "some",
  },
  {
    id: 2,
    name: "Huawei MediaPad",
    image: "images/new_8.jpg",
    price: 225,
    description: "some",
  },
  {
    id: 3,
    name: "Huawei MediaPad",
    image: "images/new_1.jpg",
    price: 225,
    description: "some",
  },
];

const MenuProducts = (props: any) => {
  return (
    <React.Fragment>
      <div className="shop_content">
        <div className="shop_bar clearfix">
          <div className="shop_product_count">
            <span>186</span> products found
          </div>
          <div className="shop_sorting">
            <span>Sort by:</span>
            <ul>
              <li>
                <span className="sorting_text">
                  highest rated<i className="fas fa-chevron-down"></i>
                </span>
                <ul>
                  <li
                    className="shop_sorting_button"
                    data-isotope-option='{ "sortBy": "original-order" }'
                  >
                    highest rated
                  </li>
                  <li
                    className="shop_sorting_button"
                    data-isotope-option='{ "sortBy": "name" }'
                  >
                    name
                  </li>
                  <li
                    className="shop_sorting_button"
                    data-isotope-option='{ "sortBy": "price" }'
                  >
                    price
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="product_grid">
          <div className="product_grid_border"></div>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            );
          })}
          {/* <ProductItem /> */}
        </div>
        {/* <!-- Shop Page Navigation --> */}
        <div className="shop_page_nav d-flex flex-row justify-content-center">
          <div className="page_prev d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-chevron-left"></i>
          </div>
          <ul className="page_nav d-flex flex-row">
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">...</a>
            </li>
            <li>
              <a href="#">21</a>
            </li>
          </ul>
          <div className="page_next d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuProducts;
