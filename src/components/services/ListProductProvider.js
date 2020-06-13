import React, { useState, useEffect } from 'react';
import PackageContext from './context';
import { Spinner } from 'reactstrap';

const ListProductProvider = props => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [products.length]);

  const fetchProducts = async () => {
    try {
      const data = await fetch('/api/products');
      const products = await data.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log('reason: ' + error);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner className="spinner" color="warning" />
      ) : (
        <div>
          <PackageContext.Provider
            value={{
              products: products,
            }}
          >
            {props.children}
          </PackageContext.Provider>
        </div>
      )}
    </div>
  );
};

export default ListProductProvider;
