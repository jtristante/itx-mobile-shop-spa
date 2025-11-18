import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import cartSlice from '../features/cart/cartSlice.js';
import { cartApi } from '../services/cart/cartApi.js';
import { productApi } from '../services/products/productApi.js';
import { Provider as ChakraProvider } from '@/components/ui/provider';

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

export function renderWithProviders(ui, { route = '/' } = {}, store) {
  return render(
    <ReduxProvider store={store ?? createTestStore()}>
      <ChakraProvider>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </ChakraProvider>
    </ReduxProvider>,
  );
}
