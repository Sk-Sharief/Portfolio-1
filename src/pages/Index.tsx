import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const sections = {
  Home: Home,
  Projects: Projects,
  Internships: Internships,
  Certifications: Certifications,
  Skills: Skills,
  "About Me": AboutMe,
  Resume: Resume,
  Contact: Contact,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const ActiveComponent = sections[activeSection as keyof typeof sections];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Ambient glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="pt-20 relative z-10">
        <div key={activeSection} className="animate-fade-in">
          <ActiveComponent onContactClick={() => handleSectionChange("Contact")} />
        </div>
      </main>
    </div>
  );
};

export default Index;
