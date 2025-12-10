import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import avocaLogo from "@/assets/avoca-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img 
          src={avocaLogo} 
          alt="Avoca School District 37" 
          className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
        />
        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-medium text-shadow-hero">Avoca School</p>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/90 font-medium text-shadow-hero">District 37</p>
        </div>
      </div>

      {/* Menu Button */}
      <Button 
        variant="outline" 
        className="bg-primary/90 backdrop-blur-sm border-none text-primary-foreground hover:bg-primary shadow-lg px-5 py-2 h-auto rounded-full"
      >
        <span className="font-semibold mr-2">MENU</span>
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
