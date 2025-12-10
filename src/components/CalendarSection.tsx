import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarEvent {
  date: { month: string; day: number };
  title: string;
  time: string;
  location: string;
}

const events: CalendarEvent[] = [
  {
    date: { month: "Dec", day: 12 },
    title: "Winter Concert",
    time: "7:00 PM",
    location: "Marie Murphy Auditorium"
  },
  {
    date: { month: "Dec", day: 15 },
    title: "Board of Education Meeting",
    time: "6:30 PM",
    location: "District Office"
  },
  {
    date: { month: "Dec", day: 18 },
    title: "Holiday Art Show",
    time: "3:30 PM - 6:00 PM",
    location: "Avoca West"
  },
  {
    date: { month: "Dec", day: 20 },
    title: "Last Day Before Break",
    time: "Full Day",
    location: "All Schools"
  },
  {
    date: { month: "Jan", day: 6 },
    title: "School Resumes",
    time: "8:15 AM",
    location: "All Schools"
  },
  {
    date: { month: "Jan", day: 10 },
    title: "PTO Meeting",
    time: "9:00 AM",
    location: "District Office"
  },
  {
    date: { month: "Jan", day: 15 },
    title: "Science Fair",
    time: "6:00 PM - 8:00 PM",
    location: "Marie Murphy School"
  },
  {
    date: { month: "Jan", day: 20 },
    title: "Martin Luther King Jr. Day - No School",
    time: "All Day",
    location: "District Closed"
  }
];

const CalendarSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleEvents = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= events.length - visibleEvents + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? events.length - visibleEvents : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Peek at the <span className="text-primary italic">Week</span>
          </h2>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-primary font-medium hover:underline hidden md:block"
            >
              View Full Calendar
            </a>
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
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleEvents)}%)` }}
          >
            {events.map((event, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
              >
                <div className="bg-card p-6 h-full border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex gap-4">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary flex flex-col items-center justify-center text-primary-foreground">
                      <span className="text-xs uppercase font-medium">{event.date.month}</span>
                      <span className="text-2xl font-display font-bold">{event.date.day}</span>
                    </div>
                    
                    {/* Event Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <a href="#" className="text-primary font-medium hover:underline">
            View Full Calendar
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;