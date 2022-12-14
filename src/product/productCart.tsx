import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../cart/cart-reducer";
import CartItem from "../cart/cart_item";

import styles from "./Cart.module.css";

const ProductCart = () => {
  const dispatch = useDispatch();
  const isCartVisible: boolean = useSelector(
    (state: any) => state?.cart?.isCartVisible
  );

  const itemsInCart: CartItem[] = useSelector(
    (state: any) => state?.cart?.items
  );

  const totItemInCart = useSelector((state: any) => state?.cart?.totQauntity);

  const increaseItemQuant = (id: string | undefined) => {
    dispatch(cartActions.increaseCartQuantByOne(id));
  };

  const decreaseItemQuant = (id: string | undefined) => {
    dispatch(cartActions.decreaseCartQuantByOne(id));
  };

  return (
    <section
      className={`${styles["product-cart"]} ${
        isCartVisible && styles["cart-open"]
      } `}
    >
      <div className="h-100 h-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="card cart-container cart-container-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-12">
                    <div className="p-2">
                      <div className="d-flex justify-content-between align-items-center mb-3 pt-3">
                        <h3 className="fw-bold mb-0 text-black">
                          <i>Shopping Cart</i>
                        </h3>
                        <h6 className="mb-0 text-muted">
                          {totItemInCart} items
                        </h6>
                      </div>
                      <hr className="my-4" />

                      {itemsInCart.map((item: CartItem) => {
                        return (
                          <React.Fragment key={item.id}>
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                ></img>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-5">
                                <h6 className="product-cart-name">
                                  {item.name}
                                </h6>
                                <h6
                                  className={`${styles["product-cart-amount"]} ${styles["mb-0"]}`}
                                >
                                  {item.price} BDT
                                </h6>
                              </div>
                              <div className="col-md-6 col-lg-5 col-xl-4 d-flex">
                                <button
                                  className="btn btn-link btn-count px-2"
                                  onClick={() => decreaseItemQuant(item.id)}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input
                                  min="0"
                                  name="cartQuant"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control form-control-sm text-center"
                                />

                                <button
                                  className="btn btn-link btn-count px-2"
                                  onClick={() => increaseItemQuant(item.id)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a
                                  href="#!"
                                  className="text-muted product-remove-icon"
                                >
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </React.Fragment>
                        );
                      })}

                      <div className="cart-footer">
                        {/* <h6 className="mb-0"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6> */}
                        <div className="row">
                          <div className="col-md-6 pe-0">
                            <button
                              type="button"
                              className="btn btn-md btn-outline-danger cart-btn-cancel"
                            >
                              Danger
                            </button>
                          </div>
                          <div className="col-md-6 ps-0">
                            <button className="btn btn-outline-primary cart-btn-checkout">
                              Check Out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
