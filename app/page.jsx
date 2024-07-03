import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import PricingSection from "@/components/PricingSection"
import Testimonial from "@/components/Testimonial"
export default function Home() {
  return (
    <main>
     <HeroSection/>
     <Testimonial/>
     <PricingSection/>
    </main>
  );
}
