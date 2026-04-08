import { motion } from "framer-motion";
import { MessageSquare, Mic, BarChart2, Settings2, Info } from "lucide-react";

const categories = [
  {
    icon: MessageSquare,
    title: "Chat Bots",
    description:
      "Automated text-based assistants for your website, WhatsApp, Telegram, or other messaging platforms. Handles FAQs, lead qualification, and basic support — 24/7.",
    plans: [
      {
        name: "Starter Chat Bot",
        price: "$350 – $450",
        detail: "1–2 channels",
      },
      {
        name: "Standard Chat Bot",
        price: "$500 – $650",
        detail: "3–5 channels",
      },
    ],
  },
  {
    icon: Mic,
    title: "Voice + Chat Bots",
    description:
      "A combined package: voice bot for phone calls and a chat bot for messaging. Ideal if you need both channels covered under one setup.",
    plans: [
      {
        name: "Voice + Chat Package",
        price: "$1,300 – $1,900",
        detail: "Voice & text channels included",
      },
    ],
  },
  {
    icon: BarChart2,
    title: "Automated Reporting",
    description:
      "Scheduled reports delivered to your inbox or dashboard — no manual data pulling. Smart tier adds trend analysis and actionable insights.",
    plans: [
      {
        name: "Basic Reports",
        price: "$450 – $650",
        detail: "Scheduled data summaries",
      },
      {
        name: "Smart Reports + Insights",
        price: "$800 – $1,100",
        detail: "Trends, anomalies & recommendations",
      },
    ],
  },
  {
    icon: Settings2,
    title: "Custom Solutions",
    description:
      "Something more specific in mind? We'll scope it together and build it to fit.",
    plans: [
      {
        name: "Custom Automation",
        price: "$1,200 – $2,000",
        detail: "Scoped per project",
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-[4.8rem] relative overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="text-primary font-bold uppercase tracking-wider"
            style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}
          >
            Pricing
          </span>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto leading-relaxed">
            All prices below are one-time setup fees — no monthly retainers, no
            hidden charges.
          </p>
        </div>

        {/* Category cards */}
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
                className="rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 overflow-hidden"
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

                {/* Plans table */}
                <div className="px-7 py-5 space-y-3">
                  {cat.plans.map((plan) => (
                    <div
                      key={plan.name}
                      className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl bg-secondary/40 border border-border/40"
                    >
                      <div>
                        <p className="text-foreground/90 text-sm font-medium">
                          {plan.name}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {plan.detail}
                        </p>
                      </div>
                      <span className="text-primary font-bold font-display text-base whitespace-nowrap">
                        {plan.price}
                      </span>
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
            Final price depends on your specific requirements and integrations.
            Every setup includes{" "}
            <span className="text-foreground/80 font-medium">
              30 days of free support
            </span>{" "}
            after launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
