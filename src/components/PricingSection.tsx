import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Chat Bot",
    price: "$350 – $450",
    description: "For website, WhatsApp, Telegram, Instagram and other messaging channels.",
    features: ["1–2 channels"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Voice Bot",
    price: "$1,300 – $1,900",
    description: "For inbound phone calls.",
    features: [
      "Full voice agent for handling inbound calls with natural conversation, triage, and clean handover to your team",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Standard Chat Bot",
    price: "$500 – $650",
    description: "For website, WhatsApp, Telegram, Instagram and other messaging channels.",
    features: ["3–5 channels"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Ticket Routing & Categorization",
    price: "$600 – $950",
    description: "Automatic sorting and assigning of tickets.",
    features: [
      "Automatically tags, categorizes, and routes tickets to the right person or team",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Automated Reports",
    price: "$500 – $900",
    description: "Scheduled reports sent automatically.",
    features: [
      "Regular scheduled reports with your key support metrics delivered by email or Slack",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Custom Automation",
    price: "$1,200 – $2,000",
    description: "For more complex or unique needs.",
    features: [],
    cta: "Get in Touch",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-visible bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-primary font-bold uppercase tracking-wider"
            style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}
          >
            Pricing
          </span>
          <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto leading-relaxed">
            All prices are one-time setup fees. No subscriptions, no monthly retainers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start pb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: plan.popular ? -16 : 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.07 }}
              whileHover={{
                y: plan.popular ? -22 : -6,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className={`
                relative rounded-2xl flex flex-col
                ${plan.popular
                  ? "border-2 border-primary"
                  : "border border-border/60 hover:border-primary/30"
                }
              `}
              style={{
                backgroundColor: plan.popular ? "rgb(52, 58, 72)" : "rgb(43, 48, 59)",
                boxShadow: plan.popular
                  ? "0 24px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(var(--primary), 0.15)"
                  : "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`flex flex-col flex-1 ${plan.popular ? "p-8 pt-10" : "p-7"}`}>
                {/* Plan name */}
                <h3
                  className="font-bold font-display text-foreground mb-2"
                  style={{ fontSize: plan.popular ? "1.25rem" : "1.05rem" }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className="font-bold font-display text-primary leading-none"
                    style={{ fontSize: plan.popular ? "2.4rem" : "2rem" }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground/60 text-xs mt-2">one-time fee</p>
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 mb-6" />

                {/* Features */}
                <div className="flex-1 mb-7">
                  {plan.features.length > 0 && (
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA button */}
                <button
                  className={`
                    w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer
                    ${plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30"
                      : "bg-transparent text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground/70 text-sm mb-2">
            <span>No hidden fees</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border/60" />
            <span>30 days of support after delivery</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border/60" />
            <span>Basic documentation included</span>
          </div>
          <p className="text-muted-foreground/50 text-xs mt-1">
            Final price depends on the exact requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
