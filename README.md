# ITX Mobile Shop SPA

This project is a **Single Page Application (SPA)** for ITX Mobile Shop, built with **React**, **Redux Toolkit**, **React Router**, and styled with **Chakra UI**. It is prepared for testing with **Vitest** and **MSW**.


---
## 📖 Table of Contents

- [🛠️ Main Technologies](#-main-technologies)
- [🖥️ Environment Variables and `globalVariables`](#-environment-variables-and-globalvariables)
- [🚀 Available Scripts](#-available-scripts)
- [📂 Project Structure](#️-project-structure)
- [🧪 Testing](#-testing)
- [📝  Additional Notes](#-additional-notes)

---


## 🛠️ Main Technologies

- **React 19**: User interface development.
- **Redux Toolkit / RTK Query**: Global state management and API consumption.
- **React Router DOM 7**: SPA routing.
- **Vite 7**: Modern bundler and development server.
- **MSW 2**: Mock Service Worker for API mocking during development and testing.
- **Vitest 4**: Unit and integration testing.
- **Testing Library / Jest DOM**: React component testing.
- **ESLint / Prettier**: Code linting and formatting.
- **Cross-env**: Portable environment variables.
- **Chakra UI** (work in progress): Accessible and styled component library.

---

## 🖥️ Environment Variables and `globalVariables`

We use `.env` files for different environments:

- `.env` → Global environment variables.
- `.env.development` → Development variables (MSW enabled).

Additionally, we have a **`globalVariables`** module in the app to:

1. Centralize all environment variables used in the app.
2. Allow overriding variables from `window._env_` in environments where they are injected dynamically (e.g., Docker or production without rebuild).
3. Facilitate testing and mocking without directly relying on `import.meta.env`.

This ensures the same app can run in **development**, **testing**, and **production** without rebuilding for different URLs, timeouts, or flags like `VITE_MSW`.

---

## 🚀 Available Scripts

```bash
# Start the app in development mode
npm run START

# Build for production
npm run BUILD

# Run tests
npm run TEST

# Run linter
npm run LINT

# Format code
npm run PRETTIER

```

## 📂 Project Structure


- **`src/app`**: Redux store configuration.
- **`src/config`**: Global variables (`globalVariables.js`).
- **`src/layouts`**: Main layout (`MainLayout`).
- **`src/msw`**: Mock service worker configuration.
- **`src/pages`**: Main pages (`ProductListPage`, `ProductDetailsPage`).
- **`src/services`**: API endpoints, queries, mocks and msw dedicated handlers.
- **`src/test`**: Testing setup and helpers.  

## 🧪 Testing

Vitest runs in [happy-dom](https://github.com/capricorn86/happy-dom) environment,
a faster alternative of jsdom.

Unit tests are essentially done with [@testing-library/react](https://testing-library.com/)

## 📝 Additional Notes

- **Dockerfile** and **entrypoint.sh** are included as templates for building the app and injecting environment variables from a container.
- The project is designed for scalability using **Redux Toolkit**, **RTK Query**, **React Router**, and **Chakra UI** (work in progress). 