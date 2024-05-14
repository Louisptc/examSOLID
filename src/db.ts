import { Pool } from 'pg';

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'exoSOLID',
      port: 5432, // Default port for PostgreSQL
    });
  }

  // Method to query the database
  public async query(text: string, params?: any[]): Promise<any> {
    const client = await this.pool.connect();
    try {
      const res = await client.query(text, params);
      return res;
    } finally {
      client.release();
    }
  }

  // Method to close all connections in the pool
  public async close(): Promise<void> {
    await this.pool.end();
  }
}

// Export an instance of the Database class
const database = new Database();
export default database;
