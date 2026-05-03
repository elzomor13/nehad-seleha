# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript type checking (tsc --noEmit)
```

There are no automated tests in this project.

## Architecture

This is a **Next.js 14 App Router** website for Nehad Seleiha Theatre — a bilingual (Arabic/English) theatre landing page.

### Routing & Internationalization

All pages live under `app/[locale]/`. The middleware (`middleware.ts`) intercepts all requests and redirects to the appropriate locale prefix. Arabic (`ar`) is the default locale and uses RTL layout; English (`en`) uses LTR.

- `i18n/routing.ts` — defines supported locales and default (`ar`)
- `i18n/request.ts` — loads the correct message file per request
- `messages/ar.json` and `messages/en.json` — all UI strings (no hardcoded copy in components)
- `app/locale-html-attrs.tsx` — client component that sets `document.documentElement.lang` and `dir` based on locale

In **client components**, use `useTranslations('namespace')` and `useLocale()` from `next-intl`. In **server components**, use `getTranslations`.

### Component Structure

- `components/theatre/` — all page-level sections (Navbar, Hero, ShowsSection, ShowCard, StatsBar, GalleryPreview, AboutPreview, Footer, ThemeToggle, LangToggle)
- `components/ui/` — shadcn/ui primitives (do not modify these)
- `lib/shows.ts` — static show data with the `Show` interface; each show has bilingual fields (`titleAr`/`titleEn`, etc.) and a custom color `palette`

### Theming & Styling

**Tailwind custom palette** (defined in `tailwind.config.ts`):
- `navy-{950..600}` — dark background scale (navy-950 `#060F1A` is the page background)
- `cream` / `cream-dim` — primary text colors
- `gold` / `gold-dim` / `gold-light` / `gold-muted` — accent color throughout

**Fonts**: `font-cairo` (Cairo, Arabic-friendly sans-serif) for body/UI text; `font-bebas` (Bebas Neue) for decorative Latin headings.

**Theme**: dark by default, togglable via `next-themes`. The `ThemeProvider` wraps content in `app/[locale]/layout.tsx`.

**Animations**: Framer Motion is used throughout for entrance animations and transitions.

### RTL Handling

Use Tailwind's logical properties (`start-*`, `end-*`, `ms-*`, `me-*`, `ps-*`, `pe-*`) instead of `left-*`/`right-*` so layout flips correctly between Arabic (RTL) and English (LTR). Check `locale === 'ar'` or use `useLocale()` when conditional direction logic is needed.

### UI Conventions

- Use `lucide-react` for icons — do not add other icon libraries
- Use shadcn/ui components from `components/ui/` for standard UI primitives
- Always add `"use client"` at the top of any component using hooks or browser APIs
- Avoid adding inline `class` or `style` attributes that would cause SSR hydration mismatches (the `LocaleHtmlAttrs` component exists specifically to handle `lang`/`dir` on `<html>` client-side)

### Deployment

Deployed to Netlify via `@netlify/plugin-nextjs`. Configuration is in `netlify.toml`.
