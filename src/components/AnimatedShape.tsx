import { motion } from "framer-motion";

type ShapeVariant = "codalyze" | "fake-news" | "rps" | "network" | "symptom-ai" | "education";

interface AnimatedShapeProps {
  variant: ShapeVariant;
}

const AnimatedShape = ({ variant }: AnimatedShapeProps) => {
  switch (variant) {
    case "codalyze":
      return <CodalyzeShape />;
    case "fake-news":
      return <FakeNewsShape />;
    case "rps":
      return <RPSShape />;
    case "network":
      return <NetworkShape />;
    case "symptom-ai":
      return <SymptomAIShape />;
    case "education":
      return <EducationShape />;
    default:
      return null;
  }
};

// Codalyze: Glowing hexagon with orbiting brackets
const CodalyzeShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <polygon
        points="50,5 93,25 93,75 50,95 7,75 7,25"
        fill="none"
        stroke="url(#hexGradient)"
        strokeWidth="2"
        className="drop-shadow-[0_0_10px_hsl(var(--primary))]"
      />
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    </motion.svg>
    <motion.span
      className="absolute text-primary text-lg font-mono"
      animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {"</>"}
    </motion.span>
  </div>
);

// Fake News: Layered rectangles with scanning bar
const FakeNewsShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="15" y="20" width="70" height="60" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4" />
      <rect x="20" y="25" width="60" height="50" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6" />
      <rect x="25" y="30" width="50" height="40" rx="2" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
      <line x1="30" y1="40" x2="70" y2="40" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.5" />
      <line x1="30" y1="50" x2="60" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.5" />
      <line x1="30" y1="60" x2="55" y2="60" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.5" />
    </svg>
    <motion.div
      className="absolute left-[25%] w-[50%] h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
      animate={{ top: ["30%", "70%", "30%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-2 right-4"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500 fill-current">
        <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6zm-1 4v4h2v-4h-2zm0 6v2h2v-2h-2z" />
      </svg>
    </motion.div>
  </div>
);

// Rock Paper Scissors: Orbiting tokens
const RPSShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <motion.div
      className="absolute w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {/* Rock */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-cyan-400 flex items-center justify-center text-xs bg-background/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      >
        ✊
      </motion.div>
      {/* Paper */}
      <motion.div
        className="absolute bottom-2 left-2 w-7 h-7 rounded-full border-2 border-purple-400 flex items-center justify-center text-xs bg-background/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      >
        ✋
      </motion.div>
      {/* Scissors */}
      <motion.div
        className="absolute bottom-2 right-2 w-7 h-7 rounded-full border-2 border-teal-400 flex items-center justify-center text-xs bg-background/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
      >
        ✌️
      </motion.div>
    </motion.div>
  </div>
);

// Network: Connected nodes with traveling packet
const NetworkShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Connection lines */}
      <line x1="50" y1="20" x2="25" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="20" x2="75" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="50" x2="50" y2="80" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      <line x1="75" y1="50" x2="50" y2="80" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="50" x2="75" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      
      {/* Nodes */}
      <motion.circle cx="50" cy="20" r="6" fill="hsl(var(--primary))" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="25" cy="50" r="5" fill="hsl(var(--accent))" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.circle cx="75" cy="50" r="5" fill="hsl(var(--accent))" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="50" cy="80" r="6" fill="hsl(var(--primary))" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
    </svg>
    {/* Traveling packet */}
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_hsl(var(--primary))]"
      animate={{
        x: [0, -25, -25, 0, 25, 25, 0],
        y: [-30, 0, 0, 30, 0, 0, -30],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Symptom AI: Brain/radar with scanning arcs
const SymptomAIShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Concentric rings */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.7" />
      <circle cx="50" cy="50" r="5" fill="hsl(var(--primary))" opacity="0.8" />
    </svg>
    {/* Rotating arc */}
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M50 15 A35 35 0 0 1 85 50"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinecap="round"
        className="drop-shadow-[0_0_6px_hsl(var(--accent))]"
      />
    </motion.svg>
    {/* Blips */}
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
      style={{ top: "25%", left: "60%" }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-purple-400"
      style={{ top: "55%", left: "30%" }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
  </div>
);

// Education: Open book with sparkles
const EducationShape = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Book outline */}
      <path
        d="M50 25 L50 75 M50 25 C35 25 20 30 15 35 L15 75 C20 70 35 65 50 65 M50 25 C65 25 80 30 85 35 L85 75 C80 70 65 65 50 65"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        className="drop-shadow-[0_0_6px_hsl(var(--primary))]"
      />
      {/* Page lines */}
      <line x1="25" y1="40" x2="45" y2="38" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="50" x2="45" y2="48" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="38" x2="75" y2="40" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="48" x2="75" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.5" />
    </motion.svg>
    {/* Sparkles */}
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-yellow-400"
      style={{ top: "20%", right: "25%" }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-cyan-400"
      style={{ top: "30%", left: "20%" }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-purple-400"
      style={{ top: "15%", left: "50%" }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
    />
  </div>
);

export default AnimatedShape;
