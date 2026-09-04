# AscTechSoft website

Vue 3 + Vite landing page for AscTechSoft.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  api/                 API modules by business domain
  assets/              logo, images and global styles
  components/          reusable UI components
  config/              environment-based application config
  data/                local mock data while the API is not ready
  network/             shared HTTP client and request behavior
  App.vue              page composition and data loading
  main.js              application bootstrap
```

## Switch from mock data to API

Copy `.env.example` to `.env.local`, then set:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_USE_API=true
```

The page will call `GET /site` through `src/api/site.api.js`. Components do not
need to change when the data source moves from the local mock to the backend.
