import React from "react";

const ProductCheckout = (props: any) => {
  return (
    <React.Fragment>

      <div className="checkout_area section-padding-80">
        <div className="container-fluid cart_container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="cart_title">Shopping Cart</div>

              <div className="pb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">Product</div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Price</div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Quantity</div>
                              </th>
                              <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Remove</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="border-0">
                                <div className="p-2 text-start">
                                  <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" className="img-fluid rounded shadow-sm me-2" />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle"><strong>79.00</strong></td>
                              <td className="border-0 align-middle  w-25">
                                <input type="number" className="form-control" id="qty" value="" />
                              </td>
                              <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="p-2 text-start">
                                  <img src="https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg" alt="" width="70" className="img-fluid rounded shadow-sm me-2" />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Lumix camera lense</a></h5><span className="text-muted font-weight-normal font-italic">Category: Electronics</span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle"><strong>79.00</strong></td>
                              <td className="align-middle  w-25">
                                <input type="number" className="form-control" id="qty" value="" />
                              </td>
                              <td className="align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="p-2 text-start">
                                  <img src="https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg" alt="" width="70" className="img-fluid rounded shadow-sm me-2" />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block">Gray Nike running shoe</a></h5><span className="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle"><strong>79.00</strong></td>
                              <td className="align-middle  w-25">
                                <input type="number" className="form-control" id="qty" value="" />
                              </td>
                              <td className="align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row py-5 p-4 bg-white rounded shadow-sm">
                    <div className="col-lg-12">
                      <div className="bg-secondary text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                      <div className="p-4">
                        <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                        <ul className="list-unstyled mb-4">
                          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>390.00</strong></li>
                          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>10.00</strong></li>
                          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>0.00</strong></li>
                          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                            <h5 className="font-weight-bold">400.00</h5>
                          </li>
                        </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">

              <div className="checkout_details_area mt-50 clearfix py-5 p-4 bg-white rounded shadow-sm">

                <div className="cart-page-heading mb-30">
                  <h5>Billing Address</h5>
                </div>

                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="first_name">First Name <span>*</span></label>
                      <input type="text" className="form-control" id="first_name" value="" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="last_name">Last Name <span>*</span></label>
                      <input type="text" className="form-control" id="last_name" value="" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="company">Company Name</label>
                      <input type="text" className="form-control" id="company" value="" />
                    </div>
                    {/* <div className="col-12 mb-3">
      <label htmlFor="country">Country <span>*</span></label>
      <select className="w-100" id="country" >
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ger">Germany</option>
        <option value="fra">France</option>
        <option value="ind">India</option>
        <option value="aus">Australia</option>
        <option value="bra">Brazil</option>
        <option value="cana">Canada</option>
      </select><div className="nice-select w-100" tabIndex={0}><span className="current">United States</span><ul className="list"><li data-value="usa" className="option selected">United States</li><li data-value="uk" className="option">United Kingdom</li><li data-value="ger" className="option">Germany</li><li data-value="fra" className="option">France</li><li data-value="ind" className="option">India</li><li data-value="aus" className="option">Australia</li><li data-value="bra" className="option">Brazil</li><li data-value="cana" className="option">Canada</li></ul></div>
    </div> */}
                    <div className="col-12 mb-3">
                      <label htmlFor="street_address">Address <span>*</span></label>
                      <input type="text" className="form-control mb-3" id="street_address" value="" />
                      <input type="text" className="form-control" id="street_address2" value="" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="postcode">Postcode <span>*</span></label>
                      <input type="text" className="form-control" id="postcode" value="" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="city">Town/City <span>*</span></label>
                      <input type="text" className="form-control" id="city" value="" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="state">Province <span>*</span></label>
                      <input type="text" className="form-control" id="state" value="" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="phone_number">Phone No <span>*</span></label>
                      <input type="number" className="form-control" id="phone_number" min="0" value="" />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="email_address">Email Address <span>*</span></label>
                      <input type="email" className="form-control" id="email_address" value="" />
                    </div>

                    <div className="col-12">
                      <div className="custom-control custom-checkbox d-block mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Terms and
                          conitions</label>
                      </div>
                      <div className="custom-control custom-checkbox d-block mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Create an accout</label>
                      </div>
                      <div className="custom-control custom-checkbox d-block">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Subscribe to our
                          newsletter</label>
                      </div>
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

export default ProductCheckout;
