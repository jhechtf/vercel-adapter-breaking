import { DB_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "./schema";
import postgres from 'postgres';

const client = postgres(DB_URL);

export const db = drizzle(client, { schema, logger: true });
