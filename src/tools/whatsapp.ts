// WhatsApp Business Platform cost maths under Meta's per-message pricing as of 1 October 2026:
// every business phone number gets 1,000 free service messages per month, then service messages
// are charged at the market's utility rate; template messages are charged per delivered message.
// Rates come from Meta's rate card for the recipient's country, entered by the visitor.

export const FREE_SERVICE_PER_NUMBER = 1000;
export const RULES_EFFECTIVE = "2026-10-01";
export const META_PRICING_URL = "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing";
export const META_SERVICE_URL =
  "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages";

export interface WhatsAppInputs {
  numbers: number; // business phone numbers
  service: number; // free-form service messages per month
  utility: number; // utility template messages per month
  marketing: number; // marketing template messages per month
  authentication: number; // authentication template messages per month
  utilityRate: number; // per message, from Meta's rate card (also used for service messages)
  marketingRate: number;
  authenticationRate: number;
}

export const whatsappCost = (i: WhatsAppInputs) => {
  const freeService = Math.max(0, Math.floor(i.numbers)) * FREE_SERVICE_PER_NUMBER;
  const billableService = Math.max(0, i.service - freeService);
  const lines = {
    service: billableService * i.utilityRate,
    utility: i.utility * i.utilityRate,
    marketing: i.marketing * i.marketingRate,
    authentication: i.authentication * i.authenticationRate,
  };
  const total = lines.service + lines.utility + lines.marketing + lines.authentication;
  return { freeService: Math.min(freeService, i.service), billableService, lines, total };
};
