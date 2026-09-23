import { sanityClient, isSanityConfigured } from "./sanity/client";
import { menuItemsQuery } from "./sanity/queries";
import { categories, demoMenuItems } from "@/data/demoMenu";

/**
 * Normalizes a raw Sanity "menuItem" document into the same shape used by
 * the demo data, so every component downstream (MenuCard, MenuImage, the
 * cart, etc.) only ever has to deal with one item shape regardless of
 * where it came from.
 */
function normalizeSanityItem(doc) {
  return {
    id: doc._id,
    slug: doc.slug,
    name: doc.name,
    description: doc.description || "",
    price: doc.price ?? 0,
    category: doc.category,
    veg: Boolean(doc.vegetarian),
    featured: Boolean(doc.featured),
    popular: Boolean(doc.popular),
    available: doc.available !== false,
    sanityImage: doc.image || null,
    localImage: null,
    demoImage: null,
  };
}

/**
 * Menu items, Sanity-first. Falls back to the local demo dataset whenever
 * Sanity isn't configured yet, has no items, or the request fails for any
 * reason — the site should never show a broken menu just because Sanity
 * is empty or unreachable.
 */
export async function getMenuItems() {
  if (isSanityConfigured) {
    try {
      const docs = await sanityClient.fetch(menuItemsQuery);
      if (Array.isArray(docs) && docs.length > 0) {
        return docs.map(normalizeSanityItem);
      }
    } catch (err) {
      console.error("Sanity menu fetch failed, using demo menu:", err.message);
    }
  }

  return demoMenuItems.map((item) => ({ ...item, sanityImage: null }));
}

export async function getCategories() {
  // Categories are intentionally kept static/local — they're structural
  // navigation, not editorial content, so they don't need a Sanity round
  // trip. Add or reorder them in data/demoMenu.js.
  return categories;
}

export async function getFeaturedItems(limit = 6) {
  const items = await getMenuItems();
  return items.filter((i) => i.featured && i.available).slice(0, limit);
}

export async function getPopularItems(limit = 8) {
  const items = await getMenuItems();
  return items.filter((i) => i.popular && i.available).slice(0, limit);
}
