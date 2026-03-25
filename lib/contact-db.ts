import { neon } from "@neondatabase/serverless";

function getDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(getDatabaseUrl());
}

export async function insertContactSubmission(input: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const url = getDatabaseUrl();
  if (!url) {
    throw new Error("DATABASE_NOT_CONFIGURED");
  }

  const sql = neon(url);
  await sql`
    INSERT INTO contact_submissions (name, email, message)
    VALUES (${input.name}, ${input.email}, ${input.message})
  `;
}
