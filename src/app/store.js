import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import cartSlice from '../features/cart/cartSlice.js';
import { cartApi } from '../services/cart/cartApi.js';
import { productApi } from '../services/products/productApi.js';

const preloadedState = {
  cart: {
    numberOfItems: Number(localStorage.getItem('cartCount')) || 0,
  },
};

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(cartApi.middleware),
});

setupListeners(store.dispatch);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cartCount', state.cart.numberOfItems);
});
