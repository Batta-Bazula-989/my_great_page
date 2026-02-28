import { motion } from "framer-motion";

interface FlowStepProps {
  title: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

const FlowStep = ({ title, children, showArrow = false }: FlowStepProps) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded-xl border border-border bg-gradient-card p-6 shadow-card ring-1 ring-primary/10">
        <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-primary">
          {title}
        </h3>
        {children}
      </div>
      {showArrow && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="h-6 w-0.5 bg-gradient-to-b from-primary/60 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />
          <motion.div
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="rotate-90"
            >
              <path
                d="M4 2L8 6L4 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default FlowStep;
