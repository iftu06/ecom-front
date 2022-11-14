import React, { useEffect, useState } from "react";
import { Product } from "../product/product";
import axios from "axios";
import ProductItem from "../product/product-item";

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Nokia 3310(2017)",
//     image: "images/new_6.jpg",
//     price: 379,
//     description: "some",
//   },
//   {
//     id: 2,
//     name: "Huawei MediaPad",
//     image: "images/new_8.jpg",
//     price: 225,
//     description: "some",
//   },
//   {
//     id: 3,
//     name: "Huawei MediaPad",
//     image: "images/new_1.jpg",
//     price: 225,
//     description: "some",
//   },
// ];

const NewArrival = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  // const fetchProducts = async () => {
  //   const response = await fetch("http://localhost:3004/products");
  //   const prodJson = await response.json();
  //   console.log(prodJson);
  //   setProducts(await prodJson);
  // };

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="new_arrivals">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tabbed_container">
              <div className="tabs clearfix tabs-right">
                <div className="new_arrivals_title">Hot New Arrivals</div>
                <ul className="clearfix">
                  <li className="active" key="feature">
                    Featured
                  </li>
                  <li key="audio">Audio & Video</li>
                  <li key="vedio">Laptops & Computers</li>
                </ul>
                <div className="tabs_line">
                  <span></span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9">
                  <div className="product_panel panel active">
                    <div className="arrivals_slider slider">
                      {products.map((product) => {
                        return (
                          <ProductItem
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                          />
                        );
                      })}
                    </div>
                    <div className="arrivals_slider_dots_cover"></div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="arrivals_single clearfix">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="arrivals_single_image">
                        <img src="images/new_single.png" alt="" />
                      </div>
                      <div className="arrivals_single_content">
                        <div className="arrivals_single_category">
                          <a href="#">Smartphones</a>
                        </div>
                        <div className="arrivals_single_name_container clearfix">
                          <div className="arrivals_single_name">
                            <a href="#">LUNA Smartphone</a>
                          </div>
                          <div className="arrivals_single_price text-right">
                            $379
                          </div>
                        </div>
                        <div className="rating_r rating_r_4 arrivals_single_rating">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <form action="#">
                          <button className="arrivals_single_button">
                            Add to Cart
                          </button>
                        </form>
                      </div>
                      <div className="arrivals_single_fav product_fav active">
                        <i className="fas fa-heart"></i>
                      </div>
                      <ul className="arrivals_single_marks product_marks">
                        <li className="arrivals_single_mark product_mark product_new">
                          new
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
