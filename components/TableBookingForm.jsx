"use client";

import { useState } from "react";
import { buildTableBookingMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const initialState = {
  name: "",
  phone: "",
  guests: "2",
  date: "",
  time: "",
  requests: "",
};

export default function TableBookingForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  const updateField = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date || !form.time) {
      setError("Please add your name, phone, date, and time.");
      return;
    }
    setError("");

    const message = buildTableBookingMessage(form);
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-espresso" htmlFor="name">
            Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={updateField("name")}
            placeholder="Full name"
            className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-espresso" htmlFor="phone">
            Phone <span className="text-gold-dark">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={updateField("phone")}
            placeholder="10-digit mobile number"
            className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-espresso" htmlFor="guests">
            Number of Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            value={form.guests}
            onChange={updateField("guests")}
            className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
          />
        </div>

        <div />

        <div>
          <label className="text-sm font-semibold text-espresso" htmlFor="date">
            Date <span className="text-gold-dark">*</span>
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={updateField("date")}
            className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-espresso" htmlFor="time">
            Time <span className="text-gold-dark">*</span>
          </label>
          <input
            id="time"
            type="time"
            value={form.time}
            onChange={updateField("time")}
            className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-espresso" htmlFor="requests">
          Special Requests
        </label>
        <textarea
          id="requests"
          rows={3}
          value={form.requests}
          onChange={updateField("requests")}
          placeholder="Window seat, high chair, celebration setup, etc."
          className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button type="submit" className="btn-gold w-full sm:w-auto">
        Request Booking on WhatsApp
      </button>

      <p className="text-xs text-espresso/50">
        Your reservation is subject to confirmation by LadyBake.
      </p>
    </form>
  );
}
