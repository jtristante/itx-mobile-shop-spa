import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { globalVariables } from '../../config/globalVariables.js';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: globalVariables.VITE_API_BASE_URL,
  timeout: globalVariables.VITE_DEFAULT_TIMEOUT,
});

export function createApiBase({ endpoints, ...rest }) {
  return createApi({
    baseQuery: customBaseQuery,
    ...rest,
    endpoints: (builder) => {
      const wrappedBuilder = Object.assign({}, builder, {
        query: (config) =>
          builder.query({
            keepUnusedDataFor: globalVariables.VITE_DEFAULT_CACHE_SECONDS,
            ...config,
          }),
        mutation: (config) =>
          builder.mutation({
            keepUnusedDataFor: globalVariables.VITE_DEFAULT_CACHE_SECONDS,
            ...config,
          }),
      });

      return endpoints(wrappedBuilder);
    },
  });
}
