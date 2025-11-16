import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { store } from './app/store.js';

// TODO Temporal test's  they will be removed later

describe('Cart Slice Integration', () => {
  it('increments cart count when the add-to-cart button is clicked', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const buttonAddItem = screen.getByRole('button', { name: /0 cart items/i });
    await userEvent.click(buttonAddItem);

    const incrementedCartItemButton = screen.getByRole('button', { name: /1 cart items/i });
    expect(incrementedCartItemButton).toBeVisible();
  });
});
