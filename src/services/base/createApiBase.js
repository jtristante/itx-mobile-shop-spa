import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const DEFAULT_CACHE_SECONDS = 3600;
export const DEFAULT_TIMEOUT = 10000;
export const DEFAULT_BASE_URL = 'https://itx-frontend-test.onrender.com/';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: DEFAULT_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export function createApiBase({ endpoints, ...rest }) {
  return createApi({
    baseQuery: customBaseQuery,
    ...rest,
    endpoints: (builder) => {
      const wrappedBuilder = Object.assign({}, builder, {
        query: (config) =>
          builder.query({
            keepUnusedDataFor: DEFAULT_CACHE_SECONDS,
            ...config,
          }),
        mutation: (config) =>
          builder.mutation({
            keepUnusedDataFor: DEFAULT_CACHE_SECONDS,
            ...config,
          }),
      });

      return endpoints(wrappedBuilder);
    },
  });
}
