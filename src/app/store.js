import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cart/cartSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
