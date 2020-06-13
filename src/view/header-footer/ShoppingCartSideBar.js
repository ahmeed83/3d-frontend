import React from 'react';
import ProductListItemShoppingCartSideBar from '../product/ProductListItemShoppingCartSideBar';

function ShoppingCartSideBar() {
  return (
    <div>
      <div className="sidebar-cart">
        <div className="wrap-sidebar">
          <div className="sidebar-cart-all">
            <div className="sidebar-cart-icon">
              <button className="op-sidebar-close">
                <span className="ion-android-close"></span>
              </button>
            </div>
            <div className="cart-content">
              <h3>سلة المشتريات</h3>
              <ul>
                <ProductListItemShoppingCartSideBar />
                <ProductListItemShoppingCartSideBar />
                <ProductListItemShoppingCartSideBar />
                <li className="single-product-cart">
                  <div className="cart-total">
                    <h4>
                      Total : <span>$ 495</span>
                    </h4>
                  </div>
                </li>
                <li className="single-product-cart">
                  <div className="cart-checkout-btn">
                    <a
                      className="btn-hover cart-btn-style"
                      href="/shopping-cart"
                    >
                      view cart
                    </a>
                    <a
                      className="no-mrg btn-hover cart-btn-style"
                      href="/checkout"
                    >
                      checkout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSideBar;
