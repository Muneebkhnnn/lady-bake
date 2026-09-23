import { MapPin, Phone, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { restaurantInfo } from "@/data/restaurantInfo";

export default function LocationSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    restaurantInfo.mapQuery
  )}&output=embed`;

  return (
    <section id="contact" className="scroll-mt-28 bg-cream-dark/50 py-20 lg:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Find Us" title="Come say hello" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col justify-center gap-6 rounded-2xl bg-white/60 p-8 shadow-card ring-1 ring-espresso/5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
              <div>
                <p className="text-sm font-semibold text-espresso">Address</p>
                <p className="mt-1 text-sm text-espresso/65">{restaurantInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
              <div>
                <p className="text-sm font-semibold text-espresso">Phone</p>
                <p className="mt-1 text-sm text-espresso/65">{restaurantInfo.phone}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
              <div>
                <p className="text-sm font-semibold text-espresso">Hours</p>
                {restaurantInfo.hours.map((h) => (
                  <p key={h.days} className="mt-1 text-sm text-espresso/65">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="LadyBake location map"
              src={mapSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
