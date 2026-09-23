import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MenuCard from "@/components/MenuCard";

export default function FeaturedItems({ items }) {
  if (!items?.length) return null;

  return (
    <section className="bg-cream-dark/50 py-20 lg:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Customer Favourites"
          title="What everyone orders first"
          subtitle="A handful of LadyBake regulars — the dishes people come back for."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/menu" className="btn-outline">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
