// Local fallback for restaurant-wide settings. Once the matching
// "restaurantSettings" Sanity document is populated, replace this file's
// consumers with a live Sanity fetch (see lib/sanity/queries.js) — the
// shape is kept identical on purpose so that swap is a drop-in.

export const restaurantInfo = {
  name: "LadyBake",
  tagline: "Warm from the oven, made to order",
  phone: "+91 7300609293",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  email: "hello@ladybake.in",
  address: "Opposite Vishal mega mart adjacent to ICICI Bank diamond road, Rampur, Uttar Pradesh 244901",
  mapQuery: "LadyBake, Civil Lines, Rampur, Uttar Pradesh",
  hours: [
    { days: "Monday – Friday", time: "11:00 AM – 10:30 PM" },
    { days: "Saturday – Sunday", time: "10:00 AM – 11:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/lady__bake",
    facebook: "https://facebook.com/lady__bake",
  },
  delivery: {
    radiusKm: 6,
    minOrder: 199,
    note: "Free delivery on orders above ₹499 within 6 km. Pickup is always free.",
  },
};
