import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import SpecialOffers from "@/components/home/SpecialOffers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BeforeAfterPreview from "@/components/home/BeforeAfterPreview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <SpecialOffers />
      <WhyChooseUs />
      <BeforeAfterPreview />
      <Testimonials />
      <CTA />
    </div>
  );
}
