import React, { createContext, useState, useEffect } from 'react';
import { getProductsPageFilter } from '../client';

export const ProductContext = createContext();

const ProductContextProvider = props => {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [productsProvidedFiltered, setProductsProvidedFiltered] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      getProductsPageFilter(productName, categoryName, pageNumber, 'name').then(
        res => {
          setTotalPages(res.data.totalPages);
          setProductsProvidedFiltered(res.data.content);
          setLoading(false);
        }
      );
    };
    fetchData();
  }, [productName, categoryName, pageNumber, trigger]);

  return (
    <ProductContext.Provider
      value={{
        pageNumber,
        setProductName,
        setCategoryName,
        setPageNumber,
        productsProvidedFiltered,
        totalPages,
        loading,
        setTrigger,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
