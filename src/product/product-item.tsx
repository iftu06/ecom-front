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
      name: props.productName,
      quantity: quantity,
      price: price,
    };
    openModal(false);
    dispatch(cartActions.addItemToCart(cartItem));
  };

  return (
    <React.Fragment>
      {/* need to add shop_styles for this module */}
      <CustomModal
        render={() => (
          <ProductModal
            product={product}
            addItemToCartHandler={addItemToCartHandler}
          ></ProductModal>
        )}
        modalHeader="Add Product"
        show={isModalOpen}
        hideModal={hideModal}
      ></CustomModal>
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

      {/* <!-- Product Item --> */}
      <div className="product_item is_new">
        <div className="product_border"></div>
        <div className="product_image d-flex flex-column align-items-center justify-content-center">
          <img src={product.previewImage} alt=""></img>
        </div>
        <div className="product_content">
          <div className="product_price">{product.price}</div>
          <div className="product_name">
            <div>
              <a href="#" tabIndex={0}>
                {product.productName}
              </a>
            </div>
          </div>
        </div>
        <div className="product_fav">
          <i className="fas fa-heart"></i>
        </div>
        <ul className="product_marks">
          <li className="product_mark product_discount">-25%</li>
          <li className="product_mark product_new">new</li>
        </ul>

        <button className="btn btn-outline-primary btn-sm mt-2" onClick={showModal}>
          Add To Cart
        </button>
      </div>



      {/* <!-- Shop Page Navigation --> */}
    </React.Fragment>
  );
};

export default ProductItem;
