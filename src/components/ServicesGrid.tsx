import { BarChart3, Bot, Route, Bell, Wrench } from "lucide-react";

const SERVICES = [
  {
    title: "Reporting",
    desc: "Automated SLA metrics, weekly and monthly reports, and bottleneck visibility — delivered to the right people without manual exports.",
    icon: BarChart3,
    outcomes: [],
  },
  {
    title: "Support chat & voice bots",
    desc: "Bots that triage and route incoming requests in chat and on the phone. They handle the first layer and hand off cleanly — not replace your team.",
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
    title: "Monitoring & alerting",
    desc: "Real-time detection of SLA breaches, queue spikes, and process failures — with alerts before problems escalate.",
    icon: Bell,
    outcomes: [],
  },
  {
    title: "Custom support automations",
    desc: "Glue between tools that don't integrate out of the box — Zendesk, Intercom, Jira, Salesforce, Slack, and your own APIs wired together to fit your workflow.",
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

