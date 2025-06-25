import { db } from '@/db';
import { usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

const users = {
    getData(id) {
        return db.select().from(usersTable).where(eq(usersTable.id, id));
    },

    getAll() {
        return db.select().from(usersTable);
    },

    update(id, data) {
        const _data = { ...data };
        delete _data.id;

        return db.update(usersTable).set(_data).where(eq(usersTable.id, id)).returning({ updatedID: usersTable.id });
    },
}

export default users;