import express, { Request, Response } from "express";
import { notifications, schedules } from "./../../db/schema";
import { eq } from "drizzle-orm";
import db from "./../../db/db";

const router = express.Router();

type scheduleParamT = {
  scheduleId: number;
};

type QueryT = {
    limit? : number;
    offset? : number;
}

type notificationBodyT = {
  notificationTime: Date;
};

const schedulesRoute = () => {
  router.get("/", async (req: Request<{}, {}, {}, QueryT>, res: Response) => {
    const limit = req.query.limit || 50;
    const offset = req.query.offset || 0;
    if(isNaN(limit) || isNaN(offset)) return res.sendStatus(403);
    const schs = await db.select().from(schedules).limit(limit).offset(offset);
    if(!schs.length) return res.sendStatus(404);
    return res.status(200).json(schs);
  });

  router.get(
    "/:scheduleId",
    async (req: Request<scheduleParamT>, res: Response) => {
      const scheduleId = req.params.scheduleId;
      if (isNaN(scheduleId)) res.sendStatus(403);

      const sch = await db
        .select()
        .from(schedules)
        .where(eq(schedules.id, scheduleId));

      if (!sch.length) res.sendStatus(404);
      return res.status(200).json(sch[0]);
    },
  );

  router.patch(
    "/:scheduleId",
    async (req: Request<scheduleParamT>, res: Response) => {
      // do after
    },
  );

  router.delete(
    "/:scheduleId",
    async (req: Request<scheduleParamT>, res: Response) => {
      const scheduleId = req.params.scheduleId;
      if (isNaN(scheduleId)) res.sendStatus(403);

      const deletedSch = await db
        .delete(schedules)
        .where(eq(schedules.id, scheduleId))
        .returning();

      if (!deletedSch.length) res.sendStatus(404);
      return res.status(200).json(deletedSch[0]);
    },
  );

  router.get(
    "/:scheduleId/notifications",
    async (req: Request<scheduleParamT>, res: Response) => {
      const scheduleId = req.params.scheduleId;
      if (isNaN(scheduleId)) return res.sendStatus(403);

      const notis = await db
        .select()
        .from(notifications)
        .where(eq(notifications.scheduleId, scheduleId));

      if (!notis.length) return res.sendStatus(404);

      return res.status(200).json(notis);
    },
  );

  router.post(
    "/:scheduleId/notifications",
    async (
      req: Request<scheduleParamT, {}, notificationBodyT>,
      res: Response,
    ) => {
      const scheduleId = req.params.scheduleId;
      const notificationTime = new Date(req.body.notificationTime);
      if (isNaN(scheduleId)) return res.sendStatus(403);

      const insertedNotis = await db
        .insert(notifications)
        .values({ notificationTime: notificationTime, scheduleId: scheduleId })
        .returning();

      return res.status(200).json(insertedNotis);
    },
  );

  return router;
};

export default schedulesRoute;
