import Hero from "@/components/home/Hero";
import Offers from "@/components/home/Offers";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CallToAction from "@/components/home/CallToAction";
import JoinUs from "@/components/home/JoinUs";

export default function Home() {
  return (
    <div className="app bg-white text-gray-900">
      <Hero />
      <FeaturedProducts />
      <Offers />
      <CallToAction />
      <JoinUs />
    </div>
  );
}