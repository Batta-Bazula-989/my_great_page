import { useMemo, useState } from "react";
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
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useDict, useLocale } from "@/i18n";
import type { Dictionary } from "@/i18n/en";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string;
}

// Letters in any script (José, Müller, Zoë), spaces, hyphens and apostrophes.
const NAME_PATTERN = /^[\p{L}\s'’-]+$/u;

type BookingErrors = Dictionary["booking"]["errors"];

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

const makeSchema = (e: BookingErrors) =>
  z.object({
    fullName: nameSchema(e),
    email: emailSchema(e),
    companyName: z.string().trim()
      .optional()
      .refine((val) => {
        if (!val || val.length === 0) return true;
        return val.length >= 2 && val.length <= 50;
      }, e.companyLength),
    meetingMethod: z.string().optional(),
    phone: z.string().trim().optional(),
    telegram: z.string().trim().optional(),
  });

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

const makePhoneSchema = (e: BookingErrors) => z.object({
  phone: z.string().trim()
    .min(1, e.phoneRequired)
    .regex(/^[\d\s().-]*$/, e.phoneChars)
    .refine((val) => {
      const digits = val.replace(/\D/g, "");
      return digits.length >= 6 && digits.length <= 15;
    }, e.phoneDigits),
});

const makeTelegramSchema = (e: BookingErrors) => z.object({
  telegram: z.string().trim()
    .min(1, e.telegramRequired)
    .refine((val) => {
      // Normalize the input: remove protocol, t.me/, and @ prefix
      let normalized = val.trim();
      normalized = normalized.replace(/^https?:\/\//, '');
      normalized = normalized.replace(/^t\.me\//, '');
      normalized = normalized.replace(/^@/, '');
      
      // Telegram usernames are 5-32 characters, alphanumeric and underscores only
      const telegramPattern = /^[a-zA-Z0-9_]{5,32}$/;
      return telegramPattern.test(normalized);
    }, e.telegramInvalid),
});

const BookingModal = ({ open, onOpenChange, selectedPlan }: BookingModalProps) => {
  const { toast } = useToast();
  const locale = useLocale();
  const t = useDict().booking;
  const { schema, phoneSchema, telegramSchema } = useMemo(
    () => ({ schema: makeSchema(t.errors), phoneSchema: makePhoneSchema(t.errors), telegramSchema: makeTelegramSchema(t.errors) }),
    [t],
  );
  const meetingMethods = [
    { value: "zoom", label: "Zoom" },
    { value: "google-meet", label: "Google Meet" },
    { value: "phone", label: t.methodPhone },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "telegram", label: "Telegram" },
  ];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [meetingMethod, setMeetingMethod] = useState("zoom");
  const [phoneCountryCode, setPhoneCountryCode] = useState("1");
  const [phoneCountryOpen, setPhoneCountryOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errors, setErrors] = useState<{ 
    fullName?: string; 
    email?: string; 
    companyName?: string;
    meetingMethod?: string;
    phone?: string;
    telegram?: string;
  }>({});
  const [touched, setTouched] = useState<{
    fullName?: boolean;
    email?: boolean;
    companyName?: boolean;
    phone?: boolean;
    telegram?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const needsPhone = meetingMethod === "phone" || meetingMethod === "whatsapp";
  const needsTelegram = meetingMethod === "telegram";

  // Validate individual field
  const validateField = (fieldName: keyof typeof errors, value: string) => {
    if (fieldName === "fullName") {
      const result = nameSchema(t.errors).safeParse(value);
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "email") {
      const result = emailSchema(t.errors).safeParse(value);
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "companyName" && value.trim()) {
      const result = z.string().trim()
        .min(2, t.errors.companyLength)
        .max(50, t.errors.companyLength)
        .safeParse(value);
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "phone" && needsPhone) {
      const result = phoneSchema.safeParse({ phone: value });
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "telegram" && needsTelegram) {
      const result = telegramSchema.safeParse({ telegram: value });
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    }
    return "";
  };

  const handleBlur = (fieldName: keyof typeof errors) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    let value = "";
    if (fieldName === "fullName") value = fullName;
    else if (fieldName === "email") value = email;
    else if (fieldName === "companyName") value = companyName;
    else if (fieldName === "phone") value = phone;
    else if (fieldName === "telegram") value = telegram;

    const error = validateField(fieldName, value);
    setErrors(prev => ({ ...prev, [fieldName]: error || undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setTouched({ fullName: true, email: true, companyName: true, phone: true, telegram: true });

    // Validate main form
    const result = schema.safeParse({ 
      fullName, 
      email, 
      companyName, 
      meetingMethod,
      phone: needsPhone ? `+${phoneCountryCode} ${phone.trim()}`.trim() : undefined,
      telegram: needsTelegram ? telegram : undefined,
    });

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof typeof errors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Validate phone if needed (national number only; country from dropdown)
    if (needsPhone) {
      const phoneResult = phoneSchema.safeParse({ phone });
      if (!phoneResult.success) {
        phoneResult.error.errors.forEach((err) => {
          if (err.path[0] === "phone") {
            setErrors(prev => ({ ...prev, phone: err.message }));
          }
        });
        return;
      }
    }

    // Validate telegram if needed
    if (needsTelegram) {
      const telegramResult = telegramSchema.safeParse({ telegram });
      if (!telegramResult.success) {
        telegramResult.error.errors.forEach((err) => {
          if (err.path[0] === "telegram") {
            setErrors(prev => ({ ...prev, telegram: err.message }));
          }
        });
        return;
      }
    }

    setIsSubmitting(true);

    const apiBase = (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL ?? "";
    let bookingSent: boolean;
    try {
      const res = await fetch(`${apiBase}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          companyName: companyName.trim() || undefined,
          meetingMethod,
          phone: needsPhone ? `+${phoneCountryCode} ${phone.trim()}`.trim() : undefined,
          telegram: needsTelegram ? telegram.trim() : undefined,
          selectedPlan: selectedPlan || undefined,
          language: locale,
          ...getStoredUtms(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = (data as { error?: string })?.error || res.statusText;
        throw new Error(`${msg} (${res.status})`);
      }
      bookingSent = true;

      // Fire conversion event — picked up by GTM → GA4 / Google Ads
      window.dataLayer?.push({
        event: "booking_submitted",
        meeting_method: meetingMethod,
        selected_plan: selectedPlan || "none",
      });
    } catch (err) {
      console.error("Booking notify failed:", err);
      const message = err instanceof Error ? err.message : t.networkError;
      toast({
        variant: "destructive",
        title: t.sendFailed,
        description: message,
      });
      setIsSubmitting(false);
      return;
    }

    if (!bookingSent) return;

    if (meetingMethod === "zoom" || meetingMethod === "google-meet") {
      const calendlyUrl = `https://calendly.com/romanzakharenko-r`;
      const params = new URLSearchParams();
      if (fullName) params.append("name", fullName);
      if (email) params.append("email", email);
      if (companyName) params.append("a1", companyName);
      window.open(calendlyUrl + (params.toString() ? `?${params.toString()}` : ""), "_blank");
    } else {
      toast({ title: t.sent });
    }

    setFullName("");
    setEmail("");
    setCompanyName("");
    setMeetingMethod("zoom");
    setPhoneCountryCode("1");
    setPhone("");
    setTelegram("");
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const handleMeetingMethodChange = (value: string) => {
    setMeetingMethod(value);
    // Clear phone field and errors when switching away from phone/whatsapp
    if (value !== "phone" && value !== "whatsapp") {
      setPhoneCountryCode("1");
      setPhone("");
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
    // Clear telegram field and errors when switching away from telegram
    if (value !== "telegram") {
      setTelegram("");
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.telegram;
        return newErrors;
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border p-5 gap-2">
        <DialogHeader>
          <DialogTitle className="font-display text-base">{t.title}</DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {t.description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-1" autoComplete="off">
          <div className="space-y-1.5">
            <Label htmlFor="fullName">
              {t.fullName}<span className="text-destructive ml-1">*</span>
            </Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (touched.fullName) {
                  const error = validateField("fullName", e.target.value);
                  setErrors(prev => ({ ...prev, fullName: error || undefined }));
                }
              }}
              onBlur={() => handleBlur("fullName")}
              placeholder={t.fullNamePlaceholder}
              maxLength={50}
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">
              {t.email}<span className="text-destructive ml-1">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (touched.email) {
                  const error = validateField("email", e.target.value);
                  setErrors(prev => ({ ...prev, email: error || undefined }));
                }
              }}
              onBlur={() => handleBlur("email")}
              placeholder={t.emailPlaceholder}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="companyName">{t.company}</Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                if (touched.companyName && e.target.value.trim()) {
                  const error = validateField("companyName", e.target.value);
                  setErrors(prev => ({ ...prev, companyName: error || undefined }));
                } else if (touched.companyName) {
                  setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.companyName;
                    return newErrors;
                  });
                }
              }}
              onBlur={() => handleBlur("companyName")}
              placeholder={t.companyPlaceholder}
              maxLength={100}
              autoComplete="off"
              className={errors.companyName ? "border-destructive" : ""}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">{errors.companyName}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="meetingMethod">{t.meetingMethod}</Label>
            <Select value={meetingMethod} onValueChange={handleMeetingMethodChange}>
              <SelectTrigger 
                id="meetingMethod"
                className={errors.meetingMethod ? "border-destructive" : ""}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {meetingMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.meetingMethod && (
              <p className="text-sm text-destructive">{errors.meetingMethod}</p>
            )}
          </div>

          {needsPhone && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
              <Label htmlFor="phone">
                {t.phone}<span className="text-destructive ml-1">*</span>
              </Label>
              <div className="flex gap-2">
                <Popover open={phoneCountryOpen} onOpenChange={setPhoneCountryOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      role="combobox"
                      aria-expanded={phoneCountryOpen}
                      className="w-[100px] shrink-0 justify-between font-normal"
                      id="phone-country"
                    >
                      {(() => {
                        const opt = PHONE_COUNTRY_OPTIONS.find((o) => o.code === phoneCountryCode);
                        return opt ? `${opt.flag} +${opt.code}` : "+1";
                      })()}
                      <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[260px] p-0" align="start">
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
                            >
                              <span className="mr-2">{opt.flag}</span>
                              <span>+{opt.code}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/[^0-9\s().-]/g, "");
                    setPhone(cleaned);
                    if (touched.phone) {
                      const error = validateField("phone", cleaned);
                      setErrors(prev => ({ ...prev, phone: error || undefined }));
                    }
                  }}
                  onBlur={() => handleBlur("phone")}
                  placeholder={t.phonePlaceholder}
                  maxLength={15}
                  className={`flex-1 min-w-0 ${errors.phone ? "border-destructive" : ""}`}
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>
          )}

          {needsTelegram && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
              <Label htmlFor="telegram">
                {t.telegram}<span className="text-destructive ml-1">*</span>
              </Label>
              <Input
                id="telegram"
                type="text"
                value={telegram}
                onChange={(e) => {
                  setTelegram(e.target.value);
                  if (touched.telegram) {
                    const error = validateField("telegram", e.target.value);
                    setErrors(prev => ({ ...prev, telegram: error || undefined }));
                  }
                }}
                onBlur={() => handleBlur("telegram")}
                placeholder={t.telegramPlaceholder}
                maxLength={50}
                className={errors.telegram ? "border-destructive" : ""}
              />
              {errors.telegram && (
                <p className="text-sm text-destructive">{errors.telegram}</p>
              )}
            </div>
          )}

          <Button
            type="submit"
            variant="hero"
            className="w-full mt-2"
            disabled={isSubmitting}
          >
            {meetingMethod === "zoom" || meetingMethod === "google-meet" 
              ? t.submitCalendar
              : isSubmitting
              ? t.submitting
              : t.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
