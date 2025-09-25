-- Migration to change author field from integer (user reference) to text
-- First, add a new column for author name
ALTER TABLE articles ADD COLUMN IF NOT EXISTS author_name VARCHAR(255);

-- Update existing articles to use user names instead of IDs
-- This will set author_name based on the existing user relationships
UPDATE articles 
SET author_name = COALESCE(users.name, 'Unknown Author')
FROM users 
WHERE articles.author = users.id AND articles.author_name IS NULL;

-- Set default for any articles without matching users
UPDATE articles 
SET author_name = 'Unknown Author' 
WHERE author_name IS NULL;

-- Make the new column NOT NULL
ALTER TABLE articles ALTER COLUMN author_name SET NOT NULL;

-- Drop the old integer author column
ALTER TABLE articles DROP COLUMN IF EXISTS author;

-- Rename the new column to 'author'
ALTER TABLE articles RENAME COLUMN author_name TO author;