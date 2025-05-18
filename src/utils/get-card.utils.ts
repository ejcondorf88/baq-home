export const getCardType = (number: string): string => {
  const cleaned = number.replace(/\s+/g, "");
  if (/^4/.test(cleaned)) return "visa";
  if (/^5[1-5]/.test(cleaned)) return "mastercard";
  if (/^3[47]/.test(cleaned)) return "amex";
  if (/^6/.test(cleaned)) return "discover";
  return "default";
};
