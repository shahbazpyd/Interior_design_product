# AI Coding Rules & Boundaries

## Strict Coding Conventions
*   **Python:** Strictly adhere to PEP 8. Use type hinting for all function arguments and return types.
*   **React:** Use functional components and React Hooks exclusively. No class components.
*   **Naming:** 
    *   Python variables/functions: `snake_case`
    *   React components: `PascalCase`
    *   Database tables: Plural `snake_case` (e.g., `portfolio_projects`)

## Security & Anti-Patterns
*   **NO HARDCODED SECRETS:** Database URLs, JWT secret keys, and API keys must use environment variables (`.env`).
*   **File Size Limits:** No monolithic files. If a file exceeds 150 lines, refactor it into smaller modules or helper functions.
*   **No Inline CSS:** All styling must be handled via Tailwind CSS utility classes.

## Validation & Error Handling
*   All incoming API payloads must be validated using Pydantic models.
*   API must return standard HTTP status codes (e.g., 201 for Created, 400 for Bad Request, 404 for Not Found).
*   Include descriptive error messages in JSON format: `{"detail": "Specific error explanation"}`.