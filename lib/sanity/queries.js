// GROQ queries. Field names match sanity-schemas/menuItem.js and
// sanity-schemas/restaurantSettings.js exactly — keep the two in sync.

export const menuItemsQuery = `*[_type == "menuItem"] | order(category asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  category,
  image,
  featured,
  popular,
  available,
  vegetarian
}`;

export const restaurantSettingsQuery = `*[_type == "restaurantSettings"][0] {
  name,
  logo,
  phone,
  whatsappNumber,
  address,
  openingHours,
  socialLinks,
  deliveryInfo
}`;
