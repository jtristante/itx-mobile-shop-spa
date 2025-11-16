import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cart/cartSlice.js';
import { productApi } from '../services/products/productApi.js';
import { cartApi } from '../services/cart/cartApi.js';

export function createTestStore() {
  return configureStore({
    reducer: {
      cart: cartSlice,
      [productApi.reducerPath]: productApi.reducer,
      [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware).concat(cartApi.middleware),
  });
}
