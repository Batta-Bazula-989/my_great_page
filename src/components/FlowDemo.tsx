import { useState, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock, MessageCircle } from "lucide-react";

type ServiceId =
  | "bots"
  | "routing"
  | "monitoring"
  | "reporting"
  | "custom";

interface FlowDemoProps {
  selectedService: ServiceId;
}

interface NodeMeta {
  id: string;
  label: string;
  descriptionBefore: string;
  descriptionAfter: string;
}

const BASE_NODES: NodeMeta[] = [
  {
    id: "incoming",
    label: "Incoming ticket",
    descriptionBefore:
      "Tickets land in a single inbox. Someone has to read and decide what to do.",
    descriptionAfter:
      "Tickets arrive with channel, customer, and basic details normalized.",
  },
  {
    id: "classification",
    label: "AI classification",
    descriptionBefore:
      "Agents skim the ticket, guess the type, and add tags manually.",
    descriptionAfter:
      "AI tags intent, sentiment, language, and product area in seconds.",
  },
  {
    id: "routing",
    label: "Routing to queue",
    descriptionBefore:
      "Triage is a shared inbox + Slack pings. High‑value tickets wait.",
    descriptionAfter:
      "Rules and AI scores send each ticket straight to the right queue.",
  },
  {
    id: "sla",
    label: "SLA timer",
    descriptionBefore:
      "SLAs live in a spreadsheet. Breaches are noticed after the fact.",
    descriptionAfter:
      "Per‑queue timers start automatically with live countdowns.",
  },
  {
    id: "alert",
    label: "Alert / response",
    descriptionBefore:
      "Someone refreshes dashboards and hopes nothing slipped overnight.",
    descriptionAfter:
      "Slack alerts fire before a breach. Draft replies are pre‑filled.",
  },
];

const buildNodes = (before: boolean): Node[] =>
  BASE_NODES.map((meta, index) => ({
    id: `${meta.id}-${before ? "before" : "after"}`,
    position: { x: index * 160, y: before ? 0 : 140 },
    data: {
      label: meta.label,
      isBefore: before,
    },
    style: {
      borderRadius: 999,
      padding: "6px 10px",
      fontSize: 11,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: before ? "rgba(248,113,113,0.9)" : "rgba(52,211,153,0.9)",
      background: before
        ? "rgba(127,29,29,0.5)"
        : "rgba(6,95,70,0.5)",
      color: "#f9fafb",
    },
    draggable: false,
  }));

const buildEdges = (before: boolean): Edge[] =>
  BASE_NODES.slice(0, -1).map((meta, index) => ({
    id: `${meta.id}-${BASE_NODES[index + 1].id}-${before ? "before" : "after"}`,
    source: `${meta.id}-${before ? "before" : "after"}`,
    target: `${BASE_NODES[index + 1].id}-${before ? "before" : "after"}`,
    animated: !before,
    style: {
      stroke: before ? "rgba(248,113,113,0.8)" : "rgba(52,211,153,0.9)",
      strokeWidth: before ? 1 : 1.5,
    },
  }));

const FlowDemo = ({ selectedService }: FlowDemoProps) => {
  const [activeNodeId, setActiveNodeId] = useState<string>("incoming");
  const [view, setView] = useState<"before" | "after">("before");

  const nodes = useMemo(
    () => [...buildNodes(true), ...buildNodes(false)],
    []
  );
  const edges = useMemo(
    () => [...buildEdges(true), ...buildEdges(false)],
    []
  );

  const activeMeta = BASE_NODES.find((n) => n.id === activeNodeId)!;

  const subtitle =
    selectedService === "bots"
      ? "See where bots sit in your ticket flow."
      : selectedService === "monitoring"
      ? "See how monitoring and alerts wrap around your process."
      : "See how routing and SLAs behave before and after automation.";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Before vs after automation
          </p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-1 py-0.5 text-[11px]">
          <button
            type="button"
            onClick={() => setView("before")}
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 transition-colors ${
              view === "before"
                ? "bg-destructive/20 text-destructive-foreground"
                : "text-muted-foreground"
            }`}
          >
            <AlertTriangle className="h-3 w-3" />
            Before
          </button>
          <button
            type="button"
            onClick={() => setView("after")}
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 transition-colors ${
              view === "after"
                ? "bg-emerald-500/20 text-emerald-100"
                : "text-muted-foreground"
            }`}
          >
            <CheckCircle2 className="h-3 w-3" />
            After
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="h-[260px] rounded-2xl border border-border/70 bg-gradient-to-b from-background/80 to-background/40 overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            fitViewOptions={{ padding: 0.4 }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            panOnScroll
            onNodeClick={(_, node) => {
              const baseId = node.id.replace("-before", "").replace("-after", "");
              setActiveNodeId(baseId);
            }}
          >
            <Background color="rgba(148,163,184,0.25)" size={1} />
            <MiniMap
              nodeStrokeColor={(n) =>
                (n.data as any)?.isBefore
                  ? "rgba(248,113,113,0.8)"
                  : "rgba(52,211,153,0.9)"
              }
              nodeColor={(n) =>
                (n.data as any)?.isBefore
                  ? "rgba(127,29,29,0.6)"
                  : "rgba(6,95,70,0.7)"
              }
              pannable
              zoomable
              className="!bg-transparent"
            />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-medium text-muted-foreground/70">
            Click a node in the flow to see how that step changes.
          </p>

          <div className="rounded-2xl border border-border/80 bg-background/80 p-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{activeMeta.label}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMeta.id}-${view}-before`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive-foreground"
              >
                <p className="font-semibold mb-1">Before automation</p>
                <p className="text-[11px] leading-relaxed">
                  {activeMeta.descriptionBefore}
                </p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMeta.id}-${view}-after`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, delay: 0.03 }}
                className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-3 text-xs text-emerald-50"
              >
                <p className="font-semibold mb-1">After automation</p>
                <p className="text-[11px] leading-relaxed">
                  {activeMeta.descriptionAfter}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-0.5">
                <MessageCircle className="h-3 w-3" />
                Fewer back-and-forth messages
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-0.5">
                <Clock className="h-3 w-3" />
                Minutes saved per ticket
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDemo;

