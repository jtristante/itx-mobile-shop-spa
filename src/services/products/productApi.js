import { createApiBase } from '../base/createApiBase.js';

export const productApi = createApiBase({
  reducerPath: 'productApi',
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: 'api/product',
        method: 'GET',
      }),
    }),
    getProductDetail: builder.query({
      query: (productId) => ({
        url: `api/product/${productId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi;
