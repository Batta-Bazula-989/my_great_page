import { Mail, Linkedin, ArrowUpRight, Calendar, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingButton from "@/components/BookingButton";
import Section from "@/components/Section";
import { UPWORK_PROFILE_URL, LINKEDIN_URL, TELEGRAM_URL, EMAIL } from "@/lib/links";
import { useDict } from "@/i18n";
import avatar from "@/assets/roman-avatar.jpg";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 text-foreground/85 underline-offset-4 transition-colors hover:text-primary hover:underline";

const ContactSection = () => {
  const t = useDict().contact;

  return (
    <Section id="contact" eyebrow={t.eyebrow} title={t.title} className="pb-12 md:pb-14">
      <div className="glass-panel max-w-3xl mx-auto rounded-[32px] px-5 py-7 md:px-10 md:py-9 text-center">
        <p className="flex items-center justify-center gap-3 text-foreground/85 text-lg mb-6">
          <img
            src={avatar}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 shrink-0 rounded-full border border-white/15 object-cover"
          />
          <span className="text-pretty">{t.intro}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingButton
            variant="hero"
            size="xl"
            className="h-auto min-h-14 rounded-full px-6 py-3 text-base whitespace-normal text-center sm:px-10 sm:text-lg"
          >
            <Calendar className="w-5 h-5" aria-hidden />
            {t.cta}
          </BookingButton>
          <Button variant="glass" size="xl" className="rounded-full" asChild>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" aria-hidden />
              {t.linkedin}
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          </Button>
        </div>

        <ul className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 text-sm">
          <li>
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              <Mail className="w-4 h-4 shrink-0 text-primary" aria-hidden />
              <span className="sr-only">{t.email}: </span>
              <span className="break-all">{EMAIL}</span>
            </a>
          </li>
          <li>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Send className="w-4 h-4 shrink-0 text-primary" aria-hidden />
              Telegram
            </a>
          </li>
          <li>
            <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Star className="w-4 h-4 shrink-0 text-primary" aria-hidden />
              {t.upwork}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ContactSection;
