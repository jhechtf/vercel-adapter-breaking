import { drizzle } from "drizzle-orm/node-postgres";
import { pgSchema, uuid, varchar, jsonb } from "drizzle-orm/pg-core";
import Pg from "pg";
const DB_URL = "postgresql://postgres:WhbObb0fhjIrKvaI@db.dlslhskwhuidjsxzpuof.supabase.co:5432/postgres";
const authSchema = pgSchema("auth");
const users = authSchema.table(
  "users",
  {
    id: uuid("id").notNull().primaryKey(),
    email: varchar("email").notNull(),
    userMetadata: jsonb("raw_user_meta_data")
  }
);
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authSchema,
  users
}, Symbol.toStringTag, { value: "Module" }));
const client = new Pg.Client({
  connectionString: DB_URL
});
await client.connect();
const db = drizzle(client, { schema, logger: true });
const load = async () => {
  const users2 = await db.query.users.findMany();
  return {
    users: users2
  };
};
export {
  load
};
