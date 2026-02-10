import { Settings, ShieldCheck, BarChart3, Link, FileText } from "lucide-react";

const items = [
  {
    title: "Ticket Routing & Workflow Automation",
    desc: "Rules-based routing, auto-tagging, prioritization, and assignment — so tickets reach the right agent without manual triage.",
    icon: Settings,
  },
  {
    title: "SLA Tracking & Escalation",
    desc: "Automated SLA monitoring with escalation alerts that fire before breaches happen — not after.",
    icon: ShieldCheck,
  },
  {
    title: "Reporting & Dashboards",
    desc: "Automated daily and weekly reports, plus live dashboards. No more copying data into spreadsheets every Monday morning.",
    icon: BarChart3,
  },
  {
    title: "Tool Integration",
    desc: "Connect your helpdesk, CRM, Slack, Jira, and monitoring tools via APIs, webhooks, Make, or n8n. Your existing stack, working together.",
    icon: Link,
  },
  {
    title: "Documentation & Handover",
    desc: "Every workflow comes with clear documentation. Your team can maintain, extend, or adjust what I build — you're never locked in.",
    icon: FileText,
  },
];

const SolutionSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow opacity-20 -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Practical Automation That Fits Your Existing Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No rip-and-replace. I work with the tools you already use and build automations that your team can actually maintain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
