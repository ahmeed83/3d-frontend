import React from 'react';
import WelcomeBanner from '../../WelcomeBanner';
import { Container, Col, Row, Label, Form } from 'reactstrap';

const CheckoutPage = () => {
  return (
    <div>
      <WelcomeBanner />
      <Container>
        <div className="checkbox-page ptb-100">
          <Row>
            <Col className="mt-5 lg-12 md-12 12">
              <div className="your-order">
                <h3>البضاعة المطلوبة</h3>
                <div className="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-total">السعر</th>
                        <th className="product-name">المنتج</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-total">
                          <span className="amount">165.00 $</span>
                        </td>
                        <td className="product-name">DELL Laptop</td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-total">
                          <span className="amount">400.00 $</span>
                        </td>
                        <td className="product-name">MacBook 15</td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-total">
                          <span className="amount">900.00 $</span>
                        </td>
                        <td className="product-name">iPhone 11</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="order-total">
                        <td>
                          <strong>
                            <span className="amount">495.00 $</span>
                          </strong>
                        </td>
                        <th>السعر الأجمالي</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div className="panel-group" id="faq">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h5 className="panel-title">
                            <a
                              data-toggle="collapse"
                              aria-expanded="true"
                              data-parent="/faq"
                              href="/payment-1"
                            >
                              الدفع عند الاستلام
                            </a>
                          </h5>
                        </div>
                        <div
                          id="payment-1"
                          className="panel-collapse collapse show"
                        >
                          <div className="panel-body">
                            <p>سوف نقوم بجلب البضاعة اليك</p>
                            <p>
                              ان كنت ترغب بحجز البضاعة والقدوم لأستلامها في
                              المحل، هذا جائز ايضا
                            </p>
                            <p>
                              (Order Id) الرجاء استخدام رقم الوصل اذا كان عندك
                              اي سؤال على البضاعة
                            </p>
                            <p>
                              سوف نرسل لك ايميل يحتوي علي قائمة المشتريات وعلى
                              رقم الوصل حال طلبك للبضاعة
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <input type="submit" value="أطلب البضاعة" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="lg-12 md-12 12">
              <Form action="/">
                <div className="checkbox-form">
                  <h3>عنوان تسلم البضاعة</h3>
                  <Row>
                    <Col className="md-12">
                      <div className="checkout-form-list">
                        <Label>
                          المحافظة
                          <span className="required">*</span>
                        </Label>
                        <select dir="rtl">
                          <option value="baghdad">بغداد</option>
                          <option value="basra">البصرة</option>
                          <option value="mosul">الموصل</option>
                          <option value="najaf">النجف</option>
                          <option value="karbala">كربلاء</option>
                          <option value="amarah">العمارة</option>
                          <option value="nasryah">الناصرية</option>
                          <option value="north-iraq">الشمال</option>
                        </select>
                      </div>
                    </Col>
                    <Col className="col-md-12">
                      <div className="checkout-form-list">
                        <Label>
                          الأسم<span className="required">*</span>
                        </Label>
                        <input type="text" placeholder="" />
                      </div>
                    </Col>
                    <Col className="col-md-12">
                      <div className="checkout-form-list">
                        <Label>أسم الشركة </Label>
                        <input type="text" placeholder="" />
                      </div>
                    </Col>
                    <Col className="col-md-12">
                      <div className="checkout-form-list">
                        <Label>
                          العنوان <span className="required">*</span>
                        </Label>
                        <input type="text" placeholder="أسم الشارع" />
                      </div>
                    </Col>
                    <Col className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          placeholder="أسم العمارة/البيت ان كانت شركة"
                        />
                      </div>
                    </Col>
                    <Col className="col-md-4">
                      <div className="checkout-form-list">
                        <Label>
                          رقم الدار <span className="required">*</span>
                        </Label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col className="col-md-4">
                      <div className="checkout-form-list">
                        <Label>
                          زقاق <span className="required">*</span>
                        </Label>
                        <input type="text" placeholder="" />
                      </div>
                    </Col>
                    <Col className="col-md-4">
                      <div className="checkout-form-list">
                        <Label>
                          محلة <span className="required">*</span>
                        </Label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col className="col-md-6">
                      <div className="checkout-form-list">
                        <Label>
                          الايميل <span className="required">*</span>
                        </Label>
                        <input type="email" />
                      </div>
                    </Col>
                    <Col className="col-md-6">
                      <div className="checkout-form-list">
                        <Label>
                          رقم التلفون <span className="required">*</span>
                        </Label>
                        <input type="text" />
                      </div>
                    </Col>
                  </Row>
                  <div className="order-notes">
                    <div className="checkout-form-list mrg-nn">
                      <Label>ملاحظات</Label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder=".ملاحظات عن طلب شرائك"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
