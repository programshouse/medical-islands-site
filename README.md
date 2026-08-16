# Medical Islands — React/Vite

Clean React conversion of the supplied Medical Islands HTML project. The original UI, CSS, assets, Bootstrap behavior, Owl Carousel behavior, content, and `.html` page URLs are preserved.

## Structure

```text
src/
├── components/        # Shared Topbar, Navbar, Footer and floating controls
├── hooks/             # Existing jQuery/plugin initialization in one place
├── pages/             # Actual JSX page components
├── App.jsx            # Resolves the current page
├── pageConfig.js      # URL → page configuration
└── main.jsx           # React entry point
```

The site no longer duplicates the header/footer on every page and does not use `root.innerHTML`, raw HTML injection, or a runtime HTML parser.

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
