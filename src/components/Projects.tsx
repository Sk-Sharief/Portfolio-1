import { ExternalLink, Github } from "lucide-react";
import AnimatedShape from "./AnimatedShape";

interface ProjectsProps {
  onContactClick?: () => void;
}

type ShapeVariant = "codalyze" | "fake-news" | "rps" | "network" | "symptom-ai" | "education";

const projects: {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string | null;
  shapeVariant: ShapeVariant;
}[] = [
  {
    title: "Codalyze",
    description: "An AI-powered coding assistant platform designed to generate, run, debug and explain code instantly.",
    techStack: ["React", "Vite", "TailwindCSS", "Node.js", "AI Engine"],
    github: "https://github.com/Sk-Sharief/Codalyze-project",
    live: null,
    shapeVariant: "codalyze",
  },
  {
    title: "Fake News Detector",
    description: "A Chrome extension that scans web pages in real-time for potential fake-news indicators and displays warnings.",
    techStack: ["JavaScript", "HTML/CSS", "Chrome Extension API"],
    github: "https://github.com/Sk-Sharief/Fake-news-detection",
    live: null,
    shapeVariant: "fake-news",
  },
  {
    title: "Rock Paper Scissor",
    description: "A sleek interactive web app version of the classic game with smooth animations and real-time score tracking.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sk-Sharief/Rock-Paper-Scissor",
    live: null,
    shapeVariant: "rps",
  },
  {
    title: "Automated Network System",
    description: "An intelligent ServiceNow-based automation system for network request handling and approval processes.",
    techStack: ["ServiceNow", "JavaScript", "Glide API", "Workflow"],
    github: "https://github.com/Sk-Sharief/Automated-Network-Request-Management",
    live: null,
    shapeVariant: "network",
  },
  {
    title: "Symptom AI Analyzer",
    description: "An AI/ML-driven system to analyse symptoms and predict health conditions with data processing insights.",
    techStack: ["Python", "ML", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Sk-Sharief/Symptom-AI-Analyzer",
    live: null,
    shapeVariant: "symptom-ai",
  },
  {
    title: "Educational Org - ServiceNow",
    description: "A workflow-automated educational management system for admissions, academic tracking and student records.",
    techStack: ["ServiceNow", "UI Forms", "Client Scripts"],
    github: "https://github.com/Sk-Sharief/Educational-Organization-Using-ServieNow",
    live: null,
    shapeVariant: "education",
  },
];

const Projects = ({ onContactClick }: ProjectsProps) => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-12 pt-8 overflow-y-auto">
      <div className="container mx-auto px-6 pt-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work ranging from AI-powered applications to automation systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card neon-border-hover p-6 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated shape thumbnail */}
              <div className="w-full h-32 rounded-lg overflow-hidden mb-4 border border-primary/20 bg-background/80 flex items-center justify-center">
                <AnimatedShape variant={project.shapeVariant} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon-outline flex items-center justify-center gap-2 py-2 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon flex items-center justify-center gap-2 py-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
