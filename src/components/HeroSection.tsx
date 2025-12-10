import heroImage from "@/assets/hero-classroom.jpg";

const schools = [
  { name: "Avoca West", href: "#" },
  { name: "Marie Murphy", href: "#" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay - fades to maroon at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-hero-overlay/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer to push content down */}
        <div className="flex-1" />
        
        {/* Bottom Content Area - sits in the maroon fade zone */}
        <div className="bg-gradient-to-b from-transparent to-primary pt-32 pb-16 md:pb-20">
          <div className="px-6 md:px-16">
            <h1 className="text-primary-foreground animate-fade-up">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-display">
                A Tradition of <span className="italic text-accent">Excellence.</span>
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-display mt-2">
                A Community of <span className="italic text-accent">Care.</span>
              </span>
            </h1>

            {/* Schools List */}
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-1">
              {schools.map((school, index) => (
                <a
                  key={index}
                  href={school.href}
                  className="px-8 py-4 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
                >
                  {school.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Discover More - Side Text */}
      <div className="absolute right-6 md:right-12 top-1/3 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Discover More
        </span>
        <div className="w-px h-16 bg-accent mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
