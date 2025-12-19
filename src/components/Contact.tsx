import { useState } from "react";
import { Heart, Github, Linkedin, Mail, Phone, Instagram, Code, Rocket, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface ContactProps {
  onContactClick?: () => void;
}

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Sk-Sharief", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sharief-sk/", color: "hover:text-[#0077B5]" },
  { name: "Email", icon: Mail, url: "mailto:shalinisharief7@gmail.com", color: "hover:text-red-400" },
  { name: "WhatsApp", icon: Phone, url: "https://api.whatsapp.com/send/?phone=%2B917893254003&text&type=phone_number&app_absent=0", color: "hover:text-green-500" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sharief___555/", color: "hover:text-pink-500" },
  { name: "HackerRank", icon: Code, url: "https://hackerrank.com/profile/226K1A0557", color: "hover:text-[#00EA64]" },
];

const Contact = ({ onContactClick }: ContactProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_f2soe48",
        "template_2kurs64",
        {
          from_name: formData.name,
          from_email: formData.contact,
          subject: formData.subject,
          message: formData.message,
        },
        "jTBmwIWlcJcTzavws"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", contact: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-container py-8 overflow-y-auto">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Let's <span className="gradient-text">Connect</span> & Collaborate
          </h2>
  <p className="text-muted-foreground">
    Feel free to reach out for collaborations or just a friendly chat
  </p>
</div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full glass-card neon-border-hover flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              title={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-card neon-border p-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email/Phone */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com or phone"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-neon flex items-center justify-center gap-2 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Rocket size={20} />}
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p>© 2024 Sk. Mahaboob Sharief. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
