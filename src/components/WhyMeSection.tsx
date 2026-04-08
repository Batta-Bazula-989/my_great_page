import { motion } from "framer-motion";
import { Briefcase, Shield, BookOpen, MessageCircle, MapPin } from "lucide-react";

const items = [
  {
    title: "I've worked in support — not just around it",
    desc: "I've handled tickets, built reports manually, and dealt with workflows held together with copy-paste and wishful thinking. I know what actually slows teams down because I've been on that side of it.",
    icon: Briefcase,
  },
  {
    title: "Built to hold up, not to demo well",
    desc: "Every automation includes error handling, edge case testing, and monitoring. If something unexpected happens, it fails gracefully and alerts the right person — it doesn't just silently break.",
    icon: Shield,
  },
  {
    title: "You own everything when we're done",
    desc: "Full documentation. Clear handover. No proprietary tooling that only I can access. Your team can maintain and extend what I build without needing to call me.",
    icon: BookOpen,
  },
  {
    title: "Ukraine-based. Serious about quality.",
    desc: "Senior-level work at a significantly lower cost than Western agencies — without the quality trade-off. Ukraine has one of the strongest engineering cultures in Europe. I treat every project like my name is on it, because it is.",
    icon: MapPin,
  },
  {
    title: "Straight communication, always",
    desc: "I'll tell you if something isn't worth automating. I'll tell you if your budget doesn't fit the scope. I won't nod and invoice you for something that won't move the needle.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
