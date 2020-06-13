import React from 'react';
import ProductListFilter from './ProductListFilter';
import WelcomeBanner from '../../WelcomeBanner';

import Context from '../../components/services/context';
import ListProductProvider from '../../components/services/ListProductProvider';

const ProductListPage = () => {
  return (
    <div>
      <WelcomeBanner />
      <ListProductProvider>
        <Context.Consumer>
          {context => (
            <div className="shop-page-wrapper hidden-items padding-filter">
              <div className="container-fluid">
                <ProductListFilter context={context} />
              </div>
            </div>
          )}
        </Context.Consumer>
      </ListProductProvider>
    </div>
  );
};

export default ProductListPage;
