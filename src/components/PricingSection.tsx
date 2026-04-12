import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, FileText } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const plans = [
  {
    name: "Starter Chat Bot",
    price: "$350 – $450",
    description: "Handles basic customer queries and FAQs across 1–2 channels. Perfect for small businesses getting started with automation.",
    features: ["1–2 channels", "Answers FAQs, collects basic info, and handles common requests automatically"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Voice Bot",
    price: "$1,100 – $1,600",
    description: "For inbound phone calls.",
    features: [
      "Full voice agent for handling inbound calls with natural conversation, triage, and clean handover to your team",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard Chat Bot",
    price: "$500 – $650",
    description: "Advanced chatbot with multi-channel support, smarter responses, and better handling of customer interactions at scale.",
    features: ["3–5 channels", "Handles more complex conversations with smarter logic and smoother handoffs to your team"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Ticket Routing & Categorization",
    price: "$600 – $950",
    description: "Automatic sorting and assigning of tickets.",
    features: [
      "Automatically tags, categorizes, and routes tickets to the right team, so nothing gets missed and response times stay fast.",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Automated Reports",
    price: "$500 – $900",
    description: "Scheduled reports sent automatically.",
    features: [
      "Automated reports with your key business metrics delivered to email or Slack, so you stay informed without manual work.",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Custom Automation",
    price: "$1,200 – $2,000",
    description: "Fully customized automation built around your workflows, tools, and unique business requirements.",
    features: ["Fully customized automation built around your workflows, tools, and unique business requirements"],
    cta: "Get Started",
    popular: false,
  },
];

const PricingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleCTA = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto lg:grid-rows-2 lg:[grid-auto-rows:1fr] pb-8">
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
                relative rounded-2xl flex flex-col overflow-hidden
                bg-secondary
                ${plan.popular
                  ? "border-2 border-primary"
                  : "border border-primary/20"
                }
              `}
            >
              {/* Subtle cyan glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />

              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`relative z-10 flex flex-col flex-1 ${plan.popular ? "p-8 pt-10" : "p-7"}`}>
                {/* Plan name */}
                <h3
                  className="font-bold font-display text-foreground mb-2"
                  style={{ fontSize: plan.popular ? "1.5rem" : "1.26rem" }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[7rem]" style={{ fontSize: "1.05rem" }}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className="font-bold font-display text-primary leading-none"
                    style={{ fontSize: plan.popular ? "2.88rem" : "2.4rem" }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground/60 mt-2" style={{ fontSize: "0.9rem" }}>one-time fee</p>
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
                          <span className="text-muted-foreground leading-relaxed" style={{ fontSize: "1.05rem" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA button */}
                <button
                  onClick={() => handleCTA(plan.name)}
                  style={{ fontSize: "1.05rem" }}
                  className={`
                    w-full py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden bg-secondary border border-primary/20 px-5 py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "No hidden fees" },
                { icon: Clock,       text: "30 days of support after delivery" },
                { icon: FileText,    text: "Basic documentation included" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium leading-snug pt-1" style={{ fontSize: "1.137rem" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingSection;
