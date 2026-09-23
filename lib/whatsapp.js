import { restaurantInfo } from "@/data/restaurantInfo";

const currency = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

const formatTime12Hour = (time) => {
  if (!time) return "";

  const [hours, minutes] = time.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return time;

  const period = hours >= 12 ? "PM" : "AM";
  const hour = hours % 12 || 12;
  return `${hour}:${String(minutes).padStart(2, "0")} ${period}`;
};

/** Builds a wa.me deep link that opens a chat pre-filled with `message`. */
export function buildWhatsAppLink(message, number = restaurantInfo.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the plain-text order summary sent to the restaurant's WhatsApp.
 * Intentionally simple: cart lines, total, then the customer's own
 * details — no payment or availability logic lives here, that's handled
 * by the restaurant owner once they receive the message.
 */
export function buildOrderMessage({ items, total, customer }) {
  const lines = items.map(
    (item) =>
      `${item.quantity} × ${item.name} - ${currency(item.price * item.quantity)}`
  );

  return [
    `${restaurantInfo.name} Order`,
    "",
    ...lines,
    "",
    `Total: ${currency(total)}`,
    "",
    `Customer Name: ${customer.name || ""}`,
    `Phone: ${customer.phone || ""}`,
    `Delivery/Pickup: ${customer.deliveryType || ""}`,
    `Address: ${customer.address || ""}`,
    `Special Instructions: ${customer.instructions || ""}`,
  ].join("\n");
}

export function buildCustomCakeMessage(details) {
  return [
    `${restaurantInfo.name} Custom Cake Request`,
    "",
    `Customer Name: ${details.name || ""}`,
    `Phone: ${details.phone || ""}`,
    `Flavour: ${details.flavour || ""}`,
    `Size/Weight: ${details.size || ""}`,
    `Quantity: ${details.quantity || ""}`,
    `Preferred Date: ${details.date || ""}`,
    `Preferred Time: ${details.time || ""}`,
    `Design/Theme: ${details.theme || ""}`,
    `Text on Cake: ${details.cakeText || ""}`,
    `Additional Requirements: ${details.notes || ""}`,
  ].join("\n");
}

export function buildTableBookingMessage(details) {
  return [
    `${restaurantInfo.name} Table Booking Request`,
    "",
    `Name: ${details.name || ""}`,
    `Phone: ${details.phone || ""}`,
    `Guests: ${details.guests || ""}`,
    `Date: ${details.date || ""}`,
    `Time: ${formatTime12Hour(details.time)}`,
    `Special Requests: ${details.requests || ""}`,
    "",
    "Note: this reservation is subject to confirmation by LadyBake.",
  ].join("\n");
}
