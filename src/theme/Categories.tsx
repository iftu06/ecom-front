import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "../category/category";
// const categories: Category[] = [
//   {
//     name: "Computers & Laptops",
//     class: "fas fa-chevron-right ms-auto",
//   },
//   {
//     name: "Cameras & Photos",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "Smartphones & Tablets",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "TV & Audio",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "Gadgets",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "Car Electronics",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "Video Games & Consoles",
//     class: "fas fa-chevron-right",
//   },
//   {
//     name: "Accessories",
//     class: "fas fa-chevron-right",
//   },
// ];
let categories: Category[];
const Categories = () => {
  // const items = categories.map((category) => {
  //   return (
  //     <React.Fragment>
  //       <li>
  //         <a href="#">
  //           {category.name} <i className={category.class}></i>
  //         </a>
  //       </li>

  //     </React.Fragment>
  //   );
  // });

  const [categoryList, setcategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const response = await axios.get(
      "http://localhost:8095/webstore/categories"
    );
    categories = await response.data.responseBody;
    console.log("print cat: ", categories);
    setcategories(categories);
    //return categories;
  };
  useEffect(() => {
    getCategories();
    // setcategories(categ);
  }, []);

  const submenuToggle = (categoryId: number) => {
    // const selectedCategory : Category = categoryList.filter(
    //   (category) => category.id == categoryId
    // );

    //let cloneCategory = {...selectedCategory};
    //cloneCategory.class = 'has-sub';

    // find index of cloneCategory
    // 2

    //categoryList[index] = cloneCategory;


    // selectedCategory.class == '' ? 'has-sub' : '';
    // categoryList.push(selectedCategory);
  };

  // const catMenu = categories?.map((category: any) => {
  //   return (
  //     <React.Fragment>
  //       <li>
  //         <a href="#">
  //           {category.name} <i className="fas fa-chevron-right ml-auto"></i>
  //         </a>
  //       </li>
  //     </React.Fragment>
  //   );
  // });
  return (
    <div className="cat_menu_container">
      <div className="cat_menu_title">
        categories
        {/* <div className="cat_burger">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        {/* <div className="cat_menu_text">categories</div> */}
      </div>

      {/* <ul className="cat_menu">{items}</ul> */}

      <ul className="cat_menu">
        {/* {catMenu} */}
        {categoryList.map((category) => {
          return (
            <li
              className={category.class}
              onClick={() => submenuToggle(category.id!)}
            >
              <a href="#">
                {category.name} <i className="fas fa-chevron-right ml-auto"></i>
              </a>
              {category.child?.length! > 0 ? (
                <ul>
                  {category.child?.map((subCat) => {
                    return (
                      <li>
                        <a href="#">
                          {subCat.name}
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </li>
          );
        })}
        <li>
          <a href="#">
            Computers & Laptops <i className="fas fa-chevron-right ml-auto"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Cameras & Photos<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li className="hassubs">
          <a href="#">
            Hardware<i className="fas fa-chevron-right"></i>
          </a>
          <ul className="submenu-show">
            {" "}
            {/*to see submenu add css class 'submenu-show' */}
            <li className="hassubs">
              <a href="#">
                Menu Item<i className="fas fa-chevron-right"></i>
              </a>
              {/* <ul>
                <li><a href="#">Menu Item<i
                  className="fas fa-chevron-right"></i></a></li>
                <li><a href="#">Menu Item<i
                  className="fas fa-chevron-right"></i></a></li>
                <li><a href="#">Menu Item<i
                  className="fas fa-chevron-right"></i></a></li>
                <li><a href="#">Menu Item<i
                  className="fas fa-chevron-right"></i></a></li>
              </ul> */}
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item<i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Smartphones & Tablets<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            TV & Audio<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Gadgets<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Car Electronics<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Video Games & Consoles<i className="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Accessories<i className="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
