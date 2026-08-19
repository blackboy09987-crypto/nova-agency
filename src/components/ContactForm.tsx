"use client";

import { useState, type FormEvent } from "react";
import type { Service } from "@/lib/store";
import { waLink } from "@/lib/config";
import { ArrowRightIcon } from "./icons";

const inputClass =
  "w-full rounded-xl border border-navy-2/12 bg-navy-deep px-4 py-3.5 text-[15px] text-navy-2 placeholder:text-muted/70 transition-colors focus:border-blue focus:outline-none";
const labelClass = "mb-2 block text-sm font-semibold text-navy-2";

export default function ContactForm({ services }: { services: Service[] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (key: string) => (form.get(key) as string)?.trim() || "—";

    const message = [
      "New project request from novaagency.example.com:",
      "",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `WhatsApp: ${get("whatsapp")}`,
      `Company: ${get("company")}`,
      `Service: ${get("service")}`,
      `Details: ${get("details")}`,
    ].join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="reveal flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 234 567 8900"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Business Name
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service Required
        </label>
        <select id="service" name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Custom / Multiple services">Custom / Multiple services</option>
        </select>
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Tell us about your project, goals and timeline..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-blue px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,255,0.6)] transition-all hover:bg-[#0f5fdb] active:scale-[0.97]"
      >
        Send Project Request
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      <p role="status" aria-live="polite" className="text-sm text-muted">
        {submitted
          ? "Thanks! We've opened WhatsApp with your project details — just hit send."
          : "Submitting opens WhatsApp with your details pre-filled, so nothing gets lost in transit."}
      </p>
    </form>
  );
}
