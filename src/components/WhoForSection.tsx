import { Check, X } from "lucide-react";

const goodFit = [
  "Support teams on tools like Zendesk, Freshdesk, or Jira with too much manual work",
  "Ops and support leaders who need clear reporting and reliable SLA tracking",
  "Companies juggling multiple tools that don't talk to each other cleanly",
  "Teams that want better automation on top of their current stack, not a brand new platform",
];

const notFit = [
  "You need a full-time hire to run and manage day-to-day support ops",
  "You want a one-click chatbot or ‘AI agent’ to handle everything",
  "You're trying to rip out and replace your entire support stack at once",
  "You’re looking for “AI to replace your support team” instead of automation that makes your team faster and smarter. (I build systems that support people. I don’t sell magical layoffs in a box.)",
];

const WhoForSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Is This a Fit?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Who This Is For — and Who It's Not
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Clear expectations up front mean better results for both of us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/30">
            <h3 className="text-xl font-bold font-display mb-6 text-gradient">Good Fit</h3>
            <div className="space-y-4">
              {goodFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
            <h3 className="text-xl font-bold font-display mb-6 text-muted-foreground">Not the Right Fit</h3>
            <div className="space-y-4">
              {notFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;
