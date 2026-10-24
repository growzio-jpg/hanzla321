# Hanzla Workspace (React)

    npm install
    npm run dev      # local preview
    npm run build    # production files in dist/

Pages live in `src/pages`, shared pieces in `src/components`, all text data (FAQs, SEO titles, projects) in `src/data.js`, styles in `src/styles.css`.
Routing uses `#hash` links exactly like the original site, so `dist/` works on GitHub Pages without extra setup.

## Supabase backend + Admin
- Admin panel: open `yoursite/#admin` (login with a Supabase Auth user whose email is in the `admins` table).
- Projects (title, link, image upload/URL, pages, order, hide/show), contact-form messages and WhatsApp settings are all stored in Supabase.
- Optional env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (defaults are already set in `src/supabase.js`).
