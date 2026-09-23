import Image from "next/image";
import TableBookingForm from "@/components/TableBookingForm";

export const metadata = {
  title: "Book a Table",
  description:
    "Reserve a table at LadyBake — pick your date, time, and party size, and confirm on WhatsApp.",
};

const IMG = "/images/book.webp";

export default function BookTablePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-content grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Book a Table</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Save your seat at LadyBake
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-espresso/70">
            Share a few details and we'll get your table ready. We confirm
            every booking personally over WhatsApp.
          </p>

          <div className="mt-8">
            <TableBookingForm />
          </div>
        </div>

        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card lg:block">
          <Image
            src={IMG}
            alt="LadyBake dining area"
            fill
            sizes="480px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
