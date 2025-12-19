import { Download, Mail } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

interface HomeProps {
  onContactClick?: () => void;
}

const Home = ({ onContactClick }: HomeProps) => {
  return (
    <section className="section-container relative">
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-slow"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Profile Circle with Elegant Effects */}
        <div className="relative animate-fade-in">
          {/* Soft pulsing glow background */}
          <div className="absolute inset-0 -m-20 rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent animate-glow-soft" />
          
          {/* Outer neon rings */}
          <div className="absolute inset-0 -m-12 rounded-full border border-primary/20 animate-pulse-slow" />
          <div className="absolute inset-0 -m-8 rounded-full border border-secondary/15" />
          <div className="absolute inset-0 -m-4 rounded-full border border-primary/25 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          
          {/* Arc segments - left side */}
          <div className="absolute inset-0 -m-14">
            <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
              <path
                d="M 15 50 A 35 35 0 0 1 25 25"
                fill="none"
                stroke="hsl(var(--primary) / 0.4)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M 12 60 A 40 40 0 0 1 18 35"
                fill="none"
                stroke="hsl(var(--secondary) / 0.3)"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          {/* Arc segments - right side */}
          <div className="absolute inset-0 -m-14">
            <svg className="w-full h-full animate-rotate-slow-reverse" viewBox="0 0 100 100">
              <path
                d="M 85 50 A 35 35 0 0 0 75 75"
                fill="none"
                stroke="hsl(var(--primary) / 0.4)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M 88 40 A 40 40 0 0 0 82 65"
                fill="none"
                stroke="hsl(var(--secondary) / 0.3)"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Light streak on outer ring */}
          <div className="absolute inset-0 -m-10 rounded-full overflow-hidden">
            <div className="absolute w-8 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full animate-streak-rotate" />
          </div>
          
          {/* Main profile container */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-primary animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-background p-2">
              <img
                src={profileAvatar}
                alt="Sk. Mahaboob Sharief - ML & AI Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-lg animate-slide-in">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Sk. Mahaboob Sharief</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-lg lg:text-xl text-muted-foreground mb-6">
            <span className="neon-text">ML</span>
            <span className="text-primary/50">•</span>
            <span className="neon-text-secondary">AI</span>
            <span className="text-primary/50">•</span>
            <span className="neon-text">Developer</span>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Enthusiastic engineering graduate specializing in cloud computing, AI/ML, 
            full-stack development, and mobile applications. Passionate about building 
            scalable solutions that solve real-world challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1UEyjDTYWKXROQSeOiEtksPTo9nixyciH/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              onClick={onContactClick}
              className="btn-neon-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
