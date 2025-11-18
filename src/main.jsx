import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App.jsx';
import { store } from './app/store.js';
import { Provider as ChakraProvider } from '@/components/ui/provider';

const container = document.getElementById('root');

if (!container)
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );

// Init msw only in dev
async function enableMocking() {
  if (import.meta.env.VITE_MSW !== 'true') return;
  const { worker } = await import('./msw/worker.js');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  createRoot(container).render(
    <StrictMode>
      <ReduxProvider store={store}>
        <ChakraProvider forcedTheme="ligth">
          <App />
        </ChakraProvider>
      </ReduxProvider>
    </StrictMode>,
  );
});
