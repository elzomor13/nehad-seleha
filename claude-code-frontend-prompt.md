# Claude Code Prompt — NS Theatre Frontend

You are working on the **frontend only** of مسرح د. نهاد صليحة (Prof. Nehad Seleiha Theatre) website.
The backend is a separate Django + DRF project. For now, all data is static/mock. API integration comes later.

---

## Context

This is an Egyptian state theatre under the Academy of Arts / Ministry of Culture.
The visual identity has been approved by the theatre's management.
Do not deviate from the design system below under any circumstances.

---

## Existing Codebase (from Bolt POC)

The project was scaffolded by Bolt with this structure:

```
app/
  layout.tsx                  # Root layout (bare HTML shell)
  page.tsx                    # Redirects to /ar
  globals.css                 # Tailwind base + custom utility classes
  locale-html-attrs.tsx       # Client comp: sets <html lang> and dir
  [locale]/
    layout.tsx                # ThemeProvider + NextIntlClientProvider
    page.tsx                  # Assembles all page sections

components/
  theatre/
    Navbar.tsx
    Hero.tsx
    ShowsSection.tsx
    ShowCard.tsx
    StatsBar.tsx
    GalleryPreview.tsx
    AboutPreview.tsx
    Footer.tsx
    ThemeToggle.tsx
    LangToggle.tsx
  ui/                         # shadcn/ui — do not modify

lib/
  shows.ts                    # Static show data

messages/
  ar.json
  en.json

i18n/
  routing.ts                  # locales: ['ar','en'], default: 'ar'
  request.ts

middleware.ts
next.config.js
tailwind.config.ts
```

**Current deployment:** Netlify — needs to be migrated to **Cloudflare Workers** using `@cloudflare/next-on-pages`.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, `src/app`)
- **Styling:** Tailwind CSS v3 — custom tokens only, no inline styles
- **Animations:** Framer Motion (`motion` package)
- **i18n:** next-intl v4 — Arabic (ar, RTL, default) + English (en, LTR)
- **Theme:** next-themes — Dark (default) + Light
- **Fonts:** Cairo (all text) + Bebas Neue (display labels only) via Google Fonts
- **Icons:** lucide-react
- **Deployment:** Cloudflare Workers via `@cloudflare/next-on-pages`

---

## Design System (DO NOT MODIFY)

### Color Tokens — tailwind.config.ts

```ts
colors: {
  navy: {
    950: '#070F1A',   // primary background
    900: '#0F2238',   // surface
    800: '#1B3A5C',   // surface elevated
    700: '#264D7A',   // border / divider
  },
  gold: {
    DEFAULT: '#D4A017',
    light:   '#E8C158',
    dim:     '#A07810',
  },
  cream: {
    DEFAULT: '#F5F0E8',
    dim:     'rgba(245,240,232,0.7)',
    faint:   'rgba(245,240,232,0.12)',
  },
}
```

### Dark Theme (default)
- bg: `navy-950` / surfaces: `navy-900`, `navy-800`
- text: `cream` / secondary: `cream-dim`
- accent: `gold`

### Light Theme
- bg: `cream` / surfaces: `white`
- text: `navy-900` / secondary: `navy-800`
- accent: `gold-dim`

### Typography Rules
- All body + UI text: `font-cairo`
- Display labels (numbers, EN tags, badges): `font-bebas tracking-widest uppercase`
- Section tags: `font-bebas text-xs tracking-[4px] text-gold uppercase`
- Headings: `font-cairo font-black`

### Visual Details — mandatory
1. Primary buttons: `clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)` — angled sides
2. Gold line separator: `w-[60px] h-[2px] bg-gold` under main headings
3. Curtain lines in Hero bg: 12 vertical lines, faint gold opacity, CSS only
4. Ghost numbers: Bebas Neue, `opacity-[0.04]` decorative layer in cards + about section
5. `cream` for body text on dark — never `white`
6. Gold is the ONLY accent color across the entire UI

---

## Pages to Build

### Already scaffolded (review + fix if needed):
- `/[locale]/` — Homepage (all sections assembled)

### New pages to add:

```
[locale]/
  shows/
    page.tsx          # All shows grid — fetches from lib/shows.ts for now
    [id]/
      page.tsx        # Show detail — title, director, synopsis, dates, Book CTA
  events/
    page.tsx          # Events + summer activities + Outdoor Stage sub-section
    [id]/
      page.tsx        # Event detail
  archive/
    page.tsx          # Photo gallery — mosaic grid, filterable by category
  news/
    page.tsx          # Newsfeed — list of news cards
    [slug]/
      page.tsx        # News article detail
  about/
    page.tsx          # Theatre history + Nehad Seleiha biography + stage configs
  contact/
    page.tsx          # 3 contact types + complaint form
  sponsorship/
    page.tsx          # Sponsorship / partnership inquiry form
```

---

## Components Spec

### Navbar.tsx
- Fixed top, transparent → `bg-navy-950/95 backdrop-blur` on scroll
- Logo: geometric SVG — theatre curtain lines + "مسرح د. نهاد صليحة" + "NEHAD SELEIHA THEATRE" in gold Bebas
- AR: links right-aligned / EN: left-aligned (logical properties)
- ThemeToggle + LangToggle always visible on all screen sizes
- Mobile (< lg): hamburger only — fullscreen overlay with Framer Motion staggered links
- Desktop (lg+): horizontal links + "احجز تذكرتك" CTA button
- Entry: slide down on mount with `motion`

### Hero.tsx
- Full viewport height (`min-h-screen`)
- Auto-rotate shows every 4s — `AnimatePresence` crossfade on background
- Background: gradient per show palette + curtain lines texture + bottom fade to `navy-950`
- Content: pulsing red dot + live tag, show title, gold line, director + date, 2 CTA buttons
- Side counter: ghost large number (desktop only, hidden on mobile)
- Dot pagination — clickable
- Staggered `fadeUp` on mount for all text elements

### ShowCard.tsx
- Gradient bg per show `palette`
- Ghost watermark number `opacity-[0.04]`
- "مسرحية" badge — gold border `border-gold/30 bg-gold/10`
- Title + director + date + Book button
- Hover: `translateY(-8px)` + `border-gold/50 shadow-gold/20`
- Active state: `border-gold shadow-[0_0_30px_rgba(212,160,23,0.2)]`

### ShowsSection.tsx
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` gap-5
- SectionHeader (tag + title + viewAll link)
- Framer Motion staggered entrance: `delay: index * 0.1`

### StatsBar.tsx
- `bg-navy-800 border-y border-gold/20`
- 4 stats: 1500 / 120K / 3700+ / 6
- Numbers: Bebas Neue `text-5xl text-gold`
- Count-up animation triggered by `useInView`
- Mobile: `grid-cols-2` / lg: `flex justify-around`

### GalleryPreview.tsx
- Mobile: `grid-cols-1` stacked
- md: `grid-cols-2`
- lg: CSS Grid mosaic — items with `col-span-2` or `row-span-2`
- Hover: gold overlay tint `bg-gold/15`
- "Browse Archive" outline button below

### AboutPreview.tsx
- lg: `grid-cols-2` — text block + biography card
- Mobile: stacked
- Biography card: "NS" ghost text, timeline (1945 / 2021 / 2023), gold divider
- Slide-in animation direction flips based on locale

### Contact page
- 3 tabs or radio select: معلومات / حجز / استفسار
- Separate section for شكاوى (complaint form with tracking reference)
- All forms: controlled inputs, validation, success state
- No API calls yet — console.log or toast on submit

### Sponsorship page
- Single form: entity name, type (company / individual), proposal, contact info
- No API calls yet

### Footer.tsx
- lg: `grid-cols-3` — brand+phones / quick links / social
- Mobile: stacked single column
- Gold divider line above copyright bar
- Social: Facebook, Instagram, YouTube, Twitter/X (lucide icons)

---

## i18n — messages/ar.json (complete)

```json
{
  "nav": {
    "shows": "العروض",
    "events": "الفعاليات",
    "archive": "الأرشيف",
    "news": "الأخبار",
    "about": "عن المسرح",
    "contact": "تواصل",
    "sponsorship": "رعاية",
    "book": "احجز تذكرتك"
  },
  "hero": {
    "live": "على الخشبة الآن — مايو ٢٠٢٦",
    "upcoming": "العرض القادم",
    "book": "احجز تذكرتك الآن",
    "schedule": "جدول العروض كامل"
  },
  "shows": {
    "title": "العروض المقبلة",
    "tag": "برنامج مايو ٢٠٢٦",
    "viewAll": "عرض الكل",
    "book": "احجز",
    "direction": "إخراج",
    "type": "مسرحية"
  },
  "events": {
    "title": "الفعاليات",
    "tag": "أنشطة وفعاليات",
    "summer": "الأنشطة الصيفية",
    "outdoor": "Outdoor Stage",
    "workshops": "ورش العمل",
    "viewAll": "عرض الكل"
  },
  "stats": {
    "seats": "مقعد",
    "followers": "متابع",
    "shows": "عرض مُقدَّم",
    "stages": "أشكال تقديم"
  },
  "gallery": {
    "tag": "الأرشيف البصري",
    "title": "معرض الصور",
    "viewAll": "استعراض الأرشيف كامل"
  },
  "news": {
    "tag": "أخبار المسرح",
    "title": "آخر الأخبار",
    "viewAll": "كل الأخبار",
    "readMore": "اقرأ المزيد"
  },
  "about": {
    "tag": "عن المسرح",
    "title": "مسرح يحمل اسم ناقدة لم تصمت",
    "body": "مسرح مكشوف تابع لأكاديمية الفنون بوزارة الثقافة المصرية، يقع على شارع اليابان بالعمرانية الغربية، بمساحة تستوعب ١٥٠٠ متفرج، ويقدم أشكال تقديم متعددة من Profile Theater إلى Round Stage.",
    "readMore": "اقرأ المزيد",
    "birth": "الميلاد",
    "death": "الرحيل",
    "opening": "افتتاح المسرح"
  },
  "contact": {
    "tag": "تواصل معنا",
    "title": "نحن هنا",
    "info": "معلومات",
    "reservation": "حجز",
    "inquiry": "استفسار",
    "complaint": "شكوى",
    "name": "الاسم",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "message": "الرسالة",
    "submit": "إرسال",
    "success": "تم الإرسال بنجاح"
  },
  "sponsorship": {
    "tag": "رعاية وشراكة",
    "title": "كن شريكاً للمسرح",
    "entityName": "اسم الجهة",
    "entityType": "نوع الجهة",
    "company": "شركة",
    "individual": "فرد",
    "proposal": "تفاصيل المقترح",
    "submit": "إرسال الطلب"
  },
  "footer": {
    "address": "شارع اليابان، العمرانية الغربية، الجيزة",
    "quickLinks": "روابط سريعة",
    "follow": "تابعنا",
    "rights": "© ٢٠٢٦ مسرح د. نهاد صليحة — أكاديمية الفنون — وزارة الثقافة المصرية"
  }
}
```

---

## Mock Data — lib/shows.ts

```ts
export interface Show {
  id: string;
  titleAr: string;
  titleEn: string;
  directorAr: string;
  directorEn: string;
  dateAr: string;
  dateEn: string;
  time: string;
  palette: { from: string; to: string };
  ghostNumber: string;
  synopsisAr?: string;
  synopsisEn?: string;
}

export const shows: Show[] = [
  {
    id: '1',
    titleAr: 'سالب ١', titleEn: 'Minus One',
    directorAr: 'عبد الله صابر', directorEn: 'Abdullah Saber',
    dateAr: '٧ و٨ مايو', dateEn: '7 & 8 May', time: '8 PM',
    palette: { from: '#1a0a2e', to: '#2d1060' }, ghostNumber: '01',
  },
  {
    id: '2',
    titleAr: 'الاحتياج', titleEn: 'The Need',
    directorAr: 'حسام المصري', directorEn: 'Hossam El-Masry',
    dateAr: '٦ مايو', dateEn: '6 May', time: '8 PM',
    palette: { from: '#0a1a12', to: '#1a3a22' }, ghostNumber: '02',
  },
  {
    id: '3',
    titleAr: 'عنبر ١٠', titleEn: 'Ward 10',
    directorAr: 'يوسف محمد مومو', directorEn: 'Youssef Mohamed',
    dateAr: '١٩ و٢٠ مايو', dateEn: '19 & 20 May', time: '8 PM',
    palette: { from: '#1a1a0a', to: '#3a3a10' }, ghostNumber: '03',
  },
  {
    id: '4',
    titleAr: 'حبسة سفر', titleEn: 'Travel Ban',
    directorAr: 'شادي خلف', directorEn: 'Shady Khalaf',
    dateAr: '١٤ و١٥ مايو', dateEn: '14 & 15 May', time: '8 PM',
    palette: { from: '#0a1520', to: '#102040' }, ghostNumber: '04',
  },
  {
    id: '5',
    titleAr: 'إيكوس', titleEn: 'Equus',
    directorAr: 'أسامة الطوخي', directorEn: 'Osama El-Toukhi',
    dateAr: '٢١ مايو', dateEn: '21 May', time: '8 PM',
    palette: { from: '#200a0a', to: '#401020' }, ghostNumber: '05',
  },
  {
    id: '6',
    titleAr: 'الوالي', titleEn: 'The Governor',
    directorAr: 'عمر الحسيني', directorEn: 'Omar El-Husseini',
    dateAr: '٢٢ مايو', dateEn: '22 May', time: '8 PM',
    palette: { from: '#1a100a', to: '#3a2010' }, ghostNumber: '06',
  },
];
```

---

## Animation Guidelines (Framer Motion)

```tsx
// Staggered page entry
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] } },
};

// Navbar bg on scroll
const { scrollY } = useScroll();
const navBg = useTransform(scrollY, [0, 80], ['rgba(7,15,26,0)', 'rgba(7,15,26,0.95)']);

// Hero crossfade
<AnimatePresence mode="wait">
  <motion.div
    key={activeShow}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    transition={{ duration: 1.2 }}
  />
</AnimatePresence>

// Counter animation
const count = useMotionValue(0);
useEffect(() => {
  animate(count, targetValue, { duration: 2, ease: 'easeOut' });
}, [inView]);
```

---

## RTL / LTR Rules

- `[locale]/layout.tsx`: `<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>`
- Use Tailwind logical properties exclusively: `ms-`, `me-`, `ps-`, `pe-`, `text-start`, `text-end`
- Never use `ml-`, `mr-`, `pl-`, `pr-`, `text-left`, `text-right`
- Directional slide animations: flip `x` offset when `locale === 'ar'`

---

## Responsive — Mobile First

Base: 375px → scale up with breakpoints.

| Breakpoint | Width | Layout |
|---|---|---|
| default | ≥0 | single col, full-width |
| sm | ≥640px | spacing adjustments |
| md | ≥768px | 2-col grids |
| lg | ≥1024px | 3-col grids, side-by-side |
| xl | ≥1280px | max-width container |

- Tap targets: min `44px` height always
- Buttons: `w-full` mobile → `w-auto` md+
- Section padding: `px-5 py-16` → `lg:px-16 lg:py-24`

---

## Cloudflare Workers Migration

Replace Netlify config with Cloudflare:

```bash
npm install @cloudflare/next-on-pages
```

```toml
# wrangler.toml
name = "ns-theatre"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[site]
bucket = ".vercel/output/static"

[[pages_build_output_dir]]
output_dir = ".vercel/output/static"
```

```json
// package.json scripts
"pages:build": "npx @cloudflare/next-on-pages",
"preview": "npm run pages:build && wrangler pages dev .vercel/output/static",
"deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static"
```

Add to `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // existing config...
};
export default nextConfig;
```

Every route that uses Node.js APIs must add:
```ts
export const runtime = 'edge';
```

---

## Prettier Config

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

---

## What NOT to do

- Do not add any backend logic, API routes, or database calls
- Do not use inline styles — Tailwind classes only
- Do not use `white` for text — use `cream` on dark backgrounds
- Do not add any color other than navy/gold/cream palette
- Do not use `ml-` / `mr-` — logical properties only
- Do not modify `components/ui/` (shadcn primitives)
- Do not change the visual identity — it is approved by the client
