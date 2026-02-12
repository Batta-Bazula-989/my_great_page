import { useEffect } from "react";

interface CalendlyBookingProps {
  calendlyUrl?: string;
  eventType?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CalendlyBooking = ({ 
  calendlyUrl = "romanzakharenko-r", 
  eventType = "free-30-minute-support-automation-review" 
}: CalendlyBookingProps) => {
  useEffect(() => {
    // Load Calendly embed script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Calendly widget when script loads
    const initCalendly = () => {
      if (window.Calendly) {
        const widgetContainer = document.getElementById("calendly-widget");
        if (widgetContainer) {
          const calendlyUrlFull = `https://calendly.com/${calendlyUrl}/${eventType}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f1117&text_color=ffffff&primary_color=2dd4bf`;
          window.Calendly.initInlineWidget({
            url: calendlyUrlFull,
            parentElement: widgetContainer,
          });
        }
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [calendlyUrl, eventType]);

  return (
    <section id="booking" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Book Your Free Support Automation Review
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select a time that works for you. We'll send a calendar invite with a Zoom link automatically.
            </p>
          </div>

          <div className="bg-gradient-card border border-border rounded-3xl p-6 md:p-8 overflow-hidden">
            <div
              id="calendly-widget"
              className="calendly-inline-widget"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyBooking;

