import express from "express";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users, corporations, schedules } from "../db/schema";
import { eq, ne, gt, gte, desc } from "drizzle-orm";
import { query, validationResult } from "express-validator";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8087;

const connectionString = Bun.env.DATABASE_URL as string;
const client = postgres(connectionString);
const db = drizzle(client);

//  企業一覧を取得する with latest schedule
app.get("/corporations", query("userId").isUUID(), async (req, res) => {
  if (!req.query) {
    const allCorps = await db.select().from(corporations);
    return res.json(allCorps);
  }

  const userId = req.query.userId;
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;

  const latestScheduleSubQuery = db
    .select()
    .from(schedules)
    .orderBy(schedules.startTime)
    .limit(1)
    .as("schedules");
  const corps = await db
    .select()
    .from(corporations)
    .leftJoin(
      latestScheduleSubQuery,
      eq(corporations.id, latestScheduleSubQuery.corporationId),
    )
    .where(eq(corporations.userId, userId))
    .limit(limit)
    .offset(limit * offset);
  return res.status(200).json(corps);
});

// 企業を追加する
app.post("/corporations", async (req, res) => {
  console.log("post");
  // insert data into database
  console.log(req.body);
  const name = req.body.name;
  const userId = req.body.userId;
  const insertedRecord = await db
    .insert(corporations)
    .values({ name: name, userId: userId });
  return res.status(200).json(insertedRecord);
});

app.get("/corporations/:corporationId/schedules", async (req, res) => {
  const corporationId = Number(req.params.corporationId);
  console.log(corporationId);

  if (isNaN(corporationId)) {
    return res.status(400).send("400 bad request");
  }

  const schs = await db
    .select()
    .from(schedules)
    .where(eq(schedules.corporationId, corporationId));

  console.log(schs);
  if (!schs) {
    return res.status(404).send("404 not found");
  }

  res.status(200).json(schs);
});

app.post("/corporations/:corporationId/schedules", async (req, res) => {});

app.get(
  "/corporations/:corporationId/schedules/:scheduleId/notifications",
  async (req, res) => {},
);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
