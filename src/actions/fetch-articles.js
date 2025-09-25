import { db } from '@/db';
import { articlesTable } from '@/db/schema';
import { and, eq, isNull, or, asc, sql } from 'drizzle-orm';
import { stripHtmlBrowser } from '@/lib/text-utils';

// Transform CMS article data to match news page expectations
function transformArticleData(article) {
    return {
        id: article.id,
        headline: article.title,
        summary: stripHtmlBrowser(article.description, 150),
        image: article.images && article.images.length > 0 ? article.images[0] : null,
        date: article.date,
        author: article.author,
        isTopStory: article.isTopStory,
        isDeleted: article.isDeleted,
        deletedAt: article.deletedAt,
        // Keep original fields for CMS operations
        title: article.title,
        description: article.description,
        images: article.images
    };
}

const articles = {
    async getData(id) {
        const result = await db.select().from(articlesTable).where(eq(articlesTable.id, id));
        return result.map(transformArticleData);
    },

    async getAll() {
        const result = await db.select().from(articlesTable).where(or(eq(articlesTable.isDeleted, false), isNull(articlesTable.isDeleted)));
        return result.map(transformArticleData);
    },

    async getAllDeleted() {
        const result = await db.select().from(articlesTable).where(eq(articlesTable.isDeleted, true));
        return result.map(transformArticleData);
    },

    async getTopStories() {
        const result = await db.select().from(articlesTable).where(
            and(
                eq(articlesTable.isTopStory, true),
                or(eq(articlesTable.isDeleted, false), isNull(articlesTable.isDeleted))
            )
        );
        return result.map(transformArticleData);
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
            
            // Find the lowest available ID by checking for gaps
            const allArticles = await db.select({ id: articlesTable.id })
                .from(articlesTable)
                .orderBy(asc(articlesTable.id));
            
            let availableId = null;
            
            if (allArticles.length === 0) {
                // No articles exist, start with ID 1
                availableId = 1;
            } else {
                // Look for gaps in the sequence
                const usedIds = allArticles.map(article => article.id).sort((a, b) => a - b);
                
                // Check for gaps starting from 1
                for (let i = 1; i <= usedIds[usedIds.length - 1]; i++) {
                    if (!usedIds.includes(i)) {
                        availableId = i;
                        break;
                    }
                }
                
                // If no gaps found, use the next number after the highest ID
                if (!availableId) {
                    availableId = usedIds[usedIds.length - 1] + 1;
                }
            }
            
            console.log(`Using ID: ${availableId}`);
            
            // Insert with the determined ID using raw SQL to override identity
            const result = await db.execute(
                sql`INSERT INTO articles (id, images, title, date, description, author, "isTopStory", "isDeleted") 
                    VALUES (${availableId}, ${data.images || []}, ${data.title}, ${data.date || sql`CURRENT_DATE`}, ${data.description || ''}, ${data.author}, ${data.isTopStory || false}, ${data.isDeleted || false}) 
                    RETURNING id as "insertedID"`
            );
            
            // Update the sequence to prevent conflicts
            await db.execute(sql`SELECT setval(pg_get_serial_sequence('articles', 'id'), (SELECT MAX(id) FROM articles))`);
            
            console.log('Insert successful:', result);
            return [{ insertedID: availableId }];
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