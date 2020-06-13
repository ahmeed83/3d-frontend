import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './view/header-footer/Header';
import Footer from './view/header-footer/Footer';
import ProductListPage from './view/product/ProductListPage';
import ContactPage from './view/contact/ContactPage';
import LoginPage from './view/login/LoginPage';
import RegisterPage from './view/login/RegisterPage';
import ShoppingCartPage from './view/cart/ShoppingCartPage';
import CheckoutPage from './view/cart/CheckoutPage';
import AboutUsPage from './view/about-us/AboutUsPage';
import Test from './Test';

function App() {
  return (
    <div className="wrapper" lang="ar">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/shopping-cart" component={ShoppingCartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/test" component={Test} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
