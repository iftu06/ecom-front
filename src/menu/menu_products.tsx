import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "../category/category";
import { Product } from "../product/product";
import ProductItem from "../product/product-item";

const products: Product[] = [
  {
    id: 1,
    productName: "Nokia 3310(2017)",
    previewImage: "images/new_6.jpg",
    price: 379,
    productDescription: "some",
  },
  {
    id: 2,
    productName: "Huawei MediaPad",
    previewImage: "images/new_8.jpg",
    price: 225,
    productDescription: "some",
  },
  {
    id: 3,
    productName: "Huawei MediaPad",
    previewImage: "images/new_1.jpg",
    price: 225,
    productDescription: "some",
  },
];

let productss: Product[];
const MenuProducts = (props: any) => {

  const [productList, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const response = await axios.get(
      "http://localhost:8095/webstore/category/1/products"
    );
    productss = await response.data.responseBody;
    console.log("print product: ", productss);
    setProducts(productss);
  };
  useEffect(() => {
    getProducts();
  }, []);

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
                productName={product.productName}
                previewImage={product.previewImage}
                price={product.price}
              />
            );
          })}
          {productss?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                productName={product.productName}
                previewImage={product.previewImage}
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
