import { GraduationCap, Users, BookOpen, Trophy, Heart, Globe } from "lucide-react";

const features = [
  { icon: GraduationCap, label: "Academic Excellence" },
  { icon: Users, label: "Community Focus" },
  { icon: BookOpen, label: "Enriched Curriculum" },
  { icon: Trophy, label: "Athletic Programs" },
  { icon: Heart, label: "Character Development" },
  { icon: Globe, label: "Global Perspective" },
];

const AboutVideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text & Video Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground leading-tight">
                Shaping <span className="text-primary italic">Tomorrow's</span> Leaders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over five decades, Avoca School District 37 has stood at the crossroads of 
                learning and community in the heart of our neighborhood. Founded by dedicated 
                educators who believed education transforms lives, Avoca continues to shape young 
                people into leaders who think critically, act compassionately, and serve generously.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Here, rigorous academics meet a deep commitment to character and a spirit that 
                seeks excellence in all things.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary-foreground/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Icons Side */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {feature.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;