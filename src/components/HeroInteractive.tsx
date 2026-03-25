import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Workflow, PieChart, Wrench, ArrowUpRight, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const SERVICES = [
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
    id: "reporting",
    label: "Reporting",
    description: "Turn manual reporting into automated delivery. Your current reports get generated and sent to the right people on schedule.",
    icon: PieChart,
    mode: "chat" as const,
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
type PainOption = "routing" | "slas" | "slow_replies" | "missed_alerts" | "repetitive_qs" | "long_wait" | "no_after_hours" | "cant_scale" | "other";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };
const smoothSpring = { type: "spring" as const, stiffness: 300, damping: 28 };

const RequestPanel = ({ serviceId }: { serviceId: "reporting" | "custom" }) => {
  const service = SERVICES.find((s) => s.id === serviceId)!;
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionId = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    setInput("");
    setSubmitted(false);
    setAiResponse(null);
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
      const webhookUrl = serviceId === "reporting"
        ? "https://stash-312.app.n8n.cloud/webhook/8a1fce76-80be-4abb-8bd7-d39d67c64450"
        : "https://stash-312.app.n8n.cloud/webhook/7c2a255a-f238-43e0-9476-e39a7ec1a828";
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId.current, message, service: service.label }),
      });
      const data = await res.json();
      setAiResponse(data.output ?? "Done.");
    } catch {
      setAiResponse("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...smoothSpring, stiffness: 200 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...spring, delay: 0.1 }}
          className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4"
        >
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-lg font-semibold text-foreground mb-1"
        >
          {aiResponse ? "Here's what I found" : "Request sent"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          {aiResponse ?? "Processing your request…"}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <motion.span
          key={serviceId + "-label"}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-bold tracking-widest uppercase text-primary inline-block"
        >
          {service.label}
        </motion.span>
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
        <motion.button
          type="button"
          onClick={handleSend}
          disabled={!isValidInput(input)}
          whileHover={isValidInput(input) ? { scale: 1.05 } : {}}
          whileTap={isValidInput(input) ? { scale: 0.97 } : {}}
          transition={spring}
          className={cn(
            "flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow",
            "hover:shadow-glow",
            !isValidInput(input) && "opacity-40 cursor-not-allowed"
          )}
        >
          Submit Request
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
};

const MESSENGER_SUBS = [
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "facebook", label: "Facebook" },
] as const;

const BOT_CHANNELS = [
  { id: "website", label: "Website" },
  { id: "phone", label: "Phone" },
  { id: "instagram", label: "Instagram" },
  { id: "other", label: "Other" },
] as const;

const BOT_PAINS: { id: PainOption; label: string }[] = [
  { id: "repetitive_qs", label: "Too many repetitive questions for the team" },
  { id: "long_wait", label: "Customers wait too long for a first reply" },
  { id: "no_after_hours", label: "No support outside business hours" },
  { id: "cant_scale", label: "We can't scale without hiring more agents" },
  { id: "other", label: "Other" },
];

const ROUTING_PAINS: { id: PainOption; label: string }[] = [
  { id: "routing", label: "Routing is slow or manual" },
  { id: "slas", label: "We miss or guess SLAs" },
  { id: "slow_replies", label: "First replies are slow" },
  { id: "missed_alerts", label: "We find out about issues too late" },
  { id: "other", label: "Other" },
];

const GuidedFlowPanel = ({ serviceId }: { serviceId: "bots" | "routing" }) => {
  const isBots = serviceId === "bots";
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Routing state (single-select)
  const [tool, setTool] = useState<ToolOption | null>(null);
  const [otherTool, setOtherTool] = useState("");

  // Bots state (multi-select)
  const [botChannels, setBotChannels] = useState<Set<string>>(new Set());
  const [messengerSubs, setMessengerSubs] = useState<Set<string>>(new Set());
  const [otherChannel, setOtherChannel] = useState("");

  // Routing pain (single-select)
  const [pain, setPain] = useState<PainOption | null>(null);
  const [otherPain, setOtherPain] = useState("");

  // Bots pain (multi-select)
  const [botPains, setBotPains] = useState<Set<PainOption>>(new Set());
  const [botOtherPain, setBotOtherPain] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleChannel = (ch: string) => {
    if (ch === "other") {
      setBotChannels((prev) => {
        if (prev.has("other")) {
          setOtherChannel("");
          return new Set();
        }
        return new Set(["other"]);
      });
      setMessengerSubs(new Set());
    } else {
      setBotChannels((prev) => {
        const next = new Set(prev);
        next.delete("other");
        setOtherChannel("");
        if (next.has(ch)) next.delete(ch);
        else next.add(ch);
        return next;
      });
    }
  };

  const toggleMessengerSub = (sub: string) => {
    setMessengerSubs((prev) => {
      const next = new Set(prev);
      if (next.has(sub)) next.delete(sub);
      else next.add(sub);
      setBotChannels((p) => {
        const n = new Set(p);
        n.delete("other");
        setOtherChannel("");
        if (next.size > 0) n.add("messenger");
        else n.delete("messenger");
        return n;
      });
      return next;
    });
  };

  const canNextFromStep1 = isBots
    ? botChannels.size > 0 &&
      (!botChannels.has("other") || otherChannel.trim().length > 0)
    : !!tool && (tool !== "other" || otherTool.trim().length > 0);

  const toggleBotPain = (p: PainOption) => {
    if (p === "other") {
      setBotPains((prev) => {
        if (prev.has("other")) {
          setBotOtherPain("");
          return new Set();
        }
        return new Set(["other"] as PainOption[]);
      });
    } else {
      setBotPains((prev) => {
        const next = new Set(prev);
        next.delete("other");
        setBotOtherPain("");
        if (next.has(p)) next.delete(p);
        else next.add(p);
        return next;
      });
    }
  };

  const canNextFromStep2 = isBots
    ? botPains.size > 0 &&
      (!botPains.has("other") || botOtherPain.trim().length > 0)
    : !!pain && (pain !== "other" || otherPain.trim().length > 0);

  const toolLabel = isBots
    ? (() => {
        const labels: string[] = [];
        if (botChannels.has("website")) labels.push("Website");
        if (botChannels.has("phone")) labels.push("Phone");
        if (messengerSubs.size > 0) {
          const subs = MESSENGER_SUBS.filter((s) => messengerSubs.has(s.id)).map((s) => s.label);
          labels.push(subs.join(", "));
        }
        if (botChannels.has("instagram")) labels.push("Instagram");
        if (botChannels.has("other")) labels.push(otherChannel.trim() || "Other");
        return labels.join(", ") || "";
      })()
    : tool === "jira"
    ? "Jira"
    : tool === "zendesk"
    ? "Zendesk"
    : tool === "freshdesk"
    ? "Freshdesk"
    : tool === "slack"
    ? "Slack"
    : tool === "other"
    ? otherTool.trim() || "Other"
    : "";

  const painLabel = isBots
    ? (() => {
        if (botPains.has("other")) return botOtherPain.trim() || "Other";
        const allPains = [...BOT_PAINS, ...ROUTING_PAINS];
        const labels = [...botPains]
          .filter((p) => p !== "other")
          .map((p) => allPains.find((x) => x.id === p)?.label ?? p);
        return labels.join(", ") || "";
      })()
    : pain === "routing"
    ? "Routing is slow or manual"
    : pain === "slas"
    ? "We miss or guess SLAs"
    : pain === "slow_replies"
    ? "First replies are slow"
    : pain === "missed_alerts"
    ? "We find out about issues too late"
    : pain === "other"
    ? otherPain.trim() || "Other"
    : "";

  const handleSubmit = async () => {
    if (!canNextFromStep2) return;
    setStep(3);
    setLoading(true);
    setError(null);
    setAiResponse(null);
    try {
      const res = await fetch(
        "https://stash-312.app.n8n.cloud/webhook/80778882-6ca4-4618-bcd9-6a104f5abc12",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service: isBots ? "Support chat & voice bots" : "Ticket routing & categorization",
            tool: toolLabel,
            pain: painLabel,
          }),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const output =
        typeof data === "string"
          ? data
          : data.output ?? data.response ?? data.message ?? data.text ?? data.summary ?? JSON.stringify(data);
      setAiResponse(output);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setTool(null);
    setOtherTool("");
    setBotChannels(new Set());
    setMessengerSubs(new Set());
    setOtherChannel("");
    setPain(null);
    setOtherPain("");
    setBotPains(new Set());
    setBotOtherPain("");
    setAiResponse(null);
    setError(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: step >= s ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-3"
          >
            <p className="text-base font-medium text-foreground/90">
              Step 1 — {isBots ? "Where do you want to deploy your bot?" : "What tools do you use for support today?"}
            </p>

            {isBots ? (
              <>
                <div className="flex flex-wrap gap-2.5">
                  {BOT_CHANNELS.filter((c) => c.id !== "other").map((ch, i) => (
                    <motion.button
                      key={ch.id}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{
                        opacity: botChannels.has("other") ? 0.4 : 1,
                        y: 0,
                        scale: botChannels.has("other") ? 0.97 : 1,
                      }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      whileHover={!botChannels.has("other") ? { scale: 1.05 } : {}}
                      whileTap={!botChannels.has("other") ? { scale: 0.97 } : {}}
                      onClick={() => !botChannels.has("other") && toggleChannel(ch.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-base transition-all duration-200",
                        "bg-secondary/40 border-border/80 hover:border-primary/60",
                        botChannels.has(ch.id) && !botChannels.has("other") && "border-primary bg-primary/10",
                        botChannels.has("other") && "cursor-not-allowed"
                      )}
                    >
                      {ch.label}
                    </motion.button>
                  ))}

                  <Popover>
                    <PopoverTrigger asChild>
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{
                          opacity: botChannels.has("other") ? 0.4 : 1,
                          y: 0,
                          scale: botChannels.has("other") ? 0.97 : 1,
                        }}
                        transition={{ delay: 0.1, duration: 0.25 }}
                        whileHover={!botChannels.has("other") ? { scale: 1.05 } : {}}
                        whileTap={!botChannels.has("other") ? { scale: 0.97 } : {}}
                        onClick={(e) => { if (botChannels.has("other")) e.preventDefault(); }}
                        className={cn(
                          "rounded-full border px-4 py-2 text-base transition-all duration-200 flex items-center gap-1.5",
                          "bg-secondary/40 border-border/80 hover:border-primary/60",
                          botChannels.has("messenger") && !botChannels.has("other") && "border-primary bg-primary/10",
                          botChannels.has("other") && "cursor-not-allowed"
                        )}
                      >
                        Messenger
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
                      </motion.button>
                    </PopoverTrigger>
                    <PopoverContent className="w-52 p-3" align="start" sideOffset={8}>
                      <div className="space-y-3">
                        {MESSENGER_SUBS.map((sub) => (
                          <label key={sub.id} className="flex items-center gap-2.5 cursor-pointer text-sm">
                            <Checkbox
                              checked={messengerSubs.has(sub.id)}
                              onCheckedChange={() => toggleMessengerSub(sub.id)}
                            />
                            {sub.label}
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>

                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggleChannel("other")}
                    className={cn(
                      "rounded-full border px-4 py-2 text-base transition-all duration-200",
                      "bg-secondary/40 border-border/80 hover:border-primary/60",
                      botChannels.has("other") && "border-primary bg-primary/10"
                    )}
                  >
                    Other
                  </motion.button>
                </div>

                <AnimatePresence>
                  {botChannels.has("other") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Input
                        autoFocus
                        placeholder="Describe the channel…"
                        value={otherChannel}
                        onChange={(e) => setOtherChannel(e.target.value)}
                        className="mt-2 h-10 text-base bg-background/60"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                <div className="flex flex-wrap gap-2.5">
                  {([
                    { id: "jira", label: "Jira" },
                    { id: "zendesk", label: "Zendesk" },
                    { id: "freshdesk", label: "Freshdesk" },
                    { id: "slack", label: "Slack" },
                    { id: "other", label: "Other" },
                  ] as { id: ToolOption; label: string }[]).map((opt, i) => (
                    <motion.button
                      key={opt.id}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setTool(opt.id);
                        if (opt.id !== "other") setOtherTool("");
                      }}
                      className={cn(
                        "rounded-full border px-4 py-2 text-base transition-colors",
                        "bg-secondary/40 border-border/80 hover:border-primary/60",
                        tool === opt.id && "border-primary bg-primary/10"
                      )}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence>
                  {tool === "other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        autoFocus
                        placeholder="What tools are you using today?"
                        value={otherTool}
                        onChange={(e) => setOtherTool(e.target.value)}
                        className="mt-2 h-10 text-base bg-background/60"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            <Button
              className="w-full justify-center mt-1 text-base h-10"
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-3"
          >
            <p className="text-base font-medium text-foreground/90">
              Step 2 — What is the main pain right now?
            </p>

            {isBots ? (
              <>
                <div className="grid grid-cols-1 gap-2">
                  {BOT_PAINS.filter((p) => p.id !== "other").map((opt, i) => (
                    <motion.button
                      key={opt.id}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{
                        opacity: botPains.has("other") ? 0.4 : 1,
                        y: 0,
                        scale: botPains.has("other") ? 0.99 : 1,
                      }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      whileHover={!botPains.has("other") ? { scale: 1.02 } : {}}
                      whileTap={!botPains.has("other") ? { scale: 0.98 } : {}}
                      onClick={() => !botPains.has("other") && toggleBotPain(opt.id)}
                      className={cn(
                        "rounded-xl border px-4 py-3 text-base text-left transition-all duration-200",
                        "bg-secondary/40 border-border/80 hover:border-primary/60",
                        botPains.has(opt.id) && !botPains.has("other") && "border-primary bg-primary/10",
                        botPains.has("other") && "cursor-not-allowed"
                      )}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleBotPain("other")}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-base text-left transition-all duration-200",
                      "bg-secondary/40 border-border/80 hover:border-primary/60",
                      botPains.has("other") && "border-primary bg-primary/10"
                    )}
                  >
                    Other
                  </motion.button>
                </div>
                <AnimatePresence>
                  {botPains.has("other") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Input
                        autoFocus
                        placeholder="Describe the main pain…"
                        value={botOtherPain}
                        onChange={(e) => setBotOtherPain(e.target.value)}
                        className="mt-2 h-10 text-base bg-background/60"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-2">
                  {ROUTING_PAINS.map((opt, i) => (
                    <motion.button
                      key={opt.id}
                      type="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setPain(opt.id);
                        if (opt.id !== "other") setOtherPain("");
                      }}
                      className={cn(
                        "rounded-xl border px-4 py-3 text-base text-left transition-all duration-200",
                        "bg-secondary/40 border-border/80 hover:border-primary/60",
                        pain === opt.id && "border-primary bg-primary/10"
                      )}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence>
                  {pain === "other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Input
                        autoFocus
                        placeholder="Describe the main pain…"
                        value={otherPain}
                        onChange={(e) => setOtherPain(e.target.value)}
                        className="mt-2 h-10 text-base bg-background/60"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 justify-center text-base h-10"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                className="flex-1 justify-center text-base h-10"
                disabled={!canNextFromStep2}
                onClick={handleSubmit}
              >
                See automation outcome
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-3"
          >
            <p className="text-base font-medium text-foreground/90">
              Your automation outcome
            </p>

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-10 gap-3"
              >
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Analyzing your setup…</p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-destructive/40 bg-destructive/10 p-4"
              >
                <p className="text-sm text-destructive">{error}</p>
              </motion.div>
            )}

            {aiResponse && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="rounded-xl border border-border/70 bg-secondary/40 p-4 text-base text-muted-foreground leading-relaxed whitespace-pre-line"
              >
                {aiResponse}
              </motion.div>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 justify-center text-base h-10"
                onClick={handleReset}
              >
                Start over
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const HeroInteractive = () => {
  const [selected, setSelected] = useState<ServiceId>("bots");

  const activeService = SERVICES.find((s) => s.id === selected)!;
  const isChatMode = activeService.mode === "chat";

  return (
    <motion.div
      className="space-y-6 md:space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
          Automate your{" "}
          <span className="text-gradient">support ops</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-3 mx-auto">
          Replace manual support busywork with reliable, production-ready automation.
        </p>
      </motion.div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] items-start">
        <motion.div className="flex flex-col gap-2" variants={containerVariants}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isActive = service.id === selected;
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => setSelected(service.id)}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={smoothSpring}
                className={cn(
                  "group relative flex items-start gap-3.5 rounded-2xl border-l-[3px] px-5 py-4 text-left transition-colors duration-200",
                  "bg-transparent border-transparent hover:bg-primary/5",
                  isActive && "border-l-primary bg-primary/10"
                )}
              >
                <motion.span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20"
                  animate={isActive ? { rotate: [0, -6, 6, 0] } : {}}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <span>
                  <span className="block text-xl font-semibold">
                    {service.label}
                  </span>
                  <span className="mt-1 block text-[17px] text-muted-foreground leading-relaxed">
                    {service.description}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-primary/10 via-primary/0 to-primary/20"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(24px)" }}
          />

          <div className="relative rounded-2xl border border-border bg-secondary/40 backdrop-blur-xl p-5 md:p-6 shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {isChatMode ? (
                <motion.div
                  key={activeService.id + "-chat"}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                >
                  <RequestPanel serviceId={activeService.id as "reporting" | "custom"} />
                </motion.div>
              ) : (
                <motion.div
                  key={activeService.id + "-guided"}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                >
                  <GuidedFlowPanel serviceId={activeService.id as "bots" | "routing"} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroInteractive;
