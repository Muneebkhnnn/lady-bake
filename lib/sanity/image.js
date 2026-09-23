import imageUrlBuilder from "@sanity/image-url";
import { sanityClient, isSanityConfigured } from "./client";

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

/**
 * Resolves a Sanity image reference (with optional crop/hotspot) into a
 * CDN URL. Returns null when Sanity isn't configured or no image was
 * supplied, so callers can fall through to the next image source.
 */
export function urlForSanityImage(source, { width = 1200, quality = 80 } = {}) {
  if (!builder || !source) return null;
  try {
    return builder
      .image(source)
      .width(width)
      .quality(quality)
      .auto("format")
      .fit("crop")
      .url();
  } catch {
    return null;
  }
}
