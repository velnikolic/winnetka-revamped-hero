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
        <h1 className="text-primary-foreground animate-fade-up">
          <span className="block text-3xl md:text-5xl lg:text-6xl font-display">
            A Tradition of <span className="italic text-accent">Excellence.</span>
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-display mt-2">
            A Community of <span className="italic text-accent">Care.</span>
          </span>
        </h1>

        {/* Schools List */}
        <div className="mt-6 flex flex-wrap gap-4 animate-fade-up-delay-1">
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

      {/* Discover More - Bottom Right */}
      <div className="absolute right-6 md:right-12 bottom-8 hidden lg:flex items-center gap-4">
        <div className="w-16 h-px bg-accent" />
        <span className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase whitespace-nowrap">
          Discover More
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
