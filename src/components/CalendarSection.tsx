import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarEvent {
  id: number;
  date: string;
  dayOfMonth: string;
  title: string;
  time: string;
  location?: string;
  isAllDay?: boolean;
}

const events: CalendarEvent[] = [
  {
    id: 1,
    date: "Dec",
    dayOfMonth: "9",
    title: "Winter Strings Orchestra",
    time: "7:00PM - 8:00PM",
    location: "Auditorium",
  },
  {
    id: 2,
    date: "Dec",
    dayOfMonth: "10",
    title: "WPI - Progressive Tenets in Action: Collaborative Community",
    time: "9:30AM - 10:30AM",
    location: "Virtual Meeting",
  },
  {
    id: 3,
    date: "Dec",
    dayOfMonth: "11",
    title: "Winter Chorus Concert - SK/CW",
    time: "7:00PM - 9:00PM",
    location: "Skokie School Auditorium",
  },
  {
    id: 4,
    date: "Dec",
    dayOfMonth: "16",
    title: "School Board Meeting",
    time: "7:15PM - 9:15PM",
  },
  {
    id: 5,
    date: "Dec",
    dayOfMonth: "22",
    title: "Winter Break - No School",
    time: "All Day",
    isAllDay: true,
  },
  {
    id: 6,
    date: "Dec",
    dayOfMonth: "23",
    title: "Winter Break - No School",
    time: "All Day",
    isAllDay: true,
  },
];

const CalendarSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              Upcoming Events
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View Full Calendar
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group bg-card rounded-xl p-4 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex items-center gap-4 md:gap-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary flex flex-col items-center justify-center text-primary-foreground">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">
                  {event.date}
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold">
                  {event.dayOfMonth}
                </span>
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
