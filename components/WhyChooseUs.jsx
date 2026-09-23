import { Flame, Truck, CakeSlice, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const POINTS = [
  {
    icon: Flame,
    title: "Made Fresh Daily",
    text: "Dough, sauces, and desserts are prepped in-house every morning — nothing frozen, nothing rushed.",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    text: "Quick delivery across Rampur, or skip the wait with easy pickup at the counter.",
  },
  {
    icon: CakeSlice,
    title: "Custom Cakes",
    text: "Flavour, size, and design built around your celebration — no two cakes are exactly alike.",
  },
  {
    icon: MessageCircle,
    title: "Simple WhatsApp Ordering",
    text: "Build your cart, hit send, and confirm your order directly with the team — no app required.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why LadyBake"
          title="Good food, made simple"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-espresso">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
