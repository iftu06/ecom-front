import React from "react";
import { Product } from "../product/product";
import ProductItem from "../product/product-item";

const products: Product[] = [
  {
    id: 1,
    name: "Nokia 3310(2017)",
    image: "images/new_6.jpg",
    price: 379,
    description: "some",
  },
  {
    id: 2,
    name: "Huawei MediaPad",
    image: "images/new_8.jpg",
    price: 225,
    description: "some",
  },
  {
    id: 3,
    name: "Huawei MediaPad",
    image: "images/new_1.jpg",
    price: 225,
    description: "some",
  },
];

const MenuProducts = (props: any) => {
  return (
    <React.Fragment>
      {/* {products.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              );
            })} */}
      <ProductItem />
    </React.Fragment>
  );
};

export default MenuProducts;
