import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, PieChart, Bell, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

type ToolOption = "zendesk" | "intercom" | "email" | "whatsapp" | "other";
type PainOption = "routing" | "slas" | "slow_replies" | "missed_alerts";

const ChatPanel = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Describe where your team is losing time today. I’ll outline a concrete
        automation approach — steps, tools, and what it changes week to week.
      </p>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Example: We export Zendesk data every week into spreadsheets to report on SLAs and backlog…"
        className="min-h-[96px] text-xs resize-none bg-background/80"
      />
      <Button size="sm" className="w-full justify-center gap-2">
        Get a sample automation plan
      </Button>

      <div className="rounded-xl border border-border/70 bg-secondary/40 p-3 space-y-2">
        <p className="text-xs font-semibold text-foreground/90">
          What a typical plan looks like
        </p>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          We connect your support tools (Zendesk, Intercom, email inboxes) into
          a simple workflow using n8n and APIs. Tickets, tags, and SLA data flow
          into a single place, reports send themselves, and Slack alerts fire
          before something is late.
        </p>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          You keep your existing stack. The main changes are fewer manual
          exports, faster responses, and much more predictable SLAs.
        </p>
        <Button
          size="sm"
          variant="outline"
          className="w-full justify-center mt-1 text-xs"
        >
          Book a free audit
        </Button>
      </div>
    </div>
  );
};

const GuidedFlowPanel = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [tool, setTool] = useState<ToolOption | null>(null);
  const [pain, setPain] = useState<PainOption | null>(null);

  const canNextFromStep1 = !!tool;
  const canNextFromStep2 = !!pain;

  const toolLabel =
    tool === "zendesk"
      ? "Zendesk"
      : tool === "intercom"
      ? "Intercom"
      : tool === "email"
      ? "Email inbox"
      : tool === "whatsapp"
      ? "WhatsApp"
      : "your current tools";

  const painLabel =
    pain === "routing"
      ? "tickets bouncing between queues"
      : pain === "slas"
      ? "SLAs being hard to track"
      : pain === "slow_replies"
      ? "slow first responses"
      : pain === "missed_alerts"
      ? "missed alerts"
      : "support work being slower than it should be";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={cn(
              "flex-1 h-1.5 rounded-full bg-muted",
              step >= s && "bg-primary"
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/90">
              Step 1 — What tools do you use for support today?
            </p>
            <div className="flex flex-wrap gap-2">
              {([
                { id: "zendesk", label: "Zendesk" },
                { id: "intercom", label: "Intercom" },
                { id: "email", label: "Email inbox" },
                { id: "whatsapp", label: "WhatsApp" },
                { id: "other", label: "Other" },
              ] as { id: ToolOption; label: string }[]).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTool(opt.id)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-[11px] transition-colors",
                    "bg-secondary/40 border-border/80 hover:border-primary/60",
                    tool === opt.id && "border-primary bg-primary/10"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <Button
              size="sm"
              className="w-full justify-center mt-1"
              disabled={!canNextFromStep1}
              onClick={() => canNextFromStep1 && setStep(2)}
            >
              Next
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/90">
              Step 2 — What is the main pain right now?
            </p>
            <div className="grid grid-cols-1 gap-2">
              {([
                { id: "routing", label: "Routing is slow or manual" },
                { id: "slas", label: "We miss or guess SLAs" },
                { id: "slow_replies", label: "First replies are slow" },
                {
                  id: "missed_alerts",
                  label: "We find out about issues too late",
                },
              ] as { id: PainOption; label: string }[]).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPain(opt.id)}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-[11px] text-left transition-colors",
                    "bg-secondary/40 border-border/80 hover:border-primary/60",
                    pain === opt.id && "border-primary bg-primary/10"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 justify-center"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1 justify-center"
                disabled={!canNextFromStep2}
                onClick={() => canNextFromStep2 && setStep(3)}
              >
                See automation outcome
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/90">
              Step 3 — What changes with automation
            </p>
            <div className="space-y-2 rounded-xl border border-border/70 bg-secondary/40 p-3">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                For {toolLabel}, we typically:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-muted-foreground leading-relaxed">
                <li>
                  Use n8n and native APIs/webhooks to route tickets
                  automatically, based on queue, language, and intent.
                </li>
                <li>
                  Add SLA timers and Slack alerts so you see{" "}
                  {painLabel} before it becomes a fire.
                </li>
                <li>
                  Generate simple reporting so you can see volume, response
                  times, and breaches without exporting data.
                </li>
              </ul>
              <p className="text-[11px] text-muted-foreground leading-relaxed pt-1">
                Result: fewer manual handoffs, faster replies, and far fewer
                surprises around SLAs.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 justify-center"
                onClick={() => setStep(1)}
              >
                Start over
              </Button>
              <Button size="sm" className="flex-1 justify-center">
                See how this would work for your team
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeroInteractive = () => {
  const [selected, setSelected] = useState<ServiceId>("routing");

  const activeService = SERVICES.find((s) => s.id === selected)!;
  const isChatMode = activeService.id === "reporting" || activeService.id === "custom";

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Design your first automation
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Turn messy support workflows into{" "}
            <span className="text-gradient">reliable automations</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            In 30 seconds, see what we could automate for your team — and what
            that changes for response times, SLAs, and reporting.
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

          <div className="flex flex-wrap gap-3 pt-2 text-xs text-muted-foreground" />
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
                  {isChatMode
                    ? "Describe your workflow — see a sample plan"
                    : "Answer three quick questions — see outcomes"}
                </span>
              </div>
              <Button
                variant="outline"
                size="xs"
                className="h-7 px-2 text-[11px]"
              >
                Book a free audit
              </Button>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/60 p-3 md:p-4">
              <AnimatePresence mode="wait">
                {isChatMode ? (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChatPanel />
                  </motion.div>
                ) : (
                  <motion.div
                    key="guided"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GuidedFlowPanel />
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

