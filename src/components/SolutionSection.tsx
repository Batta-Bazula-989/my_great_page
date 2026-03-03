import ServicesGrid from "@/components/ServicesGrid";
import AutomationBuilder from "@/components/AutomationBuilder";

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

        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] items-start">
          <ServicesGrid />

          <div className="rounded-2xl border border-border bg-secondary/40 backdrop-blur-sm p-4 md:p-5">
            <div className="mb-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                Interactive demo
              </p>
              <h3 className="text-base font-semibold text-foreground mt-1">
                Build a quick automation outline
              </h3>
              <p className="text-xs text-muted-foreground mt-1.5">
                Answer a few focused questions and get a tailored support automation outline in seconds.
              </p>
            </div>

            <AutomationBuilder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
