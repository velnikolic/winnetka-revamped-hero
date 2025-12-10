import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import avocaLogo from "@/assets/avoca-logo.png";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img 
            src={avocaLogo} 
            alt="Avoca School District 37" 
            className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg"
          />
        </div>

        {/* Menu Button */}
        <Button 
          variant="outline" 
          onClick={() => setMenuOpen(true)}
          className="bg-primary/90 backdrop-blur-sm border-none text-primary-foreground hover:bg-primary shadow-lg px-5 py-2 h-auto"
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
