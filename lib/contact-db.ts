import { neon } from "@neondatabase/serverless";

/**
 * Neon’s Vercel integration sets DATABASE_URL (pooled). Older templates may use
 * POSTGRES_* names; some setups only expose unpooled or Prisma-style URLs.
 */
function getDatabaseUrl(): string | undefined {
  const fromEnv =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.DATABASE_URL_UNPOOLED ??
    process.env.POSTGRES_URL_NON_POOLING;

  if (fromEnv) {
    return fromEnv;
  }

  const host = process.env.PGHOST;
  const user = process.env.PGUSER;
  const pass = process.env.PGPASSWORD;
  const database = process.env.PGDATABASE;
  if (host && user && pass && database) {
    const u = encodeURIComponent(user);
    const p = encodeURIComponent(pass);
    return `postgresql://${u}:${p}@${host}/${database}?sslmode=require`;
  }

  return undefined;
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
