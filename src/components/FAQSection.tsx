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
      "No. I work with your existing stack — Zendesk, Freshdesk, Jira, Slack, and internal tools. The goal is to connect and improve what you already use, not replace it.",
  },
  {
    question: "What if the automation breaks?",
    answer:
      "Every project includes full documentation and 30 days of post-launch monitoring. If something breaks during that period, I fix it. I build using standard integrations (APIs, webhooks, Make/n8n), not fragile custom hacks.",
  },
  {
    question: "Can my team maintain this after you're done?",
    answer:
      "Yes. I document the logic clearly and explain how everything works. You're not locked in. Ongoing support is optional.",
  },
  {
    question: "Can you integrate [specific tool]?",
    answer:
      "If the tool has an API or webhook support, most likely yes. Share the tool during the audit call and I'll confirm feasibility.",
  },
  {
    question: "What happens in the free audit?",
    answer:
      "We spend 30 minutes reviewing your support setup and pain points. I identify 2–3 areas where automation would have the biggest impact and give you a clear recommendation, including rough scope and cost. No pitch deck. No pressure.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Straight answers to the questions I hear most often.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
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
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
