import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' });

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL
    }
})