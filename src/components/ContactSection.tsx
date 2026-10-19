import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowUpRight, Calendar, Send, Instagram, Star } from "lucide-react";
import { UPWORK_PROFILE_URL, LINKEDIN_URL, INSTAGRAM_URL, TELEGRAM_URL, EMAIL } from "@/lib/links";
import BookingModal from "@/components/BookingModal";

const ContactSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-[4.8rem] pb-10 relative overflow-hidden">

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-11">
            <span className="section-eyebrow">Let's Talk</span>
            <h2 id="contact-title" className="section-title">Book a free 30-minute support audit</h2>
          </div>
          <div className="glass-panel relative pt-6 md:pt-8 px-4 pb-5 md:px-8 md:pb-7 rounded-[32px] overflow-hidden">
            <div className="relative z-10 text-center">
              <p className="text-muted-foreground mb-4 text-lg max-w-xl mx-auto">
                Book a 30-minute call. We'll look at what's slowing your team down and figure out where to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
                <Button variant="hero" size="xl" className="rounded-full" onClick={() => setBookingOpen(true)}>
                  <Calendar className="w-5 h-5" />
                  Book a Free Audit
                </Button>
                <Button variant="glass" size="xl" className="rounded-full" asChild>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/85">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                    Email
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 shrink-0" />
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 shrink-0" />
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Telegram
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 shrink-0" />
                  <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Upwork Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default ContactSection;
