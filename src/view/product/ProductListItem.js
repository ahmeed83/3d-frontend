import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import ProductModal from './ProductModal';

const ProductListItem = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="custom-col-5 custom-col-style">
      <div className="single-product mb-35">
        <div className="product-img">
          <a href="#toggle" onClick={toggle}>
            <img src={props.product.picLocation} alt="" />
          </a>
          {props.product.sale ? <span>sale</span> : null}
        </div>
        <div className="product-content">
          <div className="product-title-price">
            <div className="product-title">
              <h4>{props.product.name}</h4>
            </div>
            <div className="product-price">
              <span>${props.product.price}</span>
            </div>
          </div>
          <div className="product-cart-category">
            <div className="product-cart">
              <span>{props.product.category.name}</span>
              &nbsp;
              <span>({props.product.subCategory.name})</span>
            </div>
            <div className="product-category">
              <a href="/">
                <i className="ion-bag"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdropTransition={{ timeout: 700 }}
      >
        <ProductModal product={props.product} />
      </Modal>
    </div>
  );
};

export default ProductListItem;
