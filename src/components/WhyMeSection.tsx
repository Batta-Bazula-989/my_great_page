import { motion } from "framer-motion";
import { Briefcase, Shield, BookOpen, MessageCircle } from "lucide-react";

const items = [
  {
    title: "I've Worked Inside Support",
    desc: "I've handled tickets, built reports manually, and dealt with broken workflows. I understand what slows teams down because I've lived it.",
    icon: Briefcase,
  },
  {
    title: "Built to Last, Not to Impress",
    desc: "Every workflow includes error handling, monitoring, and testing. I don't ship fragile automations that break on edge cases.",
    icon: Shield,
  },
  {
    title: "Full Documentation & Handover",
    desc: "You get clear docs so your team can maintain and extend what I build. No vendor lock-in, no black boxes.",
    icon: BookOpen,
  },
  {
    title: "Plain Language, No Jargon",
    desc: "I explain what I'm building and why — in terms your team actually understands. Technical decisions are shared, not hidden.",
    icon: MessageCircle,
  },
];

const WhyMeSection = () => {
  return (
    <section id="why-me" className="py-[4.8rem] bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-primary font-bold uppercase tracking-wider" style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}>
            Why Work With Me
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 rounded-xl border hover:-translate-y-1 card-hover-glow"
                style={{
                  backgroundColor: 'rgb(43, 48, 59)',
                  borderColor: 'rgb(43, 48, 59)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
