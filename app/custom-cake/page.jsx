import Image from "next/image";
import CustomCakeForm from "@/components/CustomCakeForm";

export const metadata = {
  title: "Custom Cake Orders",
  description:
    "Order a custom celebration cake from LadyBake — choose your flavour, size, theme, and message, and confirm details on WhatsApp.",
};

const IMG = "/images/cake.jpg";

export default function CustomCakePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src={IMG}
              alt="Custom celebration cake from LadyBake"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">Custom Cake Orders</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Tell us what you're celebrating
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-espresso/70">
            Fill in your cake details below and we'll send them straight to
            LadyBake on WhatsApp. We'll confirm pricing, availability, and
            pickup or delivery once we've reviewed your request.
          </p>

          <div className="mt-8">
            <CustomCakeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
