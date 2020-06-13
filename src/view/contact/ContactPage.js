import React from 'react';
import WelcomeBanner from '../../WelcomeBanner';
// import MapContainer from './MapContainer';

const ContactPage = () => {
  return (
    <div>
      <WelcomeBanner />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="contact-info">
            <h2 className="contact-title">
              اتصل بنا من خلال المعلومات التالية
            </h2>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-contact-info mb-40">
                  <div className="contact-info-icon">
                    <i className="ion-ios-location-outline"></i>
                  </div>
                  <div className="contact-info-content">
                    Location : <p> Baghdad AL-Karadah</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-contact-info mb-40">
                  <div className="contact-info-icon">
                    <i className="ion-ios-telephone-outline"></i>
                  </div>
                  <div className="contact-info-content">
                    Phone : <p>+00 964 7901 322 976</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-contact-info mb-40">
                  <div className="contact-info-icon">
                    <i className="ion-ios-email-outline"></i>
                  </div>
                  <div className="contact-info-content">
                    Mail :
                    <a href="/">
                      <p>hayder@gmail.com</p>
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h2 className="contact-title">يمكنك ايضا ان تبعث رسالة</h2>
            <div className="contact-message">
              <form id="contact-form" action="assets/mail.php" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-form-style contact-font-two">
                      <input name="email" placeholder="الأيميل" type="email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form-style contact-font-one">
                      <input name="name" placeholder="ألاسم" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-form-style contact-font-three">
                      <input
                        name="subject"
                        placeholder="أسم المنتج الذي تريد ان تسأل عنه"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-form-style contact-font-four">
                      <textarea
                        name="message"
                        placeholder="محتوى الرسالة"
                        type="text"
                      ></textarea>
                      <button className="submit btn-hover" type="submit">
                        {' '}
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
