import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatItem {
  stat: string;
  label: string;
  image: string;
}

const stats: StatItem[] = [
  {
    stat: "750+",
    label: "Students Enrolled",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop"
  },
  {
    stat: "15:1",
    label: "Student-Teacher Ratio",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
  },
  {
    stat: "100%",
    label: "College Acceptance Rate",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
  },
  {
    stat: "25+",
    label: "Extracurricular Activities",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop"
  },
  {
    stat: "50+",
    label: "Years of Excellence",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
  },
  {
    stat: "98%",
    label: "Parent Satisfaction",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
  }
];

const StatsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleStats = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= stats.length - visibleStats + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? stats.length - visibleStats : prev - 1
    );
  };

  return (
    <section className="relative -mt-24 md:-mt-32 z-20 pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Stats Carousel */}
        <div className="relative bg-background/95 backdrop-blur-sm shadow-xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
              By the Numbers
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleStats)}%)` }}
            >
              {stats.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <p className="text-3xl md:text-4xl font-display font-bold">{item.stat}</p>
                      <p className="text-sm opacity-90">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
