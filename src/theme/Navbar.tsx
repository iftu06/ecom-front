import React from "react";

const NavBar = () => {
  return (
    <div className="main_nav_menu ml-auto">
      <ul className="standard_dropdown main_nav_dropdown">
        <li>
          <a href="#">
            Home<i className="fas fa-chevron-down"></i>
          </a>
        </li>
        <li className="hassubs">
          <a href="#">
            Super Deals<i className="fas fa-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="hassubs">
          <a href="#">
            Featured Brands<i className="fas fa-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Menu Item<i className="fas fa-chevron-down"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-down"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="hassubs">
          <a href="#">
            Pages<i className="fas fa-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="shop.html">
                Shop<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="product.html">
                Product<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="blog.html">
                Blog<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="blog_single.html">
                Blog Post<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="regular.html">
                Regular Post<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="cart.html">
                Cart<i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li>
              <a href="contact.html">
                Contact<i className="fas fa-chevron-down"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="blog.html">
            Blog<i className="fas fa-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="contact.html">
            Contact<i className="fas fa-chevron-down"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
