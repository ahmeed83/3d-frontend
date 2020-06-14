import React from 'react';
import './Login.css';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { login } from '../../services/client';
import { ACCESS_TOKEN, USER } from '../../services/common/constants';
import { FormGroup, InputGroup, Badge, Input } from 'reactstrap';

const LoginPage = () => {
  const validationSchema = yup.object({
    userName: yup.string().required('User name is required'),
    password: yup.string().required('Password is required'),
  });

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
                    <Formik
                      initialValues={{
                        userName: '',
                        password: '',
                        // rememberMe: false
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(loginInfo, { setSubmitting }) => {
                        login(loginInfo)
                          .then(response => {
                            localStorage.setItem(
                              ACCESS_TOKEN,
                              response.headers.authorization
                            );
                            localStorage.setItem(USER, response.headers.user);
                            setSubmitting(false);
                            window.location = '/';
                          })
                          .catch(err => {
                            setSubmitting(false);
                          });
                      }}
                    >
                      {({ errors, touched, isSubmitting }) => (
                        <Form>
                          <FormGroup>
                            <InputGroup className="input-group-prepend">
                              <Field
                                placeholder="الايميل"
                                name="userName"
                                type="text"
                                as={Input}
                              />
                            </InputGroup>
                            {errors.userName && touched.userName && (
                              <Badge color="warning">{errors.userName}</Badge>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-prepend">
                              <Field
                                placeholder="الباسوورد"
                                name="password"
                                type="text"
                                as={Input}
                              />
                            </InputGroup>
                            {errors.password && touched.password && (
                              <Badge color="warning">{errors.password}</Badge>
                            )}
                          </FormGroup>

                          <FormGroup className="button-box">
                            {/* <div className="login-toggle-btn">
                              <input type="checkbox" />
                              <label>Remember me</label>
                              <a href="/">Forgot Password?</a>
                            </div> */}
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="default-btn btn-block"
                              size="lg"
                              // outline
                              color="primary"
                            >
                              Login
                            </button>
                          </FormGroup>
                        </Form>
                      )}
                    </Formik>
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
