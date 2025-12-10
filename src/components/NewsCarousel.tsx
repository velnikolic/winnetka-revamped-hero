import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  type: "video" | "article";
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Construction Update Video",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    type: "video",
  },
  {
    id: 2,
    title: "Strategic Plan - Key Performance Indicator",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    type: "article",
  },
  {
    id: 3,
    title: "Episode #1 (Season 4): Mentoring New Teachers",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80",
    type: "article",
  },
  {
    id: 4,
    title: "The Winnetka Public Schools App!",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    type: "article",
  },
  {
    id: 5,
    title: "Follow Us On Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    type: "article",
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Featured Card */}
        <div className="relative mb-8">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-card group cursor-pointer">
            <img
              src={newsItems[currentIndex].image}
              alt={newsItems[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            
            {newsItems[currentIndex].type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
              <h3 className="text-2xl md:text-4xl font-display text-primary-foreground">
                {newsItems[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {newsItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? "ring-4 ring-primary ring-offset-2 ring-offset-background" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-20 md:w-40 md:h-24 object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
