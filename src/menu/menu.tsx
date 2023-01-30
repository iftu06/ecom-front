import React from "react";
import Categories from "../theme/Categories";
import MenuProducts from "./menu_products";

const Menu = (props: any) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12"> */}
          <div style={{ width: '15%' }}>
            <Categories />
          </div>
          <div style={{ width: '80%', marginLeft: '0.5rem' }}>
            <MenuProducts />
          </div>
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
