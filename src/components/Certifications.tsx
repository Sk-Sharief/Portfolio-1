import { Award } from "lucide-react";

interface CertificationsProps {
  onContactClick?: () => void;
}

const certifications = [
  {
    title: "ServiceNow Certified System Administrator",
    shortName: "CSA",
    issuer: "ServiceNow",
    color: "from-green-500 to-emerald-600",
    icon: "🔧",
    description: "Certified in ServiceNow platform administration and configuration.",
    certificateLink: "https://drive.google.com/file/d/1xO1BHwrYl_FImwt_tm1TFgcSqHIPkPd4/view?usp=drive_link",
  },
  {
    title: "ServiceNow Certified Application Developer",
    shortName: "CAD",
    issuer: "ServiceNow",
    color: "from-blue-500 to-cyan-600",
    icon: "💻",
    description: "Certified in building and customizing ServiceNow applications.",
    certificateLink: "https://drive.google.com/file/d/1ZBzS8P3yS5qZMHAXeeobvVqxpPBOo3T9/view?usp=drive_link",
  },
  {
    title: "Cisco Certified Network Associate",
    shortName: "CCNA",
    issuer: "Cisco",
    color: "from-cyan-500 to-blue-600",
    icon: "🌐",
    description: "Certified in networking fundamentals and Cisco technologies.",
    certificateLink: "https://drive.google.com/file/d/1dtfYuX2LTtVN2O34toOFDRJuSGAkz3qO/view?usp=drive_link",
  },
  {
    title: "Red Hat Certified System Administrator",
    shortName: "RHCSA",
    issuer: "Red Hat",
    color: "from-red-500 to-rose-600",
    icon: "🐧",
    description: "Certified in Red Hat Enterprise Linux system administration.",
    certificateLink: "https://drive.google.com/file/d/1KtsIy9r9qfLzGJcmBauEnhtgkzBTexau/view?usp=drive_link",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    shortName: "OCI",
    issuer: "Oracle",
    color: "from-orange-500 to-red-600",
    icon: "☁️",
    description: "Certified in Oracle Cloud Infrastructure fundamentals.",
    certificateLink: "https://drive.google.com/file/d/1-2zS_Psh2OZ75amT6xBfMUPogItBmnYU/view?usp=sharing",
  },
];

const Certifications = ({ onContactClick }: CertificationsProps) => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-12 pt-8 overflow-y-auto">
      <div className="container mx-auto px-6 pt-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.shortName}
              className="glass-card neon-border-hover p-6 flex flex-col animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-3xl">{cert.icon}</span>
              </div>

              {/* Short Name Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white`}>
                  {cert.shortName}
                </span>
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors cursor-pointer hover:scale-110 transform duration-200"
                  title="View Certificate"
                >
                  <Award size={18} className="drop-shadow-[0_0_4px_hsl(var(--primary))]" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
              
              {/* Issuer */}
              <p className="text-sm text-primary mb-3">Issued by {cert.issuer}</p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground flex-grow">{cert.description}</p>

              {/* Decorative bottom glow */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">{certifications.length}+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">4</div>
            <div className="text-sm text-muted-foreground">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">100%</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
