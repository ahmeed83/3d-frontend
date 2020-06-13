import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import ProductListItem from './ProductListItem';
import { Row } from 'reactstrap';
import ProductListItemCard from './ProductListItemCard';

const ProductListContainer = props => {
  const [showProductListCard, setShowProductListCard] = useState(true);
  useEffect(() => {
    singleProductFilter();
  }, []);

  const singleProductFilter = () => {
    var trigger = $('.shop-filter-active'),
      container = $('.shop-filters-left'),
      container2 = $('.shop-filters-right');
    trigger.on('click', function(e) {
      e.preventDefault();
      container.toggleClass('is-visible');
      container2.toggleClass('is-visible');
    });
  };

  return (
    <div className="shop-filters-right">
      <div className="shop-bar-area pb-60">
        <div className="shop-bar">
          <div className="shop-found-selector">
            <div className="shop-found"></div>
          </div>
          <div className="shop-filter-tab">
            <div className="shop-filter">
              <a className="shop-filter-active" href="/">
                Filters <i className="ion-android-options"></i>
              </a>
            </div>
            <div className="shop-tab nav">
              <a
                href="#productListItem"
                onClick={() => setShowProductListCard(true)}
              >
                <i className="ion-android-apps"></i>
              </a>
              <a
                href="#productListItemCart"
                onClick={() => setShowProductListCard(false)}
              >
                <i className="ion-android-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        {props.products.length === 0 ? (
          <p>No products!</p>
        ) : (
          <div className="shop-product-content">
            {showProductListCard ? (
              <Row className="custom-row">
                {props.products.map(product => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </Row>
            ) : (
              <Row>
                {props.products.map(product => (
                  <ProductListItemCard key={product.id} product={product} />
                ))}
              </Row>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListContainer;
