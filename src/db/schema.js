import { sql } from "drizzle-orm";
import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const articlesTable = pgTable("articles", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    images: text().array().notNull().default(sql`'{}'::text[]`),
    title: varchar({ length: 255 }).notNull(),
    date: date().defaultNow().notNull(),
    description: text(),
    author: integer().references(() => usersTable.id).notNull()
})

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    image: varchar({ length: 255 }).notNull(),
    name: varchar({ length: 255 }).notNull()
})