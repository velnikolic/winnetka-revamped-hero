import heroImage from "@/assets/hero-classroom.jpg";

const schools = [
  { name: "Avoca West", href: "#" },
  { name: "Marie Murphy", href: "#" },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Subtle gradient at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-8">
        {/* Schools List */}
        <div className="flex flex-wrap gap-4 animate-fade-up">
          {schools.map((school, index) => (
            <a
              key={index}
              href={school.href}
              className="px-6 py-3 bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all duration-300"
            >
              {school.name}
            </a>
          ))}
        </div>
      </div>

      {/* Discover More - Vertical on right side at bottom */}
      <div className="absolute right-6 md:right-12 bottom-12 hidden lg:flex flex-col items-center gap-4">
        <span className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Discover More
        </span>
        <div className="w-px h-16 bg-accent mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
