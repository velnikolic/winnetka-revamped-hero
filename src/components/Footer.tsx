import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import avocaLogo from "@/assets/avoca-logo.png";

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Athletics", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "Contact", href: "#" },
];

const resources = [
  { label: "Parent Portal", href: "#" },
  { label: "Staff Directory", href: "#" },
  { label: "Employment", href: "#" },
  { label: "Board of Education", href: "#" },
  { label: "District Policies", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="space-y-6">
            <img 
              src={avocaLogo} 
              alt="Avoca School District 37" 
              className="w-24 h-24 bg-primary-foreground p-2"
            />
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  2921 Illinois Road<br />
                  Wilmette, IL 60091
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">(847) 251-3587</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@avoca37.org</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Follow us on social media for the latest updates and news from our district.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Avoca School District 37. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Committed to Excellence in Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;