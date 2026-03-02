import { BarChart3, Bot, Route, Bell, Wrench } from "lucide-react";

const SERVICES = [
  {
    title: "Reporting automation",
    desc: "Replace manual exports with live dashboards and scheduled reports. Keep support, product, and leadership aligned on the same numbers.",
    icon: BarChart3,
    outcomes: ["Fewer manual exports", "Clear view of SLAs and backlog"],
  },
  {
    title: "Support chat & voice bots",
    desc: "Bots that deflect simple questions, capture the right context, and hand off cleanly to humans when needed — in chat or on the phone.",
    icon: Bot,
    outcomes: ["Shorter queues", "More time for complex issues"],
  },
  {
    title: "Ticket routing & categorization",
    desc: "AI‑assisted tagging and routing rules so tickets land in the right queue with the right priority and owner.",
    icon: Route,
    outcomes: ["Faster first response", "Less time spent triaging"],
  },
  {
    title: "Monitoring & alerting",
    desc: "SLA timers, backlog thresholds, and health checks that alert you in Slack before something becomes a fire.",
    icon: Bell,
    outcomes: ["Fewer missed SLAs", "No surprises on Monday morning"],
  },
  {
    title: "Custom automation solutions",
    desc: "Workflows tailored to your stack — tying together tools like Zendesk, Intercom, Jira, Salesforce, Slack, and your own APIs.",
    icon: Wrench,
    outcomes: ["Less copy‑paste", "One process instead of five workarounds"],
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

