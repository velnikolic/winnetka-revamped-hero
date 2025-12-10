import { X, ChevronRight, Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import avocaLogo from "@/assets/avoca-logo.png";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    title: "About",
    links: [
      { label: "Our District", href: "#" },
      { label: "Mission & Vision", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Board of Education", href: "#" },
      { label: "Employment", href: "#" },
    ]
  },
  {
    title: "Schools",
    links: [
      { label: "Avoca West", href: "#" },
      { label: "Marie Murphy", href: "#" },
      { label: "District Office", href: "#" },
    ]
  },
  {
    title: "Academics",
    links: [
      { label: "Curriculum", href: "#" },
      { label: "Programs", href: "#" },
      { label: "Special Education", href: "#" },
      { label: "Gifted & Talented", href: "#" },
    ]
  },
  {
    title: "Parents & Students",
    links: [
      { label: "Parent Portal", href: "#" },
      { label: "Calendar", href: "#" },
      { label: "Lunch Menu", href: "#" },
      { label: "Transportation", href: "#" },
      { label: "Health Services", href: "#" },
    ]
  },
  {
    title: "Community",
    links: [
      { label: "News & Events", href: "#" },
      { label: "PTO", href: "#" },
      { label: "Foundation", href: "#" },
      { label: "Volunteer", href: "#" },
    ]
  },
];

const quickLinks = [
  { label: "Parent Portal", href: "#" },
  { label: "Staff Directory", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "Contact Us", href: "#" },
];

const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-primary text-primary-foreground overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-primary-foreground/20">
        <div className="flex items-center gap-4">
          <img 
            src={avocaLogo} 
            alt="Avoca School District 37" 
            className="w-16 h-16 bg-primary-foreground p-1"
          />
          <div>
            <h2 className="font-display font-bold text-lg">Avoca School District 37</h2>
            <p className="text-sm text-primary-foreground/70">Wilmette, Illinois</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <X className="h-8 w-8" />
        </Button>
      </div>

      {/* Search */}
      <div className="px-6 md:px-12 py-6 border-b border-primary-foreground/20">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-primary-foreground/10 border border-primary-foreground/20 px-12 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 md:px-12 py-6 border-b border-primary-foreground/20">
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-4 py-2 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-display font-bold text-xl mb-4 text-accent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Footer */}
      <div className="px-6 md:px-12 py-8 border-t border-primary-foreground/20 mt-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <span>(847) 251-3587</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-accent" />
            <span>info@avoca37.org</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;