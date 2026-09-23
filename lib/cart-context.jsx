"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { demoMenuItems } from "@/data/demoMenu";

const CartContext = createContext(null);
const STORAGE_KEY = "ladybake_cart_v1";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount — guarded so it only ever runs in the browser.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const savedItems = JSON.parse(raw);
        setItems(
          savedItems.map((item) => {
            const source = demoMenuItems.find((menuItem) => menuItem.id === item.id);
            return source ? { ...source, ...item } : item;
          })
        );
      }
    } catch {
      // Corrupt or inaccessible storage — start with an empty cart.
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist on every change, once the initial load has happened (avoids
  // clobbering saved data with an empty array during first render).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage full or unavailable — cart still works for this session.
    }
  }, [items, hydrated]);

  const addItem = useCallback((item, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          slug: item.slug,
          name: item.name,
          price: item.price,
          category: item.category,
          image: item.image || null,
          sanityImage: item.sanityImage || null,
          localImage: item.localImage || null,
          demoImage: item.demoImage || null,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const increment = useCallback((id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }, []);

  const decrement = useCallback((id) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const { subtotal, totalItems } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        subtotal: acc.subtotal + i.price * i.quantity,
        totalItems: acc.totalItems + i.quantity,
      }),
      { subtotal: 0, totalItems: 0 }
    );
  }, [items]);

  const value = {
    items,
    isOpen,
    hydrated,
    addItem,
    removeItem,
    increment,
    decrement,
    clearCart,
    openCart,
    closeCart,
    subtotal,
    total: subtotal,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
