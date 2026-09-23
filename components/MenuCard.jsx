"use client";

import { Plus } from "lucide-react";
import MenuImage from "@/components/MenuImage";
import { useCart } from "@/lib/cart-context";

export default function MenuCard({ item }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    if (!item.available) return;
    addItem(item);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white/60 shadow-card ring-1 ring-espresso/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <MenuImage
          item={item}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 flex h-4 w-4 items-center justify-center rounded-sm border ${
            item.veg ? "border-green-700 bg-white" : "border-red-700 bg-white"
          }`}
          aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
          title={item.veg ? "Vegetarian" : "Non-vegetarian"}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              item.veg ? "bg-green-700" : "bg-red-700"
            }`}
          />
        </span>

        {item.popular && (
          <span className="absolute right-3 top-3 rounded-pill bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-espresso">
            Popular
          </span>
        )}

        {!item.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-espresso/60">
            <span className="rounded-pill bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-espresso">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-espresso">
          {item.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-espresso/60">
          {item.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-bold text-espresso">
            ₹{item.price.toLocaleString("en-IN")}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            disabled={!item.available}
            className="flex items-center gap-1.5 rounded-pill bg-espresso px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
