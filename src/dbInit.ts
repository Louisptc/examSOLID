import { readFileSync } from 'fs';
import { resolve } from 'path';
import database  from './db/db.js';

async function initializeDatabase(): Promise<void> {
    try {
        const pathToSqlFile = resolve(__dirname, '../dbInit.sql');
        const sql = readFileSync(pathToSqlFile, 'utf8');
        const res = await database.query(sql);
        console.log('Database has been initialized successfully:', res);
    } catch (err) {
        console.error('Failed to initialize the database:', err);
    } finally {
        await database.close(); // Ensure the pool is closed after initialization
    }
}

initializeDatabase();
