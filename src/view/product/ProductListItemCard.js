import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import ProductModal from './ProductModal';

const ProductListItemCard = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="single-product single-product-list mb-50">
      <div className="product-img list-img-width">
        <a href="#toggle" onClick={toggle}>
          <img src={props.product.picLocation} alt="" />
        </a>
        {props.product.sale ? <span>sale</span> : null}
      </div>
      <div className="product-content-list">
        <div className="product-list-info">
          <h4>{props.product.name}</h4>
          <span>$ {props.product.price}</span>
          <p>{props.product.description}</p>
        </div>
        <div className="product-list-cart-wishlist">
          <div className="product-list-cart">
            <a className="btn-hover list-btn-style" href="/">
              add to cart
            </a>
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

export default ProductListItemCard;
