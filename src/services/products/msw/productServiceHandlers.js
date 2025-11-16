import { HttpResponse, http } from 'msw';

import { MOCK_PRODUCTS } from './mocks/mockGetProduct.js';
import { MOCK_PRODUCT_DETAIL } from './mocks/mockGetProductDetail.js';

export const GET_PRODUCTS_HANDLER = http.get('*/api/product', () => {
  return HttpResponse.json(MOCK_PRODUCTS);
});

export const GET_PRODUCT_DETAIL_HANDLER = http.get('*/api/product/:productId', () => {
  return HttpResponse.json(MOCK_PRODUCT_DETAIL);
});

export const productApiHandlers = [GET_PRODUCTS_HANDLER, GET_PRODUCT_DETAIL_HANDLER];
