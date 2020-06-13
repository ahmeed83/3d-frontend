import React, { useState } from 'react';

import Context from '../../components/services/context';
import ListCategoryProvider from '../../components/services/ListCategoryProvider';

import ProductListContainer from './ProductListContainer';

const ProductListFilter = props => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchCategoryName, setSearchCategoryName] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const chooseCategory = categoryName => {
    setSearchCategoryName(categoryName);
  };

  const doNothing = e => {
    e.preventDefault();
    console.log('onclick..');
  };

  const productFilteredList =
    searchTerm || searchCategoryName
      ? !searchCategoryName
        ? props.context.products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
        : props.context.products.filter(
            product =>
              product.categoryName.toLowerCase() ===
              searchCategoryName.toLocaleLowerCase()
          )
      : props.context.products;

  return (
    <div>
      <ProductListContainer products={productFilteredList} />
      <div className="shop-filters-left">
        <div className="shop-sidebar">
          <div className="sidebar-widget mb-50">
            <h3 className="sidebar-title">البحث</h3>
            <div className="sidebar-search">
              <form action="/">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="أبحث من خلال اسم المنتج"
                />
                <button onClick={doNothing}>
                  <i className="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
          </div>
          <ListCategoryProvider>
            <Context.Consumer>
              {context => (
                <div className="sidebar-widget mb-45">
                  <h3 className="sidebar-title">اختر واحد من التصنيفات</h3>
                  <div className="sidebar-categories">
                    <ul>
                      {context.categories.map(category => (
                        <li
                          key={category.id}
                          onClick={() => {
                            chooseCategory(category.name);
                          }}
                        >
                          <a href="#-">
                            {category.name} <span>5</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Context.Consumer>
          </ListCategoryProvider>
        </div>
        <div className="quickview-btn-cart">
          <a className="btn-hover-black" href={handleChange}>
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductListFilter;
