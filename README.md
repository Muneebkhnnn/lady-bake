# LadyBake

A modern restaurant/bakery website built with Next.js (App Router), React,
JavaScript, and Tailwind CSS. Menu content and images are designed to run
entirely on demo data out of the box, with Sanity CMS as the intended
production source of truth.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — see "Connecting Sanity" below
npm run dev
```

Open http://localhost:3000. The site works immediately with no environment
variables set — it runs on the built-in demo menu (`data/demoMenu.js`).

## What's included

- **Homepage** — hero, restaurant story, featured items, category grid,
  custom cake teaser, why-choose-us, gallery, testimonials, table-booking
  banner, and a location/contact section with an embedded map.
- **Menu page** (`/menu`) — full menu with category filtering and polished
  item cards. Visiting `/menu?category=pizza` pre-selects a category (the
  homepage category tiles link here).
- **Cart** — localStorage-backed, persists across refreshes. Accessible from
  the drawer (cart icon in the nav) or the full page at `/cart`, which
  collects customer details and sends the order to WhatsApp.
- **Custom Cake** (`/custom-cake`) — a dedicated request form (flavour,
  size, quantity, date/time, theme, message, notes) that sends the details
  to WhatsApp.
- **Book a Table** (`/book-table`) — reservation form (name, phone, guests,
  date, time, requests) that sends the request to WhatsApp and clearly
  states the booking is subject to confirmation.

## Image architecture

Every menu image is resolved by `components/MenuImage.jsx` in this order:

1. **Sanity image** — used automatically once a menu item has one.
2. **Local `/public` image** — set a `localImage` path (see below).
3. **Temporary demo image** — a stable Unsplash photo, for development.
4. **Neutral fallback** — `public/images/menu/placeholder.svg`.

If a chosen image ever fails to load (a stale demo URL, a missing file),
the component automatically steps down to the next tier instead of showing
a broken image.

### Adding your own photo without touching Sanity

Drop a file into `public/images/menu/`, e.g.:

```
public/images/menu/margherita-pizza.jpg
```

Then set (or confirm) the matching item's `localImage` field in
`data/demoMenu.js`:

```js
localImage: "/images/menu/margherita-pizza.jpg",
```

It will be picked up on the next page load — no Sanity upload required.

### Swapping the temporary demo images

All demo image URLs live in **one file**, `data/demoMenu.js`, via the
`demoImage` field per item (plus a handful of section-specific images in
`components/HomeHero.jsx`, `components/Gallery.jsx`, `components/StorySection.jsx`,
`components/CustomCakeSection.jsx`, and the cake/table images in
`app/custom-cake/page.jsx` and `app/book-table/page.jsx`). Nothing else in
the app hardcodes an image URL. If any individual Unsplash photo ever
returns a 404, `MenuImage` will fall back gracefully, but you can just
replace the URL (or point `localImage` at your own file instead).

## Connecting Sanity

The app runs fine with no Sanity project connected. To make Sanity the
source of truth:

1. Create a Studio project: `npm create sanity@latest` (in a separate
   folder — Sanity Studio isn't embedded in this Next.js app, per the
   recommended `@sanity/client` + `@sanity/image-url` stack).
2. Copy the schema files from `sanity-schemas/` into your Studio project's
   schema folder and register them (see the comments at the top of
   `sanity-schemas/menuItem.js`).
3. Set these in `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
4. Add menu items in Sanity Studio. As soon as a `menuItem` document
   exists in your dataset, `lib/menu.js` fetches from Sanity instead of
   the demo data — no frontend code changes needed. Items without a
   Sanity image still fall back to their local/demo image, so you can
   migrate items gradually.

The `restaurantSettings` schema (name, logo, phone, WhatsApp number,
address, hours, socials, delivery info) is provided as a reference too;
`data/restaurantInfo.js` is the local equivalent used today and can be
swapped for a live Sanity fetch the same way.

## WhatsApp ordering

Set your restaurant's WhatsApp number in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

(digits only, international format — no `+`, spaces, or dashes). This
powers all three WhatsApp flows: cart checkout, custom cake requests, and
table bookings. Message building lives in `lib/whatsapp.js` — edit the
templates there if you want to change the wording.

## Project structure

```
app/                  Routes (App Router)
components/           UI components
data/                 Demo menu, restaurant info, testimonials
lib/                  Cart context, WhatsApp helpers, menu data layer
lib/sanity/           Sanity client, image resolver, GROQ queries
sanity-schemas/       Schema definitions for a separate Sanity Studio project
public/images/menu/   Drop your own menu photos here
```

## Notes

- No TypeScript — this is a plain JavaScript/JSX codebase throughout.
- The cart, custom cake form, and table booking form all validate the
  required fields before opening WhatsApp.
- Tailwind design tokens (colors, fonts, radii) live in `tailwind.config.js`.
