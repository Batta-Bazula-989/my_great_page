import { BarChart3, Bot, Route, Wrench } from "lucide-react";

const SERVICES = [
  {
    title: "Support chat & voice bots",
    desc: "Bots that manage first contact in chat and phone. They handle straightforward requests, gather information, and hand off complex issues to your team cleanly.",
    icon: Bot,
    outcomes: [],
  },
  {
    title: "Ticket routing & categorization",
    desc: "Auto-assign tickets, apply tags, and set priority based on content — so every ticket lands in the right queue with the right owner from the start.",
    icon: Route,
    outcomes: [],
  },
  {
    title: "Reporting",
    desc: "Turn manual reporting into automated delivery. Your team's current reports — metrics, summaries, tracking — get generated and sent to the right people automatically. No more pulling data and formatting updates.",
    icon: BarChart3,
    outcomes: [],
  },
  {
    title: "Custom solution",
    desc: "Have a specific automation need or idea that doesn't exist anywhere? I build custom solutions tailored to your exact situation — whether it's a unique way to handle tickets, connect tools, or automate something completely specific to your team.",
    icon: Wrench,
    outcomes: [],
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="group p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.outcomes.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;