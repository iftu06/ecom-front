import React from "react";

const Deals = () => {
  return (
    <div className="deals_featured">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
            <div className="featured">
              <div className="tabbed_container">
                <div className="tabs">
                  <ul className="clearfix">
                    <li className="active">Featured</li>
                    <li>On Sale</li>
                    <li>Best Rated</li>
                  </ul>
                  <div className="tabs_line">
                    <span></span>
                  </div>
                </div>

                {/* Product Panel */}
                <div className="product_panel panel active">
                  <div className="featured_slider slider">
                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_1.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price discount">
                            $225<span>$300</span>
                          </div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="product_fav">
                          <i className="fas fa-heart"></i>
                        </div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">
                            -25%
                          </li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                    </div>

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_5.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Canon STM Kit...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_6.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Samsung J330F...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_8.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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
                  </div>
                  <div className="featured_slider_dots_cover"></div>
                </div>

                {/* Product Panel */}

                <div className="product_panel panel">
                  <div className="featured_slider slider">
                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_1.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price discount">
                            $225<span>$300</span>
                          </div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="product_fav">
                          <i className="fas fa-heart"></i>
                        </div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">
                            -25%
                          </li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                    </div>

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_2.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Apple iPod shuffle</a>
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
                            <button className="product_cart_button active">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}

                    {/* Slider Item */}

                    {/* Slider Item */}

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_1.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_2.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_3.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_4.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_5.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_6.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_7.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_8.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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
                  </div>
                  <div className="featured_slider_dots_cover"></div>
                </div>

                {/* Product Panel */}

                <div className="product_panel panel">
                  <div className="featured_slider slider">
                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_1.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price discount">
                            $225<span>$300</span>
                          </div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="product_fav">
                          <i className="fas fa-heart"></i>
                        </div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">
                            -25%
                          </li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                    </div>

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_2.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Apple iPod shuffle</a>
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
                            <button className="product_cart_button active">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_3.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Sony MDRZX310W</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_4.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price discount">
                            $225<span>$300</span>
                          </div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">LUNA Smartphone</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="product_fav">
                          <i className="fas fa-heart"></i>
                        </div>
                        <ul className="product_marks">
                          <li className="product_mark product_discount">
                            -25%
                          </li>
                          <li className="product_mark product_new">new</li>
                        </ul>
                      </div>
                    </div>

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_5.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Canon STM Kit...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_7.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$379</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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

                    {/* Slider Item */}
                    <div className="featured_slider_item">
                      <div className="border_active"></div>
                      <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="product_image d-flex flex-column align-items-center justify-content-center">
                          <img src="images/featured_8.png" alt="" />
                        </div>
                        <div className="product_content">
                          <div className="product_price">$225</div>
                          <div className="product_name">
                            <div>
                              <a href="product.html">Huawei MediaPad...</a>
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
                            <button className="product_cart_button">
                              Add to Cart
                            </button>
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
                  </div>
                  <div className="featured_slider_dots_cover"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
