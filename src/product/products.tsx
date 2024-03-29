import React from "react";
import { Product } from "./product";

const ProductItem = (props: Product) => {
  return (
    <div className="arrivals_slider_item" key={props.id}>
      <div className="border_active"></div>
      <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
        <div className="product_image d-flex flex-column align-items-center justify-content-center">
          <img src={props.previewImage} alt="" />
        </div>
        <div className="product_content">
          <div className="product_price">${props.price}</div>
          <div className="product_name">
            <div>
              <a href="product.html">{props.productName}...</a>
            </div>
          </div>
          <div className="product_extras">
            <div className="product_color">
              <input
                type="radio"
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
          <li className="product_mark product_discount"></li>
          <li className="product_mark product_new">new</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
