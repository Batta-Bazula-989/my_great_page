import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // seconds
  y?: number; // px of rise
}

// Fade-up on scroll that never hides server-rendered content. The pre-rendered HTML (and the first client
// render) is fully visible; only after hydration are elements that start below the viewport hidden and then
// revealed as they scroll in. Elements already on screen, and visitors who prefer reduced motion, never animate.
const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      controls.set({ opacity: 0, y });
      setArmed(true);
    }
    // Only decided once, on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (armed && inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay } });
    }
  }, [armed, inView, controls, delay]);

  return (
    <motion.div ref={ref} animate={controls} className={className}>
      {children}
    </motion.div>
  );
};

export default Reveal;
