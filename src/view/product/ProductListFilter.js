import React, { useState, useEffect } from 'react';
import { getCategoriesOpen } from '../../services/client';

const ProductListFilter = props => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getCategoriesOpen().then(res => {
      if (isMounted) {
        setCategories(res.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const chooseCategory = categoryName => {
    props.products.setPageNumber(0);
    props.products.setCategoryName(categoryName);
  };

  const chooseProduct = e => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      props.products.setPageNumber(0);
      props.products.setProductName(e.target.value);
    }
  };

  function reset() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="shop-filters-left">
        <div className="shop-sidebar">
          <div className="sidebar-widget mb-50">
            <h3 className="sidebar-title">البحث</h3>
            <div className="sidebar-search">
              <form action="/">
                <input
                  type="text"
                  onKeyPress={chooseProduct}
                  placeholder="أبحث من خلال اسم المنتج"
                />
                <button type="button">
                  <i className="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="sidebar-widget mb-45">
            <h3 className="sidebar-title">اختر واحد من التصنيفات</h3>
            <div className="sidebar-categories">
              <ul>
                {categories.map(category => (
                  <li
                    key={category.id}
                    onClick={() => {
                      chooseCategory(category.name);
                    }}
                  >
                    <a href="#-">{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="quickview-btn-cart">
            <a href="#-" onClick={reset} className="btn-hover-black">
              Reset
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListFilter;
