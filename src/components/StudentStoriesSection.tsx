import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Story {
  name: string;
  grade: string;
  quote: string;
  image: string;
}

const stories: Story[] = [
  {
    name: "Emma",
    grade: "8th Grade",
    quote: "Avoca has taught me that learning is about asking questions and exploring new ideas. My teachers here really push me to think beyond the textbook.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop"
  },
  {
    name: "Marcus",
    grade: "7th Grade", 
    quote: "I've made friendships here that I know will last a lifetime. The sense of community at Avoca makes it feel like a second home.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
  },
  {
    name: "Sofia",
    grade: "6th Grade",
    quote: "The arts program here is incredible. Whether it's music, theater, or visual arts, there's always a way to express yourself and grow creatively.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop"
  }
];

const StudentStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Stories from Our <span className="text-primary italic">Students</span>
          </h2>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-primary font-medium hover:underline hidden md:flex items-center gap-1"
            >
              Explore More Stories
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Text Side */}
          <div className="bg-primary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-1">
                  {currentStory.name}
                </h3>
                <p className="text-primary-foreground/80 font-medium">
                  {currentStory.grade}
                </p>
              </div>
              
              <blockquote className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed italic">
                "{currentStory.quote}"
              </blockquote>

              {/* Story Navigation Dots */}
              <div className="flex gap-2 pt-4">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-accent w-8" 
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img 
              src={currentStory.image}
              alt={currentStory.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <a href="#" className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
            Explore More Stories
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;