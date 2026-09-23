import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { restaurantInfo } from "@/data/restaurantInfo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream">
      <div className="container-content grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold">{restaurantInfo.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {restaurantInfo.tagline}. Baked, grilled, and tossed fresh for every
            order — dine in, pickup, or delivered to your door.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={restaurantInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="LadyBake on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={restaurantInfo.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="LadyBake on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link href="/custom-cake" className="hover:text-gold">Custom Cake</Link></li>
            <li><Link href="/book-table" className="hover:text-gold">Book a Table</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li><Link href="/#story" className="hover:text-gold">Our Story</Link></li>
            <li><Link href="/#gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/#contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div id="contact">
          <p className="eyebrow text-gold">Visit Us</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{restaurantInfo.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{restaurantInfo.phone}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {restaurantInfo.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} {restaurantInfo.name}. All rights reserved.</p>
          <p>Made fresh daily. Orders confirmed on WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
