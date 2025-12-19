import { MapPin, Mail, Phone, Linkedin, Github, Award, Code, Brain, Rocket } from "lucide-react";

interface AboutMeProps {
  onContactClick?: () => void;
}
const AboutMe = ({ onContactClick }: AboutMeProps) => {
  const interests = [
    { icon: Brain, text: "Artificial Intelligence & Machine Learning" },
    { icon: Code, text: "Full-Stack Web Development" },
    { icon: Rocket, text: "Cloud Computing & DevOps" },
    { icon: Award, text: "Building Scalable Solutions" },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Ideal Institute of Technology",
      period: "09/2022 - 04/2026",
      score: "75%",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "10/2020 – 05/2022",
      score: "95.7%",
    },
    {
      degree: "School Education",
      institution: "R.G.M.C.H School",
      period: "06/2007 – 10/2019",
      score: "96%",
    },
  ];

  return (
    <section className="section-container py-8 overflow-y-auto">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - About */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card neon-border-hover p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Code className="w-4 h-4 text-primary" />
                </span>
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm an enthusiastic and adaptable engineering graduate with strong expertise in 
                cloud computing, AI/ML, full-stack development, and mobile application development. 
                Skilled at applying theoretical knowledge into practical solutions through multiple 
                virtual internships and real-world projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about leveraging emerging technologies to build scalable, secure, and 
                efficient solutions that solve real business challenges.
              </p>
            </div>

            {/* Contact Details */}
            <div className="glass-card neon-border-hover p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Kakinada, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:shalinisharief7@gmail.com" className="hover:text-primary transition-colors">
                    shalinisharief7@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 7893254003</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href="https://www.linkedin.com/in/sharief-sk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/sharief-sk
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Github className="w-5 h-5 text-primary" />
                  <a href="https://github.com/Sk-Sharief" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    github.com/Sk-Sharief
                  </a>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card neon-border-hover p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Interests</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <interest.icon className="w-5 h-5 text-secondary" />
                    <span>{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="animate-slide-in">
            <div className="glass-card neon-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-secondary" />
                </span>
                Education
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50" />

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-10 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-muted border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                      </div>

                      <div className="glass-card p-4 hover:bg-muted/30 transition-colors">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary text-sm">{edu.institution}</p>
                        <div className="flex items-center justify-between mt-2 text-sm">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <span className="skill-tag">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card neon-border-hover p-6 mt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>HackerRank Gold stars in Java & Python</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Published research on 'Tripass Secure Gateway'</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>NIT Andhra Pradesh Hackathon participant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>EY Techthon 2025 - Built Agentic AI for banks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Oracle Fusion AI Agent Studio certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
