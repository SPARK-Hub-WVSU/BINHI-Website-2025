require('dotenv').config({ path: '.env.local' });
const { drizzle } = require('drizzle-orm/neon-http');
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DRIZZLE_DATABASE_URL);
const db = drizzle(sql);

async function migrateAuthorField() {
  try {
    console.log('🔄 Starting author field migration...');
    
    // Check current table structure
    console.log('📊 Checking current table structure...');
    const tableInfo = await sql`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'articles' AND column_name IN ('author', 'author_name')
    `;
    
    console.log('Current columns:', tableInfo);
    
    // Check if author_name column already exists
    const hasAuthorName = tableInfo.some(col => col.column_name === 'author_name');
    
    if (!hasAuthorName) {
      // Add new column for author name
      console.log('➕ Adding new author_name column...');
      await sql`ALTER TABLE articles ADD COLUMN author_name VARCHAR(255)`;
      
      // Get existing articles with user names
      console.log('📝 Fetching existing articles...');
      const articles = await sql`
        SELECT a.id, a.title, a.author, u.name as user_name 
        FROM articles a 
        LEFT JOIN users u ON a.author = u.id
      `;
      
      console.log(`Found ${articles.length} articles to migrate`);
      
      // Update each article with author name
      for (const article of articles) {
        const authorName = article.user_name || 'Unknown Author';
        await sql`
          UPDATE articles 
          SET author_name = ${authorName} 
          WHERE id = ${article.id}
        `;
        console.log(`Updated article ${article.id}: "${article.title}" -> Author: ${authorName}`);
      }
      
      // Make the new column NOT NULL
      console.log('✅ Making author_name NOT NULL...');
      await sql`ALTER TABLE articles ALTER COLUMN author_name SET NOT NULL`;
      
      // Remove the old author column
      console.log('🗑️ Removing old author column...');
      await sql`ALTER TABLE articles DROP COLUMN author`;
      
      // Rename the new column to 'author'
      console.log('🔄 Renaming author_name to author...');
      await sql`ALTER TABLE articles RENAME COLUMN author_name TO author`;
    } else {
      console.log('⚠️ Migration might have been partially completed. Checking...');
      
      // Check if old integer author column still exists
      const hasOldAuthor = tableInfo.some(col => col.column_name === 'author' && col.data_type === 'integer');
      
      if (hasOldAuthor) {
        console.log('Found old integer author column, continuing migration...');
        // Continue with remaining steps
        await sql`ALTER TABLE articles ALTER COLUMN author_name SET NOT NULL`;
        await sql`ALTER TABLE articles DROP COLUMN author`;
        await sql`ALTER TABLE articles RENAME COLUMN author_name TO author`;
      }
    }
    
    console.log('✅ Migration completed successfully!');
    
    // Verify the changes
    const updatedArticles = await sql`SELECT id, title, author FROM articles LIMIT 5`;
    console.log('📝 Sample updated articles:', updatedArticles);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

migrateAuthorField().then(() => process.exit());