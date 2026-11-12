import type { Block, Section } from "@/content/types";

const BRAND = "TascaLab";

const blockText = (block: Block) => {
  switch (block.type) {
    case "p":
    case "note":
      return block.text;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "table":
      return [block.caption ?? "", ...block.head, ...block.rows.flat()].join(" ");
  }
};

export interface SplitSections {
  body: Section[]; // rendered as ordinary sections
  help?: { heading?: string; blocks: Block[] }; // rendered as the Health Check handoff; no heading → use seo.ctaTitle
}

// Finds the article's "how TascaLab can help" content so it can be shown as the handoff block.
// The brand name is never translated, so the same rule works in every language:
// 1. The last section is about TascaLab from its heading or first block on ("How TascaLab can help",
//    "Getting this built"): the whole section is the help section.
// 2. Otherwise, if the last section ends with a paragraph about TascaLab (some guides close their last
//    content section that way), only that paragraph moves into the handoff block.
// 3. Otherwise there is no help content and the handoff block shows only the shared CTA text.
export const splitHelpSection = (sections: Section[]): SplitSections => {
  const last = sections[sections.length - 1];
  if (!last) return { body: sections };

  if (last.heading.includes(BRAND) || (last.blocks[0] && blockText(last.blocks[0]).includes(BRAND))) {
    return { body: sections.slice(0, -1), help: { heading: last.heading, blocks: last.blocks } };
  }

  const tail = last.blocks[last.blocks.length - 1];
  if (tail?.type === "p" && tail.text.includes(BRAND) && last.blocks.length > 1) {
    return {
      body: [...sections.slice(0, -1), { ...last, blocks: last.blocks.slice(0, -1) }],
      help: { blocks: [tail] },
    };
  }

  return { body: sections };
};
