import React from 'react';
import logo from '../../assets/img/logo/logo-footer.png';

const Footer = () => {
  return (
    <footer className="footer-area gray-bg pt-100 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-12">
            <div className="footer-widget f-right">
              <div className="footer-widget-r-content">
                <ul>
                  <li>
                    <span>Phone :</span> +00 964 7901 322 976
                  </li>
                  <li>
                    <span>Email : </span> <a href="/">hayder@gmail.com</a>
                  </li>
                  <li>
                    <span>Address :</span> Baghdad AL-Karadah
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 col-12">
            <div className="footer-widget">
              <div className="footer-widget-m-content text-center">
                <div className="footer-logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <p>3D office</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-12">
            <div className="footer-widget">
              <div className="footer-widget-l-content">
                <h4>Follow us on Social media</h4>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/3delctronics/">
                      <i className="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/3delctronics/">
                      <i className="ion-social-tumblr"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/3delctronics/">
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/3delctronics/">
                      <i className="ion-social-instagram-outline"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
