import React from "react";
import { Product } from "./product";

const ProductModal = (props: Product) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Header</div>
        <img className="card-img-top" src={props.image} alt="card img"></img>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">Ver Tasty Hisha Fish.You should try it</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductModal;

// <Card>

// </Card>
