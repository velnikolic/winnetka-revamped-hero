import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-primary-foreground/20">
          <div className="text-center">
            <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-14 md:h-14">
              {/* Tree icon */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
              <path 
                d="M50 85 L50 55 M35 55 Q50 30 65 55 M30 65 Q50 40 70 65 M25 75 Q50 50 75 75" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                className="text-primary-foreground"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-medium text-shadow-hero">The Winnetka</p>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-medium text-shadow-hero">Public Schools</p>
        </div>
      </div>

      {/* Menu Button */}
      <Button 
        variant="outline" 
        className="bg-accent/90 backdrop-blur-sm border-none text-foreground hover:bg-accent shadow-lg px-5 py-2 h-auto rounded-full"
      >
        <span className="font-semibold mr-2">MENU</span>
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
