import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



import { Provider } from 'react-redux';



import App from './App.jsx';
import { store } from './app/store.js';
import './index.css';


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
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
});
