import { setNumberOfItems } from '../../features/cart/cartSlice.js';
import { createApiBase } from '../base/createApiBase.js';

export const cartApi = createApiBase({
  reducerPath: 'cartApi',
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ id, colorCode, storageCode }) => ({
        url: 'api/cart',
        method: 'POST',
        body: { id, colorCode, storageCode },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setNumberOfItems(data.count));
        } catch (err) {
          console.error('Error adding item to cart', err);
        }
      },
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
