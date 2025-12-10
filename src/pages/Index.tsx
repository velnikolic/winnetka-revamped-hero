import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsCarousel from "@/components/NewsCarousel";
import CalendarSection from "@/components/CalendarSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsCarousel />
      <CalendarSection />
    </main>
  );
};

export default Index;
