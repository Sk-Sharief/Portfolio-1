import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = ["Home", "Projects", "Internships", "Certifications", "Skills", "About Me", "Resume", "Contact"];

const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-background font-bold text-lg">S</span>
          </div>
          <span className="font-semibold text-lg text-foreground">
            Sharief<span className="text-primary">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onSectionChange(item)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item
                  ? "text-primary bg-primary/10 neon-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSectionChange(item);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  activeSection === item
                    ? "text-primary bg-primary/10 neon-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
