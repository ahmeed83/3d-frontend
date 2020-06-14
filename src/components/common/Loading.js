import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <div className="spinner">
      <Spinner className="spinner" color="warning" />
    </div>
  );
};

export default Loading;
