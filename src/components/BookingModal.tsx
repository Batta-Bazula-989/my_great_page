import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const meetingMethods = [
  { value: "zoom", label: "Zoom" },
  { value: "google-meet", label: "Google Meet" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
];

const schema = z.object({
  fullName: z.string().trim()
    .min(1, "Full Name is required")
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Full Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().trim()
    .min(1, "Work Email is required")
    .email("Please enter a valid email address"),
  companyName: z.string().trim()
    .optional()
    .refine((val) => {
      if (!val || val.length === 0) return true;
      return val.length >= 2 && val.length <= 100;
    }, "Company Name must be between 2 and 100 characters"),
  meetingMethod: z.string().optional(),
  phone: z.string().trim().optional(),
  telegram: z.string().trim().optional(),
});

const phoneSchema = z.object({
  phone: z.string().trim()
    .min(1, "Phone number is required")
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s()+.-]{7,20}$/, "Please enter a valid phone number"),
});

const telegramSchema = z.object({
  telegram: z.string().trim()
    .min(1, "Telegram link or username is required")
    .refine((val) => {
      // Normalize the input: remove protocol, t.me/, and @ prefix
      let normalized = val.trim();
      normalized = normalized.replace(/^https?:\/\//, '');
      normalized = normalized.replace(/^t\.me\//, '');
      normalized = normalized.replace(/^@/, '');
      
      // Telegram usernames are 5-32 characters, alphanumeric and underscores only
      const telegramPattern = /^[a-zA-Z0-9_]{5,32}$/;
      return telegramPattern.test(normalized);
    }, "Please enter a valid Telegram link (e.g., https://t.me/username) or username (e.g., @username)"),
});

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [meetingMethod, setMeetingMethod] = useState("zoom");
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
      const result = z.string().trim()
        .min(1, "Full Name is required")
        .min(2, "Full Name must be at least 2 characters")
        .max(50, "Full Name must be less than 50 characters")
        .regex(/^[a-zA-Z\s'-]+$/, "Full Name can only contain letters, spaces, hyphens, and apostrophes")
        .safeParse(value);
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "email") {
      const result = z.string().trim()
        .min(1, "Work Email is required")
        .email("Please enter a valid email address")
        .safeParse(value);
      if (!result.success) {
        return result.error.errors[0]?.message || "";
      }
    } else if (fieldName === "companyName" && value.trim()) {
      const result = z.string().trim()
        .min(2, "Company Name must be at least 2 characters")
        .max(100, "Company Name must be less than 100 characters")
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setTouched({ fullName: true, email: true, companyName: true, phone: true, telegram: true });

    // Validate main form
    const result = schema.safeParse({ 
      fullName, 
      email, 
      companyName, 
      meetingMethod,
      phone: needsPhone ? phone : undefined,
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

    // Validate phone if needed
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

    // Send booking details to Telegram (use VITE_API_URL if API is on another host, e.g. separate Railway service)
    const apiBase = (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL ?? "";
    fetch(`${apiBase}/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim(),
        companyName: companyName.trim() || undefined,
        meetingMethod,
        phone: needsPhone ? phone.trim() : undefined,
        telegram: needsTelegram ? telegram.trim() : undefined,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => { throw new Error(data?.error || res.statusText); }).catch(() => { throw new Error(res.statusText); });
        }
      })
      .catch((err) => {
        console.error("Booking notify failed:", err);
        toast({
          variant: "destructive",
          title: "Could not send to Telegram",
          description: err?.message || "Booking server not reachable. Is it running?",
        });
      });

    // If Zoom or Google Meet is selected, redirect to Calendly
    if (meetingMethod === "zoom" || meetingMethod === "google-meet") {
      // Update the event type slug below to match your actual Calendly event type
      const calendlyUrl = `https://calendly.com/romanzakharenko-r`;
      // Pre-fill Calendly with user data if possible
      const params = new URLSearchParams();
      if (fullName) params.append("name", fullName);
      if (email) params.append("email", email);
      if (companyName) params.append("a1", companyName); // Custom field for company
      
      const finalUrl = calendlyUrl + (params.toString() ? `?${params.toString()}` : '');
      window.open(finalUrl, '_blank');
      
      // Reset form and close modal
      setFullName("");
      setEmail("");
      setCompanyName("");
      setMeetingMethod("zoom");
      setPhone("");
      setTelegram("");
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
      onOpenChange(false);
      return;
    }

    // For other meeting methods (Phone, WhatsApp, Telegram), show success message
    setTimeout(() => {
      toast({
        title: "Request sent! I'll be in touch within 24 hours.",
      });
      setFullName("");
      setEmail("");
      setCompanyName("");
      setMeetingMethod("zoom");
      setPhone("");
      setTelegram("");
      setErrors({});
      setTouched({});
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  const handleMeetingMethodChange = (value: string) => {
    setMeetingMethod(value);
    // Clear phone field and errors when switching away from phone/whatsapp
    if (value !== "phone" && value !== "whatsapp") {
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
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Book a Free Support Review</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Leave your details and I'll reach out to schedule a 30-minute call. No commitment, no pitch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4" autoComplete="off">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Full Name<span className="text-destructive ml-1">*</span>
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
              placeholder="Jane Smith"
              maxLength={50}
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Work Email<span className="text-destructive ml-1">*</span>
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
              placeholder="jane@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
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
              placeholder="Acme Inc."
              maxLength={100}
              autoComplete="off"
              className={errors.companyName ? "border-destructive" : ""}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">{errors.companyName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="meetingMethod">Preferred Meeting Method</Label>
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
                Phone Number<span className="text-destructive ml-1">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/[^0-9\s()+.-]/g, "");
                  setPhone(cleaned);
                  if (touched.phone) {
                    const error = validateField("phone", cleaned);
                    setErrors(prev => ({ ...prev, phone: error || undefined }));
                  }
                }}
                onBlur={() => handleBlur("phone")}
                placeholder="+1 234 567 8900"
                maxLength={20}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>
          )}

          {needsTelegram && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
              <Label htmlFor="telegram">
                Telegram Link or Username<span className="text-destructive ml-1">*</span>
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
                placeholder="https://t.me/username or @username"
                maxLength={100}
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
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            {meetingMethod === "zoom" || meetingMethod === "google-meet" 
              ? "Continue to Calendar" 
              : isSubmitting 
              ? "Sending..." 
              : "Book Free Support Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
