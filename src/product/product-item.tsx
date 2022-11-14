import React from "react";
import { Product } from "./product";

const ProductItem = (props: Product) => {
  return (
    <React.Fragment>
      {/* <div className="arrivals_slider_item"> */}
      <div className="border_active"></div>
      <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
        <div className="product_image d-flex flex-column align-items-center justify-content-center">
          <img src={props.image} alt="" />
        </div>
        <div className="product_content">
          <div className="product_price">${props.price}</div>
          <div className="product_name">
            <div>
              <a href="product.html">{props.name}</a>
            </div>
          </div>
          <div className="product_extras">
            <div className="product_color">
              <input
                type="radio"
                checked
                name="product_color"
                style={{ background: "#b19c83" }}
              />
              <input
                type="radio"
                name="product_color"
                style={{ background: "#000000" }}
              />
              <input
                type="radio"
                name="product_color"
                style={{ background: "#999999" }}
              />
            </div>
            <button className="product_cart_button">Add to Cart</button>
          </div>
        </div>
        <div className="product_fav">
          <i className="fas fa-heart"></i>
        </div>
        <ul className="product_marks">
          <li className="product_mark product_discount">-25%</li>
          <li className="product_mark product_new">new</li>
        </ul>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default ProductItem;
