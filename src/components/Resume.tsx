import { Download, ExternalLink } from "lucide-react";

interface ResumeProps {
  onContactClick?: () => void;
}
const Resume = ({ onContactClick }: ResumeProps) => {
  return (
    <section className="section-container py-8">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        {/* Notepad Window */}
        <div className="w-full max-w-4xl animate-scale-in">
          {/* Window Chrome */}
          <div className="bg-muted/80 rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>
            <span className="text-sm text-muted-foreground font-mono">resume.txt — Sk. Mahaboob Sharief</span>
            <a
              href="https://drive.google.com/file/d/1UEyjDTYWKXROQSeOiEtksPTo9nixyciH/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={14} />
              Open
            </a>
          </div>

          {/* Content Area */}
          <div className="bg-card/80 backdrop-blur-xl rounded-b-xl border border-t-0 border-border/50 p-6 max-h-[60vh] overflow-y-auto font-mono text-sm">
            {/* Header */}
            <div className="text-center mb-6 pb-4 border-b border-border/50">
              <h1 className="text-xl text-primary font-bold mb-1">SK. MAHABOOB SHARIEF</h1>
              <p className="text-muted-foreground text-xs">
                Kakinada, India | shalinisharief7@gmail.com | +91 7893254003
              </p>
              <p className="text-muted-foreground text-xs">
                linkedin.com/in/sharief-sk | github.com/Sk-Sharief
              </p>
            </div>

            {/* Career Objective */}
            <section className="mb-6">
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ CAREER OBJECTIVE ═══
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Enthusiastic and adaptable engineering graduate with strong expertise in cloud 
                computing, AI/ML, full-stack development, and mobile application development. 
                Passionate about leveraging emerging technologies to build scalable, secure, 
                and efficient solutions.
              </p>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ TECHNICAL SKILLS ═══
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground/90">
                <div><span className="text-secondary">Languages:</span> Java, Python, SQL, C, C++, JavaScript</div>
                <div><span className="text-secondary">Web:</span> HTML, CSS, React, Node.js, Spring Boot</div>
                <div><span className="text-secondary">Databases:</span> MySQL, MongoDB, Firebase, SQLite</div>
                <div><span className="text-secondary">AI/ML:</span> TensorFlow, PyTorch, OpenCV, Pandas</div>
                <div><span className="text-secondary">Cloud:</span> AWS (EC2, S3, IAM), ServiceNow</div>
                <div><span className="text-secondary">Tools:</span> Git, GitHub, Android Studio</div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ INTERNSHIP EXPERIENCE ═══
              </h2>
              <div className="space-y-4 text-foreground/90">
                <div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-semibold">AWS Cloud Virtual Internship</span>
                    <span className="text-muted-foreground">Jan - Mar 2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground">• Hands-on with EC2, S3, IAM | Deployed cloud instances</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-semibold">Java Full Stack Developer</span>
                    <span className="text-muted-foreground">Oct - Dec 2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground">• Built web apps with Java, Spring Boot | RESTful APIs</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-semibold">Google Android Developer</span>
                    <span className="text-muted-foreground">Jan - Mar 2025</span>
                  </div>
                  <p className="text-xs text-muted-foreground">• Kotlin, Android Studio | Firebase integration</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-semibold">ServiceNow Developer</span>
                    <span className="text-muted-foreground">Feb - Mar 2025</span>
                  </div>
                  <p className="text-xs text-muted-foreground">• ITSM modules | Business rules & automation</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-semibold">StaxTech ML Developer</span>
                    <span className="text-muted-foreground">2 Months</span>
                  </div>
                  <p className="text-xs text-muted-foreground">• ML models with Python, scikit-learn | Data analytics</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ KEY PROJECTS ═══
              </h2>
              <div className="space-y-2 text-foreground/90">
                <div>
                  <span className="text-secondary">Codalyze</span> - AI-powered coding assistant (React, Node.js, AI)
                </div>
                <div>
                  <span className="text-secondary">Fake News Detector</span> - Chrome extension (JavaScript, Chrome API)
                </div>
                <div>
                  <span className="text-secondary">Symptom AI Analyzer</span> - Health prediction system (Python, ML)
                </div>
                <div>
                  <span className="text-secondary">Automated Network System</span> - ServiceNow automation
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ EDUCATION ═══
              </h2>
              <div className="space-y-2 text-foreground/90">
                <div className="flex justify-between">
                  <span><span className="text-secondary">B.Tech CSE</span> - Ideal Institute of Technology</span>
                  <span className="text-muted-foreground">75% | 2022-2026</span>
                </div>
                <div className="flex justify-between">
                  <span><span className="text-secondary">Intermediate</span> - Narayana Junior College</span>
                  <span className="text-muted-foreground">95.7% | 2020-2022</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-primary font-bold mb-2 border-b border-primary/30 pb-1">
                ═══ CERTIFICATIONS ═══
              </h2>
              <ul className="text-foreground/90 space-y-1">
                <li>• ServiceNow Certified System Administrator (CSA)</li>
                <li>• ServiceNow Certified Application Developer (CAD)</li>
                <li>• Cisco Data Analytics Essential</li>
                <li>• Red Hat Linux System Administration</li>
                <li>• Oracle Fusion AI Agent Studio Foundations</li>
              </ul>
            </section>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-border/50 text-center text-muted-foreground text-xs">
              <p>For full resume, click "Open" above</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
