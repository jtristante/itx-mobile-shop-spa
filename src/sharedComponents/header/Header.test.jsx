import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from './Header.jsx';
import { setNumberOfItems } from '@/features/cart/cartSlice.js';
import { createTestStore, renderWithProviders } from '@/test/testUtils.jsx';

describe('Header component', () => {
  it('should render the title as a link to the homepage', () => {
    renderWithProviders(<Header />, { route: '/home/product/123' });

    const titleLink = screen.getByRole('link', { name: /ITX Mobile Shop/i });
    expect(titleLink).toBeVisible();
    expect(titleLink).toHaveAttribute('href', '/home/');
  });

  it('should display breadcrumb according to the route', () => {
    renderWithProviders(<Header />, { route: '/home/product/123' });

    const homeCrumb = screen.getByText(/Home/i);
    const productCrumb = screen.getByText(/Product/i);

    expect(homeCrumb).toBeVisible();
    expect(productCrumb).toBeVisible();
    expect(homeCrumb.closest('a')).toHaveAttribute('href', '/Home'); // Home link
    expect(productCrumb.tagName).toBe('SPAN'); // Current page, no link
  });

  it('should display the correct number of items in the cart', () => {
    const storeTest = createTestStore();
    storeTest.dispatch(setNumberOfItems(5));
    renderWithProviders(<Header />, { route: '/home/product/123' }, storeTest);
    screen.logTestingPlaygroundURL();

    const cartCount = screen.getByText('5');
    expect(cartCount).toBeVisible();
  });
});
