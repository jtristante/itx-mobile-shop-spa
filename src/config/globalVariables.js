export const globalVariables = {
  VITE_API_BASE_URL: window._env_?.VITE_API_BASE_URL ?? import.meta.env.VITE_API_BASE_URL,
  VITE_DEFAULT_TIMEOUT: Number(window._env_?.VITE_DEFAULT_TIMEOUT ?? import.meta.env.VITE_DEFAULT_TIMEOUT),
  VITE_DEFAULT_CACHE_SECONDS: Number(
    window._env_?.VITE_DEFAULT_CACHE_SECONDS ?? import.meta.env.VITE_DEFAULT_CACHE_SECONDS,
  ),
};
