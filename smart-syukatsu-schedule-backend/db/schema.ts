import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  uuid,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 256 }).unique(),
  name: varchar("name", { length: 256 }),
});

export const corporations = pgTable("corporations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
});

export const scheduleEventEnum = pgEnum("schedule_event", [
  "interview",
  "casual_interview",
  "ES",
  "coding_test",
  "Information_session",
  "aptitude_test",
  "document_screening",
]);

export const schedules = pgTable("schedules", {
  id: serial("id").primaryKey(),
  name: scheduleEventEnum("schedule_event"),
  event: varchar("event", { length: 256 }),
  note: text("note"),
  startTime: timestamp("start_time", { precision: 0, withTimezone: true }),
  endTime: timestamp("end_time", { precision: 0, withTimezone: true }),
  corporationId: integer("corporation_id")
    .notNull()
    .references(() => corporations.id),
});

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  notificationTime: timestamp("notification_time", {
    precision: 0,
    withTimezone: true,
  }),
  scheduleId: integer("schedule_id")
    .notNull()
    .references(() => schedules.id),
});

export const usersRelations = relations(users, ({ many }) => ({
  corporations: many(corporations),
}));

export const corporationsRelations = relations(
  corporations,
  ({ one, many }) => ({
    users: one(users, {
      fields: [corporations.userId],
      references: [users.id],
    }),
    schedules: many(schedules),
  }),
);

export const schedulesRelations = relations(schedules, ({ one, many }) => ({
  corporations: one(corporations, {
    fields: [schedules.corporationId],
    references: [corporations.id],
  }),
  notifications: many(notifications),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  schedules: one(schedules, {
    fields: [notifications.scheduleId],
    references: [schedules.id],
  }),
}));
