import React from 'react';
import WelcomeBanner from '../../WelcomeBanner';
import { Col } from 'reactstrap';
import ShoppingCartProductItemList from './ShoppingCartProductItemList';

const ShoppingCartPage = () => {
  return (
    <div>
      <WelcomeBanner />
      <div className="cart-main-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <Col>
              <h1 className="cart-heading">سلة المشتريات</h1>
              <form action="/">
                <div className="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">حذف</th>
                        <th className="product-price">الصور</th>
                        <th className="product-name">المنتج</th>
                        <th className="product-price">السعر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ShoppingCartProductItemList />
                      <ShoppingCartProductItemList />
                      <ShoppingCartProductItemList />
                    </tbody>
                  </table>
                </div>
                <Col>
                  <Col className="col-md-6 ml-auto">
                    <div className="cart-page-total">
                      <h2>المجموع</h2>
                      <ul>
                        <li>
                          <span>495.00</span>
                          المبلغ الاجمالي
                        </li>
                      </ul>
                      <a href="/">تقديم طلب الشراء</a>
                    </div>
                  </Col>
                </Col>
              </form>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
