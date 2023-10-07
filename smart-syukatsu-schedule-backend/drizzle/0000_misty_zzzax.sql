DO $$ BEGIN
 CREATE TYPE "schedule_event" AS ENUM('interview', 'casual_interview', 'ES', 'coding_test', 'Information_session', 'aptitude_test', 'document_screening');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "corporations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"notification_time" timestamp (0) with time zone,
	"schedule_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schedules" (
	"id" serial PRIMARY KEY NOT NULL,
	"schedule_event" "schedule_event",
	"event" varchar(256),
	"note" text,
	"start_time" timestamp (0) with time zone,
	"end_time" timestamp (0) with time zone,
	"corporation_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(256),
	"name" varchar(256),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "corporations" ADD CONSTRAINT "corporations_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notifications" ADD CONSTRAINT "notifications_schedule_id_schedules_id_fk" FOREIGN KEY ("schedule_id") REFERENCES "schedules"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "schedules" ADD CONSTRAINT "schedules_corporation_id_corporations_id_fk" FOREIGN KEY ("corporation_id") REFERENCES "corporations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
