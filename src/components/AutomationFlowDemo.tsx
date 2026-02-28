import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Info, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlowStep from "@/components/FlowStep";
import CTAButton from "@/components/CTAButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ISSUE_OPTIONS = [
  "Billing issue",
  "Bug report",
  "Account access",
  "Feature request",
] as const;

type IssueType = (typeof ISSUE_OPTIONS)[number];

interface ProblemSolution {
  problem: string;
  solution: string;
}

const PROBLEMS_BY_ISSUE: Record<IssueType, ProblemSolution[]> = {
  "Billing issue": [
    { problem: "Wrong amounts being placed", solution: "Automation of billing data sync" },
    { problem: "Tickets are wrong", solution: "Validation rules + auto-correction" },
    { problem: "Rerouted to wrong team", solution: "Smart routing by ticket content" },
    { problem: "Lost in backlog", solution: "Priority scoring + SLA timers" },
    { problem: "Manually triggered by agent", solution: "Trigger-based automation" },
  ],
  "Bug report": [
    { problem: "Duplicate tickets created", solution: "Dedupe + merge by fingerprint" },
    { problem: "Wrong repro steps / missing info", solution: "Structured template + required fields" },
    { problem: "Rerouted to wrong team", solution: "Routing rules by stack/component" },
    { problem: "Lost in backlog", solution: "Severity-based queue + Slack alerts" },
    { problem: "Manually triaged by agent", solution: "Webhook on create → auto-assign" },
  ],
  "Account access": [
    { problem: "Wrong permissions granted", solution: "SSO + role sync automation" },
    { problem: "Tickets missing context", solution: "Pre-filled context from identity" },
    { problem: "Rerouted to wrong team", solution: "Route by app/entitlement" },
    { problem: "Lost in backlog", solution: "Access tickets get high priority" },
    { problem: "Manually triggered by agent", solution: "Self-serve + approval workflows" },
  ],
  "Feature request": [
    { problem: "Vague or duplicate requests", solution: "Structured intake + dedupe" },
    { problem: "Tickets are wrong format", solution: "Template + product/area fields" },
    { problem: "Rerouted to wrong team", solution: "Route to product/eng by area" },
    { problem: "Lost in backlog", solution: "Backlog refinement + voting" },
    { problem: "Manually triaged by agent", solution: "Capture → roadmap integration" },
  ],
};

// Normalize so we can key by issue type from state (string)
const getProblems = (issue: string): ProblemSolution[] =>
  PROBLEMS_BY_ISSUE[issue as IssueType] ?? PROBLEMS_BY_ISSUE["Billing issue"];

interface FlipCardProps {
  problem: string;
  solution: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlipCard = ({ problem, solution, isFlipped, onFlip }: FlipCardProps) => {
  return (
    <motion.button
      type="button"
      onClick={onFlip}
      className="relative h-24 w-full cursor-pointer text-left [perspective:1000px]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front — problem (red) */}
        <div
          className="absolute inset-0 flex items-center gap-3 rounded-xl border-2 border-destructive/60 bg-destructive/15 px-4 py-3 text-destructive shadow-sm [backface-visibility:hidden]"
        >
          <AlertCircle className="h-5 w-5 shrink-0 opacity-80" />
          <span className="text-sm font-medium">{problem}</span>
        </div>
        {/* Back — solution (teal) */}
        <div
          className="absolute inset-0 flex items-center gap-3 rounded-xl border-2 border-primary/50 bg-primary/15 px-4 py-3 text-primary [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 opacity-80" />
          <span className="text-sm font-medium">{solution}</span>
        </div>
      </motion.div>
    </motion.button>
  );
};

const AutomationFlowDemo = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const problems = selectedIssue ? getProblems(selectedIssue) : [];

  const handleIssueSelect = (opt: string) => {
    setSelectedIssue(opt);
    setFlippedIds(new Set());
    setStep(2);
  };

  const toggleFlip = (index: number) => {
    setFlippedIds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIssue(null);
    setFlippedIds(new Set());
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <TooltipProvider>
        <div className="absolute -top-2 right-0 flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground cursor-help">
                <Info className="w-3.5 h-3.5" />
                Demo
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a demo — not your real data.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <div className="flex justify-center mb-6 gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step >= s ? "w-8 bg-primary" : "w-1.5 bg-muted"
            }`}
          />
        ))}
      </div>

      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <FlowStep key="step1" title="Step 1" showArrow>
              <p className="mb-4 text-muted-foreground">
                What type of support issue do you get most often?
              </p>
              <div className="flex flex-wrap gap-3">
                {ISSUE_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleIssueSelect(opt)}
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </FlowStep>
          )}

          {step === 2 && (
            <FlowStep key="step2" title="Sound familiar?">
              <p className="mb-4 text-muted-foreground">
                Click a problem — it flips to the solution.
              </p>
              <div className="grid gap-3 sm:grid-cols-1">
                {problems.map((item, index) => (
                  <FlipCard
                    key={`${item.problem}-${index}`}
                    problem={item.problem}
                    solution={item.solution}
                    isFlipped={flippedIds.has(index)}
                    onFlip={() => toggleFlip(index)}
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setStep(3)}
                  className="gap-2"
                >
                  See result
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleReset}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try another scenario
                </Button>
              </div>
            </FlowStep>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <FlowStep key="result" title="Result">
                <div className="space-y-4">
                  <div className="rounded-lg bg-primary/10 px-4 py-3 text-primary">
                    <p className="text-sm font-semibold">
                      Estimated time saved per ticket: 3–7 minutes
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 px-4 py-3 text-primary">
                    <p className="text-sm font-semibold">
                      Estimated hours saved per week: 5–12 hours
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <CTAButton />
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={handleReset}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try another scenario
                    </Button>
                  </div>
                </div>
              </FlowStep>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step === 2 && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            Back to issue type
          </Button>
        </div>
      )}
    </div>
  );
};

export default AutomationFlowDemo;
