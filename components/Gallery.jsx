import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const PHOTOS = [
  { id: "photo-1574071318508-1cdbab80d002", alt: "Fresh Margherita pizza", span: "sm:col-span-2 sm:row-span-2" },
  { id: "photo-1606313564200-e75d5e30476c", alt: "Chocolate truffle cake slice", span: "" },
  { id: "photo-1568901346375-23c9450c58cd", alt: "Classic chicken burger", span: "" },
  { id: "photo-1509042239860-f550ce710b93", alt: "Cappuccino with latte art", span: "" },
  { id: "photo-1473093295043-cdd812d0e601", alt: "Creamy alfredo pasta bowl", span: "sm:col-span-2" },
  { id: "photo-1572490122747-3968b75cc699", alt: "Chocolate milkshake", span: "" },
  {
    id: "photo-1551024506-0bccd828d307",
    alt: "Freshly baked pastries",
    span: "sm:col-start-4 sm:row-start-2 sm:row-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="hidden bg-cream-dark/50 py-20 sm:block lg:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="From Our Kitchen"
          title="A taste of what's baking"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-rows:170px]">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl ${photo.span}`}
            >
              <Image
                src={img(photo.id)}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
