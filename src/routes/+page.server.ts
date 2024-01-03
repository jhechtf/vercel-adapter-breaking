import { db } from "$lib/server/client"

export const load = async () => {
  const users = await db.query.users.findMany();
  return {
    users,
  }
}