import express, { Request, Response } from "express";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { corporations, schedules } from "./../../db/schema";
import { eq } from "drizzle-orm";
import { oneOf, query } from "express-validator";

const router = express.Router();
const connectionString = Bun.env.DATABASE_URL as string;
const client = postgres(connectionString);
const db = drizzle(client);

const schedulesRoute = () => {
  router.get("/schedules/:scheduleId", async (req, res) => {});

  router.patch("/schedules/:scheduleId", async (req, res) => {});

  router.delete("/schedules/:scheduleId", async (req, res) => {});

  router.get("/schedules/:scheduleId/notifications", async (req, res) => {});

  router.post("/schedules/:scheduleId/notifications", async (req, res) => {});
  return router;
};

export default schedulesRoute;
