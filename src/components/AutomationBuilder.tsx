import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Bot,
  Route,
  Bell,
  Wrench,
  ArrowRight,
  RotateCcw,
  Loader2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/BookingModal";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  toolQuestion: string;
  tools: string[];
  issueQuestion: string;
  issues: string[];
}

interface FormState {
  service: ServiceConfig | null;
  tool: string | null;
  toolOther: string;
  issue: string | null;
  issueOther: string;
  notes: string;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICES: ServiceConfig[] = [
  {
    id: "reporting",
    label: "Reporting automation",
    icon: BarChart3,
    toolQuestion: "What system are you reporting from?",
    tools: ["Zendesk", "Jira", "Freshdesk", "Slack", "Other"],
    issueQuestion: "What is the main issue?",
    issues: [
      "Manual exports every week",
      "Reports sent late or wrong",
      "No centralized view",
      "Missed SLA visibility",
      "Other",
    ],
  },
  {
    id: "bots",
    label: "Support chat & voice bots",
    icon: Bot,
    toolQuestion: "What channel do you support?",
    tools: ["Website chat", "WhatsApp", "Phone / Voice", "Email", "Other"],
    issueQuestion: "What is the main issue?",
    issues: [
      "Slow first response",
      "Agents handling FAQs manually",
      "Poor bot-to-human handoff",
      "Missing channel coverage",
      "Other",
    ],
  },
  {
    id: "routing",
    label: "Ticket routing & categorization",
    icon: Route,
    toolQuestion: "What system do you use?",
    tools: ["Jira", "Zendesk", "Freshdesk", "Slack", "Other"],
    issueQuestion: "What is the main issue?",
    issues: [
      "Wrong routing",
      "Slow assignment",
      "No tagging",
      "Missed SLAs",
      "Other",
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring & alerting",
    icon: Bell,
    toolQuestion: "What do you want to monitor?",
    tools: ["Zendesk", "Jira", "Freshdesk", "Custom pipeline", "Other"],
    issueQuestion: "What is the main issue?",
    issues: [
      "SLA breaches found too late",
      "No real-time visibility",
      "Missed queue spikes",
      "Alerts reach the wrong person",
      "Other",
    ],
  },
  {
    id: "custom",
    label: "Custom / Not sure",
    icon: Wrench,
    toolQuestion: "What tools are involved?",
    tools: ["Zendesk", "Jira", "Slack", "Freshdesk", "Other"],
    issueQuestion: "What is the main issue?",
    issues: [
      "Tools don't integrate",
      "Too much manual copy-paste",
      "Process depends on one person",
      "Data scattered across systems",
      "Other",
    ],
  },
];

const STEP_LABELS = ["Service", "Tool", "Issue", "Details"];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StepIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center gap-2 mb-6">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={cn(
          "flex-1 h-1 rounded-full transition-all duration-300",
          i < current ? "bg-primary" : "bg-border"
        )}
      />
    ))}
  </div>
);

const OptionButton = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "w-full rounded-xl border px-4 py-2.5 text-left text-sm transition-all",
      "bg-secondary/40 border-border/80 hover:border-primary/60 hover:bg-primary/5",
      selected && "border-primary bg-primary/10 text-foreground font-medium"
    )}
  >
    {label}
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const AutomationBuilder = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [form, setForm] = useState<FormState>({
    service: null,
    tool: null,
    toolOther: "",
    issue: null,
    issueOther: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const resolvedTool =
    form.tool === "Other" ? form.toolOther.trim() || "Other" : form.tool ?? "";
  const resolvedIssue =
    form.issue === "Other" ? form.issueOther.trim() || "Other" : form.issue ?? "";

  const handleGenerate = async () => {
    if (!form.service || !resolvedTool || !resolvedIssue) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: form.service.label,
          tool: resolvedTool,
          main_issue: resolvedIssue,
          additional_notes: form.notes.trim() || undefined,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setResult(data.summary);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setForm({
      service: null,
      tool: null,
      toolOther: "",
      issue: null,
      issueOther: "",
      notes: "",
    });
    setResult(null);
    setError(null);
  };

  // Result panel
  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-5"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-1">
            Your Automation Outline
          </p>
          <h3 className="text-base font-semibold text-foreground">
            {form.service?.label}
          </h3>
        </div>

        <div className="rounded-xl border border-border/80 bg-secondary/30 p-4 text-sm text-muted-foreground leading-relaxed">
          {result}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="hero"
            size="lg"
            className="flex-1 gap-2"
            onClick={() => setBookingOpen(true)}
          >
            <Calendar className="w-4 h-4" />
            Book a Free Audit
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Start over
          </Button>
        </div>

        <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
      </motion.div>
    );
  }

  return (
    <div className="space-y-2">
      <StepIndicator current={step} total={4} />

      <AnimatePresence mode="wait">
        {/* Step 1 — Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/80">
              {STEP_LABELS[0]} — What do you need automated?
            </p>
            <div className="space-y-2">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setForm((f) => ({ ...f, service: s, tool: null, toolOther: "" }));
                      setStep(2);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                      "bg-secondary/40 border-border/80 hover:border-primary/60 hover:bg-primary/5",
                      form.service?.id === s.id && "border-primary bg-primary/10"
                    )}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2 — Tool */}
        {step === 2 && form.service && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/80">
              {STEP_LABELS[1]} — {form.service.toolQuestion}
            </p>
            <div className="space-y-2">
              {form.service.tools.map((t) => (
                <OptionButton
                  key={t}
                  label={t}
                  selected={form.tool === t}
                  onClick={() => setForm((f) => ({ ...f, tool: t, toolOther: "" }))}
                />
              ))}
            </div>

            <AnimatePresence>
              {form.tool === "Other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    autoFocus
                    placeholder="Describe your tool…"
                    value={form.toolOther}
                    onChange={(e) => setForm((f) => ({ ...f, toolOther: e.target.value }))}
                    className="text-sm mt-1"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1 gap-1"
                disabled={
                  !form.tool ||
                  (form.tool === "Other" && !form.toolOther.trim())
                }
                onClick={() => setStep(3)}
              >
                Next
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3 — Issue */}
        {step === 3 && form.service && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/80">
              {STEP_LABELS[2]} — {form.service.issueQuestion}
            </p>
            <div className="space-y-2">
              {form.service.issues.map((issue) => (
                <OptionButton
                  key={issue}
                  label={issue}
                  selected={form.issue === issue}
                  onClick={() => setForm((f) => ({ ...f, issue, issueOther: "" }))}
                />
              ))}
            </div>

            <AnimatePresence>
              {form.issue === "Other" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    autoFocus
                    placeholder="Describe the issue…"
                    value={form.issueOther}
                    onChange={(e) => setForm((f) => ({ ...f, issueOther: e.target.value }))}
                    className="text-sm mt-1"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1 gap-1"
                disabled={
                  !form.issue ||
                  (form.issue === "Other" && !form.issueOther.trim())
                }
                onClick={() => setStep(4)}
              >
                Next
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4 — Notes */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <p className="text-xs font-medium text-foreground/80">
              {STEP_LABELS[3]} — Anything else we should know?{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </p>
            <Textarea
              placeholder="Team size, current tools, specific constraints…"
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              className="resize-none text-sm min-h-[80px] bg-background/60"
            />

            {error && (
              <p className="text-xs text-destructive">{error}</p>
            )}

            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm" onClick={() => setStep(3)} className="flex-1">
                Back
              </Button>
              <Button
                size="sm"
                className="flex-1 gap-1.5"
                disabled={loading}
                onClick={handleGenerate}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Generating…
                  </>
                ) : (
                  <>
                    Generate my plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutomationBuilder;
