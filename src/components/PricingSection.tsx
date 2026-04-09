import { motion } from "framer-motion";
import { MessageSquare, Mic, BarChart2, Settings2, Info, Check } from "lucide-react";

const categories = [
  {
    icon: MessageSquare,
    title: "Chat Agent",
    description:
      "Automated text assistants for your website or messaging platforms. Handle FAQs, lead qualification, and basic triage — around the clock.",
    plans: [
      {
        name: "Starter Chat Bot",
        price: "$350 – $450",
        detail: "",
        includes: ["Chat bot setup", "FAQ automation", "Basic handoff to human agent", "1–2 channels"],
      },
      {
        name: "Standard Chat Bot",
        price: "$500 – $650",
        detail: "",
        includes: ["Everything in Starter", "Multi-channel deployment", "Lead qualification flow", "3–5 channels"],
      },
    ],
  },
  {
    icon: Mic,
    title: "Voice Agent",
    description:
      "Full voice agent for handling inbound calls with natural conversation, triage, and clean handover to human agents.",
    plans: [
      {
        name: "Voice Agent",
        price: "$1,100 – $1,700",
        detail: "",
        includes: ["Voice bot for inbound calls", "Unified routing logic", "Escalation handling accordingly"],
      },
    ],
  },
  {
    icon: BarChart2,
    title: "Automated Reporting",
    description:
      "Scheduled reports delivered automatically — no more manual data pulling.",
    plans: [
      {
        name: "Automated Reports",
        price: "$500 – $900",
        detail: "",
        includes: ["Scheduled summaries of key metrics", "Automated report generation", "Delivery via email or Slack"],
      },
    ],
  },
  {
    icon: Settings2,
    title: "Custom Solutions",
    description:
      "Something specific that doesn't fit above. We scope it together and build it to fit.",
    plans: [
      {
        name: "Custom Automation",
        price: "$1,200 – $2,000",
        detail: "",
        includes: ["Discovery & scoping session", "Custom-built automation", "Full documentation & handover"],
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-[4.8rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-5">
          <span
            className="text-primary font-bold uppercase tracking-wider"
            style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}
          >
            Pricing
          </span>
          <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto leading-relaxed">
            One-time setup fees. No subscriptions, no monthly retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                className="rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col"
                style={{ backgroundColor: "rgb(43, 48, 59)" }}
              >
                {/* Card header */}
                <div className="px-7 pt-7 pb-5 border-b border-border/60 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Plans */}
                <div className="px-7 py-5 flex flex-col gap-4 flex-1">
                  {cat.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="rounded-xl bg-secondary/40 border border-border/40 overflow-hidden"
                    >
                      {/* Plan header row */}
                      <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-border/30">
                        <div>
                          <p className="text-foreground/90 text-sm font-semibold">
                            {plan.name}
                          </p>
                          {plan.detail && (
                            <p className="text-muted-foreground text-xs mt-0.5">
                              {plan.detail}
                            </p>
                          )}
                        </div>
                        <span className="text-primary font-bold font-display text-base whitespace-nowrap">
                          {plan.price}
                        </span>
                      </div>
                      {/* Includes list */}
                      <div className="px-4 py-3 space-y-1.5">
                        {plan.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-muted-foreground" style={{ fontSize: "16.8px" }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto flex items-start gap-3 px-5 py-4 rounded-xl border border-border/60 bg-secondary/20"
        >
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Final price depends on your specific requirements and integrations. Every setup includes{" "}
            <span className="text-foreground/80 font-medium">30 days of free post-launch support</span>
            {" "}— if something breaks in the first month, I fix it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
