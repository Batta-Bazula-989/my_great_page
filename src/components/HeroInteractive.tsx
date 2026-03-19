import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, PieChart, Wrench, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SERVICES = [
  {
    id: "reporting",
    label: "Reporting",
    description: "Turn manual reporting into automated delivery. Your current reports get generated and sent to the right people on schedule.",
    icon: PieChart,
    mode: "chat" as const,
  },
  {
    id: "bots",
    label: "Support chat & voice bots",
    description: "Bots that handle incoming chat and phone requests. They answer common questions, collect what's needed, and route complex issues to your team with context.",
    icon: MessageCircle,
    mode: "flow" as const,
  },
  {
    id: "routing",
    label: "Ticket routing & categorization",
    description: "Automatically route tickets to the right team and person based on what they're about. Tags, priority, and assignment handled from the start.",
    icon: Workflow,
    mode: "flow" as const,
  },
  {
    id: "custom",
    label: "Custom solution",
    description: "Have a specific automation need or idea that doesn't exist anywhere?",
    icon: Wrench,
    mode: "chat" as const,
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

type ToolOption = "jira" | "zendesk" | "freshdesk" | "slack" | "other";
type PainOption = "routing" | "slas" | "slow_replies" | "missed_alerts" | "other";

const RequestPanel = ({ serviceId }: { serviceId: "reporting" | "custom" }) => {
  const service = SERVICES.find((s) => s.id === serviceId)!;
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionId = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    setInput("");
    setSubmitted(false);
    sessionId.current = crypto.randomUUID();
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(timer);
  }, [serviceId]);

  const isValidInput = (text: string): boolean => {
    const trimmed = text.trim();
    if (!trimmed || trimmed.length < 30 || trimmed.length > 300) return false;
    if (trimmed.startsWith('/') || trimmed.startsWith('!')) return false;
    const codePatterns = [
      /```[\s\S]*```/, /`[^`]+`/, /^\s*function\s+/i, /^\s*const\s+\w+\s*=/,
      /^\s*let\s+\w+\s*=/, /^\s*var\s+\w+\s*=/, /^\s*class\s+\w+/i,
      /^\s*import\s+/i, /^\s*export\s+/i, /^\s*<\w+.*>/, /^\s*{\s*".*":/,
    ];
    return !codePatterns.some((p) => p.test(trimmed));
  };

  const handleSend = async () => {
    if (!isValidInput(input)) return;
    const message = input.trim();
    setSubmitted(true);
    try {
      await fetch("https://stash-312.app.n8n.cloud/webhook/8a1fce76-80be-4abb-8bd7-d39d67c64450", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId.current, message, service: service.label }),
      });
    } catch {
      // silently fail – user already sees confirmation
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
        <p className="text-lg font-semibold text-foreground mb-1">Request sent</p>
        <p className="text-sm text-muted-foreground">I'll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <span className="text-sm font-bold tracking-widest uppercase text-primary">
          {service.label}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-2">
          Describe what you're trying to achieve
        </h2>
        <p className="text-base text-muted-foreground mt-1">
          Be as specific as possible — the more detail, the better we can help.
        </p>
      </div>

      <textarea
        ref={inputRef}
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => e.target.value.length <= 300 && setInput(e.target.value)}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
        className="flex-1 min-h-[120px] w-full resize-none rounded-xl bg-transparent text-base placeholder:text-muted-foreground/50 focus:outline-none leading-relaxed py-1"
      />

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-3 text-sm text-muted-foreground/60">
          <span>{input.length}/300</span>
          <span>
            Press{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-secondary/80 border border-border/60 text-[10px] font-mono">
              ⌘ Enter
            </kbd>{" "}
            to send
          </span>
        </div>
        <button
          type="button"
          onClick={handleSend}
          disabled={!isValidInput(input)}
          className={cn(
            "flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all",
            "hover:shadow-glow hover:scale-105",
            !isValidInput(input) && "opacity-40 cursor-not-allowed hover:shadow-none hover:scale-100"
          )}
        >
          Submit Request
          <ArrowUpRight className="h-4 w-4" />
        </button>
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
            <p className="text-sm font-medium text-foreground/90">
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
                    "rounded-full border px-3.5 py-2 text-sm transition-colors",
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
                    className="mt-2 h-9 text-sm bg-background/60"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              size="sm"
              className="w-full justify-center mt-1 text-sm"
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
            <p className="text-sm font-medium text-foreground/90">
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
                    "rounded-xl border px-3.5 py-2.5 text-sm text-left transition-colors",
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
                    className="mt-2 h-9 text-sm bg-background/60"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 justify-center text-sm"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1 justify-center text-sm"
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
            <p className="text-sm font-medium text-foreground/90">
              Step 3 — What changes with automation
            </p>
            <div className="space-y-2 rounded-xl border border-border/70 bg-secondary/40 p-3.5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                For {toolLabel}, we typically:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground leading-relaxed">
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
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Result: fewer manual handoffs, faster replies, and far fewer
                surprises around SLAs.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 justify-center text-sm"
                onClick={() => setStep(1)}
              >
                Start over
              </Button>
              <Button size="sm" className="flex-1 justify-center text-sm">
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
  const [selected, setSelected] = useState<ServiceId>("reporting");

  const activeService = SERVICES.find((s) => s.id === selected)!;
  const isChatMode = activeService.mode === "chat";

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
          Automate your{" "}
          <span className="text-gradient">support ops</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-3 mx-auto">
          Replace manual support busywork with reliable, production-ready automation.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] items-start">
        <div className="flex flex-col gap-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === selected;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelected(service.id)}
                className={cn(
                  "group flex items-start gap-3.5 rounded-2xl border-l-[3px] px-5 py-4 text-left transition-all",
                  "bg-transparent border-transparent hover:bg-primary/5",
                  isActive && "border-l-primary bg-primary/10"
                )}
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-lg font-semibold">
                    {service.label}
                  </span>
                  <span className="mt-0.5 block text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-primary/10 via-primary/0 to-primary/20 blur-2xl" />

          <div className="relative rounded-2xl border border-border bg-secondary/40 backdrop-blur-xl p-5 md:p-6 shadow-lg">
            <AnimatePresence mode="wait">
              {isChatMode ? (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <RequestPanel serviceId={activeService.id as "reporting" | "custom"} />
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroInteractive;
