require('dotenv').config({ path: '.env.local' });
const { neon } = require('@neondatabase/serverless');

async function createTables() {
  try {
    console.log('Creating database tables...');
    
    const sql = neon(process.env.DRIZZLE_DATABASE_URL);
    
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        image VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
      );
    `;
    
    // Create articles table with all required columns
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        images TEXT[] NOT NULL DEFAULT '{}',
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL DEFAULT NOW(),
        description TEXT,
        author INTEGER REFERENCES users(id) NOT NULL,
        "isTopStory" BOOLEAN NOT NULL DEFAULT false,
        "isDeleted" BOOLEAN NOT NULL DEFAULT false,
        "deletedAt" DATE
      );
    `;
    
    // Add missing columns if they don't exist (for existing tables)
    await sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='articles' AND column_name='isTopStory') THEN
          ALTER TABLE articles ADD COLUMN "isTopStory" BOOLEAN NOT NULL DEFAULT false;
        END IF;
      END $$;
    `;
    
    await sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='articles' AND column_name='isDeleted') THEN
          ALTER TABLE articles ADD COLUMN "isDeleted" BOOLEAN NOT NULL DEFAULT false;
        END IF;
      END $$;
    `;
    
    await sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='articles' AND column_name='deletedAt') THEN
          ALTER TABLE articles ADD COLUMN "deletedAt" DATE;
        END IF;
      END $$;
    `;
    
    // Insert a default user if none exists
    const userCount = await sql`SELECT COUNT(*) FROM users`;
    if (userCount[0].count === '0') {
      await sql`
        INSERT INTO users (name, image) 
        VALUES ('Admin User', '/placeholder-user.jpg')
      `;
      console.log('Created default admin user');
    }
    
    console.log('Database tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

createTables();