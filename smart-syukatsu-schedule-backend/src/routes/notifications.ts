import express, { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { notifications } from "../../db/schema";
import db from "./../../db/db";

const router = express.Router();

type QueryT = {
  limit?: number;
  offset?: number;
};

type notificationParamT = {
  notificationId: number;
};

const notificationsRoute = () => {
  router.get("/", async (req: Request<{}, {}, {}, QueryT>, res: Response) => {
    try {
      const limit = req.query.limit || 50;
      const offset = req.query.offset || 0;
      if (isNaN(limit) || isNaN(offset)) return res.sendStatus(400);
      const notis = await db
        .select()
        .from(notifications)
        .limit(limit)
        .offset(offset);

      return res.status(200).json(notis);
    } catch (error: unknown) {
      res.sendStatus(500);
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  });

  router.get(
    "/:notificationId",
    async (req: Request<notificationParamT>, res: Response) => {
      const notificationId = req.params.notificationId;
      if (isNaN(notificationId)) return res.sendStatus(400);

      const noti = await db
        .select()
        .from(notifications)
        .where(eq(notifications.id, notificationId));
      if (!noti.length) return res.sendStatus(404);

      return res.status(200).json(noti[0]);
    },
  );

  router.patch(
    "/:notificationId",
    async (req: Request<notificationParamT>, res: Response) => {
      // do after
      //   const notificationId = req.params.notificationId;
      //   if (isNaN(notificationId)) return res.sendStatus(400);
    },
  );

  router.delete(
    "/:notificationId",
    async (req: Request<notificationParamT>, res: Response) => {
      const notificationId = req.params.notificationId;
      if (isNaN(notificationId)) return res.sendStatus(400);

      const deletedNoti = await db
        .delete(notifications)
        .where(eq(notifications.id, notificationId))
        .returning();

      if (!deletedNoti.length) return res.sendStatus(404);
      return res.send(200).json(deletedNoti[0]);
    },
  );
  return router;
};

export default notificationsRoute;
