import React from 'react';

const RegisterPage = () => {
  return (
    <div className="pt-5">
      <div class="register-area ptb-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto">
              <div class="login">
                <div class="login-form-container">
                  <h3 className="text-center">تسجيل الدخول</h3>
                  <div class="login-form">
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
                      <input
                        name="user-email"
                        placeholder="Email"
                        type="email"
                      />
                      <div class="button-box">
                        <button type="submit" class="default-btn btn-block">
                          Register
                        </button>
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

export default RegisterPage;
