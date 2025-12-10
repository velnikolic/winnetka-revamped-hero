import heroImage from "@/assets/hero-classroom.jpg";

const HeroSection = () => {
  const values = [
    "Whole Child Approach",
    "Experiential and Meaningful Learning",
    "Collaborative Community",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/70 via-hero-overlay/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-24 md:pb-32 px-6 md:px-16">
        <ul className="space-y-3 md:space-y-4">
          {values.map((value, index) => (
            <li 
              key={value}
              className={`flex items-center gap-4 text-primary-foreground animate-fade-up-delay-${index + 1}`}
            >
              <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary-foreground flex-shrink-0" />
              <span className="text-2xl md:text-4xl lg:text-5xl font-display italic text-shadow-hero">
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
