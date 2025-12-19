import { Cloud, Code, Smartphone, Settings, Brain } from "lucide-react";

interface InternshipsProps {
  onContactClick?: () => void;
}

const internships = [
  {
    title: "AWS Cloud Virtual Internship",
    role: "Cloud Computing Intern",
    duration: "3 Months (January - March 2024)",
    type: "Virtual",
    icon: Cloud,
    highlights: [
      "Hands-on experience with AWS services like EC2, S3, and IAM",
      "Deployed and managed cloud instances for scalability",
      "Implemented security and storage configurations",
    ],
  },
  {
    title: "Java Full Stack Developer",
    role: "Full Stack Developer Intern",
    duration: "3 Months (October - December 2024)",
    type: "On-site",
    icon: Code,
    highlights: [
      "Built dynamic web apps using Java, Spring Boot, HTML, CSS, JavaScript",
      "Designed RESTful APIs connected with front-end components",
      "Worked with MySQL for database operations",
    ],
  },
  {
    title: "Google Android Developer",
    role: "Android App Development Intern",
    duration: "3 Months (January - March 2025)",
    type: "Virtual",
    icon: Smartphone,
    highlights: [
      "Developed mobile applications using Kotlin and Android Studio",
      "Implemented responsive UI with Material Design principles",
      "Integrated APIs and Firebase for data storage",
    ],
  },
  {
    title: "ServiceNow Developer",
    role: "ServiceNow Developer Intern",
    duration: "4 Months (February - March 2025)",
    type: "Virtual",
    icon: Settings,
    highlights: [
      "Developed and customized ServiceNow applications and workflows",
      "Worked on catalog items, business rules, and UI policies",
      "ITSM modules and automation scripting using Glide",
    ],
  },
  {
    title: "StaxTech ML Developer",
    role: "Machine Learning Developer Intern",
    duration: "2 Months",
    type: "Remote",
    icon: Brain,
    highlights: [
      "Designed and trained ML models using Python and scikit-learn",
      "Preprocessed and analyzed data for model accuracy",
      "Implemented predictive analytics with NumPy, Pandas, Matplotlib",
    ],
  },
];

const Internships = ({ onContactClick }: InternshipsProps) => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-12 pt-8 overflow-y-auto">
      <div className="container mx-auto px-6 pt-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience gained through virtual and on-site internships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {internships.map((internship, index) => (
            <div
              key={internship.title}
              className="glass-card p-6 flex flex-col animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border animation */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              <div className="absolute inset-[1px] rounded-xl bg-card z-0" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <internship.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Role */}
                <h3 className="text-lg font-semibold text-foreground mb-1">{internship.title}</h3>
                <p className="text-primary text-sm mb-2">{internship.role}</p>
                
                {/* Duration & Type */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-muted-foreground">{internship.duration}</span>
                  <span className="skill-tag text-xs">{internship.type}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {internship.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
