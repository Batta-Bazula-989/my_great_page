// Every language's UI strings at once, for build-time code (pre-renderer, content checks, index generator).
// Browser code loads one language at a time through ./index.ts instead.
import type { Locale } from "@/content/types";
import type { Dictionary } from "./en";
import en from "./en";
import de from "./de";
import fr from "./fr";
import es from "./es";
import it from "./it";
import nl from "./nl";
import pl from "./pl";
import sv from "./sv";
import { registerDictionaries } from "./index";

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, es, it, nl, pl, sv };

registerDictionaries(dictionaries);
