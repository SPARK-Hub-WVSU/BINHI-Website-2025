import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import { sql } from 'drizzle-orm';

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});
const db = drizzle(pool);

async function migrateAuthorField() {
  try {
    console.log('🔄 Starting author field migration...');
    
    // First, let's see what data we have
    console.log('📊 Checking existing articles...');
    const existingArticles = await db.execute(sql`
      SELECT a.id, a.title, a.author, u.name as author_name 
      FROM articles a 
      LEFT JOIN users u ON a.author = u.id
    `);
    
    console.log('Existing articles:', existingArticles.rows);
    
    // Add new column for author name
    console.log('➕ Adding new author_name column...');
    await db.execute(sql`ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_name VARCHAR(255)`);
    
    // Migrate existing data - copy user names to the new field
    console.log('🔄 Migrating existing author data...');
    await db.execute(sql`
      UPDATE articles 
      SET author_name = users.name 
      FROM users 
      WHERE articles.author = users.id AND articles.author_name IS NULL
    `);
    
    // Set default for any articles without matching users
    await db.execute(sql`
      UPDATE articles 
      SET author_name = 'Unknown Author' 
      WHERE author_name IS NULL
    `);
    
    // Make the new column NOT NULL
    console.log('✅ Making author_name NOT NULL...');
    await db.execute(sql`ALTER TABLE articles ALTER COLUMN author_name SET NOT NULL`);
    
    // Remove the old foreign key constraint and column
    console.log('🗑️ Removing old author column...');
    await db.execute(sql`ALTER TABLE articles DROP COLUMN IF EXISTS author`);
    
    // Rename the new column to 'author'
    console.log('🔄 Renaming author_name to author...');
    await db.execute(sql`ALTER TABLE articles RENAME COLUMN author_name TO author`);
    
    console.log('✅ Migration completed successfully!');
    
    // Verify the changes
    const updatedArticles = await db.execute(sql`
      SELECT id, title, author FROM articles LIMIT 5
    `);
    console.log('📝 Updated articles:', updatedArticles.rows);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

migrateAuthorField();