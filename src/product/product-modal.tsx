import React, { useState } from "react";
import { Product } from "./product";

const ProductModal = (props: any) => {
  const [quantity, setQuantity] = useState(1);
  const product: Product = props.product;

  const quantityChangeHandler = (event: any) => {
    setQuantity(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-12">
                <div className="image_selected">
                  <img src="images/single_4.jpg" alt=""></img>
                </div>
              </div>
              <div className="col-lg-12">
                <ul className="image_list mx-auto">
                  <li data-image="images/single_2.jpg">
                    <img src="images/single_2.jpg" alt=""></img>
                  </li>
                  <li data-image="images/single_2.jpg">
                    <img src="images/single_2.jpg" alt=""></img>
                  </li>
                  <li data-image="images/single_3.jpg">
                    <img src="images/single_3.jpg" alt=""></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5 order-3">
            <div className="product_description">
              <div className="product_category">Laptops</div>
              <div className="product_name">{product.productName}</div>
              <div className="rating_r rating_r_4 product_rating">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div className="product_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas fermentum. laoreet turpis, nec sollicitudin dolor
                  cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi
                  tellus cursus urna, eget dictum lacus turpis.
                </p>
              </div>
              <div className="order_info d-flex flex-row">
                <form action="#">
                  <div className="clearfix" style={{ zIndex: "1000" }}>
                    <div className="product_quantity clearfix">
                      <span>Quantity: </span>
                      <input
                        type="number"
                        min="0"
                        onChange={quantityChangeHandler}
                        value="1"
                      />
                      <div className="quantity_buttons">
                        <div
                          id="quantity_inc_button"
                          className="quantity_inc quantity_control"
                        >
                          <i className="fas fa-chevron-up"></i>
                        </div>
                        <div
                          id="quantity_dec_button"
                          className="quantity_dec quantity_control"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>

                    <ul className="product-color">
                      <li>
                        <span>Color: </span>
                        <div className="color_mark_container">
                          <div id="selected_color" className="color_mark"></div>
                        </div>
                        <div className="color_dropdown_button">
                          <i className="fas fa-chevron-down"></i>
                        </div>

                        <ul className="color_list">
                          <li>
                            <div
                              className="color_mark"
                              style={{ background: "#999999" }}
                            ></div>
                          </li>
                          <li>
                            <div
                              className="color_mark"
                              style={{ background: "#b19c83" }}
                            ></div>
                          </li>
                          <li>
                            <div
                              className="color_mark"
                              style={{ background: "#000000" }}
                            ></div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="product_price">${product.price}</div>
                  <div className="button_container">
                    <button
                      type="button"
                      onClick={() =>
                        props.addItemToCartHandler(quantity, product.price)
                      }
                      className="button cart_button"
                    >
                      Add to Cart
                    </button>
                    <div className="product_fav">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductModal;
