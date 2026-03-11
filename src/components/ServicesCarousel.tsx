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
    <div className="relative max-w-7xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isCenter = index === current;
            
            return (
              <CarouselItem key={service.title} className="pl-2 md:pl-4 basis-4/5 md:basis-3/5 lg:basis-1/2">
                <div className="flex justify-center px-2">
                  <div 
                    className={cn(
                      "w-full p-6 md:p-8 rounded-2xl bg-secondary/20 border backdrop-blur-sm relative overflow-hidden transition-all duration-300",
                      isCenter 
                        ? "border-primary/30 scale-105 bg-secondary/30 max-w-2xl" 
                        : "border-primary/10 scale-95 opacity-60 max-w-lg"
                    )}
                  >
                    {/* Enhanced glow effect for center card */}
                    <div 
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r rounded-2xl transition-opacity duration-300",
                        isCenter 
                          ? "from-primary/10 via-transparent to-primary/10 opacity-100" 
                          : "from-primary/5 via-transparent to-primary/5 opacity-50"
                      )} 
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon container */}
                      <div 
                        className={cn(
                          "rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 md:mb-6 mx-auto transition-all duration-300",
                          isCenter ? "w-16 h-16" : "w-12 h-12"
                        )}
                      >
                        <Icon className={cn("text-primary", isCenter ? "w-8 h-8" : "w-6 h-6")} />
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className={cn(
                          "font-bold font-display mb-3 md:mb-4 text-white transition-all duration-300",
                          isCenter ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                        )}
                      >
                        {service.title}
                      </h3>
                      
                      {/* Description - only show full description for center card */}
                      <p 
                        className={cn(
                          "text-muted-foreground leading-relaxed mx-auto transition-all duration-300",
                          isCenter 
                            ? "text-sm md:text-base max-w-xl opacity-100" 
                            : "text-xs md:text-sm max-w-xs opacity-80 line-clamp-3"
                        )}
                      >
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
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/80 border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-200 z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary/80 border-primary/20 hover:bg-secondary hover:border-primary/40 transition-all duration-200 z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="sr-only">Next slide</span>
        </Button>
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-6 md:mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200",
              current === index
                ? "bg-primary scale-110"
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