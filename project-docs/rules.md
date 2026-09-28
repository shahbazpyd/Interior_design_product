# AI Coding Rules & Boundaries

## Strict Coding Conventions
*   **Python:** Strictly adhere to PEP 8. Use type hinting for all function arguments and return types.
*   **React:** Use functional components and React Hooks exclusively. No class components.
*   **Naming:** 
    *   Python variables/functions: `snake_case`
    *   React components: `PascalCase`
    *   Database tables: Plural `snake_case` (e.g., `portfolio_projects`)

## V2 Animation & UI Rules (Super Premium)
*   **Framer Motion Default:** Always use `framer-motion` for page transitions, scroll reveals, and complex layout changes. Avoid raw CSS keyframes unless absolutely necessary for performance.
*   **No Layout Thrashing:** Ensure animations do not cause the page to jump or scrollbars to flicker. Use `layout` props and absolute positioning where appropriate.
*   **Glassmorphism:** When using blurred backgrounds, ensure fallback background colors are present for unsupported browsers.
*   **Accessibility:** Respect `prefers-reduced-motion` in Framer Motion configurations if possible, but prioritize the premium aesthetic.

## Security & Anti-Patterns
*   **NO HARDCODED SECRETS:** Database URLs, JWT secret keys, and API keys must use environment variables (`.env`).
*   **File Size Limits:** No monolithic files. If a file exceeds 150 lines, refactor it into smaller modules or helper functions.
*   **No Inline CSS:** All styling must be handled via Tailwind CSS utility classes or Framer Motion `style` props.

## Validation & Error Handling
*   All incoming API payloads must be validated using Pydantic models.
*   API must return standard HTTP status codes.
*   Include descriptive error messages in JSON format.