import ServicesGrid from "@/components/ServicesGrid";

const SolutionSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow opacity-20 -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What I Automate for Support Teams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-6">
            Practical support automation built on your existing tools.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No platform swaps, no fluff.
          </p>
        </div>

        <ServicesGrid />
      </div>
    </section>
  );
};

export default SolutionSection;
