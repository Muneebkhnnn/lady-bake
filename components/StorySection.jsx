import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="py-20 lg:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
          <Image
            src="/images/hero-img.webp"
            alt="LadyBake kitchen preparing fresh food"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            quality={100}
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            A neighbourhood kitchen, run like it's family
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-espresso/70">
            LadyBake started with one oven and a simple idea: food should taste
            like someone actually cared while making it. Today we still bake
            our breads and cakes every morning, hand-toss every pizza base,
            and grill every burger patty to order — nothing sits around
            waiting for you.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-espresso/70">
            Whether you're stopping by for a quick lunch, ordering a batch for
            the office, or planning a celebration cake, it's made the same
            way — fresh, and just for you.
          </p>
        </div>
      </div>
    </section>
  );
}
