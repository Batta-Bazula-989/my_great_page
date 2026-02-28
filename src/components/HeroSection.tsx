import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import BookingModal from "@/components/BookingModal";

const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-up">
              Your support team shouldn't spend half its day
              <br />
              <span className="text-gradient">on manual tasks.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-1">
              Years of hands-on support work showed me exactly where teams lose hours to routing, reporting, and manual follow-ups. I use that experience to automate the busywork so agents can focus on customers, not tickets.
            </p>

            <div className="flex justify-center lg:justify-start animate-fade-up-delay-2">
              <Button variant="hero" size="xl" onClick={() => setBookingOpen(true)}>
                Get a Free Workflow Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground/70 animate-fade-up-delay-3">
              30-minute call. No pitch deck.
              <br />
              We review your support setup and pinpoint where automation will actually help.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow animate-float">
                <img
                  src={profileImage}
                  alt="Roman Zakharenko"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default HeroSection;
