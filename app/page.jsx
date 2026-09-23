import HomeHero from "@/components/HomeHero";
import StorySection from "@/components/StorySection";
import FeaturedItems from "@/components/FeaturedItems";
import CategoryGrid from "@/components/CategoryGrid";
import CustomCakeSection from "@/components/CustomCakeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import TableBookingCTA from "@/components/TableBookingCTA";
import LocationSection from "@/components/LocationSection";
import { getMenuItems, getCategories, getFeaturedItems } from "@/lib/menu";

export default async function HomePage() {
  const [items, categories, featured] = await Promise.all([
    getMenuItems(),
    getCategories(),
    getFeaturedItems(6),
  ]);

  return (
    <>
      <HomeHero />
      <StorySection />
      <FeaturedItems items={featured} />
      <CategoryGrid categories={categories} items={items} />
      <CustomCakeSection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <TableBookingCTA />
      <LocationSection />
    </>
  );
}
