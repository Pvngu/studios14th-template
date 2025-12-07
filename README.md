# Project Template: Studio Website

A modern, high-performance website template built with **Astro**, **Tailwind CSS v4**, and **GSAP**. Designed for speed, aesthetic appeal, and easy customization for template websites.

## 🚀 Features

- **Framework**: [Astro](https://astro.build) (v5+) for blazing fast static site generation.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling with the new engine.
- **Animations**: [GSAP](https://gsap.com/) for complex, smooth interaction animations.
- **Icons**: [Astro Icon](https://www.astroicon.dev/) for optimized SVG icons.
- **I18n**: Built-in internationalization (English & Spanish configured).
- **SEO**: Sitemap generation and optimized meta tags.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1.  **Clone the repository** (or use this template):

    ```bash
    git clone <repository-url>
    cd newsite-template
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Access the site at `http://localhost:4321`.

### Build for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist/` folder ready for deployment. It also runs a custom script `src/scripts/generate-pdf.mjs` (ensure this exists or remove it from `package.json` if not needed).

## 📂 Project Structure

```text
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable Astro components
│   ├── sections/  # Page sections (e.g., Hero, About, Features)
│   ├── shared/    # Global components (Header, Footer, Meta)
│   └── ui/        # UI primitives (Buttons, Cards, unexpected inputs)
├── data/          # JSON/data files (e.g., product catalogs, mock data)
├── i18n/          # Translation files (en.json, es.json)
├── icons/         # Custom SVGs used with astro-icon
├── layouts/       # Page layouts (Layout.astro)
├── lib/           # Utility functions and helpers
├── pages/         # File-based routing (pages and API endpoints)
└── styles/        # Global CSS and Tailwind configuration
```

## 🎨 Customization Guide

### Global Styles & Colors

This project uses **Tailwind CSS v4** with CSS variables for theming.

**File:** `src/styles/global.css`

The color system is semantic. You should update the **Primitive** colors to match your brand, and the **Semantic** variables will automatically update across the site.

```css
@theme {
  /* --- Primitives (Define your palette here) --- */
  --color-blue-sky: #3e98d9;
  --color-blue-royal: #2663eb;
  /* ... */

  /* --- Semantics (Use these in your components) --- */
  --color-primary: var(--color-blue-sky);
  --color-secondary: var(--color-blue-steel);
  --color-background: var(--color-black-rich);
  --color-text-main: var(--color-white);
}
```

**Usage in HTML/Astro:**

```html
<div class="bg-primary text-text-main">
  <!-- Content -->
</div>
```

### Fonts

Fonts are defined in `src/styles/global.css` and can be adjusted in the `@theme` block.

- `font-gilda`: 'Gilda Display', serif
- `font-inter`: 'Inter', sans-serif

### Internationalization (i18n)

Translations are managed in `src/i18n/`.

- `en.json`: English strings
- `es.json`: Spanish strings

**Configuration:** Check `astro.config.mjs` to modify supported locales.

```javascript
i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
},
```

## 🧩 Components

Components are organized by responsibility:

- **`ui/`**: Small, reusable elements.
  - `Button.astro`: Standard button component.
  - `Container.astro`: Wrapper for consistent max-width and padding.
- **`shared/`**: Components used across the site.
  - `Header/`, `Footer/`: Site navigation and footer.
- **`sections/`**: Large page blocks.
  - `Hero.astro`: Top-of-page hero section.

## 📄 Scripts

- `npm run dev`: Start dev server.
- `npm run build`: Build for production & generate PDFs.
- `npm run preview`: Preview the production build locally.
