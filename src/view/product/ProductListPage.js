import React, { useContext } from 'react';
import ProductListFilter from './ProductListFilter';

import { ProductContext } from '../../services/context/ProductContext';
import Loading from '../../components/common/Loading';
import WelcomeBanner from '../../WelcomeBanner';

import ProductPagination from './ProductPagination';
import ProductListContainer from './ProductListContainer';
import { Container } from 'reactstrap';

const ProductListPage = () => {
  const products = useContext(ProductContext);

  return (
    <div>
      <WelcomeBanner />
      <Container fluid>
        <div>
          {products.loading ? (
            <Loading />
          ) : (
            <div>
              <div className="shop-page-wrapper hidden-items padding-filter">
                <div className="container-fluid">
                  <ProductListContainer
                    products={products.productsProvidedFiltered}
                  />
                  <ProductListFilter products={products} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="px-5">
          <div className="px-5">
            <div className="px-5">
              <ProductPagination
                setPageNumber={products.setPageNumber}
                totalPages={products.totalPages}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductListPage;
