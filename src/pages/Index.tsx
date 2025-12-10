import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutVideoSection from "@/components/AboutVideoSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import CalendarSection from "@/components/CalendarSection";
import StudentStoriesSection from "@/components/StudentStoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutVideoSection />
      <QuickLinksSection />
      <CalendarSection />
      <StudentStoriesSection />
      <Footer />
    </main>
  );
};

export default Index;
