"use client";

import { useMemo, useState } from "react";
import MenuCard from "@/components/MenuCard";

export default function MenuBrowser({ items, categories, initialCategory }) {
  const [active, setActive] = useState(initialCategory || "all");

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((item) => item.category === active);
  }, [items, active]);

  const tabs = [{ id: "all", label: "All" }, ...categories];

  return (
    <div>
      <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`shrink-0 rounded-pill px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === tab.id
                ? "bg-espresso text-cream"
                : "bg-white/70 text-espresso/70 ring-1 ring-espresso/10 hover:bg-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-espresso/60">
          No items in this category yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
