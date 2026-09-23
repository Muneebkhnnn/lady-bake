import Image from "next/image";
import Link from "next/link";

const PIZZA_IMG =
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80";
const CAKE_IMG =
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream-dark/60">
      <div className="container-content grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.4fr_1fr] lg:py-24">
        <div className="relative order-2 hidden aspect-[3/4] overflow-hidden rounded-[2rem] shadow-card lg:order-1 lg:block">
          <Image
            src={PIZZA_IMG}
            alt="Wood-fired pizza fresh from the LadyBake oven"
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>

        <div className="order-1 text-center lg:order-2">
          <p className="eyebrow justify-center">
            Restaurant • Bakery • Café • Casual Dining
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-espresso sm:text-5xl lg:text-6xl">
            Freshly baked,
            <br />
            crafted to delight
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-espresso/70">
            Indulge in handcrafted pizzas, signature cakes, rich coffee, and
            comforting meals—all prepared fresh with quality ingredients and served
            with care.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/menu" className="btn-gold">
              Order Now
            </Link>
            <Link href="/menu" className="btn-outline">
              Explore Menu
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-espresso/50">
            <span>Freshly Baked</span>
            <span>Handcrafted Cakes</span>
            <span>Pizza & Café Favorites</span>
          </div>
        </div>

        <div className="relative order-3 hidden aspect-[3/4] overflow-hidden rounded-[2rem] shadow-card lg:block">
          <Image
            src={CAKE_IMG}
            alt="Layered chocolate truffle cake from LadyBake"
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
