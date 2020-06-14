import React from 'react';

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
                <img src={props.product.picLocation} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="qwick-view-right">
          <div className="qwick-view-content">
            <h4>{props.product.name}</h4>
            <div className="price">
              <span className="new">$ {props.product.price}</span>
            </div>
            <p>{props.product.description}</p>
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
