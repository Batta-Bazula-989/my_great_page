import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDict } from "@/i18n";

const FAQSection = () => {
  const t = useDict().faq;
  const faqs = t.items.map(({ q, a }) => ({ question: q, answer: a }));
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-[4.8rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="faq-title" className="section-title">{t.title}</h2>
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
                  className="glass glass-hover rounded-2xl px-6"
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
