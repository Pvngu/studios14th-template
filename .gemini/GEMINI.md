# Project Instructions

## Project Structure

The `src/` directory is organized as follows:

- **`components/`**: All Astro components.
  - **`ui/`**: Atomic, distinct UI elements (e.g., `Button.astro`, `Input.astro`). Use `class-variance-authority` (cva) for variants if needed. These components should generally not contain business logic.
  - **`sections/`**: Large, composition-level components that form the distinct sections of a page (e.g., `Hero.astro`, `Features.astro`, `ContactForm.astro`). These components assemble `ui` components.
  - **`shared/`**: Global components used across the entire application or layouts (e.g., `Header.astro`, `Footer.astro`).
- **`layouts/`**: Page layout components (e.g., `Layout.astro`).
- **`pages/`**: File-based routing for the application.
- **`lib/`**: Helper functions, utilities, and Directus/data fetching logic.
- **`i18n/`**: Internationalization JSON files.
- **`styles/`**: Global CSS and Tailwind configuration.
- **`assets/`**: Static assets like images and fonts.

## Development Guidelines

### 1. Component Creation
- **UI Components**: Create in `src/components/ui`. Use functional naming (e.g., `Card.astro`, `Badge.astro`).
- **Sections**: Create in `src/components/sections`. Name them descriptive of their purpose (e.g., `ServicesConfigurator.astro`).
- **Shared**: Create in `src/components/shared`.

### 2. Styling
- Valid **Tailwind CSS** (v4) is the preferred method for styling.
- Use the global CSS variables defined in `src/styles/global.css` for colors and fonts to ensure consistency.
- Avoid inline styles.

### 3. Internationalization (i18n)
- All user-facing text must be translatable.
- Add strings to `src/i18n/{lang}.json`.
- Use the `getLangFromUrl` and `useTranslations` helpers.

### 4. Animations
- Use the GSAP setup in `src/lib/animations.js`.
- Add `data-animate="fade-up"` to elements for scroll-triggered fade-up animations.
- The animations system handles staggered entrances automatically for grouped elements.

### 5. Global Configuration
- Use `src/data/site.ts` for site-wide business data (name, description, social links).
- Import this data in Layouts and Metadata components to ensure consistency.

## Workflow
1. **Analyze Requirements**: Determine which components are needed.
2. **Check Existing**: See if a suitable `ui` component already exists.
3. **Create New**: If creating new components, place them in the correct folder immediately.
4. **Implement**: Write the code using Tailwind and strict types.
