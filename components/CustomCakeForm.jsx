"use client";

import { useState } from "react";
import { buildCustomCakeMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", required: true, placeholder: "Full name" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "10-digit mobile number" },
  { name: "flavour", label: "Cake Flavour", type: "text", required: true, placeholder: "e.g. Chocolate truffle, Red velvet" },
  { name: "size", label: "Size / Weight", type: "text", required: true, placeholder: "e.g. 1 kg, 2 kg, 8-inch" },
  { name: "quantity", label: "Quantity", type: "number", required: true, placeholder: "1" },
  { name: "date", label: "Preferred Date", type: "date", required: true },
  { name: "time", label: "Preferred Time", type: "time", required: false },
];

const initialState = {
  name: "",
  phone: "",
  flavour: "",
  size: "",
  quantity: "1",
  date: "",
  time: "",
  theme: "",
  cakeText: "",
  notes: "",
};

export default function CustomCakeForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  const updateField = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const missing = FIELDS.filter((f) => f.required && !form[f.name]?.trim());
    if (missing.length > 0) {
      setError("Please fill in your name, phone, flavour, size, quantity, and preferred date.");
      return;
    }
    setError("");

    const message = buildCustomCakeMessage(form);
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label className="text-sm font-semibold text-espresso" htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-gold-dark"> *</span>}
            </label>
            <input
              id={field.name}
              type={field.type}
              min={field.type === "number" ? 1 : undefined}
              value={form[field.name]}
              onChange={updateField(field.name)}
              placeholder={field.placeholder}
              className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="text-sm font-semibold text-espresso" htmlFor="theme">
          Cake Design / Theme
        </label>
        <input
          id="theme"
          type="text"
          value={form.theme}
          onChange={updateField("theme")}
          placeholder="e.g. Floral, superhero, minimal white"
          className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-espresso" htmlFor="cakeText">
          Text / Message on Cake
        </label>
        <input
          id="cakeText"
          type="text"
          value={form.cakeText}
          onChange={updateField("cakeText")}
          placeholder="e.g. Happy Birthday Aarav"
          className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-espresso" htmlFor="notes">
          Additional Requirements
        </label>
        <textarea
          id="notes"
          rows={3}
          value={form.notes}
          onChange={updateField("notes")}
          placeholder="Allergies, reference photo details, anything else we should know"
          className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-cream px-4 py-2.5 text-sm text-espresso outline-none focus:border-gold"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send Request on WhatsApp
      </button>
    </form>
  );
}
