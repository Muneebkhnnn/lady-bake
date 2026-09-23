"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  const visible = [testimonials[index], testimonials[(index + 1) % count]];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Reviews" title="What Everyone is saying" />

        <div className="mt-12 flex items-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-espresso transition-colors hover:bg-gold-dark sm:flex"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2">
            {visible.map((t) => (
              <div key={t.id}>
                <Quote className="h-7 w-7 text-gold" />
                <p className="mt-4 text-lg leading-relaxed text-espresso/80">
                  {t.quote}
                </p>
                <p className="mt-4 text-sm font-semibold text-espresso">
                  — {t.author}, <span className="font-normal text-espresso/50">{t.role}</span>
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-espresso transition-colors hover:bg-gold-dark sm:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 sm:hidden">
          <button type="button" onClick={goPrev} aria-label="Previous testimonial" className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-espresso">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial" className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-espresso">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <span
              key={t.id}
              className={`h-1.5 rounded-pill transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-espresso/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
