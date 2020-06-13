import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';
import ShoppingCartSideBar from './ShoppingCartSideBar';
import LoginSideBar from './LoginSideBar';

const Header = () => {
  useEffect(() => {
    sidebarCart();
  }, []);

  const sidebarCart = () => {
    var menuTrigger = $('button.sidebar-trigger'),
      endTrigger = $('button.op-sidebar-close'),
      container = $('.sidebar-cart'),
      wrapper = $('.wrapper');

    wrapper.prepend('<div className="body-overlay"></div>');
    menuTrigger.on('click', function() {
      container.addClass('inside');
      wrapper.addClass('overlay-active');
    });

    endTrigger.on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });

    $('.body-overlay').on('click', function() {
      container.removeClass('inside');
      wrapper.removeClass('overlay-active');
    });
  };

  return (
    <div>
      <header className="pl-155 pr-155 intelligent-header">
        <div className="header-area header-area-2">
          <div className="container-fluid p-0">
            <Row className="main-menu menu-none-block menu-center">
              <Col lg="2" md="2" sm="2">
                <div className="logo pl-5">
                  <a href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                  </a>
                </div>
              </Col>
              <Col lg="8">
                <nav>
                  <ul>
                    <li>
                      <a href="/contact">اتصل بنا</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/contact">اتصل بنا</a>
                        </li>
                        <li>
                          <a href="/about-us">من نحن</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/login">نسجيل الدخول</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/login">تسجيل الدخول</a>
                        </li>
                        <li>
                          <a href="/register">التسجيل</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/shopping-cart">سلة المشتريات</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/shopping-cart">سلة المشتريات</a>
                        </li>
                        <li>
                          <a href="/checkout">تقديم طلب الشراء</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">الرئيسية</a>
                    </li>
                    <li>
                      <a href="/">الأدمن</a>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col lg="2" md="2" sm="2">
                <div className="header-search-cart">
                  <div className="header-cart common-style">
                    <button onClick={sidebarCart} className="sidebar-trigger">
                      <span className="ion-bag"></span>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
      <ShoppingCartSideBar />
      <LoginSideBar />
    </div>
  );
};

export default Header;
