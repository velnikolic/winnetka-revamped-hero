import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import avocaLogo from "@/assets/avoca-logo.png";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
          scrolled 
            ? "bg-primary shadow-lg py-2" 
            : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img 
            src={avocaLogo} 
            alt="Avoca School District 37" 
            className={`drop-shadow-lg transition-all duration-300 ${
              scrolled 
                ? "w-12 h-12 md:w-14 md:h-14 bg-primary-foreground p-1" 
                : "w-20 h-20 md:w-28 md:h-28"
            }`}
          />
          {scrolled && (
            <span className="hidden md:block text-primary-foreground font-display font-semibold">
              Avoca School District 37
            </span>
          )}
        </div>

        {/* Menu Button */}
        <Button 
          variant="outline" 
          onClick={() => setMenuOpen(true)}
          className={`backdrop-blur-sm border-none shadow-lg px-5 py-2 h-auto transition-all duration-300 ${
            scrolled 
              ? "bg-accent text-accent-foreground hover:bg-accent/90" 
              : "bg-primary/90 text-primary-foreground hover:bg-primary"
          }`}
        >
          <span className="font-semibold mr-2">MENU</span>
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
