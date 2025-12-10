import heroImage from "@/assets/hero-classroom.jpg";

const schools = [
  { name: "Avoca West", href: "#" },
  { name: "Marie Murphy", href: "#" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Full height */}
      <div 
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Bottom Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Gradient fade from transparent to maroon */}
        <div className="h-64 bg-gradient-to-b from-transparent to-primary" />
        
        {/* Content on maroon background */}
        <div className="bg-primary px-6 md:px-16 pb-12">
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
                className="px-8 py-4 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                {school.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Discover More - Side Text */}
      <div className="absolute right-6 md:right-12 top-1/3 hidden lg:flex flex-col items-center gap-4">
        <span className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Discover More
        </span>
        <div className="w-px h-16 bg-accent mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
