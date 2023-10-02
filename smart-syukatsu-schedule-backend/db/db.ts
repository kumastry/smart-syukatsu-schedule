import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const connectionString = Bun.env.DATABASE_URL;
const migrationClient = postgres(connectionString, {max:1});
console.log("await migration....")
await migrate(drizzle(migrationClient), { migrationsFolder: './drizzle' });
