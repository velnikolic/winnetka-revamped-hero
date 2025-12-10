import heroImage from "@/assets/hero-classroom.jpg";

const schools = [
  { name: "Avoca West", href: "#" },
  { name: "Marie Murphy", href: "#" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/80 via-hero-overlay/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-32 md:pb-40 px-6 md:px-16">
        <h1 className="text-primary-foreground animate-fade-up">
          <span className="block text-3xl md:text-5xl lg:text-6xl font-display">
            A Tradition of <span className="italic text-accent">Excellence.</span>
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-display mt-2">
            A Community of <span className="italic text-accent">Care.</span>
          </span>
        </h1>

        {/* Schools List */}
        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-1">
          {schools.map((school, index) => (
            <a
              key={index}
              href={school.href}
              className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              {school.name}
            </a>
          ))}
        </div>
      </div>

      {/* Discover More - Side Text */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Discover More
        </span>
        <div className="w-px h-16 bg-accent mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
