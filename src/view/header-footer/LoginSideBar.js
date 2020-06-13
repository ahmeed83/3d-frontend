import React from 'react';

const LoginSideBar = () => {
  return (
    <div className="cur-lang-acc-active">
      <div className="wrap-sidebar">
        <div className="sidebar-nav-icon">
          <button className="op-sidebar-close">
            <span className="ion-android-close"></span>
          </button>
        </div>
        <div className="cur-lang-acc-all">
          <div className="single-currency-language-account">
            <div className="cur-lang-acc-title">
              <h4>My Account:</h4>
            </div>
            <div className="cur-lang-acc-dropdown">
              <ul>
                <li>
                  <a href="/register">register</a>
                </li>
                <li>
                  <a href="/login">Sign In </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
