import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowUpRight, Calendar, Send } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const ContactSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center p-8 md:p-12 rounded-3xl bg-gradient-card border border-border">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Let's Talk</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
              Start With a Free Workflow Audit
            </h2>
            <p className="text-muted-foreground mb-4 text-lg max-w-xl mx-auto">
              Book a 30-minute call. We'll walk through your current workflows, identify the biggest time sinks, and discuss what's worth automating first.
            </p>
            <p className="text-muted-foreground/70 mb-8 text-sm max-w-md mx-auto">
              No pitch. No pressure. If it's not a fit, I'll tell you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" onClick={() => setBookingOpen(true)}>
                <Calendar className="w-5 h-5" />
                Book a Free Workflow Audit
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
