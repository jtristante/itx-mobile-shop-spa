import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';



import App from './App.jsx';
import { store } from './app/store.js';


// TODO Temporal test's  they will be removed later

describe('Navigation Tests', () => {
  it('When we open the app, the product list page will be displayed.', async () => {
    window.history.pushState({}, 'Test page', '/spa/');
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const title = await screen.findByText('Product List Page');
    expect(title).toBeVisible();

    const productList = screen.getByRole('list');

    const productLink = within(productList).getByRole('link', { name: /apple iphone 14 \- \$799/i })
    expect(productLink).toBeVisible();

  });
  it('With the path `/spa/product/:idProduct`, the product details page will be displayed.', async () => {
    window.history.pushState({}, 'Test page', '/spa/product/1');
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const title = await screen.findByText('Product Details Page');
    expect(title).toBeVisible();

    const productRamDetail = screen.getByText(/RAM: 6GB/i )
    expect(productRamDetail).toBeVisible();

  });
});
