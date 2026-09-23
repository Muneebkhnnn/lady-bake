"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import MenuImage from "@/components/MenuImage";
import { useCart } from "@/lib/cart-context";
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function CartPageClient() {
  const { items, increment, decrement, removeItem, subtotal } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    deliveryType: "Delivery",
    address: "",
    instructions: "",
  });
  const [error, setError] = useState("");

  const updateField = (field) => (e) =>
    setCustomer((c) => ({ ...c, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.name.trim() || !customer.phone.trim()) {
      setError("Please add your name and phone number so we can reach you.");
      return;
    }
    setError("");

    const message = buildOrderMessage({ items, total: subtotal, customer });
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  if (items.length === 0) {
    return (
      <div className="container-content py-24 text-center">
        <p className="font-display text-2xl font-semibold text-espresso">
          Your cart is empty
        </p>
        <p className="mt-3 text-sm text-espresso/60">
          Add something from the menu to get started.
        </p>
        <Link href="/menu" className="btn-gold mt-6 inline-flex">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container-content grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24">
      <div>
        <h1 className="font-display text-3xl font-semibold text-espresso">
          Your Cart
        </h1>

        <ul className="mt-8 divide-y divide-espresso/10">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-5 first:pt-0">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-cream-dark">
                <MenuImage
                  item={{
                    ...item,
                    localImage: item.localImage || item.image,
                  }}
                  alt={item.name}
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-espresso">{item.name}</p>
                    <p className="text-sm text-espresso/50">
                      ₹{item.price.toLocaleString("en-IN")} each
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="text-espresso/40 hover:text-espresso"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-pill border border-espresso/15 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => decrement(item.id)}
                      aria-label={`Decrease ${item.name} quantity`}
                      className="flex h-6 w-6 items-center justify-center text-espresso"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm font-semibold text-espresso">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increment(item.id)}
                      aria-label={`Increase ${item.name} quantity`}
                      className="flex h-6 w-6 items-center justify-center text-espresso"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-semibold text-espresso">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-fit rounded-2xl bg-white/60 p-6 shadow-card ring-1 ring-espresso/5 sm:p-8">
        <div className="flex items-center justify-between text-lg font-bold text-espresso">
          <span>Total</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-espresso" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={customer.name}
              onChange={updateField("name")}
              className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-espresso" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={customer.phone}
              onChange={updateField("phone")}
              className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
              placeholder="10-digit mobile number"
            />
          </div>

          <div>
            <span className="text-sm font-semibold text-espresso">
              Delivery or Pickup
            </span>
            <div className="mt-1.5 flex gap-3">
              {["Delivery", "Pickup"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setCustomer((c) => ({ ...c, deliveryType: option }))
                  }
                  className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    customer.deliveryType === option
                      ? "border-gold bg-gold/15 text-espresso"
                      : "border-espresso/15 text-espresso/60"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {customer.deliveryType === "Delivery" && (
            <div>
              <label className="text-sm font-semibold text-espresso" htmlFor="address">
                Delivery Address
              </label>
              <textarea
                id="address"
                rows={2}
                value={customer.address}
                onChange={updateField("address")}
                className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
                placeholder="House no., street, landmark"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-espresso" htmlFor="instructions">
              Special Instructions
            </label>
            <textarea
              id="instructions"
              rows={2}
              value={customer.instructions}
              onChange={updateField("instructions")}
              className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
              placeholder="Less spicy, no onions, etc."
            />
          </div>

          {error && <p className="text-sm font-medium text-red-700">{error}</p>}

          <button type="submit" className="btn-gold w-full">
            Order on WhatsApp
          </button>
          <p className="text-center text-xs text-espresso/50">
            We'll confirm availability, delivery time, and payment with you
            directly on WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}
