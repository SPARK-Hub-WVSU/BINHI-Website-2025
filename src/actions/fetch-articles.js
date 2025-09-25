import { db } from '@/db';
import { articlesTable } from '@/db/schema';
import { and, eq, isNull, or } from 'drizzle-orm';

const articles = {
    getData(id) {
        return db.select().from(articlesTable).where(eq(articlesTable.id, id));
    },

    getAll() {
        return db.select().from(articlesTable).where(or(eq(articlesTable.isDeleted, false), isNull(articlesTable.isDeleted)));
    },

    getAllDeleted() {
        return db.select().from(articlesTable).where(eq(articlesTable.isDeleted, true));
    },

    getTopStories() {
        return db.select().from(articlesTable).where(
            and(
                eq(articlesTable.isTopStory, true),
                or(eq(articlesTable.isDeleted, false), isNull(articlesTable.isDeleted))
            )
        );
    },

    async update(id, data) {
        try {
            const _data = { ...data };
            delete _data.id;
            console.log('Updating article data:', _data);
            const result = await db.update(articlesTable).set(_data).where(eq(articlesTable.id, id)).returning({ updatedID: articlesTable.id });
            console.log('Update successful:', result);
            return result;
        } catch (error) {
            console.error('Database update error:', error);
            throw error;
        }
    },

    async insert(data) {
        try {
            console.log('Inserting article data:', data);
            const result = await db.insert(articlesTable).values(data).returning({ insertedID: articlesTable.id });
            console.log('Insert successful:', result);
            return result;
        } catch (error) {
            console.error('Database insert error:', error);
            throw error;
        }
    },

    softDelete(id) {
        return db.update(articlesTable).set({ 
            isDeleted: true, 
            deletedAt: new Date().toISOString().split('T')[0] 
        }).where(eq(articlesTable.id, id)).returning({ deletedID: articlesTable.id });
    },

    restore(id) {
        return db.update(articlesTable).set({ 
            isDeleted: false, 
            deletedAt: null 
        }).where(eq(articlesTable.id, id)).returning({ restoredID: articlesTable.id });
    },

    permanentDelete(id) {
        return db.delete(articlesTable).where(eq(articlesTable.id, id)).returning({ deletedID: articlesTable.id });
    }
}

export default articles;