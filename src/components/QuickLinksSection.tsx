import { ArrowRight } from "lucide-react";

interface QuickLink {
  title: string;
  cta: string;
  image: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "Admissions",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    href: "#"
  },
  {
    title: "Academics",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    href: "#"
  },
  {
    title: "Athletics",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1461896836934- voices-of-a-generation?w=400&h=300&fit=crop",
    href: "#"
  },
  {
    title: "Arts & Activities",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    href: "#"
  },
  {
    title: "Parents & Families",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop",
    href: "#"
  },
  {
    title: "Community",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    href: "#"
  }
];

const QuickLinksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
            >
              <img 
                src={link.image} 
                alt={link.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
                  {link.title}
                </h3>
                <div className="flex items-center gap-2 text-accent font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>{link.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
