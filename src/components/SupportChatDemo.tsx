import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

type ServiceId =
  | "bots"
  | "routing"
  | "monitoring"
  | "reporting"
  | "custom";

interface SupportChatDemoProps {
  selectedService: ServiceId;
}

interface ChatExample {
  id: string;
  label: string;
  userText: string;
}

const EXAMPLES: ChatExample[] = [
  {
    id: "reporting",
    label: "Our weekly reporting is all in spreadsheets.",
    userText:
      "Right now our support reporting is a mess — we export from Zendesk every week and rebuild the same spreadsheets.",
  },
  {
    id: "routing",
    label: "Tickets bounce between teams.",
    userText:
      "Tickets are often misrouted between billing/technical/partner support. We lose hours just moving things around.",
  },
  {
    id: "sla",
    label: "We find out about SLAs too late.",
    userText:
      "We only notice SLA breaches after a customer complains. We don't have good alerts before something is late.",
  },
];

const buildAiResponse = (service: ServiceId, userText: string): string => {
  if (service === "reporting") {
    return (
      "Here's how I'd tackle this as a support automation specialist:\n\n" +
      "1) Connect your helpdesk to a warehouse or a light data store (BigQuery, Postgres, even Airtable).\n" +
      "2) Use a workflow tool like n8n to push new/updated tickets into that store automatically.\n" +
      "3) Build saved views for the metrics you care about (volume by queue, SLA adherence, backlog, first reply, etc.).\n" +
      "4) Generate scheduled dashboards or PDF/Slack summaries so the team gets the same view every Monday without exports.\n\n" +
      "Result: fewer manual exports, consistent numbers, and hours back every week.\n\n" +
      "If you want, we can walk through your current reports and design a simple reporting pipeline.\n" +
      "Book a free workflow audit and we'll map it out together."
    );
  }

  if (service === "custom") {
    return (
      "Based on what you described, this is a good fit for a custom workflow that glues your tools together.\n\n" +
      "Typical approach I use:\n" +
      "- Map the exact trigger (new ticket, status change, CSAT drop, etc.).\n" +
      "- Decide which system should be the 'source of truth' for each step.\n" +
      "- Use n8n or direct APIs/webhooks to move data between tools instead of people copy‑pasting.\n" +
      "- Add lightweight monitoring so if something breaks, you hear about it before your customers do.\n\n" +
      "We keep the logic readable, documented, and owned by your team so you're not stuck with a black box.\n\n" +
      "Happy to sketch this out around your actual stack.\n" +
      "Book a free workflow audit and we'll design the first version together."
    );
  }

  return (
    "Here's a practical way to approach this:\n\n" +
    "- Start by writing down the 3–5 scenarios that cause the most pain (slow routing, repeats, escalations).\n" +
    "- For each, decide what should happen automatically (tagging, queue, priority, Slack alert, draft reply).\n" +
    "- Implement those rules in your helpdesk + a workflow tool like n8n, so agents only handle the exceptions.\n\n" +
    "This gives you faster responses, fewer missed SLAs, and less 'work about work' for the team.\n\n" +
    "If you want detailed suggestions tailored to your tools, we can do that on a quick call.\n" +
    "Book a free workflow audit and we'll go through your current flows step by step."
  );
};

const SupportChatDemo = ({ selectedService }: SupportChatDemoProps) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { id: number; role: "user" | "ai"; text: string }[]
  >([]);

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    const userMsg = { id: nextId, role: "user" as const, text: content };
    const aiMsg = {
      id: nextId + 1,
      role: "ai" as const,
      text: buildAiResponse(selectedService, content),
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="flex h-[260px] flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <div className="inline-flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
            <MessageCircle className="h-3 w-3" />
          </span>
          <span>Support automation expert</span>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5">
          <Sparkles className="h-3 w-3 text-primary" />
          <span className="text-[11px]">Mock answers, no data sent</span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="flex flex-col rounded-2xl border border-border/80 bg-background/80">
          <ScrollArea className="flex-1 px-3.5 py-3">
            <div className="space-y-3">
              {messages.length === 0 && (
                <p className="text-[11px] text-muted-foreground">
                  Describe where your support team is losing time. I’ll outline
                  a concrete automation approach — tools, workflows, and what it
                  would change week to week.
                </p>
              )}

              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className={`flex ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/60 text-muted-foreground"
                      }`}
                    >
                      {m.text.split("\n").map((line, i) => (
                        <p key={i} className={i > 0 ? "mt-1.5" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollArea>

          <div className="flex items-center gap-2 border-t border-border/70 px-3.5 py-2.5">
            <Input
              placeholder="Explain what's slowing your support team down…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="h-8 border-0 bg-transparent text-xs placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={() => handleSend()}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2 rounded-2xl border border-border/80 bg-secondary/40 p-3 text-[11px] text-muted-foreground">
          <p className="font-medium text-foreground/90">
            Try one of these examples:
          </p>
          <div className="space-y-1.5">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => handleSend(ex.userText)}
                className="w-full rounded-xl border border-border/70 bg-background/60 px-2.5 py-2 text-left hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                {ex.label}
              </button>
            ))}
          </div>
          <p className="pt-1 text-[10px] text-muted-foreground/70">
            Answers are hard‑coded examples to show the kind of guidance you’d
            get on a real call — focused on saved hours, faster responses, and
            fewer missed SLAs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportChatDemo;

