import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { ProductOverview } from './components/admin/product/ProductOverview';
import { OrderOverview } from './components/admin/order/OrderOverview';
import { OrderDetailsPage } from './components/admin/order/OrderDetailsPage';
import { AddProduct } from './components/admin/product/AddProduct';
import { CustomersOverview } from './components/admin/customers/CustomersOverview';
import { LoginContext } from './services/context/LoginContext';
import ProductContextProvider from './services/context/ProductContext';
import { EmployeeOverview } from './components/admin/employees/EmployeeOverview';
import { CategoryOverview } from './components/admin/category/CategoryOverview';

const ManagementRoutes = () => {
  const userLoggedIn = useContext(LoginContext);
  return (
    <div className="py-5">
      {userLoggedIn.user === 'employee' || userLoggedIn.user === 'admin' ? (
        <div>
          {userLoggedIn.user === 'admin' ? (
            <Route path="/employees-overview">
              <EmployeeOverview />
            </Route>
          ) : (
            <Redirect push to="/" />
          )}
          <ProductContextProvider>
            <Route path="/products-overview">
              <ProductOverview />
            </Route>
          </ProductContextProvider>
          <Route path="/orders-overview">
            <OrderOverview />
          </Route>
          <Route path="/customers-overview">
            <CustomersOverview />
          </Route>
          <Route path="/category-overview">
            <CategoryOverview />
          </Route>
          <Route exact path="/add-product">
            <AddProduct />
          </Route>
          <Route path={`/order-page/:orderId`}>
            <OrderDetailsPage />
          </Route>
        </div>
      ) : null}
    </div>
  );
};

export default ManagementRoutes;
