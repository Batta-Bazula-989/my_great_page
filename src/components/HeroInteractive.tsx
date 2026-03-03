import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, PieChart, Bell, Wrench, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    label: "Custom solution",
    description: "Glue together your tools with the workflows you need.",
    icon: Wrench,
    mode: "chat" as const,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

type ToolOption = "jira" | "zendesk" | "freshdesk" | "slack" | "other";
type PainOption = "routing" | "slas" | "slow_replies" | "missed_alerts" | "other";

const CHAT_CONFIG: Record<"reporting" | "custom", { intro: string; placeholder: string; aiResponse: string }> = {
  reporting: {
    intro: "Describe your current reporting process.",
    placeholder: "Describe your reporting process…",
    aiResponse:
      "I’d set up automatic extraction from your source on a schedule, centralize it, and generate reports that deliver themselves. Alerts fire before anything slips — no manual exports needed.",
  },
  custom: {
    intro: "Describe what you’re trying to achieve.",
    placeholder: "Describe your process or the tools you need connected…",
    aiResponse:
      "I’d map the trigger, identify which system owns each step, and wire your tools together with direct API calls or webhooks — no copy-paste, no manual handoffs. You get a clean, documented workflow your team actually owns.",
  },
};

const ChatPanel = ({ serviceId }: { serviceId: "reporting" | "custom" }) => {
  const config = CHAT_CONFIG[serviceId];
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: content },
      { role: "ai", text: config.aiResponse },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-3">
      {messages.length === 0 ? (
        <p className="text-[11px] text-muted-foreground">{config.intro}</p>
      ) : (
        <div className="overflow-y-auto max-h-[180px] space-y-2.5">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/60 text-muted-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2">
        <Input
          placeholder={config.placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="h-7 border-0 bg-transparent text-xs placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          size="icon"
          variant="outline"
          className="h-7 w-7 shrink-0"
          onClick={() => handleSend()}
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};

const GuidedFlowPanel = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [tool, setTool] = useState<ToolOption | null>(null);
  const [otherTool, setOtherTool] = useState("");
  const [pain, setPain] = useState<PainOption | null>(null);
  const [otherPain, setOtherPain] = useState("");

  const canNextFromStep1 =
    !!tool && (tool !== "other" || otherTool.trim().length > 0);
  const canNextFromStep2 =
    !!pain && (pain !== "other" || otherPain.trim().length > 0);

  const toolLabel =
    tool === "jira"
      ? "Jira"
      : tool === "zendesk"
      ? "Zendesk"
      : tool === "freshdesk"
      ? "Freshdesk"
      : tool === "slack"
      ? "Slack"
      : tool === "other"
      ? otherTool.trim() || "your current tools"
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
      : pain === "other"
      ? otherPain.trim() || "support work being slower than it should be"
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
                { id: "jira", label: "Jira" },
                { id: "zendesk", label: "Zendesk" },
                { id: "freshdesk", label: "Freshdesk" },
                { id: "slack", label: "Slack" },
                { id: "other", label: "Other" },
              ] as { id: ToolOption; label: string }[]).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTool(opt.id);
                    if (opt.id !== "other") {
                      setOtherTool("");
                    }
                  }}
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
            <AnimatePresence>
              {tool === "other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                >
                  <Input
                    autoFocus
                    placeholder="What tools are you using today?"
                    value={otherTool}
                    onChange={(e) => setOtherTool(e.target.value)}
                    className="mt-2 h-8 text-[11px] bg-background/60"
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
                { id: "other", label: "Other" },
              ] as { id: PainOption; label: string }[]).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setPain(opt.id);
                    if (opt.id !== "other") {
                      setOtherPain("");
                    }
                  }}
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
            <AnimatePresence>
              {pain === "other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                >
                  <Input
                    autoFocus
                    placeholder="Describe the main pain…"
                    value={otherPain}
                    onChange={(e) => setOtherPain(e.target.value)}
                    className="mt-2 h-8 text-[11px] bg-background/60"
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
            Automate your{" "}
            <span className="text-gradient">support ops</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Replace manual support busywork with reliable, production-ready automation.
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
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-primary/10 via-primary/0 to-primary/20 blur-2xl" />

          <div className="relative rounded-2xl border border-border bg-secondary/40 backdrop-blur-xl p-3 md:p-4 shadow-lg">
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
                    <ChatPanel serviceId={activeService.id as "reporting" | "custom"} />
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

