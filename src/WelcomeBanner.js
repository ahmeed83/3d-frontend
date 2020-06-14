import React from 'react';
import pic from './assets/img/3d-blue-yellow.jpg';

const WelcomeBanner = () => {
  var sectionStyle = {
    width: '100%',
    height: '43vh',
    backgroundImage: `url(${pic})`,
  };

  return (
    <div
      className="breadcrumb-area pt-205 pb-210 bg-img"
      style={sectionStyle}
    ></div>
  );
};

export default WelcomeBanner;
