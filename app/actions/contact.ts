"use server";

import { insertContactSubmission, isDatabaseConfigured } from "@/lib/contact-db";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(200),
  email: z.string().trim().email("Enter a valid email.").max(320),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a few sentences.")
    .max(10_000),
});

export type ContactFormState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  if (!isDatabaseConfigured()) {
    return {
      ok: false,
      error:
        "The contact form is not connected to a database yet. Add DATABASE_URL (Neon) in Vercel or .env.local.",
    };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return { ok: false, fieldErrors };
  }

  try {
    await insertContactSubmission(parsed.data);
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Could not save your message. Try again or email turan@almammadov.com.",
    };
  }
}
