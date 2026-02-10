import { X, Check } from "lucide-react";

const beforeItems = [
  "Agents manually sort and route every incoming ticket",
  "Weekly reports take 2–3 hours to compile from multiple tools",
  "SLA breaches discovered after the fact — or not at all",
  "Zendesk, Jira, CRM, and Slack hold different versions of the truth",
  "Team leads spend more time on admin than coaching or improving",
];

const afterItems = [
  "Tickets are routed, tagged, and prioritized automatically",
  "Reports generate and deliver themselves on schedule",
  "SLA alerts fire before breaches — with clear escalation paths",
  "Tools sync in real time — one source of truth across systems",
  "The team focuses on customers, not on keeping the process alive",
];

const OutcomeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What Actually Changes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Concrete Outcomes, Not Vague Promises
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here's what a typical engagement looks like — before and after.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-xl font-bold font-display mb-6 text-muted-foreground">Before</h3>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/30">
            <h3 className="text-xl font-bold font-display mb-6 text-gradient">After</h3>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
