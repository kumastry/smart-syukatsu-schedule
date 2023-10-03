import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = Bun.env.DATABASE_URL as string;
const migrationClient = postgres(connectionString, { max: 1 });
console.log("await migration....");
( async() =>
    {
        await migrate(drizzle(migrationClient), { migrationsFolder: "./../drizzle" })
    }
)();
