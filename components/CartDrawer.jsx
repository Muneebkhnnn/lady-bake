"use client";

import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import MenuImage from "@/components/MenuImage";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, removeItem, subtotal } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 className="font-display text-xl font-semibold text-espresso">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-espresso/15 text-espresso"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-display text-lg text-espresso">Your cart is empty</p>
            <p className="text-sm text-espresso/60">
              Add something delicious from the menu to get started.
            </p>
            <Link href="/menu" onClick={closeCart} className="btn-gold mt-2">
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border-b border-espresso/10 py-4 first:pt-0 last:border-b-0"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-dark">
                    <MenuImage
                      item={{
                        ...item,
                        localImage: item.localImage || item.image,
                      }}
                      alt={item.name}
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-espresso">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-espresso/40 transition-colors hover:text-espresso"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-pill border border-espresso/15 px-2 py-1">
                        <button
                          type="button"
                          onClick={() => decrement(item.id)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="flex h-5 w-5 items-center justify-center text-espresso"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[1.25rem] text-center text-sm font-semibold text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item.id)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="flex h-5 w-5 items-center justify-center text-espresso"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-espresso">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-espresso/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-base font-semibold text-espresso">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <Link
                href="/cart"
                onClick={closeCart}
                className="btn-gold w-full"
              >
                View Cart &amp; Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
