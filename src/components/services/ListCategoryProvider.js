import React, { useState, useEffect } from 'react';
import PackageContext from './context';

const ListCategoryProvider = props => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await fetch('/api/products/categories');
      const categories = await data.json();
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.log('reason: ' + error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          <PackageContext.Provider
            value={{
              categories: categories,
            }}
          >
            {props.children}
          </PackageContext.Provider>
        </div>
      )}
    </div>
  );
};

export default ListCategoryProvider;
