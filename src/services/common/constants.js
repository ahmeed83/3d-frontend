export const ACCESS_TOKEN = 'accessToken';
export const AUTHORIZATION_VALUE = `Bearer ${localStorage.getItem(
  ACCESS_TOKEN
)}`;
export const CONTENT_TYPE_JSON_VALUE = 'application/json';
export const CONTENT_TYPE_FORM_VALUE = 'multipart/form-data';
export const USER = 'user';
export const LOGIN_URL = 'api/login';
export const MANAGEMENT_PRODUCTS_URL = 'api/management/v1/products/';
export const MANAGEMENT_CATEGORIES_URL = 'api/management/v1/category/';
export const MANAGEMENT_SUB_CATEGORIES_URL = 'api/management/v1/sub-category/';
export const MANAGEMENT_CATEGORIES_ADD_URL =
  MANAGEMENT_CATEGORIES_URL + 'add-category';
export const MANAGEMENT_SUB_CATEGORIES_ADD_URL =
  MANAGEMENT_SUB_CATEGORIES_URL + 'add-sub-category';
export const PRODUCTS_URL = 'api/resources/products';
export const MANAGEMENT_CATEGORIES_OPEN_URL = PRODUCTS_URL + '/categories/';
export const MANAGEMENT_CUSTOMERS_URL = 'api/management/v1/customers';
