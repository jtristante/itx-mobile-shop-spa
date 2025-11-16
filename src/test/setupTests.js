import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from '../msw/server.js';

// Start MSW
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers between tests
afterEach(() => server.resetHandlers());

// Cleanup
afterAll(() => server.close());

