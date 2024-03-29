import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = Bun.env.DATABASE_URL as string;
const client = postgres(connectionString);
const db = drizzle(client);

export default db;
