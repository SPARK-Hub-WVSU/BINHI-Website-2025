import { sql } from "drizzle-orm";
import { boolean, date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const articlesTable = pgTable("articles", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    images: text().array().notNull().default(sql`'{}'::text[]`),
    title: varchar({ length: 255 }).notNull(),
    date: date().defaultNow().notNull(),
    description: text(),
    author: varchar({ length: 255 }).notNull(),
    isTopStory: boolean().default(false).notNull(),
    isDeleted: boolean().default(false).notNull(),
    deletedAt: date()
})

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    image: varchar({ length: 255 }).notNull(),
    name: varchar({ length: 255 }).notNull()
})