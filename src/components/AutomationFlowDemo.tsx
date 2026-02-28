import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Info } from "lucide-react";
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

const TODAY_OPTIONS = [
  "Manually triaged by agent",
  "Routed to wrong team",
  "Lost in backlog",
] as const;

const AUTOMATION_STEPS = [
  "Auto-tag ticket",
  "Route to correct team",
  "SLA timer starts",
  "Slack alert sent",
  "Auto-reply to customer",
] as const;

const AutomationFlowDemo = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [selectedToday, setSelectedToday] = useState<string | null>(null);

  const handleIssueSelect = (opt: string) => {
    setSelectedIssue(opt);
    setStep(2);
  };

  const handleTodaySelect = (opt: string) => {
    setSelectedToday(opt);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIssue(null);
    setSelectedToday(null);
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
        {[1, 2, 3, 4].map((s) => (
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
            <FlowStep
              key="step1"
              title="Step 1"
              showArrow
            >
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
            <FlowStep
              key="step2"
              title="Step 2"
              showArrow
            >
              <p className="mb-4 text-muted-foreground">
                What usually happens today?
              </p>
              <div className="flex flex-wrap gap-3">
                {TODAY_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTodaySelect(opt)}
                    className="rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </FlowStep>
          )}

          {step === 3 && (
            <FlowStep
              key="step3"
              title="Here's what automation would do:"
            >
              <div className="space-y-3">
                {AUTOMATION_STEPS.map((action, i) => (
                  <motion.div
                    key={action}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2.5"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{action}</span>
                  </motion.div>
                ))}
              </div>
            </FlowStep>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
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

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex justify-center"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStep(4)}
            className="gap-2"
          >
            See result
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      )}

      {step < 4 && step > 1 && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default AutomationFlowDemo;
