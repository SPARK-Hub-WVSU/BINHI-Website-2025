import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const articlesTable = pgTable("articles", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    image: varchar({ length: 255 }).notNull(),
    headline: varchar({ length: 255 }).notNull(),
    date: date().defaultNow().notNull(),
    content: text(),
    writer: integer().references(() => usersTable.id).notNull()
})

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    image: varchar({ length: 255 }).notNull(),
    name: varchar({ length: 255 }).notNull()
})