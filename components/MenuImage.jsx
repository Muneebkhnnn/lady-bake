"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { urlForSanityImage } from "@/lib/sanity/image";

const PLACEHOLDER = "/images/menu/placeholder.svg";

function buildCandidates(item) {
  if (!item) return [PLACEHOLDER];
  const candidates = [];

  const sanityUrl = urlForSanityImage(item.sanityImage);
  if (sanityUrl) candidates.push(sanityUrl);
  if (item.localImage) candidates.push(item.localImage);
  if (item.demoImage) candidates.push(item.demoImage);

  candidates.push(PLACEHOLDER);
  return candidates;
}

/** Same resolution order as the component, exposed for non-<Image> uses
 * (e.g. the cart, which stores a plain image URL string per line item). */
export function resolveMenuImageSrc(item) {
  return buildCandidates(item)[0];
}

/**
 * Resolves and renders a menu item's image, trying Sanity → local
 * /public → temporary demo image → neutral fallback, in that order.
 * If a chosen source ever fails to load (a stale demo URL, a missing
 * /public file) it steps down to the next tier automatically instead of
 * showing a broken image.
 */
export default function MenuImage({
  item,
  alt,
  fill = true,
  width,
  height,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  priority = false,
}) {
  const candidates = useMemo(() => buildCandidates(item), [item]);
  const [index, setIndex] = useState(0);
  const src = candidates[Math.min(index, candidates.length - 1)];

  const handleError = () => {
    setIndex((i) => Math.min(i + 1, candidates.length - 1));
  };

  const sharedProps = {
    src,
    alt: alt || item?.name || "LadyBake",
    className: `object-cover ${className}`,
    onError: handleError,
    unoptimized: src.endsWith(".svg"),
  };

  if (fill) {
    return <Image {...sharedProps} fill sizes={sizes} priority={priority} />;
  }

  return (
    <Image
      {...sharedProps}
      width={width || 800}
      height={height || 600}
      priority={priority}
    />
  );
}
