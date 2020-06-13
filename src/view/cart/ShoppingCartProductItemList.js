import React from 'react';
import pic from '../../assets/img/cart/laptop80x80.jpg';

const ShoppingCartProductItemList = () => {
  return (
    <tr>
      <td className="product-remove">
        <a href="/">
          <i className="ion-android-close"></i>
        </a>
      </td>
      <td className="product-thumbnail">
        <a href="/">
          <img src={pic} alt="" />
        </a>
      </td>
      <td className="product-name">
        <a href="/">DELL Laptop</a>
      </td>
      <td className="product-price">
        <span className="amount">$165.00</span>
      </td>
    </tr>
  );
};

export default ShoppingCartProductItemList;
