import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to switch my support tools?",
    answer:
      "No. I work with whatever you're already using — Zendesk, Freshdesk, Jira, Slack, internal tools. The goal is to connect and improve what you have, not replace it.",
  },
  {
    question: "What if something breaks after launch?",
    answer:
      "Every project includes 30 days of post-launch support. If something breaks in that window, I fix it. I build on standard integrations — APIs, webhooks, Make/n8n — not fragile custom hacks that only work in one environment.",
  },
  {
    question: "Can my team maintain this after you're done?",
    answer:
      "Yes. I document everything clearly — the logic, the flow, the edge cases. You're not locked in. Ongoing support is available but optional.",
  },
  {
    question: "Can you integrate a specific tool?",
    answer:
      "If it has an API or webhook support, almost certainly. Bring it up on the audit call and I'll confirm.",
  },
  {
    question: "What actually happens in the free audit?",
    answer:
      "30 minutes. We look at your current setup, where the friction is, and where automation would actually make a difference. You leave with 2–3 concrete recommendations, a rough scope, and a price range. No sales deck. No pressure.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most setups take 1–3 weeks depending on complexity and how quickly we can align on requirements. I'll give you a realistic timeline upfront — not an optimistic one.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-[4.8rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider" style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}>
            FAQ
          </span>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border-none rounded-xl bg-secondary/30 border border-border px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline text-left font-display text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
