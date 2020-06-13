import React from 'react';
import pic from '../../assets/img/cart/laptop80x80.jpg';

const ProductListItemShoppingCartSideBar = () => {
  return (
    <li className="single-product-cart">
      <div className="cart-img">
        <a href="/">
          <img src={pic} alt="" />
        </a>
      </div>
      <div className="cart-title">
        <h3>
          <a href="/">DELL Laptop</a>
        </h3>
        <span>$165.00</span>
      </div>
      <div className="cart-delete">
        <a href="/">
          <i className="ion-ios-trash-outline"></i>
        </a>
      </div>
    </li>
  );
};

export default ProductListItemShoppingCartSideBar;
