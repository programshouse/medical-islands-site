# Medical Islands — React/Vite

React/Vite version of the Medical Islands website with the existing UI/assets preserved and the Services + Workshops sections connected to the user API.

## API structure

```text
src/
├── api/
│   ├── config.js             # Single API base URL
│   ├── client.js             # Shared fetch helper
│   ├── servicesApi.js        # Services endpoints
│   └── workshopsApi.js       # Workshops endpoints
├── stores/
│   ├── createResourceStore.js
│   ├── servicesStore.js
│   └── workshopsStore.js
├── components/api/           # Reusable API cards, lists and details
├── pages/
├── App.jsx
├── pageConfig.js
└── main.jsx
```

The API base URL is defined only in `src/api/config.js`.

Services and workshops use Zustand for loading, error, list, and single-item state.

## Connected endpoints

```text
GET /services
GET /services/:id
GET /workshops
GET /workshops/:id
```

`service.html?id=5` and `workshop.html?id=6` use the corresponding single-item endpoint.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Preserved URLs

- `/index.html`
- `/about.html`
- `/service.html`
- `/workshop.html`
- `/blog.html`
- `/contact.html`
