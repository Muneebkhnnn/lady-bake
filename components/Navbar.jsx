"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { restaurantInfo } from "@/data/restaurantInfo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/custom-cake", label: "Custom Cake" },
  { href: "/book-table", label: "Book a Table" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-espresso text-cream/90">
        <p className="container-content py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em]">
          {restaurantInfo.delivery.note}
        </p>
      </div>

      <div className="border-b border-espresso/10 bg-cream/95 backdrop-blur">
        <div className="container-content flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 text-espresso"
          >
            <Image
              src="/logo.png"
              alt="LadyBake logo"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
              priority
            />
            <span className="truncate font-display text-xl font-semibold tracking-tight sm:text-2xl">
              {restaurantInfo.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-espresso/80 transition-colors hover:text-gold-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
           

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${totalItems} item${totalItems === 1 ? "" : "s"}`}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:border-gold hover:text-gold-dark"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-espresso">
                  {totalItems}
                </span>
              ):(
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-espresso">
                  0
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-espresso/40 lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-cream px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="flex min-w-0 items-center gap-2 text-espresso">
                <Image
                  src="/logo.png"
                  alt="LadyBake logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 object-contain"
                />
                <span className="truncate font-display text-xl font-semibold">
                  {restaurantInfo.name}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-espresso"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/menu"
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-auto w-full"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
