import express, { Request, Response } from "express";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { corporations, schedules } from "./../../db/schema";
import { eq } from "drizzle-orm";
import { oneOf, query } from "express-validator";
import { notifications } from "../../db/schema";

const router = express.Router();
const connectionString = Bun.env.DATABASE_URL as string;
const client = postgres(connectionString);
const db = drizzle(client);

const notificationsRoute = () => {
  router.get("/notifications/:notificationId", async (req, res) => {});

  router.patch("/notifications/:notificationId", async (req, res) => {});

  router.delete("/notifications/:notificationId", async (req, res) => {});
  return router;
};

export default notificationsRoute;
