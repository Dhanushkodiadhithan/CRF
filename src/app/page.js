import Hero from "@/Sessions/Hero";
import Marquee from "@/Sessions/Marquee";
import Intention from "@/Sessions/Intention";
import Products from "@/Sessions/Products";
import Process from "@/Sessions/Process";
import Reviews from "@/Sessions/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intention />
      <Products />
      <Process />
      <Reviews />
    </>
  );
}
