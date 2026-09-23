import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MenuImage from "@/components/MenuImage";

export default function CategoryGrid({ categories, items }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Menu Categories"
          title="Something for every craving"
          subtitle="Browse by category, or head straight to the full menu to filter and order."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const representative = items.find((i) => i.category === category.id);
            return (
              <Link
                key={category.id}
                href={`/menu?category=${category.id}`}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-card">
                  {representative ? (
                    <MenuImage
                      item={representative}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-cream-dark" />
                  )}
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-espresso/80 group-hover:text-gold-dark">
                  {category.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
