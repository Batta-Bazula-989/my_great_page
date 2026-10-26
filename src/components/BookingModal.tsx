import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, ChevronDown, Mail, Send } from "lucide-react";
import { z } from "zod";
import { getStoredUtms } from "@/utils/utm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { format, useDict, useLocale } from "@/i18n";
import type { Dictionary } from "@/i18n/en";
import type { BookingTopic } from "@/hooks/use-booking";
import { EMAIL, TELEGRAM_URL } from "@/lib/links";
import { cn } from "@/lib/utils";
import avatar from "@/assets/roman-avatar.jpg";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topic?: BookingTopic;
  returnFocusTo?: RefObject<HTMLElement | null>;
}

const CALENDLY_URL = "https://calendly.com/romanzakharenko-r";

// Letters in any script (José, Müller, Zoë), spaces, periods (Jr., J. Smith), hyphens and apostrophes.
const NAME_PATTERN = /^[\p{L}\s.'’-]+$/u;

type BookingErrors = Dictionary["booking"]["errors"];
type Field = "fullName" | "email" | "companyName" | "phone" | "telegram";

const nameSchema = (e: BookingErrors) =>
  z.string().trim()
    .min(1, e.nameRequired)
    .min(2, e.nameShort)
    .max(50, e.nameLong)
    .regex(NAME_PATTERN, e.nameChars);

const emailSchema = (e: BookingErrors) =>
  z.string().trim()
    .min(1, e.emailRequired)
    .email(e.emailInvalid);

const companySchema = (e: BookingErrors) =>
  z.string().trim().refine((val) => val.length === 0 || (val.length >= 2 && val.length <= 50), e.companyLength);

const phoneSchema = (e: BookingErrors) =>
  z.string().trim()
    .min(1, e.phoneRequired)
    .regex(/^[\d\s().-]*$/, e.phoneChars)
    .refine((val) => {
      const digits = val.replace(/\D/g, "");
      return digits.length >= 6 && digits.length <= 15;
    }, e.phoneDigits);

// Accepts "@username", "username", "t.me/username", "https://www.t.me/username" and "telegram.me/username".
const telegramUsername = (val: string) =>
  val.trim().replace(/^(https?:\/\/)?(www\.)?(t|telegram)\.me\//i, "").replace(/^@/, "").replace(/\/+$/, "");

const telegramSchema = (e: BookingErrors) =>
  z.string().trim()
    .min(1, e.telegramRequired)
    // Telegram usernames are 5-32 characters, letters, digits and underscores
    .refine((val) => /^[a-zA-Z0-9_]{5,32}$/.test(telegramUsername(val)), e.telegramInvalid);

// Country code dropdown: flag + code display, name/code for search
const PHONE_COUNTRY_OPTIONS: { code: string; flag: string; name: string }[] = [
  { code: "1", flag: "🇺🇸", name: "United States Canada" },
  { code: "30", flag: "🇬🇷", name: "Greece" },
  { code: "31", flag: "🇳🇱", name: "Netherlands" },
  { code: "32", flag: "🇧🇪", name: "Belgium" },
  { code: "33", flag: "🇫🇷", name: "France" },
  { code: "34", flag: "🇪🇸", name: "Spain" },
  { code: "36", flag: "🇭🇺", name: "Hungary" },
  { code: "39", flag: "🇮🇹", name: "Italy" },
  { code: "40", flag: "🇷🇴", name: "Romania" },
  { code: "41", flag: "🇨🇭", name: "Switzerland" },
  { code: "43", flag: "🇦🇹", name: "Austria" },
  { code: "44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "45", flag: "🇩🇰", name: "Denmark" },
  { code: "46", flag: "🇸🇪", name: "Sweden" },
  { code: "47", flag: "🇳🇴", name: "Norway" },
  { code: "48", flag: "🇵🇱", name: "Poland" },
  { code: "49", flag: "🇩🇪", name: "Germany" },
  { code: "61", flag: "🇦🇺", name: "Australia" },
  { code: "64", flag: "🇳🇿", name: "New Zealand" },
  { code: "65", flag: "🇸🇬", name: "Singapore" },
  { code: "81", flag: "🇯🇵", name: "Japan" },
  { code: "82", flag: "🇰🇷", name: "South Korea" },
  { code: "90", flag: "🇹🇷", name: "Turkey" },
  { code: "91", flag: "🇮🇳", name: "India" },
  { code: "351", flag: "🇵🇹", name: "Portugal" },
  { code: "352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "353", flag: "🇮🇪", name: "Ireland" },
  { code: "354", flag: "🇮🇸", name: "Iceland" },
  { code: "355", flag: "🇦🇱", name: "Albania" },
  { code: "356", flag: "🇲🇹", name: "Malta" },
  { code: "357", flag: "🇨🇾", name: "Cyprus" },
  { code: "358", flag: "🇫🇮", name: "Finland" },
  { code: "359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "370", flag: "🇱🇹", name: "Lithuania" },
  { code: "371", flag: "🇱🇻", name: "Latvia" },
  { code: "372", flag: "🇪🇪", name: "Estonia" },
  { code: "373", flag: "🇲🇩", name: "Moldova" },
  { code: "374", flag: "🇦🇲", name: "Armenia" },
  { code: "376", flag: "🇦🇩", name: "Andorra" },
  { code: "377", flag: "🇲🇨", name: "Monaco" },
  { code: "378", flag: "🇸🇲", name: "San Marino" },
  { code: "380", flag: "🇺🇦", name: "Ukraine" },
  { code: "381", flag: "🇷🇸", name: "Serbia" },
  { code: "382", flag: "🇲🇪", name: "Montenegro" },
  { code: "385", flag: "🇭🇷", name: "Croatia" },
  { code: "386", flag: "🇸🇮", name: "Slovenia" },
  { code: "387", flag: "🇧🇦", name: "Bosnia Herzegovina" },
  { code: "389", flag: "🇲🇰", name: "North Macedonia" },
  { code: "420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "421", flag: "🇸🇰", name: "Slovakia" },
  { code: "423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "971", flag: "🇦🇪", name: "UAE Dubai" },
  { code: "972", flag: "🇮🇱", name: "Israel" },
  { code: "995", flag: "🇬🇪", name: "Georgia" },
].sort((a, b) => a.name.localeCompare(b.name));

// Glass-world field (same look as the calculator fields), 44px tall for touch.
const fieldClass =
  "h-11 rounded-xl border-white/10 bg-white/[0.04] text-base md:text-sm focus-visible:border-primary/60 focus-visible:ring-primary/25 focus-visible:ring-offset-0";

const BookingModal = ({ open, onOpenChange, topic, returnFocusTo }: BookingModalProps) => {
  const locale = useLocale();
  const t = useDict().booking;
  const schemas = useMemo(
    () => ({
      fullName: nameSchema(t.errors),
      email: emailSchema(t.errors),
      companyName: companySchema(t.errors),
      phone: phoneSchema(t.errors),
      telegram: telegramSchema(t.errors),
    }),
    [t],
  );
  const meetingMethods = [
    { value: "zoom", label: "Zoom" },
    { value: "google-meet", label: "Google Meet" },
    { value: "phone", label: t.methodPhone },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "telegram", label: "Telegram" },
  ];
  const [values, setValues] = useState<Record<Field, string>>({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    telegram: "",
  });
  // Optional; the value sent is the English name.
  const crmOptions = [
    { value: "Attio", label: "Attio" },
    { value: "HubSpot", label: "HubSpot" },
    { value: "Pipedrive", label: "Pipedrive" },
    { value: "Salesforce", label: "Salesforce" },
    { value: "Other", label: t.crmOther },
    { value: "None yet", label: t.crmNone },
  ];
  const [crm, setCrm] = useState("");
  const [meetingMethod, setMeetingMethod] = useState("zoom");
  const [phoneCountryCode, setPhoneCountryCode] = useState("1");
  const [phoneCountryOpen, setPhoneCountryOpen] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  // After the first submit attempt, empty required fields are flagged as soon as they're left.
  const [attempted, setAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [sent, setSent] = useState<{ calendarUrl?: string } | null>(null);
  const successActionRef = useRef<HTMLElement>(null);

  // The submit button disappears with the form, so hand focus to the next step.
  useEffect(() => {
    if (sent) successActionRef.current?.focus();
  }, [sent]);

  const usesCalendar = meetingMethod === "zoom" || meetingMethod === "google-meet";
  const needsPhone = meetingMethod === "phone" || meetingMethod === "whatsapp";
  const needsTelegram = meetingMethod === "telegram";
  const activeFields: Field[] = [
    "fullName",
    "email",
    "companyName",
    ...(needsPhone ? (["phone"] as const) : []),
    ...(needsTelegram ? (["telegram"] as const) : []),
  ];

  const validate = (field: Field, value: string) => {
    const result = schemas[field].safeParse(value);
    return result.success ? undefined : result.error.errors[0]?.message;
  };

  const setValue = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Once a field shows an error, re-check it while the visitor fixes it.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
  };

  const handleBlur = (field: Field) => {
    // Tabbing through empty fields shouldn't paint the form red before the first submit.
    if (!values[field].trim() && !attempted) return;
    setErrors((prev) => ({ ...prev, [field]: validate(field, values[field]) }));
  };

  const resetForm = () => {
    setValues({ fullName: "", email: "", companyName: "", phone: "", telegram: "" });
    setCrm("");
    setMeetingMethod("zoom");
    setPhoneCountryCode("1");
    setErrors({});
    setAttempted(false);
    setSendFailed(false);
    setSent(null);
  };

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    // Start fresh after a successful booking; otherwise keep what the visitor typed.
    if (!next && sent) setTimeout(resetForm, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    setSendFailed(false);

    const nextErrors: Partial<Record<Field, string>> = {};
    for (const field of activeFields) nextErrors[field] = validate(field, values[field]);
    setErrors(nextErrors);
    const firstInvalid = activeFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setIsSubmitting(true);
    const fullName = values.fullName.trim();
    const email = values.email.trim();
    const companyName = values.companyName.trim();

    const apiBase = (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL ?? "";
    try {
      const res = await fetch(`${apiBase}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          companyName: companyName || undefined,
          crm: crm || undefined,
          meetingMethod,
          phone: needsPhone ? `+${phoneCountryCode} ${values.phone.trim()}` : undefined,
          telegram: needsTelegram ? values.telegram.trim() : undefined,
          selectedPlan: topic?.lead,
          language: locale,
          ...getStoredUtms(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = (data as { error?: string })?.error || res.statusText;
        throw new Error(`${msg} (${res.status})`);
      }

      // Fire conversion event — picked up by GTM → GA4 / Google Ads
      window.dataLayer?.push({
        event: "booking_submitted",
        meeting_method: meetingMethod,
        selected_plan: topic?.lead || "none",
      });
    } catch (err) {
      console.error("Booking notify failed:", err);
      setSendFailed(true);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    if (usesCalendar) {
      // A link the visitor clicks, not window.open after an await, which Safari blocks as a pop-up.
      const params = new URLSearchParams({ name: fullName, email });
      if (companyName) params.append("a1", companyName);
      setSent({ calendarUrl: `${CALENDLY_URL}?${params.toString()}` });
    } else {
      setSent({});
    }
  };

  const handleMeetingMethodChange = (value: string) => {
    setMeetingMethod(value);
    // Drop the contact field that no longer applies, and its error.
    if (value !== "phone" && value !== "whatsapp") {
      setValues((prev) => ({ ...prev, phone: "" }));
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
    if (value !== "telegram") {
      setValues((prev) => ({ ...prev, telegram: "" }));
      setErrors((prev) => ({ ...prev, telegram: undefined }));
    }
  };

  // Label, input wiring and error message for one text field.
  const fieldProps = (field: Field) => ({
    id: field,
    value: values[field],
    onBlur: () => handleBlur(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    className: cn(fieldClass, errors[field] && "border-destructive focus-visible:border-destructive"),
  });

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-sm text-destructive">
        {errors[field]}
      </p>
    ) : null;

  const required = <span className="text-destructive ml-1" aria-hidden>*</span>;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        closeLabel={t.close}
        className="max-w-md gap-0 p-5 sm:p-7"
        onCloseAutoFocus={(e) => {
          const trigger = returnFocusTo?.current;
          if (trigger?.isConnected) {
            e.preventDefault();
            trigger.focus();
          }
        }}
      >
        <DialogHeader className="flex-row items-center gap-3 space-y-0 pr-10 text-left">
          <img
            src={avatar}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full border border-white/15 object-cover"
          />
          <div className="min-w-0 space-y-1">
            <DialogTitle className="font-display text-xl font-bold leading-tight">
              {sent ? t.sentTitle : t.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-foreground/75 leading-snug">
              {t.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        {sent ? (
          <div className="mt-6 space-y-5" role="status">
            <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <p className="text-foreground/90 leading-relaxed">{sent.calendarUrl ? t.sentCalendar : t.sent}</p>
            </div>
            {sent.calendarUrl ? (
              <Button variant="hero" size="lg" className="w-full rounded-full hover:scale-100 active:scale-[0.98]" asChild>
                <a
                  ref={successActionRef as RefObject<HTMLAnchorElement>}
                  href={sent.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.openCalendar}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button
                variant="glass"
                size="lg"
                className="w-full rounded-full hover:scale-100 active:scale-[0.98]"
                ref={successActionRef as RefObject<HTMLButtonElement>}
                onClick={() => handleOpenChange(false)}
              >
                {t.close}
              </Button>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
            {topic?.label && (
              <p className="glass-chip inline-flex max-w-full items-center rounded-full px-3 py-1 text-sm text-foreground/85">
                <span className="truncate">{format(t.about, { topic: topic.label })}</span>
              </p>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="fullName">
                {t.fullName}
                {required}
              </Label>
              <Input
                {...fieldProps("fullName")}
                onChange={(e) => setValue("fullName", e.target.value)}
                placeholder={t.fullNamePlaceholder}
                autoComplete="name"
                maxLength={50}
              />
              {fieldError("fullName")}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">
                {t.email}
                {required}
              </Label>
              <Input
                {...fieldProps("email")}
                type="email"
                inputMode="email"
                onChange={(e) => setValue("email", e.target.value)}
                placeholder={t.emailPlaceholder}
                autoComplete="email"
              />
              {fieldError("email")}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="companyName">{t.company}</Label>
              <Input
                {...fieldProps("companyName")}
                onChange={(e) => setValue("companyName", e.target.value)}
                placeholder={t.companyPlaceholder}
                autoComplete="organization"
                maxLength={50}
              />
              {fieldError("companyName")}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="crm">{t.crm}</Label>
              <Select value={crm} onValueChange={setCrm}>
                <SelectTrigger id="crm" className={cn(fieldClass, !crm && "text-muted-foreground")}>
                  <SelectValue placeholder={t.crmPlaceholder} />
                </SelectTrigger>
                <SelectContent className="z-50 rounded-xl border-white/10 bg-card">
                  {crmOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="py-2.5">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="meetingMethod">{t.meetingMethod}</Label>
              <Select value={meetingMethod} onValueChange={handleMeetingMethodChange}>
                <SelectTrigger id="meetingMethod" className={fieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-50 rounded-xl border-white/10 bg-card">
                  {meetingMethods.map((method) => (
                    <SelectItem key={method.value} value={method.value} className="py-2.5">
                      {method.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {needsPhone && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                <Label htmlFor="phone">
                  {t.phone}
                  {required}
                </Label>
                <div className="flex gap-2">
                  <Popover open={phoneCountryOpen} onOpenChange={setPhoneCountryOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={phoneCountryOpen}
                        aria-label={t.searchCountry}
                        className={cn(fieldClass, "w-[104px] shrink-0 justify-between px-3 font-normal hover:bg-white/[0.08]")}
                      >
                        {(() => {
                          const opt = PHONE_COUNTRY_OPTIONS.find((o) => o.code === phoneCountryCode);
                          return opt ? `${opt.flag} +${opt.code}` : "+1";
                        })()}
                        <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-60" aria-hidden />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[280px] rounded-xl border-white/10 bg-card p-0" align="start">
                      <Command>
                        <CommandInput placeholder={t.searchCountry} />
                        <CommandList>
                          <CommandEmpty>{t.noCountry}</CommandEmpty>
                          <CommandGroup>
                            {PHONE_COUNTRY_OPTIONS.map((opt) => (
                              <CommandItem
                                key={opt.code}
                                value={`${opt.name} +${opt.code} ${opt.code}`}
                                onSelect={() => {
                                  setPhoneCountryCode(opt.code);
                                  setPhoneCountryOpen(false);
                                }}
                                className="gap-2 py-2"
                              >
                                <span aria-hidden>{opt.flag}</span>
                                <span className="flex-1 truncate">{opt.name}</span>
                                <span className="tabular-nums text-muted-foreground">+{opt.code}</span>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Input
                    {...fieldProps("phone")}
                    type="tel"
                    inputMode="tel"
                    onChange={(e) => setValue("phone", e.target.value.replace(/[^0-9\s().-]/g, ""))}
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel-national"
                    maxLength={20}
                    className={cn(fieldProps("phone").className, "min-w-0 flex-1")}
                  />
                </div>
                {fieldError("phone")}
              </div>
            )}

            {needsTelegram && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                <Label htmlFor="telegram">
                  {t.telegram}
                  {required}
                </Label>
                <Input
                  {...fieldProps("telegram")}
                  onChange={(e) => setValue("telegram", e.target.value)}
                  placeholder={t.telegramPlaceholder}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  maxLength={60}
                />
                {fieldError("telegram")}
              </div>
            )}

            {sendFailed && (
              <div role="alert" className="flex items-start gap-3 rounded-2xl border border-destructive/40 bg-destructive/10 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden />
                <div className="min-w-0 space-y-2 text-sm">
                  <p className="font-semibold text-foreground">{t.sendFailed}</p>
                  <p className="text-foreground/80">{t.networkError}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline break-all">
                      <Mail className="h-4 w-4 shrink-0" aria-hidden />
                      {EMAIL}
                    </a>
                    <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline">
                      <Send className="h-4 w-4 shrink-0" aria-hidden />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2 pt-1">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-full hover:scale-100 active:scale-[0.98]"
                disabled={isSubmitting}
                aria-busy={isSubmitting || undefined}
              >
                {isSubmitting ? t.submitting : usesCalendar ? t.submitCalendar : t.submit}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                {usesCalendar ? t.nextCalendar : t.nextContact}
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
