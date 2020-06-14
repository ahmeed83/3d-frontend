import {
  AUTHORIZATION_VALUE,
  CONTENT_TYPE_FORM_VALUE,
  CONTENT_TYPE_JSON_VALUE,
  LOGIN_URL,
  MANAGEMENT_CATEGORIES_ADD_URL,
  MANAGEMENT_CATEGORIES_URL,
  MANAGEMENT_CUSTOMERS_URL,
  MANAGEMENT_PRODUCTS_URL,
  MANAGEMENT_SUB_CATEGORIES_ADD_URL,
  MANAGEMENT_SUB_CATEGORIES_URL,
  PRODUCTS_URL,
  MANAGEMENT_CATEGORIES_OPEN_URL,
} from './common/constants';
import Axios from 'axios';

const checkStatus = response => {
  if (response.status >= 200) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    response.then(e => {
      error.error = e;
    });
    return Promise.reject(error);
  }
};

export const getProductsPageFilter = (name, categoryName, page, sortBy) =>
  Axios.get(
    PRODUCTS_URL +
      `?name=${name}&categoryName=${categoryName}&page=${page}&sortBy=${sortBy}`,
    {
      headers: {
        'Content-Type': CONTENT_TYPE_JSON_VALUE,
      },
    }
  ).then(checkStatus);

export const getCategoriesOpen = () =>
  Axios.get(MANAGEMENT_CATEGORIES_OPEN_URL, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const login = loginInfo =>
  Axios.post(LOGIN_URL, loginInfo, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const getCustomers = () =>
  Axios.get(MANAGEMENT_CUSTOMERS_URL, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const deleteProduct = productId =>
  Axios.delete(MANAGEMENT_PRODUCTS_URL + productId, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const editProduct = productId =>
  Axios.put(MANAGEMENT_PRODUCTS_URL + productId, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addProduct = product =>
  Axios.post(MANAGEMENT_PRODUCTS_URL, product, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_FORM_VALUE,
    },
  }).then(checkStatus);

export const getCategories = () =>
  Axios.get(MANAGEMENT_CATEGORIES_URL, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addCategory = category =>
  Axios.post(MANAGEMENT_CATEGORIES_ADD_URL, category, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const getSubCategories = categoryId =>
  Axios.get(MANAGEMENT_SUB_CATEGORIES_URL + '/' + categoryId, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addSubCategory = subCategory =>
  Axios.post(MANAGEMENT_SUB_CATEGORIES_ADD_URL, subCategory, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);
