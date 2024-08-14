import { AboutUs } from "@/components/AboutUs";
import { Design } from "@/components/Design";
import { FeaturePosts } from "@/components/FeaturePosts";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Products/>
      <Services/>
      <FeaturePosts/>
      <AboutUs/>
      <Design/>
      <Footer styles="bg-[#FAFAFA]"/>
    </main>
  );
}
