import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductSection } from "@/components/product-section";
import { LookbookSection } from "@/components/lookbook-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductSection />
      <LookbookSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
