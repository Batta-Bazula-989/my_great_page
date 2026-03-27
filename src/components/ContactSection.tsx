import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowUpRight, Calendar, Send } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const ContactSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-[4.8rem] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-wider" style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}>
              Let's Talk
            </span>
          </div>
          <div className="text-center pt-5 md:pt-6 px-4 pb-4 md:px-6 md:pb-6 rounded-3xl border border-border" style={{backgroundColor: 'rgb(43, 48, 59)'}}>
            <p className="text-muted-foreground mb-4 text-lg max-w-xl mx-auto">
              Book a 30-minute call. We'll look at what's slowing you down and figure out what to automate first.
            </p>
            <p className="text-muted-foreground/70 mb-5 text-sm max-w-md mx-auto">
              No pitch. No pressure. If it's not a fit, I'll tell you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
              <Button variant="hero" size="xl" onClick={() => setBookingOpen(true)}>
                <Calendar className="w-5 h-5" />
                Book a Free Audit
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/roman-zakharenko" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:romanzakharenko.r@gmail.com" className="hover:text-primary transition-colors">
                  romanzakharenko.r@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <a href="https://t.me/Rr9ea" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Telegram
                </a>
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
