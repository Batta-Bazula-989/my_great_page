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
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Work With Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Honest Work. Clear Communication. Reliable Systems.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
