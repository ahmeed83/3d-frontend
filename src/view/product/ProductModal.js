import React from 'react';
import pic from '../../assets/img/shop/laptopModal.jpg';
import pic2 from '../../assets/img/quick-view/l2.jpg';
import pic3 from '../../assets/img/quick-view/l3.jpg';
import pic11 from '../../assets/img/quick-view/s1.jpg';
import pic22 from '../../assets/img/quick-view/s2.jpg';
import pic33 from '../../assets/img/quick-view/s3.jpg';

const ProductModal = props => {
  return (
    <div className="modal-content">
      <div className="modal-body">
        <div className="qwick-view-left">
          <div className="quick-view-learg-img">
            <div className="quick-view-tab-content tab-content">
              <div
                className="tab-pane active show fade"
                id="modal1"
                role="tabpanel"
              >
                <img src={pic} alt="" />
              </div>
              <div className="tab-pane fade" id="modal2" role="tabpanel">
                <img src={pic2} alt="" />
              </div>
              <div className="tab-pane fade" id="modal3" role="tabpanel">
                <img src={pic3} alt="" />
              </div>
            </div>
          </div>
          <div className="quick-view-list nav" role="tablist">
            <a
              className="active"
              href="/modal1"
              data-toggle="tab"
              role="tab"
              aria-selected="true"
            >
              <img src={pic11} alt="" />
            </a>
            <a
              href="/modal2"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              <img src={pic22} alt="" />
            </a>
            <a
              href="/modal3"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              <img src={pic33} alt="" />
            </a>
          </div>
        </div>
        <div className="qwick-view-right">
          <div className="qwick-view-content">
            <h3>{props.product.name}</h3>
            <div className="price">
              <span className="new">$ {props.product.price}</span>
              {/* <span className="old">$110.00 </span> */}
            </div>
            <p>Very good Dell Laptop!</p>
            <div className="quickview-plus-minus">
              <div className="quickview-btn-cart">
                <a className="btn-hover-black" href="/">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
