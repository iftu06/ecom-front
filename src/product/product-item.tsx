import React, { useState } from "react";
import { Product } from "./product";
import CustomModal from "../common/custom-modal";
import ProductModal from "./product-modal";
import { useDispatch } from "react-redux";
import CartItem from "../cart/cart_item";
import { cartActions } from "../cart/cart-reducer";

const ProductItem = (props: any) => {
  const product: Product = props;
  const dispatch = useDispatch();
  const [isModalOpen, openModal] = useState(false);

  const hideModal = () => {
    openModal(false);
  };

  const showModal = () => {
    openModal(true);
  };

  const addItemToCartHandler = (quantity: number, price: number) => {
    let cartItemId: string = product.id.toString();
    const cartItem: CartItem = {
      id: cartItemId,
      productId: product.id,
      name: props.name,
      quantity: quantity,
      price: price,
    };
    openModal(false);
    dispatch(cartActions.addItemToCart(cartItem));
  };

  return (
    <React.Fragment>
      {/* need to add shop_styles for this module */}
      {/* <CustomModal
        render={() => (
          <ProductModal
            product={product}
            addItemToCartHandler={addItemToCartHandler}
          ></ProductModal>
        )}
        modalHeader="Add Product"
        show={isModalOpen}
        hideModal={hideModal}
      ></CustomModal> */}
      {/* <div className="border_active"></div>
      <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
        <div className="product_image d-flex flex-column align-items-center justify-content-center">
          <img src={props.image} alt="" />
        </div>
        <div className="product_content">
          <div className="product_price">${product.price}</div>
          <div className="product_name">
            <div>
              <a href="product.html">{product.name}</a>
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
            <button className="product_cart_button" onClick={showModal}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product_fav">
          <i className="fas fa-heart"></i>
        </div>
        <ul className="product_marks">
          <li className="product_mark product_discount">-25%</li>
          <li className="product_mark product_new">new</li>
        </ul>
      </div> */}

      {/* <!-- Shop Content --> */}

      <div className="shop_content">
        <div className="shop_bar clearfix">
          <div className="shop_product_count"><span>186</span> products found</div>
          <div className="shop_sorting">
            <span>Sort by:</span>
            <ul>
              <li>
                <span className="sorting_text">highest rated<i className="fas fa-chevron-down"></i></span>
                <ul>
                  <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }'>highest rated</li>
                  <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }'>name</li>
                  <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "price" }'>price</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="product_grid">
          <div className="product_grid_border"></div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Philips BT6900A</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item discount">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225<span>$300</span></div>
              <div className="product_name"><div><a href="#" tabIndex={0} >Huawei MediaPad...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Apple iPod shuffle</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Sony MDRZX310W</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>LUNA Smartphone</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_1.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Canon IXUS 175...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379<span>$300</span></div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225<span>$300</span></div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Samsung J330F</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Lenovo IdeaPad</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Digitus EDNET...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Astro M2 Black</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Transcend T.Sonic</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Xiaomi Band 2...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo T8 White</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item discount">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225<span>$300</span></div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Huawei MediaPad...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Nokia 3310 (2017)</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Rapoo 7100p Gray</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Canon EF</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_2.jpg" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$225</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Gembird SPK-103</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

          {/* <!-- Product Item --> */}
          <div className="product_item is_new">
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""></img></div>
            <div className="product_content">
              <div className="product_price">$379</div>
              <div className="product_name"><div><a href="#" tabIndex={0}>Canon STM Kit...</a></div></div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
              <li className="product_mark product_discount">-25%</li>
              <li className="product_mark product_new">new</li>
            </ul>
          </div>

        </div>

        {/* <!-- Shop Page Navigation --> */}

        <div className="shop_page_nav d-flex flex-row justify-content-center">
          <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left"></i></div>
          <ul className="page_nav d-flex flex-row">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">...</a></li>
            <li><a href="#">21</a></li>
          </ul>
          <div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default ProductItem;
