import React from 'react';
import pic from '../../assets/img/product/sidebar-product/1.jpg';

const ProductSideBarTopRated = () => {
  return (
    <div className="sidebar-top-rated mb-30">
      <div className="single-top-rated">
        <div className="top-rated-img">
          <a href="/">
            <img src={pic} alt="" />
          </a>
        </div>
        <div className="top-rated-text">
          <h4>
            <a href="/">Laptop DELL</a>
          </h4>
          <div className="top-rated-rating">
            <ul>
              <li>
                <i className="reting-color ion-android-star"></i>
              </li>
              <li>
                <i className="reting-color ion-android-star"></i>
              </li>
              <li>
                <i className="ion-android-star-outline"></i>
              </li>
              <li>
                <i className="ion-android-star-outline"></i>
              </li>
              <li>
                <i className="ion-android-star-outline"></i>
              </li>
            </ul>
          </div>
          <span>$140.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBarTopRated;
