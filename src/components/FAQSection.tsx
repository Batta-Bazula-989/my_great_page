import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const FAQSection = () => {
  const t = useDict().faq;
  return (
    <Section id="faq" eyebrow={t.eyebrow} title={t.title}>
      <Reveal className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {t.items.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${index}`}
              className="glass glass-hover rounded-2xl border-b-0 px-6"
            >
              <AccordionTrigger className="hover:no-underline text-left font-display text-base gap-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
};

export default FAQSection;
