import MenuBrowser from "@/components/MenuBrowser";
import { getMenuItems, getCategories } from "@/lib/menu";

export const metadata = {
  title: "Menu",
  description:
    "Browse the full LadyBake menu — pizza, burgers, pasta, sandwiches, wraps, cakes, desserts, coffee, shakes, and cold drinks.",
};

export default async function MenuPage({ searchParams }) {
  const [items, categories] = await Promise.all([
    getMenuItems(),
    getCategories(),
  ]);

  return (
    <div className="py-16 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Full Menu</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-espresso sm:text-5xl">
            Order from LadyBake
          </h1>
          <p className="mt-4 text-base leading-relaxed text-espresso/70">
            Filter by category, add what you're craving, and check out over
            WhatsApp when you're ready.
          </p>
        </div>

        <div className="mt-12">
          <MenuBrowser
            items={items}
            categories={categories}
            initialCategory={searchParams?.category}
          />
        </div>
      </div>
    </div>
  );
}
