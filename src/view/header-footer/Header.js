import React, { useEffect, useContext } from 'react';
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from 'reactstrap';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';
import ShoppingCartSideBar from './ShoppingCartSideBar';
import LoginSideBar from './LoginSideBar';
import { LoginContext } from '../../services/context/LoginContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../services/common/constants';

const Header = () => {
  const userLoggedIn = useContext(LoginContext);

  console.log(userLoggedIn);

  const logout = () => {
    localStorage.clear(ACCESS_TOKEN);
  };

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
              <Col>
                <div className="logo pl-5">
                  <a href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                  </a>
                </div>
              </Col>
              <Col>
                <nav>
                  <ul>
                    {userLoggedIn.token !== null ? (
                      <li>
                        <a href="/" onClick={logout}>
                          تسجيل الخروج
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a href="/login">تسجيل الدخول</a>
                      </li>
                    )}
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
                  </ul>
                </nav>
              </Col>

              {userLoggedIn.user === 'admin' ||
              userLoggedIn.user === 'employee' ? (
                <AdminNav userLoggedIn={userLoggedIn} />
              ) : (
                <Col lg="2" md="2" sm="2">
                  <div className="header-search-cart">
                    <div className="header-cart common-style">
                      <button onClick={sidebarCart} className="sidebar-trigger">
                        <span className="ion-bag"></span>
                      </button>
                    </div>
                  </div>
                </Col>
              )}
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

const AdminNav = props => {
  const suitcaseIcon = <FontAwesomeIcon icon={faSuitcase} />;
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Admin {suitcaseIcon}
        </DropdownToggle>
        <DropdownMenu right>
          {props.userLoggedIn.user === 'admin' ? (
            <DropdownItem>
              <NavLink tag={Link} to="/employees-overview">
                Employees Overview
              </NavLink>
            </DropdownItem>
          ) : null}
          <DropdownItem>
            <NavLink tag={Link} to="/customers-overview">
              Customers Overview
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem />
          <DropdownItem>
            <NavLink tag={Link} to="/orders-overview">
              Orders Overview
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink tag={Link} to="/products-overview">
              Products Overview
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink tag={Link} to="/category-overview">
              Category Overview
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};
