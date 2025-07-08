import { db } from '@/db';
import { articlesTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

const articles = {
    getData(id) {
        return db.select().from(articlesTable).where(eq(articlesTable.id, id));
    },

    getAll() {
        return db.select().from(articlesTable);
    },

    update(id, data) {
        const _data = { ...data };
        delete _data.id;

        return db.update(articlesTable).set(_data).where(eq(articlesTable.id, id)).returning({ updatedID: articlesTable.id });
    },

    insert(data) {
        db.insert(articlesTable).values(data).then(
            f => console.log(`success: ${f}`),
            e => console.error(`error: ${e}`)
        );
    }
}

export default articles;