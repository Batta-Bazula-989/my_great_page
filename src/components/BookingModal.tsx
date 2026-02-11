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

const countryCodes = [
  { value: "US_+1", code: "+1", label: "🇺🇸 US +1" },
  { value: "CA_+1", code: "+1", label: "🇨🇦 CA +1" },
  { value: "GB_+44", code: "+44", label: "🇬🇧 UK +44" },
  { value: "DE_+49", code: "+49", label: "🇩🇪 DE +49" },
  { value: "FR_+33", code: "+33", label: "🇫🇷 FR +33" },
  { value: "NL_+31", code: "+31", label: "🇳🇱 NL +31" },
  { value: "SE_+46", code: "+46", label: "🇸🇪 SE +46" },
  { value: "AU_+61", code: "+61", label: "🇦🇺 AU +61" },
  { value: "IN_+91", code: "+91", label: "🇮🇳 IN +91" },
  { value: "AE_+971", code: "+971", label: "🇦🇪 UAE +971" },
  { value: "IL_+972", code: "+972", label: "🇮🇱 IL +972" },
  { value: "BR_+55", code: "+55", label: "🇧🇷 BR +55" },
  { value: "JP_+81", code: "+81", label: "🇯🇵 JP +81" },
  { value: "CN_+86", code: "+86", label: "🇨🇳 CN +86" },
  { value: "RU_+7", code: "+7", label: "🇷🇺 RU +7" },
  { value: "UA_+380", code: "+380", label: "🇺🇦 UA +380" },
  { value: "PL_+48", code: "+48", label: "🇵🇱 PL +48" },
  { value: "ES_+34", code: "+34", label: "🇪🇸 ES +34" },
  { value: "IT_+39", code: "+39", label: "🇮🇹 IT +39" },
  { value: "MX_+52", code: "+52", label: "🇲🇽 MX +52" },
];

const schema = z.object({
  name: z.string().trim()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[^\d]+$/, "Name cannot contain numbers"),
  phone: z.string().trim()
    .min(4, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s()-]{4,20}$/, "Please enter a valid phone number"),
});

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("US_+1");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = schema.safeParse({ name, phone });

    if (!result.success) {
      const fieldErrors: { name?: string; phone?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "phone") fieldErrors.phone = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const selectedCountry = countryCodes.find(c => c.value === countryCode);
    const fullPhone = `${selectedCountry?.code || "+1"} ${phone}`;

    setTimeout(() => {
      toast({
        title: "Request sent! I'll be in touch within 24 hours.",
      });
      setName("");
      setPhone("");
      setCountryCode("US_+1");
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Book a Support Setup Review</DialogTitle>
          <DialogDescription>Leave your details and I'll reach out to schedule a 30-minute call. No commitment, no pitch.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ""))}
              placeholder="Jane Smith"
              maxLength={50}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[120px] shrink-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50 max-h-[200px]">
                  {countryCodes.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9\s()-]/g, ""))}
                placeholder="234 567 8900"
                maxLength={20}
                className={errors.phone ? "border-destructive" : ""}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>
          <Button
            type="submit"
            variant="hero"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request a Call"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
