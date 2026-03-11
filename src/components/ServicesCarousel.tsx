import React, { useState, useEffect } from "react";
import { BarChart3, Bot, Route, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Reporting",
    desc: "Turn manual reporting into automated delivery. Your team's current reports — metrics, summaries, tracking — get generated and sent to the right people automatically. No more pulling data and formatting updates.",
    icon: BarChart3,
    outcomes: [],
  },
  {
    title: "Support chat & voice bots",
    desc: "Bots that triage and route incoming requests in chat and on the phone. They handle the first layer and hand off cleanly — not replace your team.",
    icon: Bot,
    outcomes: [],
  },
  {
    title: "Ticket routing & categorization",
    desc: "Auto-assign tickets, apply tags, and set priority based on content — so every ticket lands in the right queue with the right owner from the start.",
    icon: Route,
    outcomes: [],
  },
  {
    title: "Custom solution",
    desc: "Have a specific automation need or idea that doesn't exist anywhere? I build custom solutions tailored to your exact situation — whether it's a unique way to handle tickets, connect tools, or automate something completely specific to your team.",
    icon: Wrench,
    outcomes: [],
  },
];

const ServicesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <CarouselItem key={service.title} className="basis-full">
                <div className="flex justify-center px-4">
                  <div className="w-full max-w-2xl p-8 rounded-2xl bg-secondary/20 border border-primary/20 backdrop-blur-sm relative overflow-hidden">
                    {/* Subtle cyan glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl" />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon container */}
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold font-display mb-4 text-white">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-secondary/80 border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-200"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-secondary/80 border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-200"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6 text-primary" />
          <span className="sr-only">Next slide</span>
        </Button>
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              current === index
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;