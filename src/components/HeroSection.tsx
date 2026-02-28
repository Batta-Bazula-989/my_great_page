import { motion } from "framer-motion";
import AutomationFlowDemo from "@/components/AutomationFlowDemo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your support team shouldn't spend half its day
              <br />
              <span className="text-gradient">on manual tasks.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Click through a real example of how support automation works in practice.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AutomationFlowDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
