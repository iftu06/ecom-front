import React, { useEffect, useState } from "react";
import { Product } from "../product/product";
import axios from "axios";
import ProductItem from "../product/product-item";
import Slider from "react-slick";

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

const NewArrival = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //const [products, setProducts] = useState<Product[]>([] as Product[]);

  // useEffect(() => {
  //   fetch("http://localhost:3004/products")
  //     .then((response) => response.json())
  //     .then((data: Product[]) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  return (
    <React.Fragment>
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
                        <Slider {...settings}>
                          {products.map((product) => {
                            return (
                              <ProductItem
                                key={product.id}
                                id={product.id}
                                name={product.productName}
                                image={product.previewImage}
                                price={product.price}
                              />
                            );
                          })}
                        </Slider>
                      </div>
                      <div className="arrivals_slider_dots_cover"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewArrival;
