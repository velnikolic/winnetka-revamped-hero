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
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
  },
  {
    stat: "15:1",
    label: "Student-Teacher Ratio",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
  },
  {
    stat: "100%",
    label: "College Acceptance Rate",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
  },
  {
    stat: "25+",
    label: "Extracurricular Activities",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop"
  },
  {
    stat: "50+",
    label: "Years of Excellence",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
  },
  {
    stat: "98%",
    label: "Parent Satisfaction",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
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
    <section className="py-8 md:py-12 bg-primary">
      <div className="container mx-auto px-6 md:px-16">
        <div className="relative">
          {/* Arrow Left */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-10 bg-accent text-accent-foreground border-none hover:bg-accent/80 w-14 h-14 shadow-xl"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Arrow Right */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-10 bg-accent text-accent-foreground border-none hover:bg-accent/80 w-14 h-14 shadow-xl"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8 md:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleStats)}%)` }}
            >
              {stats.map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                      <p className="text-4xl md:text-5xl font-display font-bold">{item.stat}</p>
                      <p className="text-sm md:text-base opacity-90 mt-1">{item.label}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
