import Image from "next/image";
import Link from "next/link";

const IMG =
  "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1100&q=80";

export default function CustomCakeSection() {
  return (
    <section className="bg-espresso py-20 text-cream lg:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow text-gold">Made To Order</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            A cake designed around your celebration
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            Tell us the flavour, size, theme, and the message you want on top
            — we'll take it from there. Perfect for birthdays, anniversaries,
            and anything worth celebrating.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-cream/70">
            <li>Choose your flavour, size, and quantity</li>
            <li>Pick a design theme and add a personal message</li>
            <li>Confirm the details and pickup date over WhatsApp</li>
          </ul>
          <Link href="/custom-cake" className="btn-gold mt-8">
            Customize Your Cake
          </Link>
        </div>

        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card lg:order-2">
          <Image
            src={IMG}
            alt="A custom-decorated celebration cake from LadyBake"
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
