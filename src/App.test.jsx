import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App.jsx';

describe('App sample test', () => {
  it('App sample test to avoid block pre-push', async () => {
    await render(<App />);
    expect(screen.getByText('Vite + React')).toBeVisible();
  });
});
