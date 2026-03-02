import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, PieChart, Bell, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import FlowDemo from "@/components/FlowDemo";
import SupportChatDemo from "@/components/SupportChatDemo";

const SERVICES = [
  {
    id: "reporting",
    label: "Reporting automation",
    description: "Dashboards and scheduled reports instead of manual exports.",
    icon: PieChart,
    mode: "chat" as const,
  },
  {
    id: "bots",
    label: "Support chat & voice bots",
    description: "Frontline bots that handle FAQs and route complex issues.",
    icon: MessageCircle,
    mode: "flow" as const,
  },
  {
    id: "routing",
    label: "Ticket routing & categorization",
    description: "AI-assisted triage so tickets land in the right queue.",
    icon: Workflow,
    mode: "flow" as const,
  },
  {
    id: "monitoring",
    label: "Monitoring & alerting",
    description: "SLA timers and alerts before something slips.",
    icon: Bell,
    mode: "flow" as const,
  },
  {
    id: "custom",
    label: "Custom automation solution",
    description: "Glue together your tools with the workflows you need.",
    icon: Wrench,
    mode: "chat" as const,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

const HeroInteractive = () => {
  const [selected, setSelected] = useState<ServiceId>("routing");

  const activeService = SERVICES.find((s) => s.id === selected)!;
  const showFlow = activeService.mode === "flow";

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            See it in action
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Automations built for{" "}
            <span className="text-gradient">real support teams</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Choose a focus area to see how we remove manual work, speed up
            responses, and keep SLAs safe — using the stack you already have.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === selected;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelected(service.id)}
                  className={cn(
                    "group flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all",
                    "bg-secondary/40 border-border/80 hover:border-primary/60 hover:bg-primary/5",
                    isActive &&
                      "border-primary/70 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
                  )}
                >
                  <span className="mt-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {service.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {service.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 pt-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">
              No code changes in your product
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              Uses tools like Zendesk, Intercom, n8n, APIs
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              Typical setup: 2–6 weeks
            </span>
          </div>
        </div>

        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/10 via-primary/0 to-primary/20 blur-2xl" />

          <div className="relative rounded-3xl border border-border bg-secondary/40 backdrop-blur-xl p-4 md:p-5 shadow-lg">
            <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {showFlow
                    ? "Before vs after automation"
                    : "Describe a workflow — see a proposal"}
                </span>
              </div>
              <Button
                variant="outline"
                size="xs"
                className="h-7 px-2 text-[11px]"
              >
                Book a free workflow audit
              </Button>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/60 p-3 md:p-4">
              <AnimatePresence mode="wait">
                {showFlow ? (
                  <motion.div
                    key="flow"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FlowDemo selectedService={activeService.id} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SupportChatDemo selectedService={activeService.id} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroInteractive;

