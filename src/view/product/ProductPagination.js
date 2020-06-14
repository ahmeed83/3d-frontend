import React from 'react';
import { Row } from 'reactstrap';
import PaginationComponent from 'react-reactstrap-pagination';

const ProductPagination = props => {
  const handleSelected = index => {
    console.log(index);
    props.setPageNumber(index - 1);
  };

  return (
    <Row>
      <PaginationComponent
        totalItems={props.totalPages}
        pageSize={1}
        onSelect={handleSelected}
        firstPageText={'<<'}
        lastPageText={'>>'}
        previousPageText={'<'}
        nextPageText={'>'}
        size={'md'}
      />
    </Row>
  );
};
export default ProductPagination;
