"use client";

import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactFormState = { ok: false };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-sm text-red-400" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <div
      id="contact"
      className="rounded-xl border border-stone-800 bg-stone-950/60 p-6 md:p-8"
    >
      <h3 className="font-[family-name:var(--font-crimson)] text-xl font-medium text-stone-100">
        Send a message
      </h3>
      <p className="mt-2 text-sm text-stone-500">
        Submissions are stored securely. I usually reply within a few days.
      </p>

      {state.ok ? (
        <p
          className="mt-6 rounded-lg border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200"
          role="status"
        >
          Thank you — your message was received.
        </p>
      ) : null}

      {!state.ok && state.error ? (
        <p
          className="mt-6 rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {state.error}
        </p>
      ) : null}

      <form ref={formRef} action={formAction} className="mt-6 space-y-5">
        {/* Honeypot: leave empty; bots often fill hidden fields */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-stone-300">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={pending}
            className="mt-1.5 w-full rounded-lg border border-stone-700 bg-stone-900/80 px-3 py-2.5 text-stone-100 outline-none ring-orange-500/0 transition placeholder:text-stone-600 focus:border-orange-800 focus:ring-2 focus:ring-orange-500/30 disabled:opacity-50"
            placeholder="Your name"
          />
          <FieldError message={state.fieldErrors?.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-stone-300">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={pending}
            className="mt-1.5 w-full rounded-lg border border-stone-700 bg-stone-900/80 px-3 py-2.5 text-stone-100 outline-none ring-orange-500/0 transition placeholder:text-stone-600 focus:border-orange-800 focus:ring-2 focus:ring-orange-500/30 disabled:opacity-50"
            placeholder="you@example.com"
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-stone-300">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            disabled={pending}
            className="mt-1.5 w-full resize-y rounded-lg border border-stone-700 bg-stone-900/80 px-3 py-2.5 text-stone-100 outline-none ring-orange-500/0 transition placeholder:text-stone-600 focus:border-orange-800 focus:ring-2 focus:ring-orange-500/30 disabled:opacity-50"
            placeholder="What would you like to discuss?"
          />
          <FieldError message={state.fieldErrors?.message} />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-orange-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
