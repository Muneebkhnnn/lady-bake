// Sanity schema for a single menu item.
//
// This file is NOT consumed by the Next.js app directly — it's meant to be
// copied into your Sanity Studio project's schema folder (or referenced
// from it). Field names here must stay in sync with lib/sanity/queries.js
// and lib/menu.js on the Next.js side.
//
// Studio setup: npm create sanity@latest, then drop this file into
// schemaTypes/ and register it in schemaTypes/index.js.

import { defineField, defineType } from "sanity";

export const CATEGORY_OPTIONS = [
  { title: "Pizza", value: "pizza" },
  { title: "Burgers", value: "burgers" },
  { title: "Sandwiches", value: "sandwiches" },
  { title: "Pasta", value: "pasta" },
  { title: "Wraps", value: "wraps" },
  { title: "Sides", value: "sides" },
  { title: "Cakes", value: "cakes" },
  { title: "Desserts", value: "desserts" },
  { title: "Coffee", value: "coffee" },
  { title: "Shakes", value: "shakes" },
  { title: "Cold Drinks", value: "drinks" },
];

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Price (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: CATEGORY_OPTIONS, layout: "dropdown" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "featured",
      title: "Featured (shown on homepage)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "popular",
      title: "Popular",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
