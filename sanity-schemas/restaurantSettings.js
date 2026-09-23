// Singleton settings document — logo, contact details, hours, socials.
// See the note at the top of menuItem.js about where this file belongs.

import { defineField, defineType } from "sanity";

export default defineType({
  name: "restaurantSettings",
  title: "Restaurant Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Restaurant Name", type: "string" }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      description: "Digits only, international format, e.g. 919999999999",
      type: "string",
    }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "days", title: "Days", type: "string" }),
            defineField({ name: "time", title: "Time", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
      ],
    }),
    defineField({
      name: "deliveryInfo",
      title: "Delivery Information",
      type: "object",
      fields: [
        defineField({ name: "radiusKm", title: "Delivery Radius (km)", type: "number" }),
        defineField({ name: "minOrder", title: "Minimum Order (₹)", type: "number" }),
        defineField({ name: "note", title: "Note", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Restaurant Settings" };
    },
  },
});
