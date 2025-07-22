import { pgTable, bigint, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { profiles } from "~/features/users/schema";

export const teams = pgTable("teams", {
  team_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: text().notNull(),
  description: text(),
  leader_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  member_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  team_id: bigint({ mode: "number" }).references(() => teams.team_id, {
    onDelete: "cascade",
  }),
  user_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  role: text().notNull().default("member"), // leader, member
  joined_at: timestamp().notNull().defaultNow(),
});

export const files = pgTable("files", {
  file_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  team_id: bigint({ mode: "number" }).references(() => teams.team_id, {
    onDelete: "cascade",
  }),
  uploader_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  filename: text().notNull(),
  description: text(),
  file_url: text().notNull(), // 실제 파일 저장 경로
  file_type: text(), // 파일 확장자 등
  file_size: bigint({ mode: "number" }), // 파일 크기 (bytes)
  downloads: bigint({ mode: "number" }).default(0).notNull(),
  views: bigint({ mode: "number" }).default(0).notNull(),
  uploaded_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const fileDownloads = pgTable("file_downloads", {
  download_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  file_id: bigint({ mode: "number" }).references(() => files.file_id, {
    onDelete: "cascade",
  }),
  user_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  downloaded_at: timestamp().notNull().defaultNow(),
});

export const fileViews = pgTable("file_views", {
  view_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  file_id: bigint({ mode: "number" }).references(() => files.file_id, {
    onDelete: "cascade",
  }),
  user_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade",
  }),
  viewed_at: timestamp().notNull().defaultNow(),
}); 