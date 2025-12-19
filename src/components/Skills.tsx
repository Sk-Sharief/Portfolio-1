import { 
  Code2, Database, Globe, Layers, 
} from "lucide-react";

interface SkillsProps {
  onContactClick?: () => void;
}

const coreSkills = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C", icon: "©️" },
  { name: "C++", icon: "➕" },
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Git", icon: "📦" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TensorFlow", icon: "🧠" },
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "SQL", "C", "C++", "JavaScript"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "React", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase", "SQLite", "Git", "GitHub"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Spring Boot", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"],
  },
];

const Skills = ({ onContactClick }: SkillsProps) => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-12 pt-8 overflow-y-auto">
      <div className="container mx-auto px-6 pt-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="relative mb-16 animate-scale-in">
          <div className="w-full max-w-3xl mx-auto">
            {/* Soft glow background */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
            
            {/* Skills grid */}
            <div className="relative glass-card neon-border p-8 rounded-2xl">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {coreSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Icon with soft glow base and ripple effect */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 relative z-10">
                        {skill.icon}
                      </div>
                      {/* Ripple effect on hover */}
                      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/40 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                      <div className="absolute inset-0 rounded-xl border border-secondary/0 group-hover:border-secondary/30 group-hover:scale-[1.8] group-hover:opacity-0 transition-all duration-1000 delay-100" />
                      {/* Soft glow base */}
                      <div className="absolute inset-0 -z-10 rounded-xl bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category-card relative p-6 rounded-xl animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border" />
              <div className="absolute inset-[1px] rounded-xl bg-card" />
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm bg-muted/50 text-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
