import { AlertTriangle } from "lucide-react";

const problems = [
  {
    pain: "Tickets sit in queue because routing rules are manual or broken",
    result: "Longer response times, missed SLAs, frustrated customers.",
  },
  {
    pain: "Daily and weekly reports are built by hand in spreadsheets",
    result: "Hours lost every week that could go toward actual support work.",
  },
  {
    pain: "SLA tracking is a guess — no alerts until it's too late",
    result: "Breaches go unnoticed. Escalations happen after the damage is done.",
  },
  {
    pain: "Support tools don't talk to each other",
    result: "Agents copy-paste between Zendesk, Jira, CRM, Slack. Data lives in silos.",
  },
  {
    pain: "The team spends more time on admin than on customers",
    result: "Morale drops. Hiring more people doesn't fix a broken process.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why I Focus on Support Automation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            These Problems Don't Fix Themselves
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I've seen these patterns from the inside. They compound over time, and hiring more people rarely solves them.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-secondary/30 border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-destructive/70 mt-0.5 shrink-0" />
                <div>
                  <p className="text-foreground/90 font-medium">{item.pain}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
