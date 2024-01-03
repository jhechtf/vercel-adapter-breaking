import { DB_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";
import Pg from 'pg';

const client = new Pg.Client({
  connectionString: DB_URL,
});

await client.connect();

export const db = drizzle(client, { schema, logger: true });
