import React from 'react';
import './Login.css';

import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';

const LoginPage = () => {
  return (
    <div className="pt-5">
      <div className="register-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
              <div className="login">
                <div className="login-form-container">
                  <h3 className="text-center">تسجيل الدخول</h3>
                  <div className="login-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="user-name"
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        name="user-password"
                        placeholder="Password"
                      />
                      <div className="button-box">
                        <div className="login-toggle-btn">
                          <input type="checkbox" />
                          <label>Remember me</label>
                          <a href="/">Forgot Password?</a>
                        </div>
                        <button type="submit" className="default-btn btn-block">
                          Login
                        </button>
                        <div className="text-center pt-3 mt-4">
                          أو كمل تسجيل الدخول من خلال حسابك في فيسبوك او كوكل
                        </div>
                        <FacebookLoginButton className="mt-3" />
                        <GoogleLoginButton className="mt-3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
