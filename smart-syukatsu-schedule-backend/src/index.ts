import express, { Request, Response }  from "express";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { corporations, schedules } from '../db/schema';
import { eq } from "drizzle-orm";
import { oneOf, query } from "express-validator";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8087;

const connectionString = Bun.env.DATABASE_URL as string;
const client = postgres(connectionString);
const db = drizzle(client);

//  企業一覧を取得する with latest schedule
type CoporationsQueryT = {
  limit: number;
  offset: number;
  userId: string;
}

app.get("/corporations", query("userId").isUUID(), async (req:Request<{}, {}, {}, CoporationsQueryT>, res:Response) => {
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
type CoporationsBodyT = {
  name:string;
  userId:string;
}

app.post("/corporations", async (req:Request<{}, {}, CoporationsBodyT>, res:Response) => {
  const name = req.body.name;
  const userId = req.body.userId;
  const insertedRecord = await db
    .insert(corporations)
    .values({ name: name, userId: userId });
  return res.status(200).json(insertedRecord);
});

app.get("/corporations/:corporationId/schedules", async (req, res) => {
  const corporationId = Number(req.params.corporationId);
  if (isNaN(corporationId)) return res.status(400).send("400 bad request");

  const schs = await db
    .select()
    .from(schedules)
    .where(eq(schedules.corporationId, corporationId));

  if (!schs) {
    return res.status(404).send("404 not found");
  }

  res.status(200).json(schs);
});

type PostScheduleBody = {
  name?:
    | "interview"
    | "casual_interview"
    | "ES"
    | "coding_test"
    | "Information_session"
    | "aptitude_test"
    | "document_screening";
  event: string;
  note: string;
};

app.post("/corporations/:corporationId/schedules", async (req, res) => {
  console.log("SP")
  const corporationId = Number(req.params.corporationId);
  if (isNaN(corporationId)) return res.status(400).send("400 Bad Request");

  const { name, event, note }: PostScheduleBody = req.body;
  const startTime = new Date(String(req.body.startTime));
  const endTime = new Date(req.body.endTime);

  const insertedRecord = await db.insert(schedules).values({
    name: name,
    event: event,
    note: note,
    startTime: startTime,
    endTime: endTime,
    corporationId: corporationId,
  });

  return res.status(200).json(insertedRecord);
});

app.get(
  "/corporations/:corporationId/schedules/:scheduleId/notifications",
  async (req, res) => {},
);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
