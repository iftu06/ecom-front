import axios from "axios";
import React, { useEffect, useState } from "react";
import { Category } from "../category/category";
let categories: Category[];
const Categories = () => {
  const [categoryList, setcategories] = useState<Category[]>([]);
  const getCategories = async () => {
    const response = await axios.get(
      "http://localhost:8095/webstore/categories"
    );
    categories = await response.data.responseBody;
    console.log("print cat: ", categories);
    setcategories(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const submenuToggle = (categoryId: number) => {
    let cloneCategoryList: Category[] = [...categoryList];
    // const selectedCategory: Category | undefined = cloneCategoryList.find(
    //   (category: Category) => category.id == categoryId
    // );
    // let cloneCategory = { ...selectedCategory };
    // cloneCategory.class = true;
    // let x: number = cloneCategoryList.findIndex((c: Category) => c.id === cloneCategory.id);
    // cloneCategoryList[x] = cloneCategory;
    cloneCategoryList.map((category: Category) => {
      if (category.id == categoryId) {
        category.class = true;
      } else {
        category.class = false;
      }
    })
    setcategories(cloneCategoryList);
  };

  const catMenu = categoryList?.map((category: any) => {
    return (
      <React.Fragment>
        <li className={category.class ? 'active-submenu' : ''} onClick={() => submenuToggle(category.id!)} >
          <a>
            {category.name} <i className="fas fa-chevron-right ml-auto"></i>
          </a>
          {category.child?.length! > 0 ? (
            <ul className='submenu-show'>
              {category.child?.map((subCat: any) => {
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
            ''
          )}
        </li>
      </React.Fragment>
    );
  });
  return (
    <div className="cat_menu_container">
      <div className="cat_menu_title">
        categories
      </div>
      <ul className="cat_menu">
        {catMenu}
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
        <li className="active-submenu">
          <a href="#">
            Hardware<i className="fas fa-chevron-right"></i>
          </a>
          <ul className="submenu-show">
            {/*to see submenu add css class 'submenu-show' */}
            <li>
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
