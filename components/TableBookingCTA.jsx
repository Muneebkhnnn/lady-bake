import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export default function TableBookingCTA() {
  return (
    <section className="bg-gold">
      <div className="container-content flex flex-col items-center gap-6 py-16 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-4">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-espresso text-gold sm:flex">
            <CalendarCheck className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-espresso sm:text-3xl">
              Planning to dine in with us?
            </h2>
            <p className="mt-2 max-w-md text-sm text-espresso/80">
              Reserve a table in under a minute — we'll confirm your booking
              over WhatsApp.
            </p>
          </div>
        </div>
        <Link
          href="/book-table"
          className="btn-pill shrink-0 bg-espresso text-cream hover:bg-espresso/90"
        >
          Book a Table
        </Link>
      </div>
    </section>
  );
}
