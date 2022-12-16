import React from "react";
import Categories from "../theme/Categories";
import MenuProducts from "./menu_products";

const Menu = (props: any) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <Categories />
        </div>
        <div className="col-md-8">
          <MenuProducts />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
